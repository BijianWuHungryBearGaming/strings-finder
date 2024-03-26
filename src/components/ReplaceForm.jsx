import { Box, Button, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, Stack, TextField, Typography } from "@mui/material";
import { closeSnackbar, enqueueSnackbar } from "notistack";
import { useState } from "react";
import ReplacementElement from "./ReplacementElement";

function ReplaceForm({label, customIndex}) {
    const [original1, setOriginal1] = useState("");
    const [original2, setOriginal2] = useState("");
    const [original3, setOriginal3] = useState("");
    const [original4, setOriginal4] = useState("");
    const [original5, setOriginal5] = useState("");
    const [original6, setOriginal6] = useState("");
    const [original7, setOriginal7] = useState("");
    const [original8, setOriginal8] = useState("");
    const [original9, setOriginal9] = useState("");
    const [original10, setOriginal10] = useState("");
    const [original11, setOriginal11] = useState("");
    const [original12, setOriginal12] = useState("");

    const [repalcement1, setReplacement1] = useState("");
    const [repalcement2, setReplacement2] = useState("");
    const [repalcement3, setReplacement3] = useState("");
    const [repalcement4, setReplacement4] = useState("");
    const [repalcement5, setReplacement5] = useState("");
    const [repalcement6, setReplacement6] = useState("");
    const [repalcement7, setReplacement7] = useState("");
    const [repalcement8, setReplacement8] = useState("");
    const [repalcement9, setReplacement9] = useState("");
    const [repalcement10, setReplacement10] = useState("");
    const [repalcement11, setReplacement11] = useState("");
    const [repalcement12, setReplacement12] = useState("");

    const [originalBody, setOriginalBody] = useState("");

    const[customLabel, setCustomLabel] = useState(label);

    const[result, setResult] = useState("");
    



    const customHandleSubmmit = async (e) => {
        e.preventDefault();
        
        const arrayStrings = originalBody.split(",").map(str => str.trim());

        if(originalBody.trim() === "" || arrayStrings.length === 0) {
            enqueueSnackbar("Please input the transform body", {variant: 'error'});
            return;
        }

        for(let i = 0; i < arrayStrings.length; i++){

            if(arrayStrings[i] === original1){
                arrayStrings[i] = repalcement1;
            }

            if(arrayStrings[i] === original2){
                arrayStrings[i] = repalcement2;
            }

            if(arrayStrings[i] === original3){
                arrayStrings[i] = repalcement3;
            }

            if(arrayStrings[i] === original4){
                arrayStrings[i] = repalcement4;
            }

            if(arrayStrings[i] === original5){
                arrayStrings[i] = repalcement5;
            }

            if(arrayStrings[i] === original6){
                arrayStrings[i] = repalcement6;
            }

            if(arrayStrings[i] === original7){
                arrayStrings[i] = repalcement7;
            }

            if(arrayStrings[i] === original8){
                arrayStrings[i] = repalcement8;
            }

            if(arrayStrings[i] === original9){
                arrayStrings[i] = repalcement9;
            }

            if(arrayStrings[i] === original10){
                arrayStrings[i] = repalcement10;
            }

            if(arrayStrings[i] === original11){
                arrayStrings[i] = repalcement11;
            }

            if(arrayStrings[i] === original12){
                arrayStrings[i] = repalcement12;
            }
        
        }

        let finalString = "";
        for(let i = 0; i < arrayStrings.length; i++){

            if(i === (arrayStrings.length - 1)){
                finalString += arrayStrings[i];
            } else {
                finalString += arrayStrings[i] + ",";
            }
        }
        enqueueSnackbar("Done transformation", {variant: 'success'});
        setResult(finalString);

    }

    return (<>
        <form onSubmit={customHandleSubmmit}>
            <Paper elevation={10} sx={{ py: 2}} key={customIndex}>
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

                <ReplacementElement originalValue={original1} setOriginal={setOriginal1} replacementValue={repalcement1} setReplacement={setReplacement1} />
                <ReplacementElement originalValue={original2} setOriginal={setOriginal2} replacementValue={repalcement2} setReplacement={setReplacement2} />
                <ReplacementElement originalValue={original3} setOriginal={setOriginal3} replacementValue={repalcement3} setReplacement={setReplacement3} />
                <ReplacementElement originalValue={original4} setOriginal={setOriginal4} replacementValue={repalcement4} setReplacement={setReplacement4} />
                <ReplacementElement originalValue={original5} setOriginal={setOriginal5} replacementValue={repalcement5} setReplacement={setReplacement5} />
                <ReplacementElement originalValue={original6} setOriginal={setOriginal6} replacementValue={repalcement6} setReplacement={setReplacement6} />
                <ReplacementElement originalValue={original7} setOriginal={setOriginal7} replacementValue={repalcement7} setReplacement={setReplacement7} />
                <ReplacementElement originalValue={original8} setOriginal={setOriginal8} replacementValue={repalcement8} setReplacement={setReplacement8} />
                <ReplacementElement originalValue={original9} setOriginal={setOriginal9} replacementValue={repalcement9} setReplacement={setReplacement9} />
                <ReplacementElement originalValue={original10} setOriginal={setOriginal10} replacementValue={repalcement10} setReplacement={setReplacement10} />
                <ReplacementElement originalValue={original11} setOriginal={setOriginal11} replacementValue={repalcement11} setReplacement={setReplacement11} />
                <ReplacementElement originalValue={original12} setOriginal={setOriginal12} replacementValue={repalcement12} setReplacement={setReplacement12} />
                
                <Grid item xs={12}>

                    <Stack direction="row" spacing={2} sx={{alignItems: "center"}}>
                        <FormLabel required>Body</FormLabel>
                        <TextField        
                            sx={{ "minWidth": "90vw"}}  fullWidth  variant="outlined" required value={originalBody}  onChange={(e)=> setOriginalBody(e.target.value)}  multiline
                            rows={4} 
                        />

                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="success" size="large" sx={{m:1}}> {"Transform"}</Button>
                    <Button  variant="contained" color="warning" size="large" sx={{m:1}} onClick={() => setResult("")}> {"Clear"}</Button>
                </Grid>    

                <Grid item xs={12} flexWrap={"wrap"} key={"final transformed outcome"}>
                        <Paper sx={{p: 3}} >

                            <Stack direction="row" spacing={2} sx={{alignItems: "center"}}>
                                <FormLabel >Result</FormLabel>
                                <TextField        
                                    sx={{ "minWidth": "90vw"}}  fullWidth  variant="outlined" value={result}    multiline
                                    rows={4} disabled
                                />
                                {/* <TextField id="outlined-basic" variant="standard" value={result} disabled /> */}
                            </Stack>
                        </Paper>

                </Grid>  

                       



          




                </Grid>
            </Paper>

        </form>
    </>);
}

export default ReplaceForm;
