// ** Component Imports
import TranslatedText from '@/components/section-components/TranslatedText'

// ** MUI components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

//** Next Imports
import Image from 'next/image'

const SkillGrid = ( { color, items, itemBackgroundColor, itemHeight, itemWidth, textSize, title, titleSize } ) => {
    const GridSize = 4
    return (
        <Grid container spacing={ 2 } 
            sx={ {
                paddingBottom: 2,
                paddingTop: 1,
                paddingX: 2
            } }
        >
            <Grid size={ 12 }
                sx={ {
                    display: 'flex',
                    justifyContent: 'center'
                } }
            >
                <TranslatedText 
                    center={ true }
                    color={ color ? color : '' }
                    fontWeight={ 'bold' }
                    size={ titleSize ? titleSize : '' }
                    text={ title ? title : '' }
                />
            </Grid>
            { items.map( ( item, index ) => (
                <Grid key={ index } size={ GridSize } 
                    sx={ {  
                        display: 'flex',
                        flexDirection: 'column'
                    } }
                >
                    <Paper elevation={ 1 } 
                        sx={ { 
                            backgroundColor: itemBackgroundColor, 
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%', 
                            justifyContent: 'center',
                            paddingBottom: 1,
                            paddingTop: 1.5,
                            paddingX: 0,
                        } }
                    >
                        { item.icon &&
                            <Box sx={ { display: 'flex', justifyContent: 'center', marginBottom: 1 } }>
                                <Image 
                                    alt={ item.alternate ? item.alternate : '' }
                                    height={ itemHeight ? itemHeight : '' }
                                    src={ item.icon ? item.icon : '' }
                                    width={ itemWidth ? itemWidth : ''   }
                                />
                            </Box>
                        }
                        <Typography sx={ { color: color ? color : '', textAlign: 'center' } } variant={ textSize ? textSize : '' }>
                            { item.name }
                        </Typography>
                    </Paper>
                </Grid>
            ) ) }
        </Grid>
    )
}

export default SkillGrid