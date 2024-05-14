import React, { useState, useContext } from 'react';
import { MdStar } from 'react-icons/md';
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState(null);

    const handleAddToCart = () => {
        addToCart(product.id, selectedSize);
        alert('Product added to cart!');
    };

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };

    const renderSizeOptions = () => {
        if (product.category === 'men' || product.category === 'kid') {
            return (
                <div>
                    <h4 className="bold-16">Size:</h4>
                    <div className="flex gap-3 my-3">
                        <div className={`ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer ${selectedSize === 'S' && 'bg-gray-500'}`} onClick={() => handleSizeSelect('S')}>S</div>
                        <div className={`ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer ${selectedSize === 'M' && 'bg-gray-500'}`} onClick={() => handleSizeSelect('M')}>M</div>
                        <div className={`ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer ${selectedSize === 'L' && 'bg-gray-500'}`} onClick={() => handleSizeSelect('L')}>L</div>
                        <div className={`ring-2 ring-slate-900/10 h-10 w-10 flexCenter cursor-pointer ${selectedSize === 'XL' && 'bg-gray-500'}`} onClick={() => handleSizeSelect('XL')}>XL</div>
                    </div>
                </div>
            );
        }
        return null;
    };

    return (
        <section className>
            <div className='flex flex-col gap-14 xl:flex-row'>
                <div className='flex gap-x-2'>
                    <div>
                        <img src={product.image} alt="" style={{ height: '500px' }} />
                    </div>
                </div>
                <div className="flex-col flex">
                    <h5 className="h4">{product.name}</h5>
                    <div className="flex gap-x-2 text-secondary medium-22">
                        <MdStar />
                        <MdStar />
                        <MdStar />
                        <MdStar />
                    </div>
                    <div className="flex gap-x-6 medium-20 my-4">
                        <div className="line-through">₹{product.old_price}</div>
                        <div className="text-secondary">₹{product.new_price}</div>
                    </div>
                    <div className="mb-4">
                        {renderSizeOptions()}
                        <div className="flex flex-col gap-y-3 mb-4 max-w-[300px]">
                            <button onClick={handleAddToCart} className="btn_dark_outline !ounded-none uppercase regular-14 tracking-widest">Add to Cart</button>
                        </div>
                        <p><span className="medium-16 text-tertiary capitalize">Category : {product.category}</span></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDisplay;
