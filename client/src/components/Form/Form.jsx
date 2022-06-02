import React, { useState, useEffect } from "react";
import {  TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./styles"
import { FormGroup,Switch,InputLabel, MenuItem, FormControl, Select, Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';




function Form() {
    const [state, setState] = useState({
        creator: '', dogName: '', message: '', tags: '', selectedFild: '', gameTitle: '', gameState: ''
    })

    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <div autoComplete="off" noValidate className={`${classes.root} ${classes.form}`}>
                <Typography variant="h6">share your dog joy</Typography><br />

                <FormControl variant="outlined" fullWidth>
                    <InputLabel id="gameTitle-label">game title</InputLabel>
                    <Select labelId="gameTitle-label" id="gameTitle" value={state.gameTitle} label="gameTitle"
                        onChange={() => { }}
                    >
                        <MenuItem value={"mario"}>mario</MenuItem>
                        <MenuItem value={"zelda"}>zelda</MenuItem>
                        <MenuItem value={"metroid"}>metroid</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" fullWidth>
                    <InputLabel id="gameState-label">game state</InputLabel>
                    <Select labelId="gameState-label" id="gameState" value={state.gameState} label="gameTitle"
                        onChange={() => { }}
                    >
                        <MenuItem value={"mediocre"}>mediocre</MenuItem>
                        <MenuItem value={"medium"}>medium</MenuItem>
                        <MenuItem value={"mint"}>mint</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel id="condition-group-label">condition</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="condition-group-label"
                        name="condition-group"
                    >
                        <FormControlLabel value="mediocre" control={<Radio />} label="mediocre" />
                        <FormControlLabel value="normal" control={<Radio />} label="normal" />
                        <FormControlLabel value="mint" control={<Radio />} label="mint" />
                    </RadioGroup>
                </FormControl>
                <FormGroup>
                    <FormControlLabel  control={<Switch />} label="Disabled" />
                </FormGroup>
                <FormControl variant="outlined" fullWidth>
                    <InputLabel id="region-label">game state</InputLabel>
                    <Select labelId="region-label" id="region" value={state.region} label="region"
                        onChange={() => { }}
                    >
                        <MenuItem value={"EU"}>EU</MenuItem>
                        <MenuItem value={"USA"}>USA</MenuItem>
                        <MenuItem value={"JAPAN"}>JAPAN</MenuItem>
                    </Select>
                </FormControl>

                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" onClick={() => { }} fullWidth>Add</Button>
                <Button variant="contained" color="secondary" size="small" onClick={() => { }} fullWidth>Clear</Button>
            </div>
        </Paper>
    )



}
export default Form