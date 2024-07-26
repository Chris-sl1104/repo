// CastDetail.js
import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from './Footer';

function CastDetail() {
    const location = useLocation();
    const { castMember } = location.state || { castMember: {} };

    return (
        <div>
            <div className="flex flex-col items-center bg-white w-full px-8 py-4 text-black">
                <div className="flex items-center w-full mb-4">
                    <img src={castMember.image} alt={`${castMember.name}`} className='h-48 w-48 object-cover' />
                    <div className='flex flex-col items-start w-full ml-4'>
                        <h1 className="text-black text-3xl sm:text-4xl font-bold">{castMember.name}</h1>
                        <div className="text-gray-500 text-lg sm:text-xl">
                            <p>{castMember.roles.join(" | ")}</p>
                        </div>
                        <blockquote className="text-black text-lg sm:text-xl mt-4">{castMember.quote}</blockquote>
                        <div className="flex space-x-4 mt-2">
                            <a href={castMember.socialLinks.facebook} className="text-black hover:text-gray-500"><i className="fab fa-facebook"></i></a>
                            <a href={castMember.socialLinks.twitter} className="text-black hover:text-gray-500"><i className="fab fa-twitter"></i></a>
                        </div>
                    </div>
                </div>
                <h2 className="text-black text-2xl sm:text-3xl font-bold mt-8">Bio of this artist</h2>
                <div className="bg-gray-100 p-4 mt-2 w-full">
                    <p className="text-black">{castMember.bio}</p>
                </div>
                <h2 className="text-black text-2xl sm:text-3xl font-bold mt-8">Other cast & Crew</h2>
                <div className="flex overflow-x-auto space-x-4 py-4">
                    {castMember.otherCastAndCrew.map((person, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img src={person.image} alt={person.name} className="w-24 h-24 object-cover rounded-full" />
                            <p className="text-black mt-2">{person.name}</p>
                            <p className="text-gray-500">{person.role}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CastDetail;
