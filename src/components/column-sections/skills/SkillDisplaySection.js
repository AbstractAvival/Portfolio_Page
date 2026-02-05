// ** Component Imports
import GridBackendDevelopment from '@/components/section-components/skill-section-components/GridBackendDevelopment'
import GridDatabase from '@/components/section-components/skill-section-components/GridDatabase'
import GridFrontendDevelopment from '@/components/section-components/skill-section-components/GridFrontendDevelopment'
import GridProgrammingLanguages from '@/components/section-components/skill-section-components/GridProgrammingLanguages'
import TranslatedText from '@/components/section-components/TranslatedText'

// ** MUI components
import Grid from '@mui/material/Grid'

const SkillDisplaySection = () => {
    return (
        <Grid container
            sx={ {
                margin: 12
            } }
        >
            <Grid size={ 12 }
                sx={ {
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 6
                } }
            >
                <TranslatedText 
                    borderColor={ '#FFFFFF' }
                    borderStyle={ 'none none solid none' }
                    borderWidth={ '3px' }
                    center={ true }
                    color={ '#FFFFFF' }
                    size={ 'h4' }
                    text={ 'skills' }
                />
            </Grid>
            <Grid size={ 6 }>
                <GridProgrammingLanguages />
            </Grid>
            <Grid size={ 6 }>
                <GridBackendDevelopment />
            </Grid>
            <Grid size={ 6 }>
                <GridFrontendDevelopment />
            </Grid>
            <Grid size={ 6 }>
                <GridDatabase />
            </Grid>
        </Grid>
    )
}

export default SkillDisplaySection