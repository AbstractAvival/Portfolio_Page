// ** Component Imports
import TranslatedText from '@/components/section-components/TranslatedText'

// ** MUI components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const DoubleColumnAboutSection = () => {
    return (
        <Box>
            <Grid container spacing={ 2 }>
                <Grid size={ 12 }
                    sx={ {
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 5
                    } }
                >
                    <TranslatedText 
                        borderColor={ '#FFFFFF' }
                        borderStyle={ 'none none solid none' }
                        borderWidth={ '3px' }
                        center={ true }
                        color={ '#FFFFFF' }
                        fontWeight={ 'bold' }
                        size={ 'h4' }
                        text={ 'about_me' }
                    />
                </Grid>
            </Grid>
        </Box>
    )
}

export default DoubleColumnAboutSection