// ** Component Imports
import GridProfileImage from "@/components/section-components/GridProfileImage"
import GridText from "@/components/section-components/GridText"

const GridProfileImageText = ( { imagePosition, imageSize, text, textPosition, title } ) => {
    return (
        <>
            { imagePosition == 'left' ? 
                <>
                    <GridProfileImage
                        backgroundColor={ '#640D14' }
                        imageBackgroundColor={ '#640D14' }
                        imageURL=''
                        size={ 5 }
                    />
                    <GridText 
                        size={ 7 } 
                        title={ title } 
                        text={ text }
                    />
                </>
                : imagePosition == 'right' ?
                <>
                    <GridText 
                        size={ 7 } 
                        title={ title } 
                        text={ text }
                    />
                    <GridProfileImage
                        backgroundColor={ '#640D14' }
                        imageBackgroundColor={ '#640D14' }
                        imageURL=''
                        size={ 5 }
                    />
                </>
                : textPosition == 'top' ?
                <>
                    <GridText 
                        size={ 12 } 
                        title={ title } 
                        text={ text }
                    />
                    <GridProfileImage
                        backgroundColor={ '#640D14' }
                        imageBackgroundColor={ '#640D14' }
                        imageURL=''
                        size={ 12 }
                    />
                </>
                :
                <>
                    <GridProfileImage
                        backgroundColor={ '#640D14' }
                        imageBackgroundColor={ '#640D14' }
                        imageURL=''
                        size={ 12 }
                    />
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