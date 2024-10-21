import { createContext, useReducer } from "react";

interface CartState {
  name: string,
  price: string,
  totalPrice: string,
  quantity: string
}

interface myAction extends CartState {
  type: string
}

const initialCartState: CartState[] = []

export const CartContext = createContext(initialCartState)
export const DispatchCartContext = createContext<React.Dispatch<myAction>>(() => null)


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



function cartReducer(state: CartState[], action: myAction) {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        {
          name: action.name,
          price: action.price,
          totalPrice: action.totalPrice,
          quantity: "1"
        }
      ]
    default:
      return state
  }
}


