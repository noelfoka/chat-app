import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

const Chat = ({ location }) => {
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        
    });

    return (
        <div>
            <h1>Chat</h1>
        </div>
    )
}

export default Chat;