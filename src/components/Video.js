import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'
import { signInWithGoogle } from "../Firebase";
import spaceVideo from '../assets/space.mp4'

const Video = () => {
    return (
        <div className='main-video'>
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Welcome to SkyNET</h1>
                <p>The best place to launch your ideas.</p>
                <div>
                <button type="button" class="btn btn-primary btn-lg btn-block" onClick={signInWithGoogle}>Enter to skynet project</button>
                </div>
            </div>
        </div>
    )
}

export default Video
