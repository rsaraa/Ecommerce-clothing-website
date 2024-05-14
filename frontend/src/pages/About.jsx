import React from 'react'
import './about.css';
const About = () => {
    return (
        <div className="max_padd_container pt-28">
            <h2 className='h4'><center>ABOUT US</center></h2>
            <p style={{ 'textAlign': 'justify', 'color': 'black' }}>
                Embarking on a timeless journey, Sri Kumaran Silks and Readymades has been unwavering in our dedication to celebrating India's cultural richness and sartorial heritage.
                Our story, deeply rooted in passion and reverence for traditional craftsmanship, continues to unfold with each passing day.
                Nestled in the heart of Nasiyanur, Erode, our humble beginnings have flourished into a cherished destination, beckoning connoisseurs of elegance and authenticity. As we traverse the ever-evolving landscape of fashion, our ethos remains unwavering — a dedication to quality, craftsmanship, and tradition.
            </p>
            <p style={{ 'textAlign': 'justify', 'color': 'black' }}>
                As custodians of ethical fashion, we champion fair trade practices and support local artisans and communities, ensuring that every garment carries not just a story, but also a sense of responsibility and compassion.
                As we continue to evolve and innovate, we invite you to join us on this enchanting journey of discovery and celebration. Connect with us to stay updated on our latest collections, offers, and events, and together, let us embrace the essence of Indian elegance with Sri Kumaran Silks and Readymades.
            </p>
            <div className="content">
                <div className="landing-caption">
                    <h3>We ensure our customers have the best shopping experience</h3>
                </div>
                <div className="cards">
                    <div className="card">
                        <h4>QUALITY</h4>
                        <p>
                            We meticulously handpick fabrics and materials to ensure exceptional quality in every garment we offer.
                        </p>
                    </div>
                    <div className="card">
                        <h4>CUSTOMER SATISFACTION</h4>
                        <p>
                            We prioritize customer satisfaction by providing personalized service and a hassle-free shopping experience.
                        </p>
                    </div>
                    <div className="card">
                        <h4>OUR COLLECTION</h4>
                        <p>Explore our expansive collection ranging from stunning silk sarees to elegant salwar suits  and dashing sherwanis. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About