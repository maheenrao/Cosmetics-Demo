
import React from 'react'

const CartContext = React.createContext({
    item: [],
    totalamount: 0,
    addItem: (item) => {},
    removeItem: (id) =>{}
})



export default CartContext
