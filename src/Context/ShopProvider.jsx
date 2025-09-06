import React, { Children } from 'react';
import { ShopContext } from './ShopContext';
import { products } from '../assets/assets';

const ShopProvider = ({ children }) => {

    const shopInfo = {
        products,
    }
    return (
        <ShopContext value={shopInfo}>
            {children}
        </ShopContext>
    );
};

export default ShopProvider;