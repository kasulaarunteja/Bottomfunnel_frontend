import { AUTH, LOADING } from "./ActionType";
// import axios from "axios";


export const setAuth = (payload) => ({
    type:AUTH, payload
})

export const setLoading = (payload) => ({
    type: LOADING, payload
})


export const signupHandler = (details) => async(dispatch)=>{
    dispatch(setLoading(true))
    dispatch(setAuth(false))
    
    const a = await fetch(details[0], {
        method:"POST",
        headers:{
            "Content-Type" : "application/json"
        }
    })
    .then((response) => response.json())
    .then((data) => {
        if(data.status === "success"){
            alert("Please login now!")
            dispatch(setAuth(true))
        }else{
            alert("Please check your creds again!")
        }
        dispatch(setLoading(false))
    })
    .catch((error) => {
        alert("Servr error");
        dispatch(setLoading(false));
    })
}



export const loginHandler = (details) => async(dispatch) => {
    dispatch(setLoading(true))
    dispatch(setLoading(false))
    const a = await fetch(details[0],{
        method:"PORT",
        headers :{
            "Content-Type" :'Application/json'
        },
        body : JSON.stringify(details[1])
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
        if(data.status ==="success"){
            alert("Login Success")
            localStorage.setItem('token', JSON.stringify(data.token))

        }else{
            alert("Please check your vreds agian")
        }
        dispatch(setLoading(false))
    })
    .catch((err)=>{
        alert("serve error");
        dispatch(setLoading(false))
    });
}