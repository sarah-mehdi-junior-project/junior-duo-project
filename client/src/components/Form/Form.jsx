import React, { useState, useEffect } from "react";
import {  Button, Typography, Paper } from "@material-ui/core";
import {addGame} from "../../api/api"
import useStyles from "./styles"
import { TextField,FormGroup,Switch,InputLabel, MenuItem, FormControl, Select, Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';




function Form({data}) {
    const [state, setState] = useState({
          gameTitle: '', gameCondition: '',region:"",box:false,owned:true,img:''
    })
    // const image = (game) => {
    //     var array= data.filter((e)=>e.gameTitle===game)
    //     console.log(array);
    //     setState({ ...state, img: array[0].img })
    // }
    // useEffect((gameTitle)=>{
    //     var array= data.filter((e)=>e.gameTitle===gameTitle)
    //     console.log(array);
    //     setState({ ...state, img: array[0].img })}
    //     ,[state.gameTitle])
    const handleTitleChange=(e)=>{
        var array= data.filter((elem)=>elem.gameTitle===e.target.value)
            console.log(array);
            setState({ ...state, img: array[0].img,gameTitle:array[0].gameTitle })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
         addGame(state)
    }
    const classes = useStyles();
    return (
        <Paper style={{backgroundImage: `url("https://images7.alphacoders.com/559/559696.jpg")`,opacity: "1",backgroundSize:"cover"}} className={classes.paper}>
            <div autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>
                <Typography variant="h6">Add a new game to your collection</Typography><br />

                <FormControl variant="outlined" fullWidth>
                    <InputLabel id="gameTitle-label">game title</InputLabel>
                    <Select labelId="gameTitle-label" id="gameTitle" value={state.gameTitle} label="gameTitle"
                        onChange={(e) => { handleTitleChange(e) }}
                    >{data.map((e,i)=>{
                        return(<MenuItem value={`${e.gameTitle}`} key={i}>{e.gameTitle}</MenuItem>)
                        })}
                    </Select>
                </FormControl>
                <FormControl variant="outlined" fullWidth>
                    <InputLabel id="gameCondition-label">game condition</InputLabel>
                    <Select labelId="gameCondition-label" id="gameCondition" value={state.gameCondition} label="gameCondition"
                        onChange={(e) => setState({ ...state, gameCondition: e.target.value })}
                    >
                        <MenuItem value={"mediocre"}>mediocre </MenuItem><br/>
                        <MenuItem value={"medium"}>medium </MenuItem><br/>
                        <MenuItem value={"mint"}>mint </MenuItem><br/>
                    </Select>
                </FormControl>
               
                <FormGroup>
                    <FormControlLabel onChange={(e) =>{ setState({ ...state, box: !state.box })}} control={<Switch />} label="Box" />
                </FormGroup>
                <FormControl variant="outlined" fullWidth>
                    <InputLabel id="region-label">game region</InputLabel>
                    <Select labelId="region-label" id="region" value={state.region} label="region"
                        onChange={(e) => setState({ ...state, region: e.target.value })}
                    >
                        <MenuItem value={"EU"}>EU</MenuItem><br/>
                        <MenuItem value={"USA"}>USA</MenuItem><br/>
                        <MenuItem value={"JAPAN"}>JAPAN</MenuItem><br/>
                    </Select>
                </FormControl>


                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" onClick={(e) => {handleSubmit(e)}} fullWidth>Add</Button>
            </div>
        </Paper>
    )



}
export default Form