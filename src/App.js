import React from "react";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Main from "./components/Main"
import Comment from "./components/Comment"


function App() {
  return (
    <div>
      <Nav />
       <Header />
       <Main/>
       <Comment/>
       <Footer />
    </div>
   
  );
}

export default App;
