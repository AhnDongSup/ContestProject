import {Link} from "react-router-dom"
import { useState, useEffect } from "react";

import styled, { keyframes } from "styled-components";
import styles from "./Button.module.css"
import backgroundcolor from './Intro.module.css';
import './global.css';

function First(){
const [keyword,setKeyword] = useState('쇼츠');
const onChange = (e) => {
    setKeyword(e.target.value)
  }
const handleClick = (e) => {

// e.preventDefault();
fetch("http://127.0.0.1:5000/users", {
    method: "POST",
    body: JSON.stringify({
    // 'name': 'sexy'
    'name': keyword + '#쇼츠'
}),
    headers: {
    'Content-Type': 'application/json'    // To server knows to parse it as JSON
}
})
    .then((response) => response.json())
    .then((data) => console.log(data))
}
console.log(keyword);
useEffect(() => {
    const timerId = setTimeout(() => {
        setVis("1");
    }, 600);
    return () => clearTimeout(timerId);
  }, []);
const onClick = () => {
    return ""
}
const [vis,setVis] = useState("0");

    return (
    <>
    <Container>
        <div className={backgroundcolor.bg}>
        <Box onClick={onClick} width='450px' height='70px' background="#f0f0f0">
            <Bar type='text' opacity={vis} plackholder="쇼츠 검색" value={keyword} onChange={onChange}/>
            <Link to={`/Searchword/${keyword}`}>
            <Button className={styles.button} opacity={vis} onClick={handleClick}>Search!</Button>
            </Link>
        </Box>
        </div>
    </Container>
    </>
    );
}

    const Button = styled.button`
    {
        opacity: ${props => props.opacity};
    }
    `;
    const Bar = styled.input`
    {
        opacity: ${props => props.opacity};
        transition: opacity 1s ease-in-out;
        background: #f0f0f0;
        padding-left: 10px;
        outline: 1px solid #B983FF;
        border: #f0f0f0;
        height: 30px;
        width: 300px;
        font-size: 1.12em;
        border-radius: 20px;
        :focus {
            outline: 1px solid rgba(255,53,127,1);
        }
    }
    `;
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
    const Box = styled.div`
    {
    display : flex;
    justify-content : center;
    align-items : center;
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
    animation: ${anime} 2s cubic-bezier(0.3, 1, 0.3, 1);
    // animation-play-state: paused
    animation-fill-mode: forwards; 
    }
    `;

export default First;