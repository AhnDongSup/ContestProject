import {Link} from "react-router-dom"
import { useState, useEffect } from "react";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import styles from './Loading.module.css'
import check from './check.png';
import backgroundcolor from './Intro.module.css';
import './global.css';

function Loading() {
    useEffect(() => {
        const timerId = setTimeout(() => {
            setSw(false)
        }, 2000);
        return () => clearTimeout(timerId);
      }, []);
      useEffect(() => {
        const timerId = setTimeout(() => {
            setSwtwo(false)
        }, 2500);
        return () => clearTimeout(timerId);
      }, []);
      useEffect(() => {
      const timerId = setTimeout(() => {
        setSwthree(false)
    }, 6000);
        return () => clearTimeout(timerId);
      }, []);

function Component() {
    if(sw) {
    	return (
            <Container>
              <div className={backgroundcolor.bg}>
            <Boxs>
            </Boxs>
              </div>
            </Container>
        )
    } else {
    	return (
            <Container>
              <div className={backgroundcolor.bg}>
            <Container2>
            <Box width='450px' height='300px' background="#f0f0f0"/>
            </Container2>
            <Box width='350px'height='500px' background="#f0f0f0"/>
            <Container2>
            <Box width='250px'height='50px' background="#292929"/>
            <Box width='500px'height='65px' background="rgba(255,53,127,1)"></Box>
            <Box width='500px'height='120px' background="#659FCF"/>
            <Box width='500px'height='120px' background="#659FCF"/>
            </Container2>
              </div>
            </Container> 
        )
    }  
}
function ComponentTwo() {
  if (swtwo) {
    return Component()
  } else {
    return (
  <Container>
    <div className={backgroundcolor.bg}>
  <Container2>
  <Box width='450px' height='300px' background="#FFFDE3">
  <LoadingBox width='430px' height='40px' delay='4'/>
  <LoadingBox width='430px' height='40px' delay='5'/>
  <LoadingBox width='430px' height='40px' delay='6'/>
  </Box>
  </Container2>
  <Box width='350px'height='500px' background="#f0f0f0">
  <div className={styles.load}>
  <hr/><hr/><hr/><hr/>
  </div>
  </Box>
  <Container2>
  <Box width='250px'height='50px' background="#292929">
  <LoadingBox width='200px' height='20px' delay='5'/>
  </Box>
  <Box width='500px'height='65px' background="rgba(255,53,127,1)">
  <LoadingBox width='450px' height='30px'  delay='4'/>
  </Box>
  <Box width='500px'height='120px' background="#659FCF">
  <LoadingBox width='480PX' height='30px'  delay='5'/>
  <LoadingBox width='480px' height='30px' delay='6'/>
  </Box>
  <Box width='500px'height='120px' background="#659FCF">
  <LoadingBox width='480PX' height='30px'  delay='5'/>
  <LoadingBox width='480px' height='30px' delay='6'/>
  </Box>
  </Container2>
    </div>
  </Container> 
)}
}
const [sw, setSw] = useState(true);
const [swtwo, setSwtwo] = useState(true);
const [swthree, setSwthree] = useState(true);
const onClick = () => {
    setSw(false);
}

return (
    <>
    {swthree ? (
      ComponentTwo()
    ) : (
      <Container>
      <div className={backgroundcolor.bg}>
    <Container2>
    <Boxx width='450px' height='300px' background="#f0f0f0"/>
    </Container2>
    <Boxx width='350px'height='500px' background="#f0f0f0"/>
    <Container2>
    <Boxx width='250px'height='50px' background="#292929"/>
    <Boxx width='500px'height='65px' background="rgba(255,53,127,1)"></Boxx>
    <Boxx width='500px'height='120px' background="#659FCF"/>
    <Boxx width='500px'height='120px' background="#659FCF"/>
    </Container2>
      </div>
    </Container> 
    )}
    </>

)
}
const anime = keyframes`
0% {
  width: 70px;
  height: 70px;
  background: #f0f0f0;
  box-shadow:  10px 10px 10px #242424,
                10px 10px 10px #424242,
                0 0 0 #242424 inset,
                0 0 0 #424242 inset;
}
100% {
  width: ${props => props.Box.width};
  height: ${props => props.Box.height};
  background: ${props => props.Box.background};
  box-shadow:  10px 10px 10px #242424,
                10px 10px 10px #424242,
                0 0 0 #242424 inset,
                0 0 0 #424242 inset;
}
`;
const animes = keyframes`
0% {
  width: 450px;
  height: 70px;
  background: #f0f0f0;
  background-image: url(${check});
  background-size: cover;
  box-shadow:  10px 10px 10px #242424,
                10px 10px 10px #424242,
                0 0 0 #242424 inset,
                0 0 0 #424242 inset;
}
100% {
  width: ${props => props.Box.width};
  height: ${props => props.Box.height};
  background: ${props => props.Box.background};
  background-image: url(${check});
  background-size: cover;
  box-shadow:  10px 10px 10px #242424,
                10px 10px 10px #424242,
                0 0 0 #242424 inset,
                0 0 0 #424242 inset;
}
`;
const LoadingAnime = keyframes`
0% {
width: 40px;
height: 40px;
background: #f0f0f0;
box-shadow:  10px 10px 10px #242424,
              10px 10px 10px #424242,
              0 0 0 #242424 inset,
              0 0 0 #424242 inset;
}
33% {
width: ${props => props.Box.width};
height: ${props => props.Box.height};
background: #FEDB39;
box-shadow:  10px 10px 10px #242424,
              10px 10px 10px #424242,
              0 0 0 #242424 inset,
              0 0 0 #424242 inset;
}
100% {
width: ${props => props.Box.width};
height: ${props => props.Box.height};
background: #1CD6CE;
box-shadow:  10px 10px 10px #242424,
              10px 10px 10px #424242,
              0 0 0 #242424 inset,
              0 0 0 #424242 inset;
}
`;
const Container = styled.div`
{
  background: #f0f0f0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw
}
`;
const Container2 = styled.div`
{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

}
`;
const Container3 = styled.div`
{

  display: flex;
  justify-content: center;
  align-items: center;

}
`;
const Box = styled.div`
{
  border-radius: 20px;
  position:relative;
  margin : 70px 50px 0px 50px;
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.background}; 
  box-shadow:  0 0 0 #242424,
                0 0 0 #424242,
                10px 10px 10px #242424 inset,
                -10px -10px 10px #424242 inset;     
  animation: ${anime} 2s cubic-bezier(0.3, 1, 0.3, 1);
  // animation-play-state: paused
  animation-fill-mode: forwards; 
}
`;
const Boxs = styled.div`
{
border-radius: 20px;
position:relative;
margin : 90px 50px 0px 50px;
width: 70px;
height: 70px;
background: #f0f0f0; 
background-image: url(${check});
background-size: cover;
box-shadow:  0 0 0 #242424,
                0 0 0 #424242,
                10px 10px 10px #242424 inset,
                -10px -10px 10px #424242 inset;     
animation: ${animes} 2s cubic-bezier(0.3, 1, 0.3, 1);
// animation-play-state: paused
animation-fill-mode: forwards; 
}
`;
const HomeBox = styled.div`
{
  border-radius: 20px;
  margin : 90px 50px 0px 50px;
  width: 80px;
  height: 80px;
  background: #f0f0f0;
}
`;
const LoadingBox = styled.div`
{
  border-radius: 20px;
  position:relative;

  margin : 0px 0px 20px 0px;
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.background};    
  animation: ${LoadingAnime} ${props => props.delay}s cubic-bezier(0.3, 1, 0.3, 1) 0s infinite alternate;;
  // animation-play-state: paused
  animation-fill-mode: forwards; 
}
`;
const animex = keyframes`
0% {
  width: ${props => props.Boxx.width};
  height: ${props => props.Boxx.height};
  background: ${props => props.Boxx.background};
  box-shadow:  10px 10px 10px #242424,
                10px 10px 10px #424242,
                0 0 0 #242424 inset,
                0 0 0 #424242 inset;
}
100% {
  width: 0px;
  height: 0px;
  background: ${props => props.Boxx.background};
  box-shadow:  10px 10px 10px #242424,
                10px 10px 10px #424242,
                0 0 0 #242424 inset,
                0 0 0 #424242 inset;
}
`;
const Boxx = styled.div`
{
border-radius: 20px;
position:relative;
margin : 90px 50px 0px 50px;
width: ${props => props.width};
height: ${props => props.height};
background: ${props => props.background};
box-shadow:  0 0 0 #242424,
                0 0 0 #424242,
                10px 10px 10px #242424 inset,
                -10px -10px 10px #424242 inset;     
animation: ${animex} 2s cubic-bezier(0.3, 1, 0.3, 1);
// animation-play-state: paused
animation-fill-mode: forwards; 
}
`;
export default Loading;