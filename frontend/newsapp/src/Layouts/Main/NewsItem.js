import React, { useState } from "react";

function NewsItem(props) {
  let url = "https://trends.google.com/trends/explore?q=sports%20cars&geo=US";

  return (
    <>
      <div className="card col mx-3" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Virat_Kohli.jpg"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <a href="*" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </>
  );
}

export default NewsItem;
