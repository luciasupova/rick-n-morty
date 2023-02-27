import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NavBar } from "./components/library/visual/NavBar";
import ricknmortypng from "./assets/ricknmorty_biglogo.png";
import MainPage from "./subpages/MainPage/MainPage";
import Footer from "./components/library/visual/Footer";
import { Route, Routes } from "react-router-dom";
import Locations from "./subpages/Locations/Locations";

const App = () => {
  const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <>
      <NavBar title1={"Characters"} title2={"Locations"} title3={"Episodes"} />
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/MainPage" element={<MainPage/>} />
      <Route path="/Locations" element={<Locations/>} />
      </Routes>      
      <Footer title={"Group 3 @ Cph Business Lyngby - Web Development"} />
    </>
  );
};

export default App;
