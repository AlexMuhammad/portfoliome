/* eslint-disable react/no-unescaped-entities */
import './App.css';
import Navbar from './components/Navbar';
import Wrapper from './layout/Wrapper';
import Home from './pages/Home';

function App() {
  return (
    <div className="App ">
      <Navbar />
      <Wrapper>
        <Home />
      </Wrapper>
    </div>
  );
}

export default App;
