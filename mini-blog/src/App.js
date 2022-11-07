import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";

//Pages
import MainPage from "./component/page/MainPage";
import PostWritePage from "./component/page/PostWritePage";
import PostViewPage from "./component/page/PostViewPage";

const MainTitleText = styled.p`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  text-vertical-align: middle;
  color: black;
  border: 1px solid lightgreen;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 30px 0 lightgreen;
  background-color: lightgreen;

  
`;

function App(props) {
  return (
    <BrowserRouter>
      <MainTitleText>미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postid" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;