import './App.css';
import ChangeTitle from './components/ChangeTitle';
import AboutPage from './pages/aboutPage/AboutPage';
import ContactsPage from './pages/contactsPage/ContactsPage';
import MainPage from './pages/mainPage/MainPage';

function App() {
  return (
      <div className="App">
          {/* <MainPage/> */}
          {/* <AboutPage />
          <ChangeTitle /> */}
          <ContactsPage />
      </div>
  );
}

export default App;
