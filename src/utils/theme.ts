'use client';

import {createTheme} from "@mui/material";

const theme = createTheme({
    palette: {
      mode: 'dark',
    },
    components: {
        // Name of the component ⚛️
        MuiButtonBase: {
            defaultProps: {
                // The props to apply
                disableRipple: true, // No more ripple, on the whole application 💣!
            },
        },
    },
});

export { theme };