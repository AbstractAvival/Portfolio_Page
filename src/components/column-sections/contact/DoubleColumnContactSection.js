// ** Component Imports
import TranslatedText from '@/components/section-components/TranslatedText'

// ** MUI components
import Grid from '@mui/material/Grid'

const DoubleColumnContactSection = ( { imagePosition, text, textPosition, title } ) => {
    return (
        <Grid container 
            sx={ {
                borderColor: '#FFFFFF',
                borderStyle: 'solid none none none',
                borderWidth: '1px'
            } }
        >
            <Grid size={ 12 }
                sx={ {
                    borderColor: '#FFFFFF',
                    borderStyle: 'none none none none',
                    borderWidth: '1px',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingX: 20,
                    paddingY: 8
                } }
            >
                <TranslatedText 
                    center={ true }
                    color={ '#FFFFFF' }
                    size={ 'subtitle2' }
                    text={ 'farewell_description' }
                />
            </Grid>
            <Grid size={ 3 }/>
            <Grid size={ 6 }
                sx={ {
                    borderColor: '#FFFFFF',
                    borderStyle: 'none none solid none',
                    borderWidth: '1px',
                    display: 'flex',
                    justifyContent: 'right'
                } }
            />
            <Grid size={ 3 }/>
            <Grid size={ 6 }
                sx={ {
                    borderColor: '#FFFFFF',
                    borderStyle: 'none solid none none',
                    borderWidth: '1px',
                    display: 'flex',
                    justifyContent: 'right',
                    paddingBottom: 8,
                    paddingRight: 4,
                    paddingTop: 4
                } }
            >
                <TranslatedText 
                    color={ '#FFFFFF' }
                    size={ 'body2' }
                    text={ 'developer_email' }
                />
            </Grid>
            <Grid size={ 6 }
                sx={ {
                    display: 'flex',
                    justifyContent: 'left',
                    paddingBottom: 8,
                    paddingLeft: 4,
                    paddingTop: 4
                } }
            >
                <TranslatedText 
                    color={ '#FFFFFF' }
                    size={ 'body2' }
                    text={ 'additional_platforms' }
                />
            </Grid>
        </Grid>
    )
}

export default DoubleColumnContactSection