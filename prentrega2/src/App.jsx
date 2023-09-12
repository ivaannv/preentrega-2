import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
import Promesas from './components/Promesas/Promesas';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Ayuda from './components/Ayuda/Ayuda';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailConteiner/ItemDetailConteiner';


function App() {

  return (
    <BrowserRouter>
    <NavBar />
<Routes>
  <Route exact path='/' element={<Home/>}/>
  <Route exact path='/productos' element={<ItemListContainer />}/>
  <Route exact path='idItem´´' element={<ItemDetailContainer/>}/>
  <Route exact path='/ayuda' element={<Ayuda/>}/>
  <Route exact path='/cart' element={<Cart/>}/>
  
</Routes>
</BrowserRouter>
  )
}

export default App