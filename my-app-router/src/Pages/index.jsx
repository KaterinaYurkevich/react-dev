import {Routes, Route} from 'react-router-dom';
import { Home } from './Home';
import { Posts } from './Posts';
import { Todos } from './Todos';
import { Users } from './Users';

export function Pages() {
    return (
        <Routes>
            <Route path='/Home' element={<Home />}/>
            <Route path='/Posts' element={<Posts />}/>
            <Route path='/Todos' element={<Todos />}/>
            <Route path='/Users' element={<Users />}/>
        </Routes>
    )
}