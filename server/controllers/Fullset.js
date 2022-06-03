import NewfsGame from "../models/fullSet.js"
export const getGames=async(req,res)=>{
    try{       
        const games=await NewfsGame.find({});
        console.log(games);
        res.status(200).json(games)
    }catch(error){
        res.status(404).json({message:error.message})
    }
}