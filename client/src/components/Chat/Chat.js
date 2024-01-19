import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

const Chat = ({ location }) => {
    useEffect(() => {
        const data = queryString.parse(location.search);

        console.log(location.search);
        console.log(data);
    });

    return (
        <div>
            <h1>Chat</h1>
        </div>
    )
}

export default Chat;