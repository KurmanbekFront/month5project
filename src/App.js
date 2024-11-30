import './App.css';
import ChangeTitle from './components/ChangeTitle';
import AboutPage from './pages/aboutPage/AboutPage';
import ContactsPage from './pages/contactsPage/ContactsPage';
import CountPage from './pages/countPage/CountPage';
import MainPage from './pages/mainPage/MainPage';

function App() {
  return (
      <div className="App">
          {/* <MainPage/> */}
          {/* <AboutPage />
          <ChangeTitle /> */}
          {/* <ContactsPage /> */}
          <CountPage />
      </div>
  );
}

export default App;
