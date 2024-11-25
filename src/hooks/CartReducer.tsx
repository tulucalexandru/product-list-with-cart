interface CartItemState {
  name: string,
  price: string,
  totalPrice: string,
  quantity: string
}

interface cartAction {
  type: string,
  item: {
    name: string
    price: string,
    totalPrice: string,
    quantity: string
  }
}

export function CartReducer(cartState: CartItemState[], cartAction: cartAction) {
  switch (cartAction.type) {
    case "ADD_ITEM":
      console.log(cartAction.type)
      console.log(cartState)
  }
}
