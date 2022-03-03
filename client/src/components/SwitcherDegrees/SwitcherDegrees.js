import React from 'react';
import Switch from '@material-ui/core/Switch';
import { FormControlLabel, FormControl } from '@material-ui/core';



const SwitcherDegrees = () => {
    
    return (
        <FormControl>
            <FormControlLabel
                value="degrees"
                control={<Switch color='default' />}
                label="°C | °F"
                labelPlacement="top"
            />
        </FormControl>
        
    )
}


export default SwitcherDegrees;
