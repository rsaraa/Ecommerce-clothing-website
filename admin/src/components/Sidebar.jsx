import React from 'react'
import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        <div className='py-7 flex justify-center gap-x-1 gap-y-5 w-full bg-white sm:gap-x-4 lg:flex-col lg:pt-20 lg:max-w-60 lg:h-screen lg:justify-start lg:pl-6'>
            <Link to={'/addproduct'}>
                <button className='flexCenter gap-2 rounded-lg bg-primary b-14 w-40 medium-14 sm:medium-14'>
                    <span>Add Product</span>
                </button>
            </Link>
            <Link to={'/listproduct'}>
                <button className='flexCenter gap-2 rounded-lg bg-primary b-14 w-40 medium-14 sm:medium-14'>
                    <span>Product List</span>
                </button>
            </Link>
        </div>
    )
}

export default Sidebar