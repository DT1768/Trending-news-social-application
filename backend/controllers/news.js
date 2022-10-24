
exports.newsHome = async(req,res)=>{
    try {
        var url = 'http://newsapi.org/v2/top-headlines?' +
        'country=ca&' +
        `apiKey=${process.env.NEWSAPIKEY}`;
        const news_get =await axios.get(url)
        res.render('news',{articles:news_get.data.articles})
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
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
        res.render('news',{articles:news_get.data.articles})
    } catch (error) {
        if(error.response){
            console.log(error)
        }
    }
}