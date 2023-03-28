import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  .first-box {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 10rem;

    img {
      width: 300px;
      height: 400px;
      border-radius: 10px;
      margin: 0 2rem;
    }
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
    }
  }
  .second-box {
    display: flex;

    padding: 2rem;
    .card {
      background-color: #eee;
      width: 200px;
      padding: 2rem;
      border-radius: 10px;
      margin: 0 1rem;
    }
  }
`

const About = () => {
  return (
    <Wrapper>
      <div className="first-box">
        <div className="image">
            <img src="https://www.adobe.com/acrobat/hub/how-to/media_1772bc7fd11206b134b3010a488b342c229502db1.jpeg?width=1200&format=pjpg&optimize=medium"></img>
        </div>
        <div className="info">
            <p>
                My name is Tasmin Ansari, I'm currently located in Bangalore.I did my graduation in BSc Chemistry from Jorhat central college, Jorhat in 2022.
                Currently I'm working as a frotened developer trainee at functinup.
            </p>
        </div>
      </div>

      <div className="second-box">
        <div className="card">
          <h5>Skills</h5>
          <p>Html, css, javascript & react-js</p>
        </div>
        <div className="card">
          <h5>Hobbies</h5>
          <p>Travelling, listening to music, cooking,</p>
        </div>

      <div className="card">
        <h5>Interests</h5>
        <p>Music, science, Dancing, Travel</p>
      </div>
      </div>
    </Wrapper>
  );
};

export default About