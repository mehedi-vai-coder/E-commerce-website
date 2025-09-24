import React, { useState } from 'react';
import { ShopContext } from './ShopContext';
import { products } from '../assets/assets';
import { toast } from 'react-toastify';

const ShopProvider = ({ children }) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({})


    const addToCart = async (itemId, size) => {

        if (!size) {
            toast.error('Select Product Size')
            return;
        }

        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            }
            else {
                cartData[itemId][size] = 1;
            }
        }
        else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData)
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (erros) {
                    console.log(erros)
                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    }

    const shopInfo = {
        products, delivery_fee, currency, search, setSearch, showSearch, setShowSearch, cartItems, addToCart,
        getCartCount, updateQuantity
    }
    return (
        <ShopContext value={shopInfo}>
            {children}
        </ShopContext>
    );
};

export default ShopProvider;