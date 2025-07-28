import React from 'react'
import { useEffect, useState } from 'react'
import axios from '../../axios'
import Request from '../../../request'
import Spinner from '../Spinner'

function Banner() {
    const [movies, setMovies] =useState([])
    const [currentMovieSlider, setCurrentMovieSlider] = useState(0);
    const [isLoading,setIsLoading]=useState(true)
    useEffect(() => {
        async function fetchMovies() {
            try {
                const request = await axios.get(Request.fetchNetflixOriginals)
                setMovies(request.data.results || []) // Store ALL movies
                // Set initial random index
                setCurrentMovieSlider(Math.floor(Math.random() * request.data.results.length))
            } catch (error) {
                console.log(`Error Fetching Movie: ${error}`)
            } finally {
                setIsLoading(false)
            }
        }
        fetchMovies()
    }, [])


    useEffect(() => {
        if (movies.length > 0) {
            const interval = setInterval(() => {
                setCurrentMovieSlider(prev => (prev + 1) % movies.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [movies]);
    
      const currentMovie = movies[currentMovieSlider];
    // console.log(currentMovie)

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '.....' : str;
    }
    return (
        <>
        {isLoading ? (
            <Spinner/>
        ):(
        <header className='banner' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${currentMovie?.backdrop_path})`}}>
            <div className="banner_content">
                <h1 className="banner_title">
                    {currentMovie?.title || currentMovie?.name || currentMovie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className='banner_button'>play</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className="banner_description">
                    {truncate(currentMovie?.overview, 110)}
                </h1>    
            </div>
            <div className="banner_fadeBottom"/>
        </header>
        )}
        </>
    )
}

export default Banner
