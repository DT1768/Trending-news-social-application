
exports.newsHome = async(req,res) => {
    googleTrends.dailyTrends({ geo: 'CA' }, function(err, results) {
    if (err) {
        console.log(err);
    }else{
        try{
            var output = results.toString()
            output = JSON.parse(output)
            output = output.default.trendingSearchesDays;
            output = output[0].trendingSearches;
            var finalOutput = [];
            for(var i = 0; i<output.length; i++){
                finalOutput[i] = {title :output[i].articles[0].title,url :output[i].articles[0].url,image: output[i].articles[0].image.imageUrl, snippet: output[i].articles[0].snippet , source: output[i].articles[0].source , lastUpdated: output[i].articles[0].timeAgo };
            }
            res.send(finalOutput);
        }
        catch(error){
            console.log(error);;
        }
    }
});
}

exports.newsCategory = async(req,res)=>{
    const category=req.body.category
    //console.log(req.body.category)

    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +
        'country=ca&' + `category=${category}&`+
        `apiKey=${process.env.NEWSAPIKEY}`;

        const news_get =await axios.get(url)
        res.render('news',{articles:news_get.data.articles})
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
}

exports.newsSearch = async(req,res)=>{
    const search=req.body.search
    // console.log(req.body.search)

    try {
        var url = `http://newsapi.org/v2/everything?q=${search}&${`apiKey=${process.env.NEWSAPIKEY}`}`

        const news_get =await axios.get(url)

        return res.json(news_get)

        //res.render('news',{articles:news_get.data.articles})
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
}