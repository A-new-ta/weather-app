import { Checkbox, FormControlLabel } from '@material-ui/core';
import React, { useContext } from 'react';
import { AppContext } from '../../context/context';


const ZipCode = () => {
    const { isZipCode, setIsZipCode} = useContext(AppContext);
    
    return (
        <FormControlLabel
            control={ <Checkbox color='default' /> }
            label='Zip code'
            labelPlacement='top'
            onChange={() => setIsZipCode(!isZipCode)}
        />
    )
}


export default ZipCode;