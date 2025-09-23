import React, { Children, useEffect, useState } from 'react';
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

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems])

    const shopInfo = {
        products, delivery_fee, currency, search, setSearch, showSearch, setShowSearch, cartItems, addToCart,
    }
    return (
        <ShopContext value={shopInfo}>
            {children}
        </ShopContext>
    );
};

export default ShopProvider;