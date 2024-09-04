import React from "react";
import Header from "./components/Header/Header";
import TimeExperiencesPage from "./components/Home/TimeExperiences/TimeExperiencesPage";
import ArticleAndBlogs from "./components/Home/ArticleBlogsSectors/ArticleAndBlogs";
import Footer from "./components/Home/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <TimeExperiencesPage />
      <ArticleAndBlogs />
      <Footer />
    </>
  );
}

export default App;
