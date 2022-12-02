import { API } from "../../backend";

export const getAllCategories = () => {
    return fetch(`${API}/categories`,{
        method: "GET"
    })
    .then(response => {
        return response.json()
    }).catch(err => console.log(err))
};

export const getAlllocations = () => {
    return fetch(`${API}/locations`,{
        method: "GET"
    })
    .then(response => {
        return response.json()
    }).catch(err => console.log(err))
};

export const getUser = () => {
    return fetch(`${API}/me`,{credentials:"include"},{
        method:"GET",
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
};

export const updateUser = (user,values) => {
    const data = {
        userid: user._id,
        location: values.location,
        prefrence1: values.prefrence1,
        prefrence2: values.prefrence2,
        prefrence3: values.prefrence3
    };

    return fetch(`${API}/updateuser`,{
        method:"PUT",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
};