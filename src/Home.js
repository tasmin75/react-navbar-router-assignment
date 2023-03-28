import React from 'react';
import styled from 'styled-components';

const  Wrapper=styled.div`
    background-image: url("https://cdn.pixabay.com/photo/2017/11/28/13/07/sunset-2983614_960_720.jpg");
    width:100vw;
    height:90vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    .home{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-size: 3rem;

      h3{
        margin: 8rem
      }

    }

`
const Home=() => {
  return (
    <Wrapper>
    <div className='home' >
        <h3>This is my home page</h3>
    </div>
    </Wrapper>
  )
}

export default Home