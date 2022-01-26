import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { GoogleLogin } from "react-google-login";
import App from "../../App";
import cookieManager from "../../managers/cookieManager";
import httpManager from "../../managers/httpManager";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #0a0e11;
  height: 100vh;
`;

const Header = styled.div`
  color: white;
  width: 100%;
  font-weight: bold;
  background-color: #56bca6;
  padding: 50px 50px 140px;
  font-size: 14px;
`;
const CardView = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 30px 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -80px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 40px;
  flex-wrap: wrap;
`;

const Instructions = styled.div`
  padding: 20px;
  font-size: 16px;

  ol {
    margin: 40px 0;
  }

  li {
    margin: 15px 0;
  }
`;

const Heading = styled.span`
  font-size: 24px;
  color: #525252;
`;

const QRCode = styled.img`
  width: 264px;
  height: 264px;
  background-color: white;
`;

const LoginComponent = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const userData = cookieManager.getUserInfo();
    if (userData) setUserInfo(userData);
  }, []);

  const responseGoogle = async (response) => {
    await httpManager.createUser({
      email: response.profileObj.email,
      name: response.profileObj.name,
      profilePic: response.profileObj.imageUrl,
    });
    setUserInfo(response.profileObj);
    cookieManager.setUserInfo(response.profileObj);
  };

  return (
    <>
      {userInfo ? (
        <App userInfo={userInfo} />
      ) : (
        <Container>
          <Header>WHATSAPP WEB CLONE</Header>
          <CardView>
            <Instructions>
              <Heading>To use WhatsApp on your computer:</Heading>
              <ol>
                <li>You need to Signin using your Google Account.</li>
                <li>You can anytime logout from the Web.</li>
                <li>
                  Click on Signin button to continue using the Whatsapp Clone.
                </li>
              </ol>
              <GoogleLogin
                clientId="412954107899-68euuaorrd8rvs138sa74g0fhudesc2f.apps.googleusercontent.com"
                buttonText="Sign In with Google"
                cookiePolicy={"single_host_origin"}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
              />
            </Instructions>
            <QRCode src="whatsapp-clone/qr-placeholder.png" />
          </CardView>
        </Container>
      )}
    </>
  );
};
export default LoginComponent;
