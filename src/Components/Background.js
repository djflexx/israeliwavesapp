import React, {useEffect, useState} from 'react'
import './Background.css'

export default function Background(props) {
    const [image, setImage] = useState('')
    useEffect(() => {
        if(props.temp < 15){
        setImage("https://www.dropbox.com/s/baooz94qe7fyym9/Storm.jpg?raw=1")
        }else {
            setImage("https://www.dropbox.com/s/z8b0771iqssa3r5/Sunny.jpg?raw=1")
        }
    }, [])
    return (
           <div className="background-container">
           <img src={image} alt="background"/>
           </div> 
    )
}
