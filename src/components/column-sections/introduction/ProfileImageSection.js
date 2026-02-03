// ** Component Imports
import GridProfileImageText from '@/components/section-components/GridProfileImageText'

// ** MUI components
import Grid from '@mui/material/Grid'

const ProfileImageSection = ( { imagePosition, text, textPosition, title } ) => {
    return (
        <Grid container 
            sx={ {
                margin: 12
            } }
        >
            <GridProfileImageText
                imagePosition={ imagePosition } 
                padding={ 8 }
                title={ title }
                text={ text }
                textPosition={ textPosition }
            />
        </Grid>
    )
}

export default ProfileImageSection