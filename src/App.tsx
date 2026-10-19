import { useState } from "react";
import { Header } from "./components/Header";
import { SearchInput } from "./components/SearchInput";
import { UserProfile } from "./components/UserProfile";
import { searchUser } from "./services/githubApi";
import type { GithubUser } from "./types/github";

function App() {
    const [username, setUsername] = useState("");
    const [isUserNotFound, setIsUserNotFound] = useState(false);
    const [user, setUser] = useState<GithubUser | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        setIsUserNotFound(false);
        setUser(null);
        try {
            const data = await searchUser(username);
            setUser(data);
        } catch {
            setIsUserNotFound(true);
        } finally {
            setLoading(false);
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
                        isUserNotFound={isUserNotFound}
                        onSearch={handleSearch}
                    />
                    {loading ? (
                        <div className="text-center text-text">Searching for user...</div>
                    ) : isUserNotFound ? (
                        <>
                            <div className="flex flex-col gap-4 p-12 text-center bg-surface  rounded-2xl shadow-[0_16px_30px_-10px_rgba(70,96,187,0.20)] dark:shadow-none">
                                <h2 className="text-[22px] font-bold text-text">No results found!</h2>
                                <p className="text-[15px] text-text-disabled">
                                    We couldn’t find any GitHub users matching your search. Please double-check the
                                    username and try again.
                                </p>
                            </div>
                        </>
                    ) : (
                        <UserProfile user={user} />
                    )}
                </section>
            </main>
        </>
    );
}

export default App;
