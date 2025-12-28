import { Header } from '../components/Header';
import {Outlet}  from 'react-router-dom';
import './App.css';

function App() {
  return (
     <>
     <Header/>
     <main className='min-h-[calc(100vh-120px)]'><Outlet/></main>
     <Footer/>
     </>
  );
}

export default App;
