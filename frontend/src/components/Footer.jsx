import React from 'react';
import { Link } from "react-router-dom";
import FOOTER_LINKS from "../assets/data";
import { FOOTER_CONTACT_INFO } from '../assets/data';
import FOOT from "../assets/data";

const Footer = () => {
    return (
        <footer className='flexCenter'>
            <div className='max_padd_container flex w-full flex-col'>
                <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row' >
                    <Link to="/" className="mb-10 bold-20">Sri Kumaran Silks & Readymades</Link><br></br>
                    <div className='flex flex-wrap gap-8 sm:justify-between md:flex-1'>
                        {FOOTER_LINKS.map((col, index) => (
                            <FooterColumn title={col.title} key={index}>
                                <ul className='flex flex-col gap-4 regular-14 text-gray-20'>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/privacy">Privacy Policy</Link></li>
                                </ul>
                            </FooterColumn>
                        ))}
                        {FOOT.map((col, index) => (
                            <FooterColumn title="Our Community" key={index}>
                                <ul className='flex flex-col gap-4 regular-14 text-gray-20'>
                                    <li><Link to="/terms">Terms & Conditions</Link></li>
                                </ul>
                            </FooterColumn>
                        ))}
                        <div>
                            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                                {FOOTER_CONTACT_INFO.links.map((link, index) => (
                                    <Link to="/" key={index} className='flex gap-4 md:flex-col lg:flex-row'>
                                        <p>{link.value}</p>
                                    </Link>
                                ))}
                            </FooterColumn>
                        </div>
                    </div>
                </div><br />
                <div className="border bg-gray-20"></div>
                <p className='text-center regular-14 text-gray-30'>2024 SRI KUMARAN SILKS & READYMADES | All rights reserved.</p>
            </div>
        </footer>
    )
};

const FooterColumn = ({ title, children }) => {
    return (
        <div className='flex flex-col gap-5'>
            <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
            {children}
        </div>
    )
}

export default Footer;
