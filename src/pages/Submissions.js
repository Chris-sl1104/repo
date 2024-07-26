import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Header from "./Header";
import Footer from './Footer';
import CustomSlider from './customSlider.js';
import slideonepic from "../images/archies.jpg";
import slidetwopic from "../images/file.jpg";
import slidethreepic from "../images/monkey_man.jpg";
import films from './films'; // Import the films array

const images = [slideonepic, slidetwopic, slidethreepic];

function Submissions() {
    const filmsPerPage = 20;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(films.length / filmsPerPage);
    const startIdx = (currentPage - 1) * filmsPerPage;
    const endIdx = startIdx + filmsPerPage;
    const currentFilms = films.slice(startIdx, endIdx);

    const [hoveredFilm, setHoveredFilm] = useState(null);
    const navigate = useNavigate();

    const handleFilmHover = (film) => {
        setHoveredFilm(film);
    }

    const handleMouseLeave = () => {
        setHoveredFilm(null);
    }

    const handleFilmClick = (film) => {
        navigate('/synopsis', { state: { film } });
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="flex-grow flex flex-col bg-black w-full p-6 px-28">
                <div className="flex flex-col items-center justify-center bg-teal-100 w-full flex-grow" style={{ height: "880px" }}>
                    <CustomSlider>
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={`slide-${index}`} />
                        ))}
                    </CustomSlider>
                </div>
                <div className="flex flex-col bg-black w-full pb-12 pt-5 items-center">
                    <h1 className="mt-8 text-dark-gold text-3xl sm:text-4xl md:text-5xl font-sans">SUBMISSIONS 2024</h1>
                    <div className="w-full p-8">
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-5 gap-2">
                            {currentFilms.map((film, index) => (
                                <div
                                    key={index}
                                    className="relative p-4 flex items-center justify-center"
                                    style={{ width: "351px", height: "452px", overflow: 'hidden' }}
                                    onMouseEnter={() => handleFilmHover(film)}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => handleFilmClick(film)}
                                >
                                    {hoveredFilm === film ? (
                                        <div className="relative inset-1 bg-white text-black font-sans flex flex-col items-center justify-center h-full w-full ml-5 mr-5">
                                            <div className="w-full h-full flex flex-col items-center justify-center pr-6 pl-6">
                                                <p className="text-center">Film Name: {film.name}</p>
                                                <p className="text-center">Director's name: {film.director.name}</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="w-full h-full">
                                            <img src={film.poster} alt={`${film.name} Poster`} className="w-full h-full mb-2 font-bold transition-transform duration-300" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center mt-4 space-x-4">
                            <button
                                onClick={() => setCurrentPage(currentPage - 1)}
                                className="px-4 py-2 text-gray-400 hover:text-gray-100 rounded disabled:opacity-50"
                                disabled={currentPage === 1}
                            >
                                &lt;
                            </button>
                            <div>
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <button
                                        key={index + 1}
                                        onClick={() => setCurrentPage(index + 1)}
                                        className={`px-4 py-2 text-gray-400 hover:text-gray-100 rounded ${currentPage === index + 1 ? 'text-gray-100' : ''}`}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={() => setCurrentPage(currentPage + 1)}
                                className="px-4 py-2 text-gray-400 hover:text-gray-100 rounded disabled:opacity-50"
                                disabled={currentPage === totalPages}
                            >
                                &gt;
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Submissions;
