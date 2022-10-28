import ReactPlayer from 'react-player/lazy';
import { useState, useRef, useEffect } from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";
import Loading from "./Loading.js"
import styled, { keyframes } from "styled-components";
import styles from "./Player.module.css"
import backgroundcolor from './Intro.module.css';
import typing from './typing.module.css';
import './global.css';
import Home from './home.png';
import Undo from './undo.png';
import List from './list.png';
import Info from './info.png';

function Second() {
  let navigate = useNavigate();
  // const history = useNavigate();
  const [loading, setLoading] = useState(true);
  const [playIndex, setPlayIndex] = useState(-1);
  const reactPlayerRef = useRef();
  const [timestamps, setTimestamps] = useState(0);
  // const [search,setSearch] = useState(['#쇼츠']);
  const [data, setData] = useState();

  useEffect(() => {
    const timerId = setTimeout(() => {
      getJson();
    }, 5000);
    return () => clearTimeout(timerId);
  }, []);
  const getJson = async() => {
    const json = await(
      await fetch(
        `http://127.0.0.1:5000/users`
      )).json();
      setData(JSON.parse(json));
      setLoading(false);
  }
  console.log(data)



  const counter = () => {
    setVis("1")
    setTimestamps(reactPlayerRef.current.getDuration())
    if (0.0 < Math.round(reactPlayerRef.current.getCurrentTime()) < 1.0 && timestamps !== reactPlayerRef.current.getDuration()){
        setPlayIndex((prev)=>prev+1);
        console.log("playIndex++")
    console.log(reactPlayerRef.current.getCurrentTime())
    }
    }

  const handleVideo = () => {
    navigate("/Search");
  }

  const refresh = () => {
    window.location.reload();
  }
  const first = () => {
    setVis("0")
  }
  
  useEffect(() => {
    const timerId = setTimeout(() => {
        setVis("1");
    }, 9000);
    return () => clearTimeout(timerId);
  }, []);

const onClick = () => {
    return ""
}
const [vis,setVis] = useState("0");
  // setSearch((searchArray) => [input, ...searchArray]);
  // setInput("");


// useEffect(()=> {
//   fetch("http://127.0.0.1:5000/users").then(
//     res=>res.json()
//   ).then(
//     data=>console.log(data)
//     )
// },[])
const [swi,SetSwi] = useState(true);
const close = () => {
  if (swi){
    return SetSwi(false)
  } else {
    return SetSwi(true)
  }
}
const [switwo,SetSwitwo] = useState(true);
const closeTwo = () => {
  if (switwo){
    return SetSwitwo(false)
  } else {
    return SetSwitwo(true)
  }
}
function OneComponent(){
  if(swi){
    return (
      <Box onClick={close} width='450px' height='300px' background="#f0f0f0">
      <ImgBox opacity={vis} width='200px' height='250px'background="#f0f0f0" backgroundimage={data.url[playIndex]} ></ImgBox>
      <H1 opacity={vis}>{data.channel[playIndex]}</H1>
      <H1 opacity={vis}>{data.view[playIndex]} views 🍿</H1>
      <H1 opacity={vis}>{data.mins[playIndex]} seconds 🕰</H1>
      </Box>
    )
  } else {
    return (
      <OneBox onClick={close} width='70px' height='70px' background="#f0f0f0"/>
    )
  }
}
function TwoComponent(){
  if(switwo){
    return (
      <Container2>

      <Box onClick={closeTwo} width='250px'height='50px' background="#292929">
        <div className={typing.typingdemo}>
        <H2x opacity={vis} left='130px'>{data.like[playIndex]}</H2x>
        </div>
      </Box>
      <Box onClick={closeTwo} width='500px'height='65px' background="rgba(255,53,127,1)">
        <H2 opacity={vis} left='80px'>{data.title[playIndex]}</H2>
      </Box>
      <Box onClick={closeTwo} width='500px'height='120px' background="#659FCF">
        <H3 opacity={vis}>🐶 {((data.comments[playIndex]||'')[1]||'')[0]} &nbsp; 👍🏻 {((data.comments[playIndex]||'')[1]||'')[2]}</H3> 
        <H3 opacity={vis}>{((data.comments[playIndex]||'')[1]||'')[1]} </H3> 
      </Box>
      <Box onClick={closeTwo} width='500px'height='120px' background="#659FCF">
        <H3 opacity={vis}>🐰 {((data.comments[playIndex]||'')[0]||'')[0]} &nbsp; 👍🏻 {((data.comments[playIndex]||'')[0]||'')[2]}</H3> 
        <H3 opacity={vis}>{((data.comments[playIndex]||'')[0]||'')[1]} </H3> 
      </Box>
      </Container2>
    )
  } else {
    return (
      <Container2>
      <ThreeBox width='250px' height='50px' background="#292929"/>
      <ThreeBox width='500px' height='65px' background="rgba(255,53,127,1)"/>
      <TwoBox onClick={closeTwo} width='500px' height='120px' background="#659FCF"/>
      <ThreeBox width='500px' height='120px' background="#659FCF"/>
      </Container2>
    )
  }
}

const Component = () => {
  if(loading) {
    return (
      <Loading/>
      )
  } else {
    return (
      
      <Container>
    
      <Container2>
        {OneComponent()}
      <Container3>
      <HomeBox onClick={handleVideo} width='70px' height='70px' background="#f0f0f0"></HomeBox>
      <UndoBox onClick={refresh} width='70px' height='70px' background="#f0f0f0"></UndoBox>
      </Container3>
      </Container2>


      <Box width='350px'height='500px' background="#f0f0f0">
      <Video opacity={vis} className={styles.playerwrapper}>
      <ReactPlayer 
        opacity={styles.vis}
        ref={reactPlayerRef}
        className={styles.reactplayer}
        url={[
    
          // '//www.youtube.com/embed/' + data.url[0]  + '?showinfo=0&enablejsapi=1&origin=http://127.0.0.1:5000',
          // '//www.youtube.com/embed/' + data.url[1]  + '?showinfo=0&enablejsapi=1&origin=http://127.0.0.1:5000',
          // '//www.youtube.com/embed/' + data.url[2]  + '?showinfo=0&enablejsapi=1&origin=http://127.0.0.1:5000',
          // '//www.youtube.com/embed/' + data.url[3]  + '?showinfo=0&enablejsapi=1&origin=http://127.0.0.1:5000',
          // '//www.youtube.com/embed/' + data.url[4]  + '?showinfo=0&enablejsapi=1&origin=http://127.0.0.1:5000',
  

          "https://www.youtube.com/watch?v=" + data.url[0],
          "https://www.youtube.com/watch?v=" + data.url[1],
          "https://www.youtube.com/watch?v=" + data.url[2],
          // "https://www.youtube.com/embed/" + data.url[3],
          // "https://www.youtube.com/embed/" + data.url[4],
        ]}   // 플레이어 url
        
        width='350px'         // 플레이어 크기 (가로)
        height='500px'        // 플레이어 크기 (세로)
        playing={true}        // 자동 재생 on
        muted={true}          // 자동 재생 on
        controls={false}       // 플레이어 컨트롤 노출 여부
        light={false}         // 플레이어 모드
        pip={true}            // pip 모드 설정 여부
        // poster={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'}   // 플레이어 초기 포스터 사진
        onEnded={() => handleVideo()}  // 플레이어 끝났을 때 이벤트
        onBufferEnd={() => counter()}
        onBuffer={() => first()}
        // onPlaybackRateChange={() => Next()} 
      />
      </Video>
      </Box>
      {TwoComponent()}

     
      </Container> 
      )
  }  
}

  return (
    <>
      <div className={backgroundcolor.bg}>
      {Component()}
      </div>
    </>
  )
}
const Video = styled.div`
{
  opacity: ${props => props.opacity};
  transition: opacity 1s ease-in-out;
}
`;
const H1 = styled.h1`
{
    opacity: ${props => props.opacity};
    transition: opacity 1s ease-in-out;
    position : relative;
    color:#424242;
    margin-left:270px;
    margin-top: 55px;
    font-size: 1.0em;
}
`;
const H2 = styled.h2`
{
    opacity: ${props => props.opacity};
    transition: opacity 1s ease-in-out;
    color:#f0f0f0;
    margin-left:${props => props.left};
    margin-top:22px;
    font-size: 1.2em;
}
`;
const H2x = styled.h2`
{
    color:#f0f0f0;
    margin-left:${props => props.left};
    margin-top:14px;
    font-size: 0.8em;
}
`;
const H3 = styled.h3`
{
    opacity: ${props => props.opacity};
    transition: opacity 1s ease-in-out;
    color:#f0f0f0;
    margin-left:20px;
    margin-top:25px;
    font-size: 1.0em;
}
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
const animess = keyframes`
0% {
  width: 70px;
  height: 70px;
  background: ${props => props.Box.background}

  // background-size: cover;
  box-shadow:  10px 10px 10px #242424,
                10px 10px 10px #424242,
                0 0 0 #242424 inset,
                0 0 0 #424242 inset;
}
100% {
  width: ${props => props.Box.width};
  height: ${props => props.Box.height};
  background: ${props => props.Box.background};

  // background-size: cover;
  box-shadow:  10px 10px 10px #242424,
                10px 10px 10px #424242,
                0 0 0 #242424 inset,
                0 0 0 #424242 inset;
}
`;
const Box = styled.div`
{
  opacity: ${props => props.opacity};
  transition: opacity 1s ease-in-out;
  border-radius: 20px;
  position : relative;
  margin : 70px 50px 0px 50px;
  transition: all 0.3s ease 0s;
  :hover{
  transform: translateY(-7px);
  }
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.background}; 
  box-shadow:  10px 10px 10px #242424,
                10px 10px 10px #424242,
                0 0 0 #242424 inset,
                0 0 0 #424242 inset;
  animation: ${animess} 2s cubic-bezier(0.3, 1, 0.3, 1);
  // animation-play-state: paused
  animation-fill-mode: forwards; 
}
`;
const ImgBox = styled.div`
  {
    opacity: ${props => props.opacity};
    transition: opacity 1s ease-in-out;
    border-radius: 20px;
    position: absolute;
    margin-top:22px;
    margin-left:20px;
    width: ${props => props.width};
    height: ${props => props.height};
    background: ${props => props.background}; 
    background-image: url('https://i1.ytimg.com/vi/${props => props.backgroundimage}/maxresdefault.jpg');
    background-size: cover;
    background-position: center center;
    box-shadow:  10px 10px 10px #242424,
                  10px 10px 10px #424242,
                  0 0 0 #242424 inset,
                  0 0 0 #424242 inset;
  }
  `;
const Homegradient = keyframes`
0% {
  width: 70px;
  height: 70px;
  background: #f0f0f0;
  background-image: url(${Home});
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
background-image: url(${Home});
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
background-image: url(${Home});
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
  background-image: url(${Home});
  background-size: cover;
  box-shadow:  10px 10px 10px #242424,
                10px 10px 10px #424242,
                0 0 0 #242424 inset,
                0 0 0 #424242 inset;
}
100% {
  width: 70px;
  height: 70px;
  background: #ff357f ;
  background-image: url(${Home});
  background-size: cover;
  box-shadow:  10px 10px 10px #242424,
                10px 10px 10px #424242,
                0 0 0 #242424 inset,
                0 0 0 #424242 inset;
`;
const HomeBox = styled.div`
{
  border-radius: 20px;
  margin : 90px 50px 0px 50px;
  width: 70px;
  height: 70px;
  background: #f0f0f0;
  background-image: url(${Home});
  background-size: cover;
  transition: all 0.3s ease 0s;
  :hover{
  transform: translateY(-7px);
  }
  animation: ${Homegradient} 7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s infinite alternate;
}
`;
const Undogradient = keyframes`
0% {
  width: 70px;
  height: 70px;
  background: #f0f0f0;
  background-image: url(${Undo});
  background-size: cover;
  box-shadow: 10px 10px 10px #cccccc,
              10px 10px 10px #ffffff,a
              10px 10px 10px #cccccc inset,
              -10px -10px 10px #ffffff inset; 
}
35% {
width: 70px;
height: 70px;
background: rgba(87,111,230,1);
background-image: url(${Undo});
background-size: cover;
box-shadow:  10px 10px 10px #242424,
              10px 10px 10px #424242,
              0 0 0 #242424 inset,
              0 0 0 #424242 inset;
}

60% {
width: 70px;
height: 70px;
background: #B983FF;
background-image: url(${Undo});
background-size: cover;
box-shadow:  10px 10px 10px #242424,
              10px 10px 10px #424242,
              0 0 0 #242424 inset,
              0 0 0 #424242 inset;
}
85% {
  width: 70px;
  height: 70px;
  background:  #88DBAD;
  background-image: url(${Undo});
  background-size: cover;
  box-shadow:  10px 10px 10px #242424,
                10px 10px 10px #424242,
                0 0 0 #242424 inset,
                0 0 0 #424242 inset;
}
100% {
  width: 70px;
  height: 70px;
  background: rgba(255,53,127,1) ;
  background-image: url(${Undo});
  background-size: cover;
  box-shadow:  10px 10px 10px #242424,
                10px 10px 10px #424242,
                0 0 0 #242424 inset,
                0 0 0 #424242 inset;
`;
const UndoBox = styled.div`
{
  border-radius: 20px;
  margin : 90px 50px 0px 50px;
  width: 70px;
  height: 70px;
  background: #f0f0f0;
  background-image: url(${Undo});
  background-size: cover;
  transition: all 0.3s ease 0s;
  :hover{
  transform: translateY(-7px);
  }
  animation: ${Undogradient} 7s cubic-bezier(0.16, 1, 0.3, 1) 0.5s infinite alternate;
}
`;
const animes = keyframes`
0% {
  width: 450px;
  height: 300px;
  background: #f0f0f0;

  // background-size: cover;
  box-shadow:  10px 10px 10px #242424,
                10px 10px 10px #424242,
                0 0 0 #242424 inset,
                0 0 0 #424242 inset;
}
100% {
  width: ${props => props.Box.width};
  height: ${props => props.Box.height};
  background: ${props => props.Box.background};

  // background-size: cover;
  box-shadow:  10px 10px 10px #242424,
                10px 10px 10px #424242,
                0 0 0 #242424 inset,
                0 0 0 #424242 inset;
}
`;
const OneBox = styled.div`
{
  border-radius: 20px;
  position:relative;
  width: 70px;
  height: 70px;
  background: #FEC260; 
  transition: all 0.3s ease 0s;
  :hover{
  transform: translateY(-7px);
  }
  background-image: url(${Info});
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
const animesss = keyframes`
0% {
  width: 500px;
  height: 120px;
  background: ${props => props.TwoBox.background};
  

  // background-size: cover;
  box-shadow:  10px 10px 10px #242424,
                10px 10px 10px #424242,
                0 0 0 #242424 inset,
                0 0 0 #424242 inset;
}
100% {
  width: ${props => props.TwoBox.width};
  height: ${props => props.TwoBox.height};
  background: #3FA796;
  background-image: url(${List});
  background-size: cover;
  // background-size: cover;
  box-shadow:  10px 10px 10px #242424,
                10px 10px 10px #424242,
                0 0 0 #242424 inset,
                0 0 0 #424242 inset;
}
`;
const TwoBox = styled.div`
{
  margin : 70px 50px 0px 50px;
  border-radius: 20px;
  position:relative;
  width: 70px;
  height: 70px;
  background: #${props => props.background};
  transition: all 0.3s ease 0s;
  :hover{
  transform: translateY(-7px);
  }
  // background-size: cover;
  box-shadow:  0 0 0 #242424,
                  0 0 0 #424242,
                  10px 10px 10px #242424 inset,
                  -10px -10px 10px #424242 inset;     
  animation: ${animesss} 2s cubic-bezier(0.3, 1, 0.3, 1);
  // animation-play-state: paused
  animation-fill-mode: forwards; 
}
`;
const animessss = keyframes`
0% {
  width: ${props => props.ThreeBox.width};
  height: ${props => props.ThreeBox.height};
  background: ${props => props.Box.background};
  

  // background-size: cover;
  box-shadow:  10px 10px 10px #242424,
                10px 10px 10px #424242,
                0 0 0 #242424 inset,
                0 0 0 #424242 inset;
}
100% {
  width: 0px;
  height: 0px;
  background: #000000;

  // background-size: cover;
  box-shadow:  10px 10px 10px #242424,
                10px 10px 10px #424242,
                0 0 0 #242424 inset,
                0 0 0 #424242 inset;
}
`;
const ThreeBox = styled.div`
{
  margin : 70px 50px 0px 50px;
  border-radius: 20px;
  position:relative;
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.background};
  transition: all 0.3s ease 0s;
  :hover{
  transform: translateY(-7px);
  }
  // background-size: cover;
  box-shadow:  0 0 0 #242424,
                  0 0 0 #424242,
                  10px 10px 10px #242424 inset,
                  -10px -10px 10px #424242 inset;     
  animation: ${animessss} 2s cubic-bezier(0.3, 1, 0.3, 1);
  // animation-play-state: paused
  animation-fill-mode: forwards; 
}
`;
export default Second;

