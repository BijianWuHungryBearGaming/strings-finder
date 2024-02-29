import { Divider, Grid } from "@mui/material";
import SearchForm from "./components/SearchForm";
import { SnackbarProvider } from "notistack";

function App() {

    return <>

        <SnackbarProvider autoHideDuration={1000}>


            <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12}>
                    <SearchForm label={"Reel set 1"} customIndex={1}/>
                    <Divider>DIVIDER</Divider>
                </Grid>

                <Grid item xs={12} >
                    <SearchForm label={"Reel set 2"} customIndex={2}/>
                    <Divider>DIVIDER</Divider>
                </Grid>

                <Grid item xs={12} >
                    <SearchForm label={"Reel set 3"} customIndex={3}/>
                    <Divider>DIVIDER</Divider>
                </Grid>

                <Grid item xs={12} >
                    <SearchForm label={"Reel set 4"} customIndex={4}/>
                    <Divider>DIVIDER</Divider>
                </Grid>

                <Grid item xs={12} >
                    <SearchForm label={"Reel set 5"} customIndex={5}/>
                    <Divider>DIVIDER</Divider>
                </Grid>

                <Grid item xs={12} >
                    <SearchForm label={"Reel set 6"} customIndex={6}/>
                    <Divider>DIVIDER</Divider>
                </Grid>

                <Grid item xs={12} >
                    <SearchForm label={"Reel set 7"} customIndex={7}/>
                    <Divider>DIVIDER</Divider>
                </Grid>                

            </Grid>

        </SnackbarProvider>

    </>;
}

export default App;
