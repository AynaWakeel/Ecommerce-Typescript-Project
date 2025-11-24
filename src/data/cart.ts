
export type cartItem  = {
   id:number;
   name:string;
   image:string;
   price:number;
   size:string;
   color:string;
   quantity:number;
   subtotal:number;
}

export const getItem = () : cartItem[] => {
   const data = localStorage.getItem('cart')
   return data ? JSON.parse(data) : []
}

export const saveItem = (cart: cartItem[]) => {
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeItem = (index: number) =>{
   const cart = getItem()
   cart.splice(index,1)
   saveItem(cart)
}