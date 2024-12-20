import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";


import MainPage from "./pages/mainPage/MainPage";
import UsersPage from "./pages/usersPage/UsersPage";
import CountPage from "./pages/countPage/CountPage";
function App() {
    return (
        <div className="container">
            {/* <MainPage/> */}
            {/* <UsersPage/> */}
            <CountPage />
        </div>
    );
}

export default App;
