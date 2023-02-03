import React from 'react'

export default function AvaCinema(props) {
    const imgStyle = {
        "verticalAlign": "middle",
        "height": "40px",
        "borderRadius": "100%",
    }
    return (
        <img src={props.src} alt={props.alt} className='ava-cinema' style={imgStyle} />
    )
}
