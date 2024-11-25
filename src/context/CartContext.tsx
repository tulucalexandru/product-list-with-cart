import { createContext, useReducer } from "react";

interface CartState {
  name: string,
  price: string,
  totalPrice: string,
  quantity: string
}

type updateAction = {
  type: "INCREMENT_ITEM" | "DECREMENT_ITEM" | "DELETE_ITEM" | "CLEAR_CART"
  name: string
}

type addAction = {
  type: "ADD_ITEM",
  name: string,
  price: string,
}



const initialCartState: CartState[] = []

export const CartContext = createContext(initialCartState)
export const DispatchCartContext = createContext<React.Dispatch<addAction | updateAction>>(() => null)


export function CartProvider({ children }: React.PropsWithChildren) {

  const [cartState, dispatch] = useReducer(cartReducer, initialCartState)


  return (
    <CartContext.Provider value={cartState}>
      <DispatchCartContext.Provider value={dispatch}>
        {children}
      </DispatchCartContext.Provider>
    </CartContext.Provider>
  )
}



function cartReducer(state: CartState[], action: addAction | updateAction) {
  let itemIndex = state.findIndex(item => item.name === action.name)


  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        {
          name: action.name,
          price: action.price,
          totalPrice: action.price,
          quantity: "1"
        }
      ]
    case "INCREMENT_ITEM":
      return [
        ...state.slice(0, itemIndex),
        {
          ...state[itemIndex],
          quantity: (parseInt(state[itemIndex].quantity) + 1).toString(),
          totalPrice: ((parseInt(state[itemIndex].quantity) + 1) * parseFloat(state[itemIndex].price)).toFixed(2).toString()
        },
        ...state.slice(itemIndex + 1)
      ]
    case "DECREMENT_ITEM":
      if (parseInt(state[itemIndex].quantity) > 1) {
        return [
          ...state.slice(0, itemIndex),
          {
            ...state[itemIndex],
            quantity: (parseInt(state[itemIndex].quantity) - 1).toString(),
            totalPrice: ((parseInt(state[itemIndex].quantity) - 1) * parseFloat(state[itemIndex].price)).toFixed(2).toString()
          },
          ...state.slice(itemIndex + 1)
        ]
      }
      else {
        return [
          ...state.slice(0, itemIndex),
          ...state.slice(itemIndex + 1)
        ]
      }
    case "DELETE_ITEM":
      return [
        ...state.slice(0, itemIndex),
        ...state.slice(itemIndex + 1)
      ]
    case "CLEAR_CART":
      return []
    default:
      return state
  }
}


