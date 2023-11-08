import { Routes, Route,  } from 'react-router-dom'
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </>
    );
}

export default App;
