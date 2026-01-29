import { useEffect, useState } from "react";
import { getPosts } from "./api/PostApi";
import { ShowPosts } from "./components/ShowPosts";
import Posts from "./components/Posts";

function App() {
  
  return (
    <>
    <Posts/>
    </>
  );
}

export default App;
