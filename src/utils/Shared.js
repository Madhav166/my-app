import React from 'react';
import cartService from '../service/cart.service';

const addtoCart=async(book,id)=>{
    return cartService
    .add({
      userId: id,
      bookId: book.id,
      quantity: 1,
    })
    .then((res) => {
      return { error: false, message: "Item added in cart" };
    })
    .catch((e) => {
      if (e.status === 500)
        return { error: true, message: "Item already in the cart" };
      else return { error: true, message: "something went wrong" };
    });


};
// eslint-disable-next-line import/no-anonymous-default-export
export default {addtoCart};