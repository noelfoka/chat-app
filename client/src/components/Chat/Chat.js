import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

const Chat = (location) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    useEffect(() => {
        const searchTerm = location?.search;
        const { name, room } = queryString.parse(searchTerm);

        setName(name);
        setRoom(room);
    });

    return (
        <div>
            <h1>Chat</h1>
        </div>
    )
}

export default Chat;