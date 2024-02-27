import { Box, Button, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, Stack, TextField } from "@mui/material";
import { useState } from "react";

function SearchForm() {
    const[term, setTerm] = useState("");
    const[from, setFrom] = useState("");
    const[result, setResult] = useState("");
    const[occurrences, setOccurrences] = useState("1");
    const customHandleSubmmit = async (e) => {
        e.preventDefault();
        
        const arrayStrings =  from.split(",");
        setResult("Not Found");
        if(occurrences == "1"){
            for(let i = 0; i < arrayStrings.length; i++){
                if(arrayStrings[i] === term){
                    setResult(i);
                    break;
                }
            }
        } else if(occurrences == "2"){
            for(let i = 0; i < arrayStrings.length - 1; i++){
                if(arrayStrings[i] === term && arrayStrings[i + 1] === term){
                    setResult(i);
                    break;
                }
            }
        } else if(occurrences == "3"){
            for(let i = 0; i < arrayStrings.length - 2; i++){
                if(arrayStrings[i] === term && arrayStrings[i + 1] === term && arrayStrings[i + 2] === term){
                    setResult(i);
                    break;
                }
            }
        } else if(occurrences == "4"){
            for(let i = 0; i < arrayStrings.length - 3; i++){
                if(arrayStrings[i] === term && arrayStrings[i + 1] === term && arrayStrings[i + 2] === term && arrayStrings[i + 3] === term){
                    setResult(i);
                    break;
                }
            }
        } else if(occurrences == "5"){
            for(let i = 0; i < arrayStrings.length - 4; i++){
                if(arrayStrings[i] === term && arrayStrings[i + 1] === term && arrayStrings[i + 2] === term && arrayStrings[i + 3] === term && arrayStrings[i + 4] === term){
                    setResult(i);
                    break;
                }
            }
        } else if(occurrences == "6"){
            for(let i = 0; i < arrayStrings.length - 5; i++){
                if(arrayStrings[i] === term && arrayStrings[i + 1] === term && arrayStrings[i + 2] === term && arrayStrings[i + 3] === term && arrayStrings[i + 4] === term && arrayStrings[i + 5] === term){
                    setResult(i);
                    break;
                }
            }
        }


        console.log("submitted " + occurrences);
    }

    return (<>
        <form onSubmit={customHandleSubmmit}>
            <Paper elevation={10}>
                <Grid container rowSpacing={1} columnSpacing={3}   direction="column"
  justifyContent="center"
  alignItems="center">

                <Grid item xs={12} alignContent={"center"} justifyContent={"center"}>
                    <Stack direction="row" spacing={2} sx={{alignItems: "center"}}>
                        <FormLabel required>Search Term</FormLabel>
                        <TextField        
                            sx={{ "minWidth": "300px"}} name={"mainTitle"}  variant="outlined" required value={term}  onChange={(e)=> setTerm(e.target.value)} 
                        />
                    </Stack>
                </Grid>

                <Grid item xs={12}>

                    <Stack direction="row" spacing={2} sx={{alignItems: "center"}}>
                        <FormLabel required>Occurrence</FormLabel>
                        <RadioGroup
                            name={`count`}
                            row
                            aria-labelledby="botDelay-radio-buttons-group-label"
                            value={occurrences}
                            onChange={ (e) => setOccurrences(e.target.value)}

                        >
                            <FormControlLabel value={1} control={<Radio />} label="1" />
                            <FormControlLabel value={2} control={<Radio />} label="2" />
                            <FormControlLabel value={3} control={<Radio />} label="3" />
                            <FormControlLabel value={4} control={<Radio />} label="4" />
                            <FormControlLabel value={5} control={<Radio />} label="5" />
                            <FormControlLabel value={6} control={<Radio />} label="6" />
                        </RadioGroup> 
                    </Stack>


                </Grid>
                
                <Grid item xs={12}>

                    <Stack direction="row" spacing={2} sx={{alignItems: "center"}}>
                        <FormLabel required>From</FormLabel>
                        <TextField        
                            sx={{ "minWidth": "500px"}} label="Result" name={"mainTitle"}  variant="outlined" required value={from}  onChange={(e)=> setFrom(e.target.value)} 
                        />

                    </Stack>
                </Grid>

                <Grid item xs={12}>
                    <Stack direction="row" spacing={2} sx={{alignItems: "center"}}>
                        <FormLabel >Result</FormLabel>
                        <TextField id="outlined-basic" variant="standard" value={result} disabled />

                    </Stack>

                </Grid>                                                

                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="success" size="large" sx={{m:1}}> {"Search"}</Button>
                </Grid>    

          




                </Grid>
            </Paper>

        </form>
    </>);
}

export default SearchForm;
