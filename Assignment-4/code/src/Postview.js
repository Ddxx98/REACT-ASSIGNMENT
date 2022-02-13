import React, { useEffect, useState } from 'react';
import './Postview.css';
import icon from './instagram/icon.png'
import camera from './instagram/camera.png'
import moreicon from './instagram/more-icon.png'
import like from './instagram/like.png'
import share from './instagram/share.png'
import axios from 'axios'

const Postview=()=> {
  const url = 'http://localhost:3004/data'
  const [Data,setProduct] = useState()

  useEffect(() => {
    axios.get(url)
    .then(response => {
      setProduct(response.data)
    })
  },{url})

  if(Data){
    return (
      <div className="site-container">
        <header className='for-header'>
              <img className='for-icon' src={icon} alt='icon'></img>
              <h1 className='for-name'>Instagram Clone</h1>
              <img className='for-camera' src={camera} alt='camera'></img>
          </header>
              {
                  Data.map(post =>{
                      return(
                          <body className='main-container'>
                              <div className='inside-container'>
                                  <div className='container-name'>
                                      <div className='Name'>
                                          <h1 className='profile-name'>{post.name}</h1>
                                          <label className='profile-location'><strong>{post.location}</strong></label>
                                      </div>
                                      <div>
                                          <img className='more-icon' src={moreicon} alt='icon'></img>
                                      </div>
                                  </div>
                                  <div className='image-display'>
                                      <img className='profile-image' src={post.PostImage} alt='profile'></img>
                                  </div>
                                  <div>
                                      <img className='imglike' src={like} alt='like'></img>
                                      <img className='share' src={share} alt='share'></img>
                                      <label className='date'>{post.date}</label>
                                      <p className='like'>{post.likes}</p>
                                      <p className='description'>{post.description}</p>
                                  </div>
                              </div>
                          </body>
                      )
                  })
              }
      </div>
    );
  }
  return(
    <div>
    </div>
  )
}

export default Postview;
