// ** Component Imports
import GridProfileImageText from '@/components/section-components/GridProfileImageText'

// ** MUI components
import Grid from '@mui/material/Grid'

const ProfileImageSection = ( { imagePosition, text, textPosition, title } ) => {
    return (
        <Grid container 
            sx={ {
                margin: 2
            } }
        >
            <GridProfileImageText
                imagePosition={ imagePosition } 
                padding={ 4 }
                title={ title }
                text={ text }
                textPosition={ textPosition }
            />
        </Grid>
    )
}

export default ProfileImageSection