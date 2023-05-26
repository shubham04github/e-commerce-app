
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cardsdetails from './component/Cardsdetails';
import Header from './component/Header';

import Cards from './component/Cards';



function App() {
  return (
  <>
    <Header/>
    
    <Routes>
    <Route path='/' element={<Cards/>}/>
    <Route path='/cart/:id' element={<Cardsdetails/>}/>
    </Routes>
  </>
    
   
  );
}

export default App;
