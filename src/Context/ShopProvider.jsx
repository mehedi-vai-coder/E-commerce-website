import React, { Children, useState } from 'react';
import { ShopContext } from './ShopContext';
import { products } from '../assets/assets';

const ShopProvider = ({ children }) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);

    const shopInfo = {
        products, delivery_fee, currency, search, setSearch, showSearch, setShowSearch
    }
    return (
        <ShopContext value={shopInfo}>
            {children}
        </ShopContext>
    );
};

export default ShopProvider;