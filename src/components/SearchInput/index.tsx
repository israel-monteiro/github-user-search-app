export const SearchInput = () => {
    const handleSubmit = (event: React.SubmitEvent) => {
        event.preventDefault();
    };

    return (
        <form
            className="flex w-full justify-between py-2 pl-3 pr-6 bg-surface rounded-2xl gap-6 transition-all focus-within:ring-2 focus-within:ring-primary
            shadow-[0_16px_30px_-10px_rgba(70,96,187,0.20)] dark:shadow-none"
            onSubmit={handleSubmit}
        >
            <div className="flex items-center gap-5 w-full">
                <img src="/src/assets/icons/icon-search.svg" alt="" className="max-w-6 max-h-6" />
                <input className="w-full outline-none placeholder:text-text-muted 
                dark:placeholder:text-text-muted/70" type="text" placeholder="Search GitHub username…" />
            </div>

            <button className="py-3 px-6 rounded-2xl bg-primary text-on-primary text-[16px] font-bold leading-[150%] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                Search
            </button>
        </form>
    );
};
