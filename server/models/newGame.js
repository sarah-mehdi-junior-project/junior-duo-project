import mongoose from "mongoose";


const gameSchema=mongoose.Schema({
    gameTitle:String,
    gameCondition:String,
    region:String,
    owned:{
        type:Boolean,
        default:false
    },box:{
        type:Boolean,
        default:false
    },
    img:String
    
});
const NewGame = mongoose.model('newGame',gameSchema);
export default NewGame;