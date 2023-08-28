import React, { useState } from "react";
import InputField from "./inputField";
import styled from "styled-components";
import MessageSent from "./messageSent";
import MessageRecieved from "./messageRecieved";

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

const ConversationContainer = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 120px); /*60+60*/
  padding: 50px;
  overflow-y: auto;
`;

const AddresseeBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background: #005e54;
  color: #fff;
  padding: 0 8px;
  font-size: 24px;
  position: relative;
  z-index: 1;
`;

const AddresseeName = styled.h4`
  font-size: 17px;
  font-weight: 400;
  text-overflow: ellipsis;
  letter-spacing: 0.3px;
  margin: 0 0 0 8px;
  overflow: hidden;
  white-space: nowrap;
`;

function ChatBox() {
  const [messages, setMessages] = useState([]);
  const addressee = localStorage.getItem("addressee"); // Retrieve the number from local storage

  return (
    <div>
      <MainBox>
        <AddresseeBox>
          <AddresseeName>{addressee}</AddresseeName>
        </AddresseeBox>
        <ConversationContainer>
          {messages.map((msg, index) => (
            <MessageSent key={index} message={msg} />
          ))}
          <MessageRecieved />
        </ConversationContainer>
        <InputField setMessage={setMessages} />
      </MainBox>
    </div>
  );
}

export default ChatBox;
