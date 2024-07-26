import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../CSS/styles.css'
import Footer from './Footer';

//sponsors
import UniversalEntertainment from "../images/sponsors/UniversalEntertainment.png";
import IstitutionItalianoDiCultura from "../images/sponsors/IstitutoItalianoDiCultura.png"
import CostaRica from "../images/sponsors/CostaRica.png"

import Crown from "../images/sponsors/Crown.png"
import AirwaysTravel from "../images/sponsors/AirwaysTravel.png"
import AngelBrokers from "../images/sponsors/AngelBrokers.png"

import BhullarFinance from "../images/sponsors/BhullarFinanceCo.png"
import IconMedia from "../images/sponsors/IconMedia.jpeg"
import IndianTraders from "../images/sponsors/IndianTraders.png"

import PixonFilm from "../images/sponsors/PixonFilm.png"
import ReliableAccountants from "../images/sponsors/ReliableAccountants.png"
import RA from "../images/sponsors/RA.jpeg"
import RSFinance from "../images/sponsors/RSFinance.png"


import TheTeaAccent from "../images/sponsors/TheTeaAccent.png"
import ZProductions from "../images/sponsors/ZProductions.png"
import RMIT from "../images/sponsors/RMIT-symbol.jpg"

import TorrensUni from "../images/sponsors/TorrensUni.png"

import slideonepic from "../images/slideone.png"
import slidetwopic from "../images/file.jpg"
import slidethreepic from "../images/slidethree.png"
import slidefourpic from "../images/slidetwo.png"
import CustomSlider from './customSlider.js';
import SwiperComponent from './SubmissionSlider.js';

const images = [slidefourpic, slideonepic, slidetwopic, slidethreepic];


const sponsors = [
  { src: UniversalEntertainment, text: 'Universal Entertainment' },
  { src: IstitutionItalianoDiCultura, text: 'Institution Italiano Di Cultura' },
  { src: CostaRica, text: 'Costa Rica' },
  { src: Crown, text: 'Crown Casino' },
  { src: RSFinance, text: 'RSFinance' },
  { src: TorrensUni, text: 'Torrens University' },
  { src: RMIT, text: 'RMIT University' },
  { src: AngelBrokers, text: 'Angel Brokers' },
  { src: BhullarFinance, text: 'Crown Casino' },
  { src: IconMedia, text: 'Crown Casino' },
  //{ src: IndianTraders, text: 'Crown Casino' },
  { src: PixonFilm, text: 'Crown Casino' },
  { src: RA, text: 'Crown Casino' },
  { src: TheTeaAccent, text: 'Crown Casino' },
  { src: ZProductions, text: 'Crown Casino' },
  { src: AirwaysTravel, text: 'Airways Travel' },
]

function Home() {

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Header />
      <main className="flex-grow flex flex-col items-center ">
        <div className="flex flex-col items-center justify-center bg-teal-100 w-full " style={{ minHeight: '70vh' }}>
          <CustomSlider>
            {images.map((image, index) => (
              <img key={index} src={image} alt={`slide-${index}`} />
            ))}
          </CustomSlider>
        </div>

        <div className="flex flex-col items-center w-full pb-12 pt-5">
          <Link
            className="mt-8 text-dark-gold text-3xl sm:text-4xl md:text-5xl font-sans transition duration-300 hover:text-white"
            to="submission"
          >
            Submissions for 2024
          </Link>
          <div className="justify-center">
          <SwiperComponent/>
          </div>
        </div>

        <div>
          <Link className="mt-8 text-dark-gold text-3xl md:text-3xl font-sans pb-3 flex flex-col items-center" to="sponsor-us">Our Sponsors</Link>
          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2">
              {/* First Row */}
              <div className="flex justify-center flex-wrap gap-2">
                {sponsors.slice(0, Math.ceil(sponsors.length / 2)).map((image, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="flex justify-center w-24 h-24">
                      <img src={image.src} alt={image.text} className="object-contain w-full h-full" />
                    </div>
                    <p className="mt-2 text-center text-xs">{image.text}</p>
                  </div>
                ))}
              </div>
              {/* Second Row */}
              <div className="flex justify-center flex-wrap gap-2">
                {sponsors.slice(Math.ceil(sponsors.length / 2)).map((image, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="flex justify-center w-24 h-24">
                      <img src={image.src} alt={image.text} className="object-contain w-full h-full" />
                    </div>
                    <p className="mt-2 text-center text-xs">{image.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
