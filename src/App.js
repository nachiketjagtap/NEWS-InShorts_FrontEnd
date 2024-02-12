import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Footer from "./components/Footer/footer";
import NewsContent from "./components/NewsContent/NewsContent";
import Header from "./components/Header/Header";

function App() {
  const [newsArray, setNewsArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines?country=in&apiKey=0b5f016413dd45cdb800cb781669752c"
        );
        if (response.status === 200 && response.data.status === "ok") {
          setNewsArray(response.data.articles);
        } else {
          console.error("Error fetching data: ", response.status);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <NewsContent newsArray={newsArray} />
      <Footer />
    </div>
  );
}

export default App;
