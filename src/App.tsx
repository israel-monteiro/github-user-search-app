import { useEffect, useRef, useState } from "react";
import { Header } from "./components/Header";
import { SearchInput } from "./components/SearchInput";
import { UserProfile } from "./components/UserProfile";
import { GithubApiError, searchUser } from "./services/githubApi";
import type { GithubUser } from "./types/github";

function App() {
    const [username, setUsername] = useState("");
    const [searchError, setSearchError] = useState<"not-found" | "request-failed" | null>(null);
    const [user, setUser] = useState<GithubUser | null>(null);
    const [loading, setLoading] = useState(false);
    const activeRequest = useRef<AbortController | null>(null);

    useEffect(() => () => activeRequest.current?.abort(), []);

    const handleSearch = async () => {
        const query = username.trim();
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
    };

    return (
        <>
            <main className="h-screen flex justify-center items-center">
                <section className="flex flex-col gap-10 max-w-182.5 w-full">
                    <Header />
                    <SearchInput
                        username={username}
                        setUsername={setUsername}
                        isUserNotFound={searchError === "not-found"}
                        loading={loading}
                        onSearch={handleSearch}
                    />
                    {loading ? (
                        <div role="status" aria-live="polite" className="text-center text-text">Searching for user...</div>
                    ) : searchError === "not-found" ? (
                        <>
                            <div className="flex flex-col gap-4 p-12 text-center bg-surface  rounded-2xl shadow-[0_16px_30px_-10px_rgba(70,96,187,0.20)] dark:shadow-none">
                                <h2 className="text-[22px] font-bold text-text">No results found!</h2>
                                <p className="text-[15px] text-text-disabled">
                                    We couldn’t find any GitHub users matching your search. Please double-check the
                                    username and try again.
                                </p>
                            </div>
                        </>
                    ) : searchError === "request-failed" ? (
                        <div role="alert" className="p-8 text-center bg-surface rounded-2xl text-error">
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
