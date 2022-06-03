import axios from 'axios'

const url ='http://localhost:3000/games';


export const addGame=(newGame)=>axios.post(url,newGame)
export const getMyGames=()=>axios.get(url)



