'use client'
import { useTranslations } from 'next-intl'

// ** MUI components
import Typography from '@mui/material/Typography'

const TranslatedText = ( { borderColor, borderStyle, borderWidth, center, color, fontWeight, size, text } ) => {
    const translations = useTranslations()
    return (
        <Typography 
            sx={ { 
                borderColor: borderColor ? borderColor : '',
                borderStyle: borderStyle ? borderStyle :  '',
                borderWidth: borderWidth ? borderWidth : '',
                color: color ? color : '', 
                display: center ? 'flex' : 'inline', 
                textAlign: center ? 'center' : 'left',
                fontWeight: fontWeight ? fontWeight : ''
            } } 
            variant={ size ? size : '' }
        >
            { text ? translations( text ) : '' }
        </Typography>
    )
}

export default TranslatedText