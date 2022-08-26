import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Pages } from './Pages';

export function App() {
    return ( 
        <>
        <Header />
        <main>
            <Pages /> 
        </main>
        <Footer />
        </>
    );
}