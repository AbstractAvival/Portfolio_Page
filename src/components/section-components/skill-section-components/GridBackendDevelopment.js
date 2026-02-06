// ** Component Imports
import TranslatedText from '@/components/section-components/TranslatedText'

// ** MUI components
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const tempItems = []

const GridBackendDevelopment = ( { backgroundColor, color, items } ) => {
    return (
        <Paper elevation={ 1 } 
            sx={ { 
                alignItems: 'center',
                backgroundColor: backgroundColor, 
                display: 'flex',
                height: '100%', 
                justifyContent: 'center',
                margin: 1
            } }
            >
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
                        text={ 'backend_development' }
                    />
                </Grid>
                { tempItems.map( ( item, index ) => (
                    <Grid key={ index } size={ 4 } 
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
        </Paper>
    )
}

export default GridBackendDevelopment