import React from "react";
import Header from "./components/Header/Header";
import TimeExperiencesPage from "./components/Home/TimeExperiences/TimeExperiencesPage";
import ArticleAndBlogs from "./components/Home/ArticleBlogsSectors/ArticleAndBlogs";

function App() {
  return (
    <>
      <Header />
      <TimeExperiencesPage />
      <ArticleAndBlogs />
    </>
  );
}

export default App;
