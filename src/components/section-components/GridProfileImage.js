// ** MUI components
import Avatar from '@mui/material/Avatar'
import Grid from '@mui/material/Grid'
import Paper from "@mui/material/Paper"

const GridProfileImage = ( { backgroundColor, imageBackgroundColor, imageURL, size } ) => {
    return (
        <Grid size={ size } sx={ { alignItems: 'center', display: 'flex', justifyContent: 'center' } }>
            <Paper elevation={ 1 } 
                sx={ { 
                    alignItems: 'center',
                    backgroundColor: backgroundColor, 
                    display: 'flex',
                    height: '100%', 
                    justifyContent: 'center',
                    margin: 1, 
                    width: '100%' 
                    } }
                >
                <Avatar 
                    alt={ process.env.NEXT_PUBLIC_DEVELOPER_NAME }
                    src={ imageURL ? imageURL : '' } 
                    sx={ { bgcolor: imageBackgroundColor, height: '80%', width: '80%' } } 
                    variant= 'square'
                />
            </Paper>
        </Grid>
    )
}

export default GridProfileImage