// ** Component Imports
import DoubleColumnAboutSection from "@/components/column-sections/about/DoubleColumnAboutSection"
import DoubleColumnContactSection from "@/components/column-sections/contact/DoubleColumnContactSection"
import SingleColumnExperienceSection from "@/components/column-sections/experience/SingleColumnExperienceSection"
import ProfileImageSection from "@/components/column-sections/introduction/ProfileImageSection"
import SkillDisplaySection from "@/components/column-sections/skills/SkillDisplaySection"

// MUI components
import Paper from "@mui/material/Paper"

const MainColumn = props => {
    return (
        <Paper elevation={ 0 } sx={ { backgroundColor: '#38040E', width: '64%' } }>
            <ProfileImageSection 
                imagePosition={ 'left' } 
                title={ 'greeting_glad_with_developer' }
                text={ 'greeting_description' }
                textPosition={ 'bottom' }
            />
            <DoubleColumnAboutSection textPosition={ 'left' }/>
            <SkillDisplaySection backgroundColor={ '#640D14' }/>
            <SingleColumnExperienceSection />
            <DoubleColumnContactSection />
        </Paper>
    )
}

export default MainColumn