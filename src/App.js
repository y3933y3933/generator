import React from "react";
import Header from "./header/Header";
import { useState } from "react";
import Selector from "./components/Selector";
import Music from "./components/Music";
import Book from "./components/Book";

const App = () => {
  const [type, setType] = useState("music");
  const [data, setData] = useState(null);

  function Block() {
    if (type === "music" && data) {
      return <Music data={data} />;
    }
    if (type === "book" && data) {
      return <Book data={data} />;
    }
    return null;
  }
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto flex-grow">
        <Selector setType={setType} setData={setData} />
        <Block />
      </div>
    </div>
  );
};

export default App;
