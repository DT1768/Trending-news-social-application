googleTrends = require("google-trends-api");


exports.newsHome = async(req,res) => {
    var location = req.body.location;
    //TODO: change geo after frontend
    googleTrends.dailyTrends(
        { 
            geo: location
        },
        function(err, results) {
            if (err) {
                console.log(err);
            }else{
                try{
                    var output = results.toString()
                    output = JSON.parse(output)
                    output = output.default.trendingSearchesDays;
                    output = output[0].trendingSearches;
                    //res.send(output);
                    var finalOutput = [];
                    for(var i = 0; i<output.length; i++){
                        finalOutput[i] = {
                            title :output[i].articles[0].title,
                            url :output[i].articles[0].url,
                            image: output[i].image.imageUrl, 
                            snippet: output[i].articles[0].snippet , 
                            source: output[i].articles[0].source , 
                            lastUpdated: output[i].articles[0].timeAgo 
                        };
                    }
                    res.send(finalOutput);
                }
                catch(error){
                    console.log(error);;
                }
            }
        });
    }