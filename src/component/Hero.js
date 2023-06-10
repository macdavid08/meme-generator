import { useState, useEffect } from 'react'
import './Hero.css'
import MemeData from './MemeData'

function Hero () {


    const [memeState, setMemeState] = useState({
        topText: '',
        bottomText: '',
        randomImage:"https://i.imgflip.com/261o3j.jpg"
    })
    const [allMemes, setallMemes] =useState([])

    useEffect(()=> {
        fetch("https://api.imgflip.com/get_memes")
        .then(res=> res.json())
        .then(data=> setallMemes(data.data.memes))
    })

   
    function getMeme () {
        const randomMeme = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomMeme].url
        setMemeState(prevMemeState => ({
            ...prevMemeState,
            randomImage: url
        }))
    }
    function handleChange(event){
        const {name, value} = event.target
        setMemeState(prevMemeState=> ({
            ...prevMemeState,
            [name]: value
        }) )
    }


    return (
        <div className='hero--section'>
            <div className='form'> 
                <input type='text' placeholder='Top text' className='form--input' name="topText"  value = {memeState.topText} onChange={handleChange}/>
                <input type='text'  placeholder='Bottom text' className='form--input'  name="bottomText"  value = {memeState.bottomText} onChange={handleChange}/>
                <button onClick = {getMeme} className='form--button'>Get a new meme image  🖼</button>
            </div>
            <div className='memeCont'>
                <img src={memeState.randomImage}  className='meme'/>
                <h2 className="meme--text top">{memeState.topText}</h2>
                <h2 className="meme--text bottom">{memeState.bottomText}</h2>
            </div>
        </div>
    )
}

export default Hero