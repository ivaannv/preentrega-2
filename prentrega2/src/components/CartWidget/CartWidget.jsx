import './CartWidget.css'
import ItemCount from '../ItemCount/ItemCount';
const CartWidget = () => {
    

  return (
    <div>
        <img className='imgCarrito' src="./cart.svg" alt="Carrito" />
        <strong>0</strong> 
        <ItemCount/>
    </div>
  )
}

export default CartWidget