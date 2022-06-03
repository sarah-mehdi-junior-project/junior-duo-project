import NewGame from "../models/newGame.js"
// export const getPosts=async(req,res)=>{
//     try{
//         console.log("get here");
//         const postMessages=await postMessage.find();
//         res.status(200).json(postMessages)
//     }catch(error){
//         res.status(404).json({message:error.message})
//     }
// }
export const createGame=async(req,res)=>{
    console.log("post here");
    const game=req.body
    const newGame=new NewGame(game)

    try{
        await newGame.save()
        res.status(201).json(newGame)
    }catch(error){
        res.status(409).json({message:error.message})
    }
}
// export const updatePost=async(req,res)=>{
//     const {id:_id}=req.params
//     const post=req.body
//     const updatePost=await postMessage.findByIdAndUpdate(_id,post,{new:true})
//     res.json(updatePost)
// }
// export const deletePost=async(req,res)=>{
//     const {id}=req.params
//     await postMessage.findByIdAndDelete(id)
//     res.send("post deleted")
// }