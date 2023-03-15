// const apiTop="https://qtify-backend-labs.crio.do/albums/top"

// const apiNew="https://qtify-backend-labs.crio.do/albums/new"
import axios from "axios"

const BACKEND_URL="https://qtify-backend-labs.crio.do"

export const fetchTopSongs=async ()=>{
    const response=await axios.get(`${BACKEND_URL}/albums/top`)
    return response.data;


}