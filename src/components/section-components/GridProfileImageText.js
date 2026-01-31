// ** Component Imports
import GridText from "@/components/section-components/GridText"

// ** MUI components
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'

const GridProfileImageText = ( { imagePosition, imageSize, text, textPosition, title } ) => {
    return (
        <>
            { imagePosition == 'left' ? 
                <>
                    <Grid size={ 5 } sx={ { alignItems: 'center', display: 'flex', justifyContent: 'center' } }>
                        <Avatar 
                            alt={ process.env.NEXT_PUBLIC_DEVELOPER_NAME }
                            src='' 
                            sx={ { height: '80%', width: '80%' } } 
                            variant= 'square'
                        />
                    </Grid>
                    <GridText 
                        size={ 7 } 
                        title={ title } 
                        text={ text }
                    />
                </>
                : imagePosition == 'right' ?
                <>
                    <GridText 
                        size={ 8 } 
                        title={ title } 
                        text={ text }
                    />
                    <Grid size={ 4 } sx={ { alignItems: 'center', display: 'flex', justifyContent: 'center' } }>
                        <Avatar 
                            alt={ process.env.NEXT_PUBLIC_DEVELOPER_NAME }
                            src='' 
                            sx={ { height: '100%', width: '100%' } } 
                            variant= 'squared'
                        />
                    </Grid>
                </>
                : textPosition == 'top' ?
                <>
                    <GridText 
                        size={ 12 } 
                        title={ title } 
                        text={ text }
                    />
                    <Grid size={ 12 } sx={ { alignItems: 'center', display: 'flex', justifyContent: 'center' } }>
                        <Avatar 
                            alt={ process.env.NEXT_PUBLIC_DEVELOPER_NAME }
                            src='' 
                            sx={ { height: '100%', width: '100%' } } 
                            variant= 'squared'
                        />
                    </Grid>
                </>
                :
                <>
                    <Grid size={ 12 } sx={ { alignItems: 'center', display: 'flex', justifyContent: 'center' } }>
                        <Avatar 
                            alt={ process.env.NEXT_PUBLIC_DEVELOPER_NAME }
                            src='' 
                            sx={ { height: '100%', width: '100%' } } 
                            variant= 'squared'
                        />
                    </Grid>
                    <GridText 
                        size={ 12 } 
                        title={ title } 
                        text={ text }
                    />
                </>
            }
        </>
    )
}

export default GridProfileImageText