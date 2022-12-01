import React,{useState,useEffect} from "react";
import HeaderPrimary from "./HeaderPrimary";
import TrendingNews from "./TrendingNews";
import { getUser, getUserPrefrences } from "./helper/userhelper";

const  Home = () => {


    const[error,setError] = useState(false);
    const[user,setUser] = useState({});
    const [prefrences, setPrefrences] = useState({});

    const loadUser = () => {
        getUser().then(data => {
            if(data.error){
                setError(data.error);
            }
            else{
                setUser(data);
                
            }
        })
    }

    useEffect(() => {
        loadUser()
    },[])

    if(user != undefined){
        localStorage.setItem('user', JSON.stringify(user))
    }

    const userId = localStorage.getItem('userId');

    const loadprefrences = () => {
        getUserPrefrences(userId).then(data => {
            if (data.error) {
                setError(data.error);
            }
            else {
                setPrefrences(data);
                console.log(data)
            }
        })
    }

    useEffect(() => {
        loadprefrences()
    }, [])


    return(
        <div>
            <HeaderPrimary />
            <TrendingNews />
        </div>
    )
}

export default Home;