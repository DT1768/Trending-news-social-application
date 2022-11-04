import React from "react";
import NewsItem, { NewsItem2 } from "./NewsItem2";

function NewsComponent() {
  return (
    <>
      <div className="container my-5">
        <h2>Top headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem2 title="title" description="description" />
          </div>
          <div className="col-md-4">
            <NewsItem2 title="title" description="description" />
          </div>
          <div className="col-md-4">
            <NewsItem2 title="title" description="description" />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsComponent;
