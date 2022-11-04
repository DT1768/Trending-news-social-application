import PropTypes from "prop-types";
import React, { Component } from "react";

export class NewsItem2 extends Component {
  render() {
    let { title, description } = this.props;
    return (
      <>
        <div className="card col mx-3" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Virat_Kohli.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="*" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem2;
