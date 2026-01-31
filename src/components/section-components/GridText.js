import { useTranslations } from 'next-intl'

// ** MUI components
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const GridText = ( { size, title, text } ) => {
    return (
        <Grid size={ size  }>
            <Typography>
                { useTranslations( title ) }
            </Typography>
            <Typography>
                { useTranslations( text ) }
            </Typography>
        </Grid>
    )
}

export default GridText