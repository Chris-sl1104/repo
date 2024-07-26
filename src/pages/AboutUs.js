import React from 'react';
import Header from './Header';
import '../CSS/styles.css'
import Footer from './Footer';


function AboutUs() {
    return (
        <div className="min-h-screen flex flex-col bg-black">
            <Header />
            <main className="flex-grow flex flex-col items-center">
                <div className="flex flex-col items-center bg-black w-full pb-12 pt-5">
                    <h1 className='about-heading'>About Us</h1>

                    <p className='body-text'>
                        The International Film Festival of Australia (IFFA) is dedicated to promoting the captivating world of cinema. With a burning passion for both local and international talent, our mission is twofold: to propel Australian films and creations onto the global stage and to bring the captivating world of cinema to the shores of Australia.
                    </p>

                    <p className='body-text'>
                        At IFFA we aim to recognize and honor exceptional artists, directors, producers, and the commendable works of feature films, short films, and documentaries from around the globe. Our primary objective is to shine a resplendent spotlight on the unheralded artists who have been the driving force behind the magnificence of their craft. At IFFA, we believe that art transcends boundaries and has the extraordinary ability to bridge gaps between cultures, nations, and communities.
                    </p>

                    <p className='body-text'>
                        Join us on this extraordinary adventure of a cinematic odyssey that traverses continents, unites cultures, and celebrates the power of storytelling. If you aspire to be a part of this event, we invite you to submit your work and get nominated for IFFA. Whether you're a budding filmmaker, an experienced documentarian, or a visionary digital creator, IFFA welcomes your talent and creativity. Join us in celebrating the magic of cinema by submitting your masterpiece!
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default AboutUs;