import React from "react";

import Chat from "./components/Chat";
import Join from "./components/Join";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//Join is first page that user will see, pass data in login form, then pass the data in Chat

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Join />} />
      <Route path="chat" element={<Chat />} />
    </Routes>
  </BrowserRouter>
);

export default App;
