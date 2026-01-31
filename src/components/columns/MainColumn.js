// ** Component Imports
import ProfileImageSection from "@/components/sections/introduction/ProfileImageSection"

// MUI components
import Paper from "@mui/material/Paper"

const MainColumn = props => {
    return (
        <Paper elevation={ 0 }>
            <ProfileImageSection />
        </Paper>
    )
}

export default MainColumn