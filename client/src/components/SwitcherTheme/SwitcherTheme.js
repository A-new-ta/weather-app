import React from 'react';
import Switch from '@material-ui/core/Switch';
import { FormControlLabel, FormControl } from '@material-ui/core';


const SwitcherTheme = () => {
    
    return (
        <FormControl>
            <FormControlLabel
                value='degrees'
                control={<Switch color='default' />}
                label='Dark theme'
                labelPlacement="top"
            />
        </FormControl>
        
    )
}


export default SwitcherTheme;
