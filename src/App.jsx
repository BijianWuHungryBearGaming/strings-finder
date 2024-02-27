import { Grid } from "@mui/material";
import SearchForm from "./components/SearchForm";

function App() {

    return <>
    <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={12}>
            <SearchForm />
        </Grid>

        <Grid item xs={12}>
            <SearchForm />
        </Grid>

        <Grid item xs={12}>
            <SearchForm />
        </Grid>

        <Grid item xs={12}>
            <SearchForm />
        </Grid>

        <Grid item xs={12}>
            <SearchForm />
        </Grid>







    </Grid>

    </>;
}

export default App;
