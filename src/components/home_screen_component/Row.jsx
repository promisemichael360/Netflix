import React, { useEffect, useState } from 'react'
import Request from '../../../request'
import axios from "../../../axios"
import Spinner from '../Spinner'

function Row({title,fetchUrl,isLargeRow=false}) {
    const [rowMovies,setRowMovies]=useState([])
    const [errorMessage,setErrorMessage]=useState("")
    const [isLoading,setIsLoading]=useState(true)
    const imageUrl="https://image.tmdb.org/t/p/original/"

    useEffect(()=>{
        const fetchRowMovies=async()=>{
            try {
                const request=await axios.get(fetchUrl)
                
            setRowMovies(request.data.results)
            return request
                
            } catch (error) {
                console.log(`Fetching Movie Error: ${error}`)
                setErrorMessage('Error Fetching Movie:Please try again Later')
            }finally{
                setIsLoading(false)
            }
            
        }
        fetchRowMovies()
    },[fetchUrl])
    return (
        <div className='row'>
            <h2>{title}</h2>
            {isLoading ? (
                <Spinner/>
            ):errorMessage ?(
                <p className='text-red-500 font-bold'>{errorMessage}</p>
            ):(
                <div className="row_poster">
                {rowMovies.length>0 && (
                    <>
                        {rowMovies.map((movie)=>(
                            ((isLargeRow && movie.poster_path) ||
                            (!isLargeRow && movie.backdrop_path)) &&(                         
                            <img 
                            className={`row_posterMovie ${isLargeRow && 'row_posterMovieLarge'}`}
                            key={movie.id} src={`${imageUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}/>
                            )
                        ))}
                    </>
                )}
            </div>
            )}  
        </div>
    )
}

export default Row
