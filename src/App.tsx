import { useCallback, useEffect, useRef, useState } from "react";
import { Header } from "./components/Header";
import { SearchInput } from "./components/SearchInput";
import { UserProfile } from "./components/UserProfile";
import { GithubApiError, searchUser } from "./services/githubApi";
import type { GithubUser } from "./types/github";

const INITIAL_USERNAME = "octocat";

function App() {
    const [username, setUsername] = useState(INITIAL_USERNAME);
    const [searchError, setSearchError] = useState<"not-found" | "request-failed" | null>(null);
    const [user, setUser] = useState<GithubUser | null>(null);
    const [loading, setLoading] = useState(true);
    const activeRequest = useRef<AbortController | null>(null);

    const handleSearch = useCallback(async (searchTerm: string) => {
        const query = searchTerm.trim();
        if (!query) return;

        activeRequest.current?.abort();
        const controller = new AbortController();
        activeRequest.current = controller;

        setLoading(true);
        setSearchError(null);
        setUser(null);

        try {
            const data = await searchUser(query, controller.signal);
            setUser(data);
        } catch (error) {
            if (controller.signal.aborted) return;
            setSearchError(error instanceof GithubApiError && error.status === 404 ? "not-found" : "request-failed");
        } finally {
            if (activeRequest.current === controller) {
                activeRequest.current = null;
                setLoading(false);
            }
        }
    }, []);

    useEffect(() => {
        const controller = new AbortController();
        activeRequest.current = controller;

        searchUser(INITIAL_USERNAME, controller.signal)
            .then((data) => {
                if (!controller.signal.aborted) {
                    setUser(data);
                }
            })
            .catch((error: unknown) => {
                if (controller.signal.aborted) return;

                setSearchError(
                    error instanceof GithubApiError && error.status === 404 ? "not-found" : "request-failed",
                );
            })
            .finally(() => {
                if (activeRequest.current === controller) {
                    activeRequest.current = null;
                    setLoading(false);
                }
            });

        return () => {
            controller.abort();
        };
    }, []);

    return (
        <>
            <main className="flex min-h-screen items-start justify-center lg:items-center  px-4 py-8 sm:px-10 sm:py-12">
                <section className="flex flex-col gap-8 sm:gap-10 max-w-182.5 w-full">
                    <Header />
                    <SearchInput
                        username={username}
                        setUsername={setUsername}
                        isUserNotFound={searchError === "not-found"}
                        loading={loading}
                        onSearch={handleSearch}
                    />
                    {loading ? (
                        <div role="status" aria-live="polite" className="text-center text-text">
                            Searching for user...
                        </div>
                    ) : searchError === "not-found" ? (
                        <>
                            <div className="flex flex-col gap-4 p-6 sm:p-12 text-center bg-surface rounded-2xl shadow-[0_16px_30px_-10px_rgba(70,96,187,0.20)] dark:shadow-none">
                                <h2 className="text-xl sm:text-[22px] font-bold text-text">No results found!</h2>
                                <p className="text-[15px] text-text-disabled wrap-break-word">
                                    We couldn’t find any GitHub users matching your search. Please double-check the
                                    username and try again.
                                </p>
                            </div>
                        </>
                    ) : searchError === "request-failed" ? (
                        <div
                            role="alert"
                            className="p-6 sm:p-8 text-center bg-surface rounded-2xl text-error wrap-break-word"
                        >
                            Search failed. Check your connection and try again.
                        </div>
                    ) : (
                        <UserProfile user={user} />
                    )}
                </section>
            </main>
        </>
    );
}

export default App;
