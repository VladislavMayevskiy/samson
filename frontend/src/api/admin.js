import axios from "axios"

export async function getAdminAPI() {
const token = localStorage.getItem("token")
if (!token) return null
try {
    const res = await axios.get("http://localhost:5001/admin",{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data
} catch(err) {
    return err
}
}