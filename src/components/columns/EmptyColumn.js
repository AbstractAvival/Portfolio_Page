// MUI components
import Box from '@mui/material/Box'

const EmptyColumn = props => {
    return (
        <Box sx={ { height: '100%', width: props.width } }/>
    )
}

export default EmptyColumn