// ** Component Imports
import TranslatedText from '@/components/section-components/TranslatedText'

// ** MUI components
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const tempItems = [
    {
        icon: '',
        name: 'C++',
    },
    {
        icon: '',
        name: 'C#',
    },
    {
        icon: '',
        name: 'Go',
    },
    {
        icon: '',
        name: 'Java',
    },
    {
        icon: '',
        name: 'Javascript',
    },
    {
        icon: '',
        name: 'Kotlin',
    },
    {
        icon: '',
        name: 'Python',
    },
    {
        icon: '',
        name: 'PHP',
    }
]

const GridProgrammingLanguages = ( { color, items } ) => {
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
                    color={ color ? color : '' }
                    size={ 'subtitle1' }
                    text={ 'programming_languages' }
                />
            </Grid>
            { tempItems.map( ( item ) => (
                <Grid size={ 4 } 
                    sx={ {  
                        display: 'flex',
                        justifyContent: 'center'
                    } }
                >
                    <Typography sx={ { color: color ? color : '' } } variant='subtitle2'>
                        { item.name }
                    </Typography>
                </Grid>
            ) ) }
        </Grid>
    )
}

export default GridProgrammingLanguages