/* eslint-disable react/no-unescaped-entities */
import { useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ThemeContext from './context/ThemeContext';
import Wrapper from './layout/Wrapper';
import Home from './pages/Home';

function App() {
  const { darkMode } = useContext(ThemeContext)
  return (
    <div className={`${!darkMode ? "bg-white" : "bg-primaryDark"} duration-300 transition-all h-screen App`}>
      <Navbar />
      <Wrapper>
        <Home />
      </Wrapper>
    </div>
  );
}

export default App;
