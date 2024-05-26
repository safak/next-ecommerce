/* eslint-disable react/no-unescaped-entities */
"use client";

import Button from "./Button";
import CartItem from "./CartItem";
import { RxCross1 } from "react-icons/rx";

type CartModalProps = {
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CartModal = ({ setIsCartOpen }: CartModalProps) => {
  const cartItems = true;
  return (
    <div className="w-max absolute p-6 rounded-lg shadow-md bg-white top-12 right-0 flex flex-col z-20 border border-gray-100">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Mon panier</h2>
        <RxCross1
          className="cursor-pointer p-2 text-3xl bg-red-light rounded-md text-white"
          onClick={() => setIsCartOpen(false)}
        />
      </div>
      {!cartItems ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <div className="flex flex-col gap-8 border-b border-gray-100 py-8">
            <CartItem />
          </div>
          <div className="pt-8">
            <div className="flex items-center justify-between font-semibold">
              <span>Total</span>
              <span>49€</span>
            </div>
            <p className="text-gray-500 text-xs font-light mt-2 mb-4">
              Les frais d'expédition seront ajoutés lors du paiement.
            </p>
            <div className="flex justify-between gap-4 text-sm">
              <Button href="/" color="white">
                Voir le panier
              </Button>
              <Button href="/" color="green">
                Paiement
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
