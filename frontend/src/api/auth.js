
const API_URL = "http://localhost:5001/api/auth"

export const registerUser = async(userData) => {
    try{
const res = await fetch(`${API_URL}/register`,{
    method:"POST",
    headers:{
        "Content-type":"application/json",
    },
    body:JSON.stringify(userData)
})

const data = await res.json();
return data

    } catch (err) {
        return {message:"Network error",err}
    }
}

export const loginUser = async(userData) => {
    try {
const res = await fetch (`${API_URL}/login`,{
    method:"POST",
    headers:{
        "Content-type":"application/json",
    },
    body:JSON.stringify(userData)
})
const data = await res.json()
return data
    } catch(err) {
        return {message:"Network error",err}
    }
}