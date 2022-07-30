import React, { useState, useEffect} from 'react';
import "./Chat.css";
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, MoreVert, SearchOutlined } from "@material-ui/icons";

function Chat() {

    const [seed, setSeed] = useState("");

    useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
    }, []);    


  return (
    <div className='chat'>
         <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

        <div className="chat_headerInfo">
            <h3>Room name</h3>
            <p>Last seen at...</p>
        </div>

        <div className='chat_headerRight'>
        <IconButton>
        <SearchOutlined />
        </IconButton>
        <IconButton>
        <AttachFile />
        </IconButton>
        <IconButton>
        <MoreVert />
        </IconButton>
        </div>
      </div>

      <div className="chat_body">
        <p 
        // className='chat_message chat_receiver'
        className={`chat_message ${true && "chat_receiver"}`}
        >
            <span className="chat_name">ani</span>
            hello
            <span className="chat_timestamp">3.54pm</span>
        </p>
      </div>


    </div>
  )
}

export default Chat;
