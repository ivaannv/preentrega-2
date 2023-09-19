import NavBar from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailConteiner/ItemDetailConteiner"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cart from "./components/Cart/Cart"



const App = () => {
  return (
    <>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:idCategoria" element={<ItemListContainer />} />
            <Route path="/item/:idItem" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
      </BrowserRouter>
    </>

  )
}

export default App