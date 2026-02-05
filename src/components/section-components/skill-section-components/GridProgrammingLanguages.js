// ** Component Imports
import TranslatedText from '@/components/section-components/TranslatedText'

// ** MUI components
import Grid from '@mui/material/Grid'

const tempItems = [
    {
        icon: '',
        name: '',
    }
]

const GridProgrammingLanguages = ( { items } ) => {
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
                    text={ 'programming_languages' }
                />
            </Grid>
        </Grid>
    )
}

export default GridProgrammingLanguages