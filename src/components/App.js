import React from "react";
import AboutPage from "./AboutPage";
import BooksPage from "./BooksPage";
import Header from "./common/Header";
import HomePage from "./HomePage";

function App() {
  function getPage() {
    const route = window.location.pathname;
    if (route === "/about") return <AboutPage />;
    if (route === "/books") return <BooksPage />;
    return <HomePage />;
  }
  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
