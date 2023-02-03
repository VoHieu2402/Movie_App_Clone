import React from 'react';
import HomeCarousel from '../../components/HomeComponents/Carousel/HomeCarousel';
import CinemaList from '../../components/HomeComponents/CinemaList/CinemaList';
import MoviesList from '../../components/HomeComponents/MoviesList/MoviesList';


export default function HomeIndex() {
    const contentStyleCarousel = {
        height: '800px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
        width: "100%"
    }
    return (
        <>
            <HomeCarousel contentStyle={contentStyleCarousel} />
            <MoviesList />
            <CinemaList />
        </>

    )
}
