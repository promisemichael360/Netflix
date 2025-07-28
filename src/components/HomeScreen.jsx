import React from 'react'
import Navbar from './home_screen_component/Navbar'
import Banner from './home_screen_component/Banner'
import Row from './home_screen_component/Row'
import Request from '../../request'

const HomeScreen = () => {
    return (
        <div>
            {/*Navbar*/}
            <Navbar/>
            {/*Banner*/}
            <Banner/>
            {/*Rows*/}
            <Row title="Netflix Originals" isLargeRow fetchUrl={Request.fetchNetflixOriginals}/>
            <Row title="Trending Now" fetchUrl={Request.fetchTrending}/>
            <Row title="Top Rated" fetchUrl={Request.fetchTopRated}/>
            <Row title="Action Movies" fetchUrl={Request.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchUrl={Request.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchUrl={Request.fetchHorrorMovies}/>
            <Row title="Dodumentaries" fetchUrl={Request.fetchDocumentaries}/>
        </div>
    )
}

export default HomeScreen
