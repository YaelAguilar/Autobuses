import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../pages/Login';
import Alta from '../pages/Alta';
import Register from '../pages/Register';

function App() {

    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/alta' element={<Alta/>}/>
            </Routes>
        </BrowserRouter>
    );

}

export default App;