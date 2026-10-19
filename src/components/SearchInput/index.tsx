import type { Dispatch, SetStateAction } from "react";
import SearchIcon from "../../assets/icons/icon-search.svg";

interface SearchInputProps {
    username: string;
    setUsername: Dispatch<SetStateAction<string>>;
    isUserNotFound: boolean;
    loading: boolean;
    onSearch: (searchTerm: string) => void;
}

export const SearchInput = ({ username, setUsername, isUserNotFound, loading, onSearch }: SearchInputProps) => {
    const handleSubmit = (event: React.SubmitEvent) => {
        event.preventDefault();
        onSearch(username);
    };

    return (
        <form
            className="flex h-17.25 w-full min-w-0 justify-between items-center py-2 pl-3 pr-3 sm:pr-6 bg-surface rounded-2xl gap-0 sm:gap-6 transition-all focus-within:ring-2 focus-within:ring-primary
            shadow-[0_16px_30px_-10px_rgba(70,96,187,0.20)] dark:shadow-none"
            onSubmit={handleSubmit}
        >
            <div className="flex min-w-0 flex-1 items-center gap-2 sm:gap-5">
                <img src={SearchIcon} alt="" className="h-5 w-5 shrink-0" />
                <label htmlFor="username-search" className="sr-only">GitHub username</label>
                <input
                    id="username-search"
                    name="username"
                    className="w-full min-w-0 outline-none placeholder:text-text-muted text-[13px] sm:text-base
                dark:placeholder:text-text-muted/70"
                    type="text"
                    required
                    aria-invalid={isUserNotFound}
                    aria-describedby={isUserNotFound ? "search-error" : undefined}
                    placeholder="Search GitHub username…"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
            </div>
            <span id="search-error" role="status" aria-live="polite" className={`hidden sm:block text-[16px] font-bold ${isUserNotFound ? "visible" : "invisible"} text-error`}>
                No results
            </span>
            <button disabled={loading} className="h-12 shrink-0 py-3 px-5 sm:px-6 rounded-[10px] bg-primary text-on-primary text-base font-bold leading-[150%] whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary hover:bg-primary-hover disabled:cursor-wait disabled:opacity-70">
                {loading ? "Searching…" : "Search"}
            </button>
        </form>
    );
};
