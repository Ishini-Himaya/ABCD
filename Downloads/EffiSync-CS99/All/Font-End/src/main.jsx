import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';

function WebSocketClient() {
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socket.addEventListener("open", () => {
      console.log("Connected to WebSocket server");
      sendMessage("startScript"); // Send "startScript" message when connected
    });

    // Example function to send a message
    function sendMessage(message) {
      socket.send(message);
      console.log("Message sent:", message);
    }

    return () => {
      // Clean up the WebSocket connection when the component unmounts
      socket.close();
    };
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  return null; // This component doesn't render anything
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <WebSocketClient /> {/* Include the WebSocket client component */}
  </React.StrictMode>,
);
