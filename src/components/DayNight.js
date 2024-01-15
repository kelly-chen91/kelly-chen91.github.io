import * as React from 'react'
import FormGroup from '@mui/material/FormGroup'
import { FormControlLabel } from '@mui/material'
import Switch from '@mui/material/Switch'
import useMediaQuery from 'react-responsive'
// import { useState } from 'react';
export default function BackgroundButton() {
    const [isDarkMode, setDarkMode] = React.useState(false);
    const systemPrefersDark = useMediaQuery(
        {
            query: "(prefers-color-scheme: dark)",
        },
        undefined,
        (isSystemDark) => setDarkMode(isSystemDark)
    );

    React.useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('DarkMode')
        }
        else document.body.classList.remove('DarkMode')
    }, [isDarkMode]);
    return (
        <FormGroup className='nightModeContainer'>
            <FormControlLabel className='NightMode' control={
                <Switch
                    checked={isDarkMode}
                    onChange={({ target }) => setDarkMode(target.checked)}
                    icons={{ checked: "🌙", unchecked: "🔆" }} />
            } label="Night Mode" />
        </FormGroup>
    );
}