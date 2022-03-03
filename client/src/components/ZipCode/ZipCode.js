import { Checkbox, FormControlLabel } from '@material-ui/core';
import React from 'react';


const ZipCode = () => {
    
    return (
        <FormControlLabel
            control={
                <Checkbox
                    color='default'
                />
        }
            label='Zip code'
            labelPlacement='top'
        />
        
    )
}


export default ZipCode;