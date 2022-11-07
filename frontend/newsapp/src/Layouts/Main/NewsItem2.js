import PropTypes from "prop-types";
import React, { Component } from "react";

export class NewsItem2 extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <>
        <div className="card col mx-3" style={{ width: "18rem" }}>
          <img className="card-img-top" src={imgUrl} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem2;
