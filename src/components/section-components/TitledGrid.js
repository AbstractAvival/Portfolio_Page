// ** Component Imports
import TranslatedText from '@/components/section-components/TranslatedText'

// ** MUI components
import Grid from '@mui/material/Grid'

const TitledGrid = ( { borderColor, borderWidth, children, gridMargin, titleSize, titleText } ) => {
    return (
        <Grid container spacing={ 2 } sx={ { marginY: gridMargin ? gridMargin : 4 } }>
            <Grid size={ 12 }
                sx={ {
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 4
                } }
            >
                <TranslatedText 
                    borderColor={ borderColor ? borderColor : '#FFFFFF' }
                    borderStyle={ 'none none solid none' }
                    borderWidth={ borderWidth ? borderWidth : '3px' }
                    center={ true }
                    color={ '#FFFFFF' }
                    fontWeight={ 'bold' }
                    size={ titleSize ? titleSize : 'h4' }
                    text={ titleText ? titleText : '' }
                />
            </Grid>
            { children }
        </Grid>
    )
}

export default TitledGrid