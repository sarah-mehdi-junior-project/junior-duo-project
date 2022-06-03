import axios from 'axios'

const url ='http://localhost:3000/games';
const url2 ='http://localhost:3000/fullset';


export const addGame=(newGame)=>axios.post(url,newGame)
export const getMyGames=()=>axios.get(url)
export const deleteGame=(id)=>axios.delete(`${url}/${id}`)
export const getGames=()=>axios.get(url2)




