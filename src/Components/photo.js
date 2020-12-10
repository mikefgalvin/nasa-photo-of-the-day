import React from 'react'
import styled from 'styled-components'

const Photo = (props) => {
    const { dailyPhoto } = props
    if (!props.dailyPhoto) return <StyledLoading>Loading...</StyledLoading>;

    return (
    <StyledPhoto className='dailyPhoto'>
        <div>
            {
            dailyPhoto.media_type === 'image'
            ? <StyledImage src={dailyPhoto.hdurl} alt='NASA daily'/>
            : <iframe title='video of the day' width='600' height='400' src={dailyPhoto.hdurl + '?controls=0'}></iframe>
            }
            </div>
        <div>
        <StyledH2> {dailyPhoto.title} </StyledH2>
        <StyledH3> {dailyPhoto.date} </StyledH3>
        <StyledP> {dailyPhoto.explanation}</StyledP>
        </div>
    </StyledPhoto>

    )
}

const StyledLoading = styled.h3`
    color: white;
`

const StyledPhoto = styled.div`
    background-color: black;
    opacity: .80;
    width: 95%;
    margin: 0 auto;
    padding-top: 2%;
    display: flex;
    align-items: center;

    @media (max-width: 700px) {
        flex-direction: column;
      }
`

const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
`
const StyledH2 = styled.h2`
    color: white;
    background-color: black;
`
const StyledH3 = styled.h3`
    color:white;
    background-color: black;
`

const StyledImage = styled.img`
    height: 500px;
    opacity: 1;
`
const StyledP = styled.p`
    color: white;
    width: 90%; 
    margin: 0 auto;
    opacity: 1;
    padding-top: 2%;
    padding-bottom: 4%;
    background-color: black;
    font-size: .9rem;

    @media (max-width: 700px) {
        font-size: 1rem;
      }
`



export default Photo;
