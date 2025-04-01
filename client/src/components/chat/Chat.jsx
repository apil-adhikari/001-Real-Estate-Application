import React, { useState } from "react";
import "./chat.scss";

const Chat = () => {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      {/* Top Messages Section */}
      <div className="messages">
        <h1>Messages</h1>
        {/* Each Message */}
        <div className="message">
          <img
            src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="sender-avatar"
          />
          <span>John Doe</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
            beatae?
          </p>
        </div>
        {/* Each Message */}
        <div className="message">
          <img
            src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="sender-avatar"
          />
          <span>John Doe</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
            beatae?
          </p>
        </div>
        {/* Each Message */}
        <div className="message">
          <img
            src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="sender-avatar"
          />
          <span>John Doe</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
            beatae?
          </p>
        </div>
        {/* Each Message */}
        <div className="message">
          <img
            src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="sender-avatar"
          />
          <span>John Doe</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
            beatae?
          </p>
        </div>
        {/* Each Message */}
        <div className="message">
          <img
            src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="sender-avatar"
          />
          <span>John Doe</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
            beatae?
          </p>
        </div>
        {/* Each Message */}
        <div className="message">
          <img
            src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="sender-avatar"
          />
          <span>John Doe</span>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
            beatae?
          </p>
        </div>
      </div>

      {/* Bottom Chat Box section */}
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://images.pexels.com/photos/698532/pexels-photo-698532.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="sender-avatar"
              />
              John Doe
            </div>
            <div className="close">X</div>
          </div>
          <div className="center">
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit.</p>
              <span>1 hour ago </span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit.</p>
              <span>1 hour ago </span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit.</p>
              <span>1 hour ago </span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit.</p>
              <span>1 hour ago </span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit.</p>
              <span>1 hour ago </span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit.</p>
              <span>1 hour ago </span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit.</p>
              <span>1 hour ago </span>
            </div>
          </div>

          {/* Place to write message and send button */}
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
