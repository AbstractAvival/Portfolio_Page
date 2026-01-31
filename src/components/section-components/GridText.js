'use client'
import { useTranslations } from 'next-intl'

// ** MUI components
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const GridText = ( { size, title, text } ) => {
    const translations = useTranslations()
    return (
        <Grid size={ size  } sx={ { alignItems: 'center', display: 'flex', justifyContent: 'center' } }>
            <Typography>
                { title ? translations( title ) : '' }
            </Typography>
            <Typography>
                { text ? translations( text ) : '' }
            </Typography>
        </Grid>
    )
}

export default GridText