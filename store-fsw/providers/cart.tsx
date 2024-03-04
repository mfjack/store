"use client";

import { Product } from "@prisma/client";
import { createContext, ReactNode } from "react";

interface CartProduct extends Product {
   quantity: number;
}

interface ICartContext {
   products: CartProduct[];
   cartTotalPrice: number;
   cartBasePrice: number;
   cartTotalDiscount: number;
}

const CartContext = createContext<ICartContext>({
   products: [],
   cartTotalPrice: 0,
   cartBasePrice: 0,
   cartTotalDiscount: 0,
});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
   return (
      <CartContext.Provider
         value={{
            products: [],
            cartTotalPrice: 0,
            cartBasePrice: 0,
            cartTotalDiscount: 0,
         }}
      >
         {children}
      </CartContext.Provider>
   );
};
