import React, { useEffect, useState } from "react";

import NewsItem from "./Newsitem";
import PropTypes from "prop-types";

import { getAllNews } from "./helper/NewsHelper";

const News = (props) => {
  console.log(props);
  const [articles, setArticles] = useState([]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    console.log(props);

    const data = () => {
      getAllNews().then();
    };

    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(parsedData);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - BlueBlazers`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "35px 0px", marginTop: "90px" }}
      >
        BlueBlazers - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>

      <div className="container">
        <div className="row">
          {articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.snippet ? element.snippet : ""}
                  imageUrl={element.image}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.lastUpdated}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

News.defaultProps = {
  location: "US",
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  location: PropTypes.string,
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
