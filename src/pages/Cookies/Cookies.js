import Header from "../../components/Header";
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from "react";

const Cookies = () => {

    const names = ['a', 'b', 'c',];

        const [personName, setPersonName] = React.useState([]);

        const handleChangeMultiple = (event) => {
          const { options } = event.target;
          console.log("handleChangeMultiple ~ options", options);

          const value = [];
          
          for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
              value.push(options[i].value);
            }
          }
          setPersonName(value);
          document.cookie = ` Selección cookie= ${value} `;
          localStorage.setItem(`Selección local S.`, `${value}`);

        };

   React.useEffect(()=>{
    if (typeof(Storage) !== "undefined") {
        console.log("LocalStorage disponible");
    } else {
        console.log("LocalStorage No disponible");
    }    
   }
   )

    return (
        <>
            <Header />
            <h1>Cookies de JS</h1>
            <p>Esto se almacena en Google Chrome F12 - Application</p>

            <FormControl sx={{ m: 1, minWidth: 200, maxWidth: 500 }}>
                <InputLabel shrink htmlFor="select-multiple-native">
                    Selecciona
                </InputLabel>
                <Select
                    multiple
                    native
                    value={personName}
                    // @ts-ignore Typings are not considering `native`
                    onChange={handleChangeMultiple}
                    label="Native"
                    inputProps={{
                        id: 'select-multiple-native',
                    }}
                >
                    {names.map((name) => (
                        <option key={name} value={name}>
                            {name}
                        </option>
                    ))}
                </Select>
            </FormControl>

        </>
    )

}


export default Cookies;