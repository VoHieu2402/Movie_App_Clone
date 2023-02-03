import React from 'react';

import "./movieList.scss"

import { Tabs } from 'antd';
import CardMovies from './CardMovies';


export default function MoviesList() {
    const items = [
        {
            label: "PHIM ĐANG CHIẾU", key: "1", content: <CardMovies />
        },
        { label: "PHIM SẮP CHIẾU", key: "2", content: <></> }
    ]

    return (
        <div className='text-center'>
            <Tabs
                type="card"
                items={items.map((element, index) => {
                    return {
                        label: element.label,
                        key: element.key,
                        children: element.content,
                    }
                })}
            />
        </div>
    )
}
