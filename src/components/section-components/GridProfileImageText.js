// ** Component Imports
import GridProfileImage from "@/components/section-components/GridProfileImage"
import GridText from "@/components/section-components/GridText"

const GridProfileImageText = ( { imagePosition, imageSize, padding, text, textPosition, title } ) => {
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
                        padding={ padding ? padding : 0 }
                        size={ 7 } 
                        text={ text }
                        textColor={ '#FFFFFF' }
                        textSize={ 'subtitle1' }
                        title={ title }
                        titleColor={ '#FFFFFF' }
                        titleSize={ 'h4' }
                    />
                </>
                : imagePosition == 'right' ?
                <>
                    <GridText 
                        size={ 7 } 
                        text={ text }
                        textColor={ '#FFFFFF' }
                        textSize={ 'h5' }
                        title={ title }
                        titleColor={ '#FFFFFF' }
                        titleSize={ 'h5' }
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
                        text={ text }
                        textColor={ '#FFFFFF' }
                        textSize={ 'h5' }
                        title={ title }
                        titleColor={ '#FFFFFF' }
                        titleSize={ 'h5' }
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
                        text={ text }
                        textColor={ '#FFFFFF' }
                        textSize={ 'h5' }
                        title={ title }
                        titleColor={ '#FFFFFF' }
                        titleSize={ 'h5' }
                    />
                </>
            }
        </>
    )
}

export default GridProfileImageText