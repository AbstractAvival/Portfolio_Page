// ** Component Imports
import TitledGrid from '@/components/section-components/TitledGrid'
import TranslatedText from '@/components/section-components/TranslatedText'

// ** MUI components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

const DoubleColumnAboutSection = () => {
    const textBottomMargin = 5
    return (
        <Box>
            <TitledGrid titleText={ 'about_me' }>
                <Grid size={ 6 }>
                </Grid>
                <Grid size={ 6 } 
                    sx={ {
                        alignItems: 'center', 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center',
                        paddingX: 10
                    } }
                >
                    <Box sx={ { mb: textBottomMargin } }>
                        <TranslatedText 
                            color={ '#FFFFFF' }
                            size={ 'subtitle1' }
                            text={ 'about_me_text_1' }
                        />
                    </Box>
                    <Box sx={ { mb: textBottomMargin } }>
                        <TranslatedText 
                            color={ '#FFFFFF' }
                            size={ 'subtitle1' }
                            text={ 'about_me_text_2' }
                        />
                    </Box>
                    <Box sx={ { mb: textBottomMargin } }>
                        <TranslatedText 
                            color={ '#FFFFFF' }
                            size={ 'subtitle1' }
                            text={ 'about_me_text_3' }
                        />
                    </Box>
                    <Box sx={ { mb: textBottomMargin } }>
                        <TranslatedText 
                            color={ '#FFFFFF' }
                            size={ 'subtitle1' }
                            text={ 'about_me_text_4' }
                        />
                    </Box>
                </Grid>
            </TitledGrid>
        </Box>
    )
}

export default DoubleColumnAboutSection