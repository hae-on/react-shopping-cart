import { useSetRecoilState } from 'recoil';

import { cartProductAtom } from '../data/cartProductData';
import type { CartProduct } from '../types/product';

const addTargetQuantity = (cartProducts: CartProduct[], id: number) =>
  cartProducts.map((cartProduct) => {
    if (cartProduct.product.id === id) {
      return { ...cartProduct, quantity: cartProduct.quantity + 1 };
    }
    return cartProduct;
  });

const subtractTargetQuantity = (cartProducts: CartProduct[], id: number) =>
  cartProducts.map((cartProduct) => {
    if (cartProduct.product.id === id) {
      return { ...cartProduct, quantity: cartProduct.quantity - 1 };
    }
    return cartProduct;
  });

const useProductQuantity = (id: number) => {
  const setCartProducts = useSetRecoilState(cartProductAtom);

  const addCount = () => {
    setCartProducts((prev) => addTargetQuantity(prev, id));
  };

  const subtractCount = () => {
    setCartProducts((prev) => subtractTargetQuantity(prev, id));
  };

  return { addCount, subtractCount };
};

export default useProductQuantity;
