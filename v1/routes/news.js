const express = require('express')
const router=express.Router()
const googleTrends = require('google-trends-api');

require('dotenv').config();

router.post('/',async(req,res) => {
    var location = req.body.location;
    //var location = 'IN';
    googleTrends.dailyTrends({ geo: location}, function(err, results) {
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
            finalOutput = [];
            output = "";
            console.log(finalOutput);
        }
        catch(error){
            console.log(error);;
        }
    }
});
})

module.exports=router