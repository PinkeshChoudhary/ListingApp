import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { Card } from "./Card";
import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut } from "./LogOut";

const LazyComponent = React.lazy(() => import("./Comments"));

export const Home = () => {
  const [data, setData] = useState([]);
  const [showComments, setShowComments] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "get",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  const toggleModal = (id) => {
    document.getElementById("root").style.position = "fixed";
    setShowComments(id);
  };
  const closeModal = () => {
    document.getElementById("root").style.position = "";

    setShowComments(null);
  };

  return (
    <div>
      <div>
        <LogOut />
      </div>
      <div className="listctnr">
        {data.map((el) => (
          <Card key={el.id} {...el} clickHandler={toggleModal} />
        ))}
      </div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          {showComments && (
            <LazyComponent id={showComments} clickHandler={closeModal} />
          )}
        </Suspense>
      </div>
    </div>
  );
};
