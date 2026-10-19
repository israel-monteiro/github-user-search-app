import type { Dispatch, SetStateAction } from "react";
import SearchIcon from "../../assets/icons/icon-search.svg";

interface SearchInputProps {
    username: string;
    setUsername: Dispatch<SetStateAction<string>>;
    isUserNotFound: boolean;
    loading: boolean;
    onSearch: () => void;
}

export const SearchInput = ({ username, setUsername, isUserNotFound, loading, onSearch }: SearchInputProps) => {
    const handleSubmit = (event: React.SubmitEvent) => {
        event.preventDefault();
        onSearch();
    };

    return (
        <form
            className="flex w-full justify-between items-center py-2 pl-3 pr-6 bg-surface rounded-2xl gap-6 transition-all focus-within:ring-2 focus-within:ring-primary
            shadow-[0_16px_30px_-10px_rgba(70,96,187,0.20)] dark:shadow-none"
            onSubmit={handleSubmit}
        >
            <div className="flex items-center gap-5 flex-1">
                <img src={SearchIcon} alt="" className="max-w-6 max-h-6" />
                <label htmlFor="username-search" className="sr-only">GitHub username</label>
                <input
                    id="username-search"
                    name="username"
                    className="w-full outline-none placeholder:text-text-muted 
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
            <span id="search-error" role="status" aria-live="polite" className={`text-[16px] font-bold ${isUserNotFound ? "block" : "hidden"} text-error`}>
                No results
            </span>
            <button disabled={loading} className="py-3 px-6 rounded-2xl bg-primary text-on-primary text-[16px] font-bold leading-[150%] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary hover:bg-primary-hover disabled:cursor-wait disabled:opacity-70">
                {loading ? "Searching…" : "Search"}
            </button>
        </form>
    );
};
