import NavBar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailConteiner/ItemDetailConteiner"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CarritoProvider } from "./context/CarritoContext"
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"


const App = () => {


  return (
    <>
      <BrowserRouter>
      <CarritoProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={ <ItemListContainer/> } />
          <Route path="/categoria/:categoriaId" element={ <ItemListContainer/> } />
          <Route path="/item/:id" element={<ItemDetailContainer/>} />
          <Route path="/Cart" element={<Cart/>}> </Route>
          <Route path="/form" element={<Checkout/>}> </Route>
          <Route path="*" element={<h2>Sitio en construcción, vuelva más tarde</h2>}  />
        </Routes>
        </CarritoProvider>
      </BrowserRouter>

    </>

  )
}

export default App