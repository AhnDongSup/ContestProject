import {Link} from "react-router-dom"
import { useState, useEffect } from "react";
import styled, {  keyframes } from "styled-components";
import search from './search.png';
import backgroundcolor from './Intro.module.css';
import typingintro from './typingintro.module.css';
import './global.css';


  function Intro() {
    const [vis, setVis] = useState('0');
    const [swi, setSwi] = useState(true);
    const [switwo, setSwitwo] = useState(true);
    const onClick = () => {
      return ""
    };
    useEffect(() => {
      const timerId = setTimeout(() => {
        setVis('1');
      }, 1100);
      return () => clearTimeout(timerId);
    }, []);
    useEffect(() => {
      const timerId = setTimeout(() => {
        setVis('0');
      }, 4000);
      return () => clearTimeout(timerId);
    }, []);
    useEffect(() => {
      const timerId = setTimeout(() => {
        setSwi(false);
      }, 4800);
      return () => clearTimeout(timerId);
    }, []);
    useEffect(() => {
      const timerId = setTimeout(() => {
        setSwitwo(false);
      }, 8000);
      return () => clearTimeout(timerId);
    }, []);
    function Component(){
      if (swi) {
        return (
          <div className={typingintro.wrapper}>
          <Box width='1300px' height='400px'>
            <H1 className={typingintro.typingdemo} opacity={vis}> &nbsp;&nbsp;&nbsp;One Search</H1>
          </Box>
          </div>
        )
      } else {
        return (
          <Boxs width='1300px' height='400px'>
          </Boxs>
        )
      }
    }
  return (
    <div className={backgroundcolor.bg}>
    {switwo ? (
      Component()
    ):(
      <Container>
      <Link to={`/Search`}>
      <FirstBox onClick={onClick}></FirstBox>
      </Link>
  
      </Container>
    )}
    </div>
  )
}
    
  const animes = keyframes`
  0% {
      width: ${props => props.Boxs.width};
      height: ${props => props.Boxs.height};
      background: #f0f0f0;
      box-shadow:  10px 10px 10px #242424,
                  10px 10px 10px #424242,
                  0 0 0 #242424 inset,
                  0 0 0 #424242 inset;
  }
  100% {
      width: 70px;
      height: 70px;
      background: #000000;
      background-image: url(${search});
      background-size: cover;
      box-shadow:  10px 10px 10px #242424,
                  10px 10px 10px #424242,
                  0 0 0 #242424 inset,
                  0 0 0 #424242 inset;
  }
  `;
  const Boxs = styled.div`
  {
  display : flex;
  justify-content : center;
  align-items : center;
  border-radius: 20px;
  margin : 90px 50px 0px 50px;
  width: ${props => props.width};
  height: ${props => props.height};

  box-shadow:  0 0 0 #242424,
                  0 0 0 #424242,
                  10px 10px 10px #242424 inset,
                  -10px -10px 10px #424242 inset;     
  animation: ${animes} 3s cubic-bezier(0.3, 1, 0.3, 1);
  // animation-play-state: paused
  animation-fill-mode: forwards; 
  }
  `;
  const anime = keyframes`
  0% {
      width: 0px;
      height: 0px;
      background: #f0f0f0;
      box-shadow:  10px 10px 10px #242424,
                  10px 10px 10px #424242,
                  0 0 0 #242424 inset,
                  0 0 0 #424242 inset;
  }
  50% {
    width: 100px;
    height: ${props => props.Box.height};
    background: #f0f0f0;
    box-shadow:  10px 10px 10px #242424,
                10px 10px 10px #424242,
                0 0 0 #242424 inset,
                0 0 0 #424242 inset;
  }
  100% {
      width: ${props => props.Box.width};
      height: ${props => props.Box.height};
      background: #f0f0f0;
    
      box-shadow:  10px 10px 10px #242424,
                  10px 10px 10px #424242,
                  0 0 0 #242424 inset,
                  0 0 0 #424242 inset;
  }
  `;
  const Box = styled.div`
  {
  display : flex;
  justify-content : center;
  align-items : center;
  border-radius: 20px;
  margin : 90px 50px 0px 50px;
  width: ${props => props.width};
  height: ${props => props.height};

  box-shadow:  0 0 0 #242424,
                  0 0 0 #424242,
                  10px 10px 10px #242424 inset,
                  -10px -10px 10px #424242 inset;     
  animation: ${anime} 3s cubic-bezier(0.3, 1, 0.3, 1);
  // animation-play-state: paused
  animation-fill-mode: forwards; 
  }
  `;
  const H1 = styled.h1`
  {
    opacity: ${props => props.opacity};
    transition: opacity 1s ease-in-out;
    position : relative;
    margin-right : 160px;
    color: #ff357f;
    font-size: 10.0em;
  }
  `;
  const gradient = keyframes`
  0% {
    width: 70px;
    height: 70px;
    background: #f0f0f0;
    background-image: url(${search});
    background-size: cover;
    box-shadow: 10px 10px 10px #cccccc,
                10px 10px 10px #ffffff,a
                10px 10px 10px #cccccc inset,
                -10px -10px 10px #ffffff inset; 
  }
  25% {
  width: 70px;
  height: 70px;
  background: #576fe6;
  background-image: url(${search});
  background-size: cover;
  box-shadow:  10px 10px 10px #242424,
                10px 10px 10px #424242,
                0 0 0 #242424 inset,
                0 0 0 #424242 inset;
  }
  
  50% {
  width: 70px;
  height: 70px;
  background: #B983FF;
  background-image: url(${search});
  background-size: cover;
  box-shadow:  10px 10px 10px #242424,
                10px 10px 10px #424242,
                0 0 0 #242424 inset,
                0 0 0 #424242 inset;
  }
  75% {
    width: 70px;
    height: 70px;
    background:  #88DBAD;
    background-image: url(${search});
    background-size: cover;
    box-shadow:  10px 10px 10px #242424,
                  10px 10px 10px #424242,
                  0 0 0 #242424 inset,
                  0 0 0 #424242 inset;
  }
  100% {
    width: 70px;
    height: 70px;
    background: 	#ff357f ;
    background-image: url(${search});
    background-size: cover;
    box-shadow:  10px 10px 10px #242424,
                  10px 10px 10px #424242,
                  0 0 0 #242424 inset,
                  0 0 0 #424242 inset;
  `;
  const Container = styled.div`
  {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw
  }
  `;
  const FirstBox = styled.div`
  {
    border-radius: 20px;
    margin : 90px 50px 0px 50px;
    width: 70px;
    height: 70px;
    background: #000000;
    background-image: url(${search});
    background-size: cover;
    box-shadow:  10px 10px 10px #242424,
    10px 10px 10px #424242,
    0 0 0 #242424 inset,
    0 0 0 #424242 inset;
    transition: all 0.3s ease 0s;
    :hover{
    transform: translateY(-7px);
    }
    animation: ${gradient} 7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s infinite alternate;
  }
  `;
  

  export default Intro;
  