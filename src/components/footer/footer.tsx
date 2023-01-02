import React from 'react'
import Logo from '../../assets/images/logo.png'
import FacebookIcon from '../../assets/images/icons/facebook.svg'
import InstagramIcon from '../../assets/images/icons/instagram.svg'
import TwitterIcon from '../../assets/images/icons/twitter.svg'
import YoutubeIcon from '../../assets/images/icons/youtube.svg'
import SendIcon from '../../assets/images/icons/send.svg'
import PhoneIcon from '../../assets/images/icons/headphones.svg'
import MapIcon from '../../assets/images/icons/map-pin.svg'
import MailIcon from '../../assets/images/icons/mail.svg'
import './footer.scss'

const Footer = () => {
    return (
        <footer>
            <div className="logo-container">
                <div>
                    <img src={Logo} alt="logo" className=" w-[110px]" />
                </div>
            </div>
            <div className="footer-main">
                <div className="footer-items">
                    <h3>About Us</h3>
                    <p className="text-[16px]">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown
                    </p>
                </div>
                <div className="footer-items">
                    <h3>Quick links</h3>
                    <p>Policy</p>
                    <p>Term & Condition</p>
                    <p>Shipping</p>
                    <p>Return</p>
                    <p>FAQs</p>
                </div>
                <div className="footer-items">
                    <h3>Company</h3>
                    <p>About Us</p>
                    <p>Affilate</p>
                    <p>Career</p>
                    <p>Contact</p>
                </div>
                <div className="footer-items">
                    <h3>Contact Us</h3>
                    <p className="flex space-x-[10px]">
                        <img src={PhoneIcon} />
                        <span>1800 97 97 69</span>
                    </p>
                    <p className="flex space-x-[10px]">
                        <img src={MapIcon} />
                        <span>502 New Design Str, Melbourne, Australia</span>
                    </p>
                    <p className="flex space-x-[10px]">
                        <img src={MailIcon} />
                        <span>contact@Waamde.co</span>
                    </p>
                </div>
                <div className="footer-items">
                    <h3>Newsletter</h3>
                    <p>
                        Subcribe to get information about products and coupons
                    </p>
                    <div className="email-box">
                        <div className="w-full">
                            <input type="text" placeholder="Search Here...." />
                        </div>
                        <div className="flex justify-center items-center">
                            <button className="flex justify-center items-center">
                                <img src={SendIcon} alt="send" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="socials">
                    <div>
                        <img src={FacebookIcon} alt="facebook" />
                    </div>
                    <div>
                        <img src={InstagramIcon} alt="instagram" />
                    </div>
                    <div>
                        <img src={TwitterIcon} alt="twitter" />
                    </div>
                    <div>
                        <img src={YoutubeIcon} alt="youtube" />
                    </div>
                </div>
            </div>
            <div className="footer-social">
                <div className="text-center">
                    &copy; 2021 Waamde. All Rights Reserved
                </div>
                <div className="socials">
                    <div className="flex space-x-[30px]">
                        <div>
                            <img src={FacebookIcon} alt="facebook" />
                        </div>
                        <div className="borderline"></div>
                        <div>
                            <img src={InstagramIcon} alt="instagram" />
                        </div>
                        <div className="borderline"></div>
                        <div>
                            <img src={TwitterIcon} alt="twitter" />
                        </div>
                        <div className="borderline"></div>
                        <div>
                            <img src={YoutubeIcon} alt="youtube" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
