import React from 'react';
import all_products from '../assets/all_products';
import Item from '../components/Item';
const Category = ({ category }) => {
    return (
        <section className='max_padd_container py-12 xl:py-28'>
            <div>
            </div>
            <div className='grid grid-cols-2 xs:grid:cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
                {all_products.map((item) => {
                    if (category === item.category) {
                        return <Item key={item.id} id={item.id} image={item.image} name={item.name}
                            new_price={item.new_price} old_price={item.old_price} />
                    }
                })}
            </div>
        </section>
    );
}

export default Category;

