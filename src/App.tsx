import { Header } from "./components/Header";
import { SearchInput } from "./components/SearchInput";

function App() {
    return (
        <>
            <main className="h-screen flex justify-center items-center">
                <section className="flex flex-col gap-10 max-w-182.5 w-full">
                    <Header />
                    <SearchInput />
                </section>
            </main>
        </>
    );
}

export default App;
