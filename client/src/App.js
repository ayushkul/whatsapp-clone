import React, {useEffect, useState} from "react";
import styled from "styled-components";
import ContactListComponent from "./components/ContactListComponent";
import ConversationComponent from "./components/ConversationComponent";
import {io} from "socket.io-client";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: row;
  align-items: center;
  background: #f8f9fb;
`;

const ChatPlaceholder = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 50%;
  object-fit: contain;
`;
const Placeholder = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  gap: 10px;
  color: rgba(0, 0, 0, 0.45);

  span {
    font-size: 32px;
    color: #525252;
  }
`;
const WS_BASE_URL = "ws://localhost:3002";

function App(props) {
    const {userInfo} = props;
    const [selectedChat, setChat] = useState();
    const [refreshContactList, toggleRefreshContactList] = useState(false);
    useEffect(() => {
        const socket = io(WS_BASE_URL, {transports: ['websocket'], query: {email: userInfo.email}})

        // Event listener for the 'message' event
        socket.on('message', (message) => {
            // Handle the received message
            console.log('Received message:', message);
            // Perform any necessary actions with the received message
        });
        return () => {
            socket.disconnect();
        };
    }, [])
    return (
        <Container>
            <ContactListComponent
                setChat={setChat}
                userInfo={userInfo}
                refreshContactList={refreshContactList}
            />
            {selectedChat ? (
                <ConversationComponent
                    selectedChat={selectedChat}
                    userInfo={userInfo}
                    refreshContactList={() =>
                        toggleRefreshContactList(!refreshContactList)
                    }
                />
            ) : (
                <Placeholder>
                    <ChatPlaceholder src="/whatsapp-clone/welcome-placeholder.jpeg"/>
                    <span>Keep your phone connected</span>
                    WhatsApp connects to your phone to sync messages.
                </Placeholder>
            )}
        </Container>
    );
}

export default App;
