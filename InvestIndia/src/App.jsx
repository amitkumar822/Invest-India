import React from "react";
import Header from "./components/Header/Header";
import TimeExperiencesPage from "./components/Home/TimeExperiences/TimeExperiencesPage";
import ArticleAndBlogs from "./components/Home/ArticleBlogsSectors/ArticleAndBlogs";
import Footer from "./components/Home/Footer/Footer";
import Bulletin from "./components/Home/BulletinBoard/Bulletin";
import GalleryNews from "./components/GalleryLatestNews/GalleryNews";

function App() {
  return (
    <>
      <Header />
      <TimeExperiencesPage />
      <ArticleAndBlogs />
      <Bulletin />
      <GalleryNews />
      <Footer />
    </>
  );
}

export default App;
