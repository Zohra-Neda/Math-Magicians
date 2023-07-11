/*eslint-disable*/
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

function App() {
  return (
    <>
      <header className='header'>
      <h1 className="header-title">Math Magicians</h1>
        <nav className='nav'>
          <ul className='ul'>
            <li className='nav-link'><Link to='/'>Home |</Link></li>
            <li className='nav-link'><Link to='/calculator'>Calculator |</Link></li>
            <li className='nav-link'><Link to='/quotes'>Quote |</Link></li>
          </ul>
        </nav>
      </header>
      <main className='main-container'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/calculator' element={<Calculator/>} />
          <Route path='/quotes' element={<Quote/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
