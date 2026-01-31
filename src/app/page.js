// Custom Components
import EmptyColumn from "@/components/columns/EmptyColumn"
import MainColumn from "@/components/columns/MainColumn"

// MUI components
import Box from "@mui/material/Box"

export default function Home() {
    return (
        <Box 
            sx={ { 
                alignItems: 'center', 
                display: 'flex', 
                flexDirection: 'row', 
                justifyContent: 'center' 
            } }
        >
            <EmptyColumn width={ '20%' }/>
            <MainColumn />
            <EmptyColumn width={ '20%' }/>
        </Box>
    )
}