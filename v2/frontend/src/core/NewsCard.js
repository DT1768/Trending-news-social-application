import React,{useState,useEffect} from "react";
import { Redirect } from 'react-router-dom';

const NewsCard = ({
    news
}) => {
    const cardTitle = news ? news.title : "News Title";
    const cardUrl = news ? news.url : "News URL";
    const cardImage = news ? news.image : "Image not found";
    const cardDescription = news ? news.snippet : "Description";
    const cardSource = news ? news.source : "Source";
    const cardTime = news ? news.lastUpdated : "Time";

    return(
        <div className="card text-dark bg-light border border-primary">
            <h5 className="card-header">{cardTitle}</h5>
            <div className="card-body">
                <div className="container">
                    <div className="row">
                        <div className="col-9">
                            <p className="lead text-left bg-light font-weight-normal text-wrap">{cardDescription}</p>
                            <p className="lead text-left bg-light font-weight-light">Source:{cardSource}</p>
                            <p className="lead text-left bg-light font-weight-light">updated:{cardTime}</p>
                            <a
                                rel="noreferrer"
                                href={cardUrl}
                                target="_blank"
                                className="btn btn-sm btn-dark"
                            >
                                Read More
                            </a>
                        </div>
                        <div className="col-3">
                            <img src={cardImage} className="img border-dark p-2" width={150} height={150} alt="No Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsCard;