import React from 'react'
import ReactPlayer from 'react-player';

const Photo = (props) => {
    const { dailyPhoto } = props
    if (!props.dailyPhoto) return <h3>Loading...</h3>;

return (
<div className='dailyPhoto'>
    <div>
    <h2> {dailyPhoto.title} </h2>
    <h3> {dailyPhoto.date} </h3>
    {dailyPhoto.media_type === 'image'
    ? <img src={dailyPhoto.url} alt='NASA daily'> </img>
    : <iframe title='video of the day' width='600' height='400' src={dailyPhoto.url + '?controls=0'}></iframe>
    // : <ReactPlayer url={dailyPhoto.url} />
    }
    </div>
    <div className ='description'>
       <p> {dailyPhoto.explanation}</p>
    </div>
</div>

)
}

export default Photo;