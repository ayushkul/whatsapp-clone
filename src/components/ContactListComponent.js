import React from "react";
import styled from "styled-components"
import {history} from "../App";
const Container=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  width: 340px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
`
const LogoutButton = styled.button`
  border-radius: 4px;
  padding: 8px 12px;
  color: white;
  margin: 20px 0;
  font-size: 18px;
  background: #0052cc;
  cursor: pointer;
  outline: none;
  border: none;
`;
function HomeComponent() {
    const onLogoutClicked =  (event) => {
        event.preventDefault();
        history.push('/')
    };
    return (
        <Container>
            Home Component
            <LogoutButton onClick={onLogoutClicked}>Logout</LogoutButton>
        </Container>
    );
}

export default HomeComponent;
