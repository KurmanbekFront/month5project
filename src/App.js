import "./App.css";
import RickAndMortyPage from "./pages/RickAndMortyPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserListPage from "./pages/userListPage/UserListPage";
import UserRegisterPage from "./pages/userRegisterPage/UserRegisterPage";
import Menu from "./components/Menu";
import AboutPage from "./pages/AboutPage";
import CatPage from "./pages/CatPage";
import JokePage from "./pages/JokePage";
import AppNavBar from "./pages/AppNavBar";
import CatFactPage from "./pages/dzPages/CatFactPage";
import DogPage from "./pages/dzPages/DogPage";
import RandomUserPage from "./pages/dzPages/RandomUserPage";
import QuotePage from "./pages/dzPages/QuotePage";
import ExtinctAnimalPage from "./pages/dzPages/ExtinctAnimalPage";
function App() {
    return (
        <BrowserRouter>
        <AppNavBar/>
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<AboutPage />} />
                    {/* <Route path="/cats" element={<CatPage/>} />
                    <Route path="/jokes" element={<JokePage/>} />
                    <Route path="/about" element={<AboutPage/>} /> */}
                    <Route path="/catfact" element={<CatFactPage />}/>
                    <Route path="/dogs" element={<DogPage />}/>
                    <Route path="/randomuser" element={<RandomUserPage />}/>
                    <Route path="/quote" element={<QuotePage />}/>
                    <Route path="/extinctanimal" element={<ExtinctAnimalPage />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
