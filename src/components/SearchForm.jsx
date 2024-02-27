import { Box, Button, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

function SearchForm({label}) {
    const[customLabel, setCustomLabel] = useState(label);
    const[term, setTerm] = useState("");
    const[from, setFrom] = useState("");
    const[result, setResult] = useState("");
    const[numbers, setNumbers] = useState("");
    const[occurrences, setOccurrences] = useState("1");
    const[printNumbers, setPrintNumbers] = useState("3");
    const customHandleSubmmit = async (e) => {
        e.preventDefault();
        
        const arrayStrings = from.split(",").map(str => str.trim());
        setResult("Not Found");
        setNumbers("");
        if(occurrences == "1"){
            for(let i = 0; i < arrayStrings.length; i++){
                if(arrayStrings[i] === term){
                    setResult(i);
                    if(printNumbers == "1"){
                        setNumbers(arrayStrings[i]);
                    } else if(printNumbers == "2"){
                        setNumbers(arrayStrings[i] + "," + arrayStrings[(i + 1) % arrayStrings.length]);
                    } else if(printNumbers == "3"){
                        setNumbers(arrayStrings[i] + "," + arrayStrings[(i + 1) % arrayStrings.length] + "," + arrayStrings[(i + 2) % arrayStrings.length]);
                    } else if(printNumbers == "4"){
                        setNumbers(arrayStrings[i] + "," + arrayStrings[(i + 1) % arrayStrings.length] + "," + arrayStrings[(i + 2) % arrayStrings.length] + "," + arrayStrings[(i + 3) % arrayStrings.length]);
                    } else if(printNumbers == "5"){
                        setNumbers(arrayStrings[i] + "," + arrayStrings[(i + 1) % arrayStrings.length] + "," + arrayStrings[(i + 2) % arrayStrings.length] + "," + arrayStrings[(i + 3) % arrayStrings.length] + "," + arrayStrings[(i + 4) % arrayStrings.length]);
                    }
                    break;
                }
            }
        } else if(occurrences == "2"){
            for(let i = 0; i < arrayStrings.length - 1; i++){
                if(arrayStrings[i] === term && arrayStrings[i + 1] === term){
                    setResult(i);
                    if(printNumbers == "1"){
                        setNumbers(arrayStrings[i]);
                    } else if(printNumbers == "2"){
                        setNumbers(arrayStrings[i] + "," + arrayStrings[(i + 1) % arrayStrings.length]);
                    } else if(printNumbers == "3"){
                        setNumbers(arrayStrings[i] + "," + arrayStrings[(i + 1) % arrayStrings.length] + "," + arrayStrings[(i + 2) % arrayStrings.length]);
                    } else if(printNumbers == "4"){
                        setNumbers(arrayStrings[i] + "," + arrayStrings[(i + 1) % arrayStrings.length] + "," + arrayStrings[(i + 2) % arrayStrings.length] + "," + arrayStrings[(i + 3) % arrayStrings.length]);
                    } else if(printNumbers == "5"){
                        setNumbers(arrayStrings[i] + "," + arrayStrings[(i + 1) % arrayStrings.length] + "," + arrayStrings[(i + 2) % arrayStrings.length] + "," + arrayStrings[(i + 3) % arrayStrings.length] + "," + arrayStrings[(i + 4) % arrayStrings.length]);
                    }
                    break;
                }
            }
        } else if(occurrences == "3"){
            for(let i = 0; i < arrayStrings.length - 2; i++){
                if(arrayStrings[i] === term && arrayStrings[i + 1] === term && arrayStrings[i + 2] === term){
                    setResult(i);
                    if(printNumbers == "1"){
                        setNumbers(arrayStrings[i]);
                    } else if(printNumbers == "2"){
                        setNumbers(arrayStrings[i] + "," + arrayStrings[(i + 1) % arrayStrings.length]);
                    } else if(printNumbers == "3"){
                        setNumbers(arrayStrings[i] + "," + arrayStrings[(i + 1) % arrayStrings.length] + "," + arrayStrings[(i + 2) % arrayStrings.length]);
                    } else if(printNumbers == "4"){
                        setNumbers(arrayStrings[i] + "," + arrayStrings[(i + 1) % arrayStrings.length] + "," + arrayStrings[(i + 2) % arrayStrings.length] + "," + arrayStrings[(i + 3) % arrayStrings.length]);
                    } else if(printNumbers == "5"){
                        setNumbers(arrayStrings[i] + "," + arrayStrings[(i + 1) % arrayStrings.length] + "," + arrayStrings[(i + 2) % arrayStrings.length] + "," + arrayStrings[(i + 3) % arrayStrings.length] + "," + arrayStrings[(i + 4) % arrayStrings.length]);
                    }
                    break;
                }
            }
        } else if(occurrences == "4"){
            for(let i = 0; i < arrayStrings.length - 3; i++){
                if(arrayStrings[i] === term && arrayStrings[i + 1] === term && arrayStrings[i + 2] === term && arrayStrings[i + 3] === term){
                    setResult(i);
                    if(printNumbers == "1"){
                        setNumbers(arrayStrings[i]);
                    } else if(printNumbers == "2"){
                        setNumbers(arrayStrings[i] + "," + arrayStrings[(i + 1) % arrayStrings.length]);
                    } else if(printNumbers == "3"){
                        setNumbers(arrayStrings[i] + "," + arrayStrings[(i + 1) % arrayStrings.length] + "," + arrayStrings[(i + 2) % arrayStrings.length]);
                    } else if(printNumbers == "4"){
                        setNumbers(arrayStrings[i] + "," + arrayStrings[(i + 1) % arrayStrings.length] + "," + arrayStrings[(i + 2) % arrayStrings.length] + "," + arrayStrings[(i + 3) % arrayStrings.length]);
                    } else if(printNumbers == "5"){
                        setNumbers(arrayStrings[i] + "," + arrayStrings[(i + 1) % arrayStrings.length] + "," + arrayStrings[(i + 2) % arrayStrings.length] + "," + arrayStrings[(i + 3) % arrayStrings.length] + "," + arrayStrings[(i + 4) % arrayStrings.length]);
                    }
                    break;
                }
            }
        } else if(occurrences == "5"){
            for(let i = 0; i < arrayStrings.length - 4; i++){
                if(arrayStrings[i] === term && arrayStrings[i + 1] === term && arrayStrings[i + 2] === term && arrayStrings[i + 3] === term && arrayStrings[i + 4] === term){
                    setResult(i);
                    if(printNumbers == "1"){
                        setNumbers(arrayStrings[i]);
                    } else if(printNumbers == "2"){
                        setNumbers(arrayStrings[i] + "," + arrayStrings[(i + 1) % arrayStrings.length]);
                    } else if(printNumbers == "3"){
                        setNumbers(arrayStrings[i] + "," + arrayStrings[(i + 1) % arrayStrings.length] + "," + arrayStrings[(i + 2) % arrayStrings.length]);
                    } else if(printNumbers == "4"){
                        setNumbers(arrayStrings[i] + "," + arrayStrings[(i + 1) % arrayStrings.length] + "," + arrayStrings[(i + 2) % arrayStrings.length] + "," + arrayStrings[(i + 3) % arrayStrings.length]);
                    } else if(printNumbers == "5"){
                        setNumbers(arrayStrings[i] + "," + arrayStrings[(i + 1) % arrayStrings.length] + "," + arrayStrings[(i + 2) % arrayStrings.length] + "," + arrayStrings[(i + 3) % arrayStrings.length] + "," + arrayStrings[(i + 4) % arrayStrings.length]);
                    }
                    break;
                }
            }
        } else if(occurrences == "6"){
            for(let i = 0; i < arrayStrings.length - 5; i++){
                if(arrayStrings[i] === term && arrayStrings[i + 1] === term && arrayStrings[i + 2] === term && arrayStrings[i + 3] === term && arrayStrings[i + 4] === term && arrayStrings[i + 5] === term){
                    setResult(i);
                    if(printNumbers == "1"){
                        setNumbers(arrayStrings[i]);
                    } else if(printNumbers == "2"){
                        setNumbers(arrayStrings[i] + "," + arrayStrings[(i + 1) % arrayStrings.length]);
                    } else if(printNumbers == "3"){
                        setNumbers(arrayStrings[i] + "," + arrayStrings[(i + 1) % arrayStrings.length] + "," + arrayStrings[(i + 2) % arrayStrings.length]);
                    } else if(printNumbers == "4"){
                        setNumbers(arrayStrings[i] + "," + arrayStrings[(i + 1) % arrayStrings.length] + "," + arrayStrings[(i + 2) % arrayStrings.length] + "," + arrayStrings[(i + 3) % arrayStrings.length]);
                    } else if(printNumbers == "5"){
                        setNumbers(arrayStrings[i] + "," + arrayStrings[(i + 1) % arrayStrings.length] + "," + arrayStrings[(i + 2) % arrayStrings.length] + "," + arrayStrings[(i + 3) % arrayStrings.length] + "," + arrayStrings[(i + 4) % arrayStrings.length]);
                    }
                    break;
                }
            }
        }


        console.log("submitted " + occurrences);
    }

    return (<>
        <form onSubmit={customHandleSubmmit}>
            <Paper elevation={10}>
                <Grid container rowSpacing={1} columnSpacing={3}   
                width={"100%"}
                    direction="column"
                    justifyContent="center"
                    alignItems="center">

                <Grid item xs={12} alignContent={"center"} justifyContent={"center"}>
                    <Stack direction="row" spacing={2} sx={{alignItems: "center"}}>

                        <FormLabel>Label</FormLabel>
                        <TextField        
                             variant="filled"  value={customLabel}  onChange={(e)=> setCustomLabel(e.target.value)} 
                        />
                    </Stack>
                </Grid>

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
                            name={`Occurrence`}
                            row
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
                        <FormLabel required>Show Numbers</FormLabel>
                        <RadioGroup
                            name={`Show Numbers`}
                            row
                            value={printNumbers}
                            onChange={ (e) => setPrintNumbers(e.target.value)}

                        >
                            <FormControlLabel value={0} control={<Radio />} label="0" />
                            <FormControlLabel value={1} control={<Radio />} label="1" />
                            <FormControlLabel value={2} control={<Radio />} label="2" />
                            <FormControlLabel value={3} control={<Radio />} label="3" />
                            <FormControlLabel value={4} control={<Radio />} label="4" />
                            <FormControlLabel value={5} control={<Radio />} label="5" />
                        </RadioGroup> 
                    </Stack>
                </Grid>
                
                <Grid item xs={12}>

                    <Stack direction="row" spacing={2} sx={{alignItems: "center"}}>
                        <FormLabel required>From</FormLabel>
                        <TextField        
                            sx={{ "minWidth": "90vw"}}  fullWidth  variant="outlined" required value={from}  onChange={(e)=> setFrom(e.target.value)}  multiline
                            rows={4}
                        />

                    </Stack>
                </Grid>

                <Grid item xs={12}>
                    <Stack direction="row" spacing={2} sx={{alignItems: "center"}}>
                        <FormLabel >At Index</FormLabel>
                        <TextField id="outlined-basic" variant="standard" value={result} disabled />
                    </Stack>
                </Grid>                        

                <Grid item xs={12}>
                    <Stack direction="row" spacing={2} sx={{alignItems: "center"}}>
                        <FormLabel >numbers</FormLabel>
                        <TextField id="outlined-basic" variant="standard" value={numbers} disabled />
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
