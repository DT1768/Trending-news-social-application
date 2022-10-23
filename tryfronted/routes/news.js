const express = require('express')
const axios = require('axios')
const newsr=express.Router()
const moment = require('moment')
const math = require('math')

require('dotenv').config();


newsr.get('/',async(req,res)=>{
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
})

newsr.post('/category',async(req,res)=>{
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
})

newsr.post('/search',async(req,res)=>{
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
})


module.exports=newsr