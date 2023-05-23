import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  const imagesrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH4POkWB6jNB2BAFVkRzgtHxwTw_dffmqmjg&usqp=CAU"
  return (
    <MainHeader>
      <NavLink to="/">
        <img src={imagesrc} alt="my logo img" className="logo"/>
        <h2 style={{color:'#00a72E', display:"inline-block", margin: '0 5px', fontWeight:'bold'}}> SHOPZONE </h2>
      </NavLink>
     

      <Nav />
    </MainHeader>
  );
};


const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }

  .logoname{
    color:'#00a777';
    
  }
`;
export default Header;
