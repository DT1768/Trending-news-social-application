import React, { useState, useEffect } from 'react';
import "../styles.css";
import NewsCard from "./NewsCard";
import { getTrendingNews } from "./helper/newshelper";
import { getUser, getUserPrefrences } from './helper/userhelper';

const TrendingNews = () => {
    const [trends, setTrends] = useState([]);
    const [error, setError] = useState(false);
    const [location, setLocation] = useState("CA");
    const [prefrences, setPrefrences] = useState({});

    const userId = localStorage.getItem("userId");

    console.log(userId);


    

    console.log(prefrences);

    const handleChange = () => event => {
        const location = event.target.value;
        setLocation(location);
    }

    const loadAllTrends = () => {
        getTrendingNews(location).then(data => {
            if (data.error) {
                setError(data.error);
            }
            else {
                setTrends(data);

            }
        })
    }

    useEffect(() => {
        loadAllTrends()
    }, [location])


    return (
        <div>
            <div className="container-fluid bg-white text-dark text-center">
                <h1 className='text-primary'>Trending news</h1>
                <h5>Powered by Google-Trends</h5>

                <label htmlFor="location">Select a Location:</label>
                <select name="location" id="location" onClick={handleChange()}  >
                    <option value={"CA"} >Select a location</option>
                    <option value={"AR"} >Argentina</option>
                    <option value={"AU"} >Australia
                    </option>
                    <option value={"AT"} >Austria
                    </option>
                    <option value={"BE"} >Belgium
                    </option>
                    <option value={"BR"} >Brazil
                    </option>
                    <option value={"CA"} >Canada
                    </option>
                    <option value={"CO"} >Colombia
                    </option>
                    <option value={"CZ"} >Czechia
                    </option>
                    <option value={"EG"} >Egypt
                    </option>
                    <option value={"FR"} >France
                    </option>
                    <option value={"DE"} >Germany
                    </option>
                    <option value={"GR"} >Greece
                    </option>
                    <option value={"HK"} >Hongkong
                    </option>
                    <option value={"HU"} >Hungary
                    </option>
                    <option value={"IN"} >India
                    </option>
                    <option value={"ID"} >Indonesia
                    </option>
                    <option value={"IE"} >Ireland
                    </option>
                    <option value={"IL"} >Israel
                    </option>
                    <option value={"IT"} >Italy
                    </option>
                    <option value={"JP"} >Japan
                    </option>
                    <option value={"MY"} >Malaysia
                    </option>
                    <option value={"MX"} >Mexico
                    </option>
                    <option value={"NL"} >Netherlands
                    </option>
                    <option value={"NZ"} >New Zealand
                    </option>
                    <option value={"NG"} >Nigeria
                    </option>
                    <option value={"NO"} >Norway
                    </option>
                    <option value={"PH"} >Philippines
                    </option>
                    <option value={"PL"} >Poland
                    </option>
                    <option value={"PT"} >Portugal
                    </option>
                    <option value={"RO"} >Romania
                    </option>
                    <option value={"RU"} >Russia
                    </option>
                    <option value={"SA"} >Saudi Arabia
                    </option>
                    <option value={"SG"} >Singapore
                    </option>
                    <option value={"ZA"} >South Africa
                    </option>
                    <option value={"KR"} >South Korea
                    </option>
                    <option value={"SE"} >Sweden
                    </option>
                    <option value={"CH"} >Switzerland
                    </option>
                    <option value={"TW"} >Taiwan
                    </option>
                    <option value={"TH"} >Thailand
                    </option>
                    <option value={"TR"} >Turkey
                    </option>
                    <option value={"UA"} >Ukraine
                    </option>
                    <option value={"GB"} >United Kingdon
                    </option>
                    <option value={"US"} >United States
                    </option>


                </select>
            </div>
            

            <br />



            <div className="row">
                {trends.map((news, index) => {
                    return (

                        <div key={index} className="col-sm-6">
                            <NewsCard news={news} />
                            <br />
                        </div>

                    )
                })}
            </div>
        </div>
    )
};

export default TrendingNews;
