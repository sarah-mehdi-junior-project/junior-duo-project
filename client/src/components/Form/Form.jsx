import React, { useState, useEffect } from "react";
import {  Button, Typography, Paper } from "@material-ui/core";
import {addGame} from "../../api/api"
import useStyles from "./styles"
import { TextField,FormGroup,Switch,InputLabel, MenuItem, FormControl, Select, Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';




function Form() {
    const [state, setState] = useState({
          gameTitle: '', gameCondition: '',region:"",box:false,owned:true,img:''
    })
    useEffect(()=>{},[])
    const handleSubmit = (e) => {
        e.preventDefault();
         addGame(state)   
    }
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <div autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>
                <Typography variant="h6">Add a new game to your collection</Typography><br />

                <FormControl variant="outlined" fullWidth>
                    <InputLabel id="gameTitle-label">game title</InputLabel>
                    <Select labelId="gameTitle-label" id="gameTitle" value={state.gameTitle} label="gameTitle"
                        onChange={(e) => setState({ ...state, gameTitle: e.target.value })}
                    >
                        <MenuItem value={"mario"}>mario</MenuItem><br/>
                        <MenuItem value={"zelda"}>zelda</MenuItem><br/>
                        <MenuItem value={"metroid"}>metroid</MenuItem><br/>
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
                <TextField name="image url" variant="outlined" label="image" fullWidth value={state.img} onChange={(e) => setState({ ...state, img: e.target.value })} />


                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" onClick={(e) => {handleSubmit(e)}} fullWidth>Add</Button>
                <Button variant="contained" color="secondary" size="small"  fullWidth>Clear</Button>
            </div>
        </Paper>
    )



}
export default Form