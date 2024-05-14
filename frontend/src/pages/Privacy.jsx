import React from 'react'
import './about.css'
const Privacy = () => {
    return (
        <div className="max_padd_container pt-28 bg-primary">
            <h2 className='h4'><center>PRIVACY POLICY</center></h2>
            <p style={{ 'textAlign': 'justify', fontSize: '15px', color: 'black' }}>
                <p>
                    At Sri Kumaran Silks and Readymades, we are committed to protecting the privacy and security of our customers' personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you interact with our website or utilize our services.
                </p><br />
                <ol className="list-decimal pl-10">
                    <li>
                        <h4>Information We Collect</h4>
                        <p>We may collect personal information such as your name, email address when you register an account with us.</p>
                    </li>
                    <li>
                        <h4>How We Use Your Information</h4>
                        <p>We use the information we collect to manage your account, personalize your shopping experience, communicate with you about your purchases and account activities, and provide customer support.</p>
                    </li>
                    <li>
                        <h4> Information Sharing and Disclosure</h4>
                        <p>We do not sell, trade, or rent your personal information to third parties for their marketing purposes.</p>
                    </li>
                    <li>
                        <h4>Data Security</h4>
                        <p>We implement appropriate technical and organizational measures to safeguard your personal information against unauthorized access, disclosure, alteration, or destruction.</p>
                    </li>
                    <li>
                        <h4> Your Choices</h4>
                        <p>You have the right to access, correct, or delete the personal information we hold about you. You may also choose to opt out of receiving promotional communications from us at any time.</p>
                    </li>
                    <li>
                        <h4>Changes to This Policy</h4>
                        <p>We reserve the right to update or modify this Privacy Policy at any time. Any changes will be posted on this page, and the effective date will be updated accordingly.</p>
                    </li>
                    <li>
                        <h4>Contact Us</h4>
                        <p>If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us using the information provided on our website.
                        </p>
                    </li>

                </ol>
            </p><br /><br />
        </div>
    )
}

export default Privacy