import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Button, Grid, Typography, TextField, FormHelperText, FormControl, Radio, RadioGroup, FormControlLabel } from "@mui/material"

export const CreateRoomPage = () => {
    var defaultVotes = 2

    const [guestCanPause, setGuestCanPause] = useState(true)
    const [votesToSkip, setVotesToSkip] = useState(defaultVotes)
    
    
    const handleVotesChange = (e) => {
        setVotesToSkip(e.target.value)
    }

    const handleGuestCanPauseChange = (e) => {
        setGuestCanPause(e.target.value === "true" ? true : false)
    }

    const handleRoomButtonPressed = () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify({
                votes_to_skip: votesToSkip,
                guest_can_pause: guestCanPause
            }),
        };
        fetch("/api/create-room", requestOptions)
            .then((response) => response.json())
            .then((data) => console.log(data))
    }

    defaultVotes = 2;
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography>
                    Create a Room
                </Typography>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl component="fieldset">
                    <FormHelperText>
                       Guest Control of Playback State
                    </FormHelperText>
                    <RadioGroup row defaultValue="true" onChange={handleGuestCanPauseChange}>
                        <FormControlLabel value="true" control={<Radio color="primary"/>} label="Play/Pause" labelPlacement="bottom" />        
                        <FormControlLabel value="false" control={<Radio color="secondary"/>} label="No Control" labelPlacement="bottom" />        
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <FormControl component="fieldset">
                    <TextField 
                        required={true}
                        type="number"
                        onChange={handleVotesChange}
                        defaultValue={defaultVotes}
                        inputProps={{
                            min: 1,
                            style: { textAlign: "center" }
                        }}
                    />
                    <FormHelperText>
                       Votes Required to Skip Song
                    </FormHelperText>
                </FormControl>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="primary" variant="contained" onClick={handleRoomButtonPressed}> Create a Room </Button>
            </Grid>
            <Grid item xs={12} align="center">
                <Button color="secondary" variant="contained" to="/" component={Link}> Back </Button>
            </Grid>
        </Grid>    )
}