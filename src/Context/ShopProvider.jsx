import React, { Children } from 'react';
import { ShopContext } from './ShopContext';
import { products } from '../assets/assets';

const ShopProvider = ({ children }) => {
    const currency = '$';
    const delivery_fee = 10;

    const shopInfo = {
        products, delivery_fee, currency
    }
    return (
        <ShopContext value={shopInfo}>
            {children}
        </ShopContext>
    );
};

export default ShopProvider;