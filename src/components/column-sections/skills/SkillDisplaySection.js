// ** Component Imports
import SkillGrid from '@/components/section-components/skill-section-components/SkillGrid'
import TranslatedText from '@/components/section-components/TranslatedText'

// ** Icons
import ExpressIcon from '../../../../public/images/backend-development/Express.png'
import FlaskIcon from '../../../../public/images/backend-development/Flask.png'
import LaravelIcon from '../../../../public/images/backend-development/Laravel.png'
import NodeIcon from '../../../../public/images/backend-development/Node.png'

import MongoDBIcon from '../../../../public/images/databases/MongoDB.png'
import MySQLIcon from '../../../../public/images/databases/MySQL.png'
import SQLiteIcon from '../../../../public/images/databases/SQLite.png'

import CssIcon from '../../../../public/images/frontend-development/CSS.png'
import HTMLIcon from '../../../../public/images/frontend-development/HTML5.png'
import MaterialUiIcon from '../../../../public/images/frontend-development/MaterialUi.png'
import NextJsIcon from '../../../../public/images/frontend-development/NextJS.png'
import ReactIcon from '../../../../public/images/frontend-development/React.png'

import MonoGameIcon from '../../../../public/images/game-development/MonoGame.png'
import SFMLIcon from '../../../../public/images/game-development/SFML.png'

import CPlusPlusIcon from '../../../../public/images/programming-languages/CPlusPlus.png'
import CSharpIcon from '../../../../public/images/programming-languages/CSharp.png'
import GoIcon from '../../../../public/images/programming-languages/Go.png'
import JavaIcon from '../../../../public/images/programming-languages/Java.png'
import JavascriptIcon from '../../../../public/images/programming-languages/Javascript.png'
import KotlinIcon from '../../../../public/images/programming-languages/Kotlin.png'
import PhpIcon from '../../../../public/images/programming-languages/Php.png'
import PytonIcon from '../../../../public/images/programming-languages/Python.png'

// ** MUI components
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'

const backendDevelopment = [
    {
        icon: ExpressIcon,
        name: 'Express.js',
    },
    {
        icon: FlaskIcon,
        name: 'Flask',
    },
    {
        icon: LaravelIcon,
        name: 'Laravel',
    },
    {
        icon: NodeIcon,
        name: 'Node.js',
    },
]

const databases = [
    {
        icon: MongoDBIcon,
        name: 'MongoDB',
    },
    {
        icon: MySQLIcon,
        name: 'MySQL',
    },
    {
        icon: SQLiteIcon,
        name: 'SQLite',
    },
]

const frontendDevelopment = [
    {
        icon: CssIcon,
        name: 'CSS',
    },
    {
        icon: HTMLIcon,
        name: 'HTML',
    },
    {
        icon: MaterialUiIcon,
        name: 'Material UI',
    },
    {
        icon: NextJsIcon,
        name: 'NextJS',
    },
    {
        icon: ReactIcon,
        name: 'React',
    },
]

const gameDevelopment = [
    {
        icon: MonoGameIcon,
        name: 'MonoGame',
    },
    {
        icon: SFMLIcon,
        name: 'SFML',
    },
]

const programmingLanguages = [
    {
        icon: CPlusPlusIcon,
        name: 'C++',
    },
    {
        icon: CSharpIcon,
        name: 'C#',
    },
    {
        icon: GoIcon,
        name: 'Go',
    },
    {
        icon: JavaIcon,
        name: 'Java',
    },
    {
        icon: JavascriptIcon,
        name: 'Javascript',
    },
    {
        icon: KotlinIcon,
        name: 'Kotlin',
    },
    {
        icon: PhpIcon,
        name: 'PHP',
    },
    {
        icon: PytonIcon,
        name: 'Python',
    },
]

const SkillDisplaySection = ( { backgroundColor } ) => {
    const GridRowLength = 4
    const itemBackgroundColor = '#AD2831'
    const SkillGridTitleSize = 'subtitle1'
    const SkillGridTextSize = 'subtitle2'
    return (
        <Paper elevation={ 1 }
            sx={ { 
                alignItems: 'top',
                backgroundColor: backgroundColor ? backgroundColor : '', 
                display: 'flex',
                justifyContent: 'center',
                margin: 1
            } }
        >
            <Grid container
                sx={ {
                    margin: 5
                } }
            >
                <Grid size={ 12 }
                    sx={ {
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 5
                    } }
                >
                    <TranslatedText 
                        borderColor={ '#FFFFFF' }
                        borderStyle={ 'none none solid none' }
                        borderWidth={ '3px' }
                        center={ true }
                        color={ '#FFFFFF' }
                        fontWeight={ 'bold' }
                        size={ 'h4' }
                        text={ 'skills' }
                    />
                </Grid>
                <Grid size={ GridRowLength } sx={ { padding: 1 } }>
                    <SkillGrid 
                        color={ '#FFFFFF' }
                        items={ programmingLanguages }
                        itemBackgroundColor={ itemBackgroundColor }
                        textSize={ SkillGridTextSize }
                        title={ 'programming_languages' }
                        titleSize={ SkillGridTitleSize }
                    />
                </Grid>
                <Grid size={ GridRowLength } sx={ { padding: 1 } }>
                    <SkillGrid 
                        color={ '#FFFFFF' }
                        items={ frontendDevelopment }
                        itemBackgroundColor={ itemBackgroundColor }
                        textSize={ SkillGridTextSize }
                        title={ 'frontend_development' }
                        titleSize={ SkillGridTitleSize }
                    />
                </Grid>
                <Grid size={ GridRowLength } sx={ { padding: 1 } }>
                    <SkillGrid  
                        color={ '#FFFFFF' }
                        items={ backendDevelopment }
                        itemBackgroundColor={ itemBackgroundColor }
                        textSize={ SkillGridTextSize }
                        title={ 'backend_development' }
                        titleSize={ SkillGridTitleSize }
                    />
                </Grid>
                <Grid size={ GridRowLength } sx={ { padding: 1 } }>
                    <SkillGrid 
                        color={ '#FFFFFF' }
                        items={ databases }
                        itemBackgroundColor={ itemBackgroundColor }
                        textSize={ SkillGridTextSize }
                        title={ 'databases' }
                        titleSize={ SkillGridTitleSize }
                    />
                </Grid>
                <Grid size={ GridRowLength } sx={ { padding: 1 } }>
                    <SkillGrid 
                        color={ '#FFFFFF' }
                        items={ gameDevelopment }
                        itemBackgroundColor={ itemBackgroundColor }v
                        textSize={ SkillGridTextSize }
                        title={ 'game_development' }
                        titleSize={ SkillGridTitleSize }
                    />
                </Grid>
            </Grid>
        </Paper>
    )
}

export default SkillDisplaySection