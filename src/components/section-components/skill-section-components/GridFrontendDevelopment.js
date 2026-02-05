// ** Component Imports
import TranslatedText from '@/components/section-components/TranslatedText'

// ** MUI components
import Grid from '@mui/material/Grid'

const GridFrontendDevelopment = ( { items } ) => {
    return (
        <Grid container>
            <Grid size={ 12 }
                sx={ {
                    display: 'flex',
                    justifyContent: 'center'
                } }
            >
                <TranslatedText 
                    center={ true }
                    color={ '#FFFFFF' }
                    size={ 'subtitle1' }
                    text={ 'frontend_development' }
                />
            </Grid>
        </Grid>
    )
}

export default GridFrontendDevelopment