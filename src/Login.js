import React from 'react'
import styled from 'styled-components';
const Wrapper = styled.div`
justify-content: "center";
  display: flex;
  flex-direction:column;
  align-items:center;
  margin-top:9rem;

  .input{
    justify-content:center;
    display: flex;
    flex-direction: column;
    width:240px;
  }

  label{
    font-size:1.3rem
  }

  input{
    padding:0.8rem 1.4rem;
    border: none;
    background-color:#eee;
    border-radius:8px;
    margin:0.2rem 0;
  }

  button{
    padding:5px 2rem;
    margin:1rem 0;
    border:none;
    background-color:blue;
    border-radius:5px;
    color:#fff
  }
`
const Login = ()=>{
  return (
    <Wrapper>
      <form>
        <div className="input">
          <label>First Name</label>
          <input type="text" placeholder="Enter Name" />
           

          <label>Email</label>
          <input type="text" placeholder="Enter Email" />
          

          <label>password</label>
          <input type="text" placeholder="password" />
          

          <label>confirm password</label>
          <input type="text" placeholder="confirm password" />
        </div>
             <button>Submit</button>
      </form>
    </Wrapper>
  );
}

export default Login