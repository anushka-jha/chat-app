import React from "react";

import Chat from "./components/Chat/Chat";
import Join from "./components/Join/Join";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//Join is first page that user will see, pass data in login form, then pass the data in Chat

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Join />} />
      <Route path="chat" element={<Chat />} />
      {/* <Route path="/chat" component={Chat} /> */}
    </Routes>
  </BrowserRouter>
);

export default App;
