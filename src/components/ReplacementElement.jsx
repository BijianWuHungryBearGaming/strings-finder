import { FormLabel, Grid, Stack, TextField } from "@mui/material";

function ReplacementElement({originalValue, setOriginal, replacementValue, setReplacement}) {
    return <>
        <Grid item xs={12} alignContent={"center"} justifyContent={"center"}>
            <Stack direction="row" spacing={2} sx={{alignItems: "center"}}>
            <FormLabel >Orginal</FormLabel>
            <TextField variant="outlined"  value={originalValue}  onChange={(e)=> setOriginal(e.target.value)} />
            <FormLabel >Replacement</FormLabel>
            <TextField variant="outlined"  value={replacementValue}  onChange={(e)=> setReplacement(e.target.value)} />
        </Stack>
    </Grid>
    </>
}

export default ReplacementElement;
