import React, { useState } from "react";
import './App.css';
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [user, setUser] = useState(null);

  return (
    // BEM naming convention
    <div className="app">
      {!user ? (
        <h1>Login</h1>
      ) : (
        <div className="app_body">
         <Sidebar />

          <BrowserRouter>
       
          <Routes >
              <Route path="/rooms/:roomId" element={<Chat />} />
              <Route path="/" element={<Chat />} />      
          </Routes>

          </BrowserRouter>
      
        </div>
      )}
    </div>
  );
}

export default App;
