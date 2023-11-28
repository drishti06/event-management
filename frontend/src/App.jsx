import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import EventsList from './components/EventsList/EventsList';
import Home from './components/Home/Home';
import LoginForm from './components/LoginForm/LoginForm';
import Navbar from './components/Navbar/Navbar';
import RegistrationForm from './components/Registration/RegistrationForm';
import SignupForm from './components/SignupForm/SignupForm';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import UserEvents from './components/UserEvents/UserEvents';

function App() {
  return (
    <div className="App">
      {/* <RegistrationForm /> */}
      {/* <SignupForm /> */}
      {/* <LoginForm /> */}
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/signup' element={<SignupForm />} />
          <Route path='/events' element={<EventsList />} />
          <Route path='/userEvents' element={<UserEvents />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
