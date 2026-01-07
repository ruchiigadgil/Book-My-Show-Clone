import React, { useContext, useEffect, useState } from 'react';
import MovieLayoutHoc from '../layouts/Movie.Layout';
import {useParams} from "react-router-dom";
import axios from 'axios';
import { MovieContext } from '../context/Movie.context';
import Slider from 'react-slick';
import {FaCcVisa, FaCcApplePay} from 'react-icons/fa';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';
import MovieHero from '../components/MovieHero/MovieHero.Component';
import Cast from "../components/Cast/Cast.Component";

export const MoviePage = () => {
  const {id} = useParams();

  const {movie,setMovie} = useContext(MovieContext)
  const [cast,setCast] =useState([]);
  const [SimilarMovies, setSimilarMovies]=useState([]);
const [recommendedMovies, setRecommendedMovies] = useState([]);

  


  useEffect(() => {
    const requestCast = async () => {
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    };
    requestCast();
  }, [id]);

  useEffect(() => {
    const requestSimilarMovies = async () => {
      const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
      setSimilarMovies(getSimilarMovies.data.results); // Adjust according to actual response structure
    };
    requestSimilarMovies();
  }, [id]);

  useEffect(() => {
    const requestRecommendedMovies = async () => {
      const getRecommendedMovies = await axios.get(
        `/movie/${id}/recommendations`
      );
      setRecommendedMovies(getRecommendedMovies.data.results); // Adjust according to actual response structure
    };
    requestRecommendedMovies();
  }, [id]);

  useEffect(() => {
    const requestMovie = async () => {
      const getMovieData = await axios.get(
        `/movie/${id}`
      );
      setMovie(getMovieData.data); // Adjust according to actual response structure
    };
    requestMovie();
  }, [id]);


const settingsCast = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <MovieHero />
      {/* Center page content: use container + mx-auto and a sensible max width on large screens */}
      <div className="my-12 container mx-auto px-4 lg:max-w-6xl">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-gray-800 font-bold gap-3">About The Movie</h1>
          <p>{movie.overview}</p>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          <h2 className="text-gray-800 font-bold text-2xl mb-3">
            Applicable Offers
          </h2>
          <div className="flex flex-col gap-3 lg:flex-row">
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed rounded-md">
              <div className="w-8 h-8">
                <FaCcVisa className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">
                  Visa Stream Offer
                </h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all RuPay card* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed rounded-md">
              <div className="w-8 h-8">
                <FaCcApplePay className="w-full h-full" />
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-gray-700 text-xl font-bold">Film Pass</h3>
                <p className="text-gray-600">
                  Get 50% off up to INR 150 on all RuPay card* on BookMyShow
                  Stream.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          {/* Cast and Crew */}
          <h2 className="text-gray-800 font-bold text-2xl mb-4">
            Cast and Crew
          </h2>
          <Slider {...settingsCast}>
            {cast.map((castData)=>(
              <Cast image={castData.profile_path} castName={castData.original_name} role={castData.character}/>
            ))}
          </Slider>
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          {/* Recommended Movies */}
          <PosterSlider
            config={settings}
            title="Recommended Movies"
            posters={recommendedMovies}
            isDark={false}
          />
        </div>

        <div className="my-8">
          <hr />
        </div>

        <div className="my-8">
          {/* BMS XCLUSIVE */}
          <PosterSlider
            config={settings}
            title="BMS XCLUSIVE"
            posters={SimilarMovies}
            isDark={false}
          />
        </div>
      </div>
    </>
  );

}
 export default MovieLayoutHoc(MoviePage);
