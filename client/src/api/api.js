import axios from 'axios'

const url ='http://localhost:3000/add';


export const addGame=(newGame)=>axios.post(url,newGame)


