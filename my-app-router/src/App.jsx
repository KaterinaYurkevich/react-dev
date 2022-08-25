import {Routes, Route} from 'react-router-dom';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from './Pages/Home';
import { Posts } from './Pages/Posts';
import { Todos } from './Pages/Todos';
import { Users } from './Pages/Users';

export function App() {
    return ( 
        <>
        <Header />
        <main>
            <Routes>
                <Route path='/Home' element={<Home />}/>
                <Route path='/Posts' element={<Posts />}/>
                <Route path='/Todos' element={<Todos />}/>
                <Route path='/Users' element={<Users />}/>
            </Routes> 
        </main>
        <Footer />
        </>
    );
}