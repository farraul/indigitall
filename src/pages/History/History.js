import Header from "../../components/Header";
import Button from '@mui/material/Button';
import history from "../../history";


const LazyLoad = () => {

    const returnHistory = () => {
        history.back()
    }


    return (
        <>
            <Header />
            <h1>
                History NPM
            </h1>
            <p>
                history - npm
            </p>
            <Button variant="contained" onClick={returnHistory}>Volver atrás</Button>


        </>
    )
}
export default LazyLoad;