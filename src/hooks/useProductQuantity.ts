import { useSetRecoilState } from 'recoil';

import { cartProductAtom } from '../recoil/cartProductData';
import type { CartProduct } from '../types/product';
import { patchCartProduct } from '../apis/cartProducts';

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
    setCartProducts((prev) => {
      const updatedCartProducts = addTargetQuantity(prev, id);
      const targetProduct = updatedCartProducts.find(
        (cp) => cp.product.id === id
      );

      if (targetProduct) {
        patchCartProduct(id, targetProduct.quantity);
      }

      return updatedCartProducts;
    });
  };

  const subtractCount = () => {
    setCartProducts((prev) => {
      const updatedCartProducts = subtractTargetQuantity(prev, id);
      const targetProduct = updatedCartProducts.find(
        (cp) => cp.product.id === id
      );

      if (targetProduct) {
        patchCartProduct(id, targetProduct.quantity);
      }

      return updatedCartProducts;
    });
  };

  return { addCount, subtractCount };
};

export default useProductQuantity;
