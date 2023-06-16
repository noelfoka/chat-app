import logo from "./logo.svg";
import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import { Cookies } from "universal-cookie";
import "./App.css";

import { ChannelContainer, ChannelListContainer } from "./components";

const apiKey = "pq3ktr5pz2j3";

const client = StreamChat.getInstance(apiKey);

const App = () => {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
};

export default App;
