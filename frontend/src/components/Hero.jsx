import React from 'react';
import { NavLink } from 'react-router-dom';
const Hero = () => {
    return (
        <div className='flex justify-center  mb-8'><br /><br />
            <section className='relative bg-hero bg-center bg-no-repeat h-screen bg-cover hero-image max_padd_container relative top-20 xs:top-25'>
                <div className='max_padd_container relative top-32 xs:top-42'>
                    <h1 className='h2 text-white'>NEW SEASON ARRIVALS</h1>
                    <h1 className='h2 text-white'>CHECK OUT ALL THE TRENDS</h1>
                    <div className='flex justify-center'>
                        <NavLink to={'/mens'} className={"btn_white_rounded"}>Shop Now</NavLink>
                    </div>
                </div>
            </section >
        </div>
    );
}

export default Hero;
