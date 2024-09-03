import React, { useState, useEffect } from 'react';
import { getCategories } from './api';
import Row from './components/Row';
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await getCategories();
        console.log("data: ", data)
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setCategories([]); // Fallback to an empty array in case of error
      }
    }

    fetchCategories();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div>
      <Nav />
      <Banner />
      {
        categories.map((category) => (
          <Row
            key={category.name}
            title={category.title}
            isLarge={category.isLarge}
            path={category.path}
          />
        ))
      }
    </div>
  );
}

export default App;
