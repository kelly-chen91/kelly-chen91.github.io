import FormGroup from '@mui/material/FormGroup'
import { FormControlLabel } from '@mui/material'
import Switch from '@mui/material/Switch'
export default function BackgroundButton() {
    return (
        <FormGroup className='nightModeContainer'>
            <FormControlLabel className='nightMode' control={<Switch />} label="Night Mode" />
        </FormGroup>
    );
}