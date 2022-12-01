import { API } from "../../backend";


export const getUser = () =>{
    return fetch(`${API}/me`,{credentials:"include"},{
        method: "GET",
    }).then(response =>{
        console.log(response);
        return response.json();
    }).catch(err => console.log(err));
};

export const getUserPrefrences = (userid) =>{
    return fetch(`${API}/prefrences`,{
        method:"POST",
        headers:{
            Accept: "application/json",
            "Content-Type":  "application/json",
        },
        body: JSON.stringify({user : userid})
    }).then(response =>{
        console.log(response);
        return response.text();
    }).catch(err => console.log(err));
}

export const logOut = () => {
    return fetch(`${API}/logout`, { credentials: "include" }, {
        method: "GET",
    }).then(response => {
        console.log(response);
        return response.json();
    }).catch(err => console.log(err));
}

