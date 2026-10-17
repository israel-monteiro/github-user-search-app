export const Header = () => {
    return (
        <header className="flex max-w-182.5 w-full justify-between">
            <h1 className="text-[28px] font-bold text-text">devfinder</h1>

            <button className="flex gap-4 items-center cursor-pointer" type="button" aria-label="Ativar tema escuro">
                <span className="text-[13px] font-bold text-text-muted  leading-[140%] tracking-[2.5px]">DARK</span>
                <img className="w-5 h-5" src="/src/assets/icons/icon-moon.svg" alt="" />
            </button>
        </header>
    );
};
