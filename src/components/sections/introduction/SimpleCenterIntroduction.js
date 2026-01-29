'use client'
import { useTranslations } from 'next-intl'

// ** MUI components
import Box from '@mui/material/Box'
import Typography from "@mui/material/Typography"

const SimpleCenterIntroduction = () => {
    const translations = useTranslations()
    return (
        <Box>
            <Typography variant='h5'>
                { translations( 'greeting_glad' ) }
            </Typography>
        </Box>
    )
}

export default SimpleCenterIntroduction