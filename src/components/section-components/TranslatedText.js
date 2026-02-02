'use client'
import { useTranslations } from 'next-intl'

// ** MUI components
import Typography from '@mui/material/Typography'

const TranslatedText = ( { center, color, size, text } ) => {
    const translations = useTranslations()
    return (
        <Typography 
            sx={ { 
                color: color ? color : '', 
                display: center ? 'flex' : 'inline', 
                textAlign: center ? 'center' : 'left' 
            } } 
            variant={ size ? size : '' }
        >
            { text ? translations( text ) : '' }
        </Typography>
    )
}

export default TranslatedText