'use client'
import { useTranslations } from 'next-intl'

// ** MUI components
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

const GridText = ( { size, text, textColor, textSize, title, titleColor, titleSize } ) => {
    const translations = useTranslations()
    return (
        <Grid size={ size  } 
            sx={ { 
                alignItems: 'center', 
                display: 'flex', 
                flexDirection: 'column', 
                justifyContent: 'center' 
            } }
        >
            <Typography sx={ { color: titleColor ? titleColor : '' } } variant={ titleSize ? titleSize : '' }>
                { title ? translations( title ) : '' }
            </Typography>
            <Typography sx={ { color: textColor ? textColor : '' } } variant={ textSize ? textSize : '' }>
                { text ? translations( text ) : '' }
            </Typography>
        </Grid>
    )
}

export default GridText