import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from './Footer';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const cast = [
    {
        id: 1,
        name: 'Quentin Tarantino',
        image: 'url_to_image_1',
        roles: ['Director', 'Actor', 'Screenwriter'],
        quote: "I don’t believe in elitism...",
        bio: "Bio of Quentin Tarantino...",
        socialLinks: {
            facebook: 'http://facebook.com/quentin',
            twitter: 'http://twitter.com/quentin'
        },
        otherCastAndCrew: [
            {
                name: 'John Travolta',
                image: 'url_to_image_travolta',
                role: 'Cast'
            },
            // add more cast and crew objects here
        ]
    },
    // add more people objects here
];

function Synopsis() {
    const location = useLocation();
    const { film } = location.state || { film: {} };
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/submission');
    };

    const handleCastClick = (castMember) => {
        navigate('/cast', { state: { castMember } });
    };

    return (
        <div>
            <div className="flex flex-col w-full py-8 relative" style={{ height: "700px" }}>
                {film.background && (
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-70 z-0"
                        style={{
                            backgroundImage: `url(${film.background})`,
                        }}
                    ></div>
                )}
                <div className="flex flex-col items-center justify-center h-full z-10 relative">
                    <h1 className="text-black text-xl sm:text-4xl md:text-6xl font-bold">{film.name}</h1>
                    <button onClick={handleBackClick} className="text-black text-xl font-sans absolute top-16 left-18">Go back</button>
                </div>
            </div>
            <main className="flex flex-col bg-black w-full pb-12 pt-5">
                <h1 className="text-white text-3xl sm:text-4xl font-lora mb-4 ml-12">Synopsis</h1>
                <div className="flex items-center bg-white w-full">
                    <div className="p-4">
                        <p className="text-black font-montserrat font-bold">{film.name || 'Film Title'}</p>
                        <p className="text-black font-montserrat font-bold">
                            {film.synopsis ? (
                                film.synopsis.length > 600 ? (
                                    <>
                                        {film.synopsis.slice(0, 600)}
                                        <span>... </span>
                                        <a href="#!" className="text-blue-500" onClick={() => alert(film.synopsis)}>Read more</a>
                                    </>
                                ) : (
                                    film.synopsis
                                )
                            ) : 'Film synopsis not available.'}
                        </p>
                        {film.director && (
                            <>
                                <p className="text-black font-montserrat">Directed by: {film.director.name}</p>
                                <img src={film.director.image} className="w-48 h-48 object-cover rounded-full" alt={film.director.name} />
                            </>
                        )}
                        <p className="text-black font-montserrat">Year of production: {film.year || 'Year not available'}</p>
                        <p className="text-black font-montserrat">Country: {film.country || 'Country not available'}</p>
                        <p className="text-black font-montserrat">Duration: {film.duration || 'Duration not available'}</p>
                    </div>
                </div>
                <h1 className="text-white text-3xl sm:text-4xl font-lora ml-12 mt-4">Cast & Crew</h1>
                <div className="bg-white py-8">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={3}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                    >
                        {cast.map((castMember) => (
                            <SwiperSlide key={castMember.id} className="flex flex-col items-center">
                                <div onClick={() => handleCastClick(castMember)} className="cursor-pointer">
                                    <img src={castMember.image} alt={castMember.name} className="w-48 h-48 object-cover rounded-full" />
                                    <p className="text-black mt-2 font-montserrat font-bold">{castMember.name}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Synopsis;
