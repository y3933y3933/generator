import React from "react";
import Header from "./header/Header";
import { useState, useEffect } from "react";
import Selector from "./components/Selector";
import { getData, db } from "./firebase";
import Loading from "./components/Loading";
import Music from "./components/Music";
import Book from "./components/Book";

const App = () => {
  const [data, setData] = useState(null);
  const [show, isShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (data) {
      isShow(true);
    } else {
      isShow(false);
    }
  }, [data]);

  function generate(type) {
    if (type) {
      setIsLoading(true);
      getData(db, type)
        .then((val) => {
          setData(val);
          setIsLoading(false);
        })
        .catch((_) => setData(null));
    }
  }

  function Block() {
    if (show && data.type === "music") {
      return <Music data={data} />;
    }
    if (show && data.type === "book") {
      return <Book data={data} />;
    }
    return null;
  }
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {isLoading && <Loading />}
      <Header />
      <div className="container mx-auto flex-grow">
        <div className="my-4">
          <Selector generate={generate} />
        </div>
        <Block />
      </div>
    </div>
  );
};

export default App;
