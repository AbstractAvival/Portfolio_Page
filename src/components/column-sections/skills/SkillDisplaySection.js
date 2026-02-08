// ** Component Imports
import SkillGrid from '@/components/section-components/skill-section-components/SkillGrid'
import TranslatedText from '@/components/section-components/TranslatedText'

// ** MUI components
import Grid from '@mui/material/Grid'

// ** SVG Icons
import ExpressIcon from '../../../../public/images/backend-development/Express.png'
import FlaskIcon from '../../../../public/images/backend-development/Flask.png'
import LaravelIcon from '../../../../public/images/backend-development/Laravel.png'

import MongoDBIcon from '../../../../public/images/databases/MongoDB.png'
import MySQLIcon from '../../../../public/images/databases/MySQL.png'
import SQLAlchemyIcon from '../../../../public/images/databases/SQLAlchemy.png'
import SQLiteIcon from '../../../../public/images/databases/SQLite.png'

import CssIcon from '../../../../public/images/frontend-development/CSS.png'
import HTMLIcon from '../../../../public/images/frontend-development/HTML5.png'
import MaterialUiIcon from '../../../../public/images/frontend-development/MaterialUi.png'
import NextJsIcon from '../../../../public/images/frontend-development/NextJS.png'

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

const backendDevelopment = [
    {
        icon: ExpressIcon,
        name: 'Express',
    },
    {
        icon: FlaskIcon,
        name: 'Flask',
    },
    {
        icon: LaravelIcon,
        name: 'Laravel',
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
        icon: SQLAlchemyIcon,
        name: 'SQLAlchemy',
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
        icon: '',
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
            <Grid size={ 6 } sx={ { padding: 1 } }>
                <SkillGrid 
                    backgroundColor={ '#640D14' } 
                    color={ '#FFFFFF' }
                    items={ programmingLanguages }
                    itemBackgroundColor={ '#800E13' }
                    itemHeight={ 50 }
                    itemWidth={ 50 }
                    textSize={ 'subtitle2' }
                    title={ 'programming_languages' }
                    titleSize={ 'subtitle1' }
                />
            </Grid>
            <Grid size={ 6 } sx={ { padding: 1 } }>
                <SkillGrid 
                    backgroundColor={ '#640D14' } 
                    color={ '#FFFFFF' }
                    items={ backendDevelopment }
                    itemBackgroundColor={ '#800E13' }
                    textSize={ 'subtitle2' }
                    title={ 'backend_development' }
                    titleSize={ 'subtitle1' }
                />
            </Grid>
            <Grid size={ 6 } sx={ { padding: 1 } }>
                <SkillGrid 
                    backgroundColor={ '#640D14' } 
                    color={ '#FFFFFF' }
                    items={ frontendDevelopment }
                    itemBackgroundColor={ '#800E13' }
                    textSize={ 'subtitle2' }
                    title={ 'frontend_development' }
                    titleSize={ 'subtitle1' }
                />
            </Grid>
            <Grid size={ 6 } sx={ { padding: 1 } }>
                <SkillGrid 
                    backgroundColor={ '#640D14' } 
                    color={ '#FFFFFF' }
                    items={ databases }
                    itemBackgroundColor={ '#800E13' }
                    textSize={ 'subtitle2' }
                    title={ 'databases' }
                    titleSize={ 'subtitle1' }
                />
            </Grid>
            <Grid size={ 6 } sx={ { padding: 1 } }>
                <SkillGrid 
                    backgroundColor={ '#640D14' } 
                    color={ '#FFFFFF' }
                    items={ gameDevelopment }
                    itemBackgroundColor={ '#800E13' }v
                    textSize={ 'subtitle2' }
                    title={ 'game_development' }
                    titleSize={ 'subtitle1' }
                />
            </Grid>
        </Grid>
    )
}

export default SkillDisplaySection