import React from 'react';
import Logo from "../images/IFFA_logo_2024_Logo Gold (1).png";
import Flags from "../images/flags.png"
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="w-full bg-black py-4 font-sans">

            <div className="px-4 mb-4">
                <div className="country">
                    <div className='flex space-x-4 items-center footer-country'>
                        <img src={Flags} alt="IFFA-flag" className="h-8 w-auto w-10" />
                        <p className="flex-grow text-left text-gray-400 text-xs xs:text-base">
                            We acknowledge the Traditional Owners of the land where we work and live. We pay our respects
                            to Elders past, present and emerging. We celebrate the stories, culture and traditions of
                            Aboriginal and Torres Strait Islander Elders of all communities who also work and live on
                            this land.
                        </p>
                    </div>
                </div>
            </div>

          // 1. IFFA LOGO
            <img src={Logo} alt='IFFA-logo' className='h-14 w-17 mb-3 order-first sm:order-none footer-logo'></img>

          //2. Hyperlinks
            {/*             <div className="flex flex-col sm:flex-row justify-between items-center px-4 space-y-2 sm:space-y-0 footer-main">
                <div className='footer-links'>
                    <div className="flex space-x-4">
                        <a href="/home" className="text-gray-400 text-sm sm:text-base hover:text-gray-100">Home</a>
                        <a href="#" className="text-gray-400 text-sm sm:text-base hover:text-gray-100">About</a>
                        <a href="#" className="text-gray-400 text-sm sm:text-base hover:text-gray-100">Nominations 2024</a>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 text-sm sm:text-base hover:text-gray-100">Sponsor Us</a>
                        <a href="#" className="text-gray-400 text-sm sm:text-base hover:text-gray-100">Submit your work</a>
                    </div>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-400 text-sm sm:text-base hover:text-gray-100">FAQs</a>
                        <a href="#" className="text-gray-400 text-sm sm:text-base hover:text-gray-100">Contact Us</a>
                    </div>
                </div>
            </div> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 footer-links font-sans">
                <Link to="/" className="text-gray-400 text-sm sm:text-base hover:text-gray-100">Home</Link>
                <Link to="#" className="text-gray-400 text-sm sm:text-base hover:text-gray-100">Nominations 2024</Link>
                <Link to="/our-sponsor" className="text-gray-400 text-sm sm:text-base hover:text-gray-100">Our Sponsors</Link>
                <Link to="/about" className="text-gray-400 text-sm sm:text-base hover:text-gray-100">About Us</Link>
                <Link to="/contact" className="text-gray-400 text-sm sm:text-base hover:text-gray-100">Contact Us</Link>
                <Link to="/sponsor-us" className="text-gray-400 text-sm sm:text-base hover:text-gray-100">Sponsor Us</Link>
                <Link to="#" className="text-gray-400 text-sm sm:text-base hover:text-gray-100">Submit your work</Link>
                <Link to="#" className="text-gray-400 text-sm sm:text-base hover:text-gray-100">FAQs</Link>

            </div>

          //3. Social links
            <p className='headings'>Follow us on</p>
            <div class="mt-8 flex footer-socials">

                <a href="https://www.instagram.com/iffaawards/" target="_blank" class="text-gray-400 hover:text-gray-500 mr-4">
                    <span class="sr-only">Instagram</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                    </svg>
                </a>

                <a href="https://www.facebook.com/iffaawardss" target="_blank" class="text-gray-400 hover:text-gray-500 mr-4">
                    <span class="sr-only">Facebook</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                    </svg>
                </a>

                <a href="https://www.linkedin.com/company/iffa1/" target="_blank" class="text-gray-400 hover:text-gray-500 mr-4">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="h-5 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9,25h-5v-15h5zM6.501,8c-1.383,0 -2.501,-1.121 -2.501,-2.501c0,-1.38 1.12,-2.499 2.501,-2.499c1.378,0 2.499,1.121 2.499,2.499c0,1.38 -1.121,2.501 -2.499,2.501zM27,25h-4.807v-7.3c0,-1.741 -0.033,-3.98 -2.499,-3.98c-2.503,0 -2.888,1.896 -2.888,3.854v7.426h-4.806v-15.011h4.614v2.051h0.065c0.642,-1.18 2.211,-2.424 4.551,-2.424c4.87,0 5.77,3.109 5.77,7.151c0,0 0,8.233 0,8.233z"></path>
                    </svg>
                </a>

                <a href="https://www.youtube.com/channel/UCO2xJ6Cw1-5o1iolIJtO4yQ" target="_blank" class="text-gray-400 hover:text-gray-500 mr-4">
                    <span class="sr-only">YouTube</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
                    </svg>
                </a>

                <a href="https://www.tiktok.com/@iffaawards" target="_blank" class="text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Tiktok</span>
                    <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M18,3h-12c-1.654,0 -3,1.346 -3,3v12c0,1.654 1.346,3 3,3h12c1.654,0 3,-1.346 3,-3v-12c0,-1.654 -1.346,-3 -3,-3zM16,12c-0.605,0 -1.332,-0.266 -2,-0.714v2.714c0,1.654 -1.346,3 -3,3c-1.654,0 -3,-1.346 -3,-3c0,-1.062 0.57,-2.055 1.488,-2.591c0.478,-0.278 1.09,-0.117 1.368,0.359c0.278,0.477 0.117,1.089 -0.359,1.367c-0.311,0.182 -0.497,0.506 -0.497,0.865c0,0.552 0.449,1 1,1c0.551,0 1,-0.448 1,-1v-6c0,-0.553 0.448,-1 1,-1c0.552,0 1,0.447 1,1c0,1.005 1.471,2 2,2c0.552,0 1,0.447 1,1c0,0.553 -0.448,1 -1,1z" clip-rule="evenodd" />
                    </svg>
                </a>

            </div>

            <p className='line'>© IFFA-International Film Festival of Australia</p>

        </footer>
    );
}

export default Footer;