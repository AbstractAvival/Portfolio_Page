// ** Component Imports
import ProfileImageSection from "@/components/column-sections/introduction/ProfileImageSection"

// MUI components
import Paper from "@mui/material/Paper"

const MainColumn = props => {
    return (
        <Paper elevation={ 0 } sx={ { backgroundColor: '#38040E', width: '60%' } }>
            <ProfileImageSection 
                imagePosition={ 'left' } 
                title={ 'greeting_glad' }
                text={ '' }
                textPosition={ 'bottom' }
            />
        </Paper>
    )
}

export default MainColumn