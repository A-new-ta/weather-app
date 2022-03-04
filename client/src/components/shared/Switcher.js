import React from 'react';
import Switch from '@material-ui/core/Switch';
import { FormControlLabel, FormControl } from '@material-ui/core';



const Switcher = (props) => {
    
    return (
        <FormControl>
            <FormControlLabel
                value={props.value}
                control={<Switch color='default' />}
                label={props.label}
                labelPlacement={props.labelPlacement}
                onChange={props.onChange}
            />
        </FormControl>
        
    )
}


export default Switcher;