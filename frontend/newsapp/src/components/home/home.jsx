import React from "react";

const Home = () => {
    return(
        <section className="home">
            <div>
                <h1>Trending News</h1>
                <p>Find everything trendy</p>
            </div>
            
            <a href="http://localhost:8000/api/googlelogin">log in with google</a>
        </section>
    );
};

export default Home;