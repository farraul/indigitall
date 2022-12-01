import Header from "../../components/Header";
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';


const Cookies = () => {
    const [characters, setCharacters] = useState()
    const [firstNames, setFirstNames] = useState([{ name: "initial", id: 0 }])

    const callApi = () => {

        fetch("https://rickandmortyapi.com/api/character")
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results)
                setFirstNames(
                    data?.results?.map((element, position) => {
                        return {
                            name: element.name.split(" ").slice(0, 2).join(" "),
                            id: position
                        }
                    })
                )
            })

    }

    const columns = [
        { field: 'name', headerName: 'ID', width: 200 },
    ];

    const rows = firstNames;

    useEffect(() => {
        callApi()
    }, [])

    return (
        <>
            <Header />
            <h1>Llamadas</h1>

            <div style={{ height: 500, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>

        </>
    )

}

export default Cookies;