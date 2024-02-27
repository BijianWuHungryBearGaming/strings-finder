import { Grid } from "@mui/material";
import SearchForm from "./components/SearchForm";

function App() {

    return <>
    <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
            <SearchForm label={"Reel set 1"}/>
        </Grid>

        <Grid item xs={12} >
            <SearchForm label={"Reel set 2"}/>
        </Grid>

        <Grid item xs={12} >
            <SearchForm label={"Reel set 3"}/>
        </Grid>

        <Grid item xs={12} >
            <SearchForm label={"Reel set 4"}/>
        </Grid>

        <Grid item xs={12} >
            <SearchForm label={"Reel set 5"}/>
        </Grid>







    </Grid>

    </>;
}

export default App;
