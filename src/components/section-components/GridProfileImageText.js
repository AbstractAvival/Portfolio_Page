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
                        text={ text }
                        textColor={ '#800E13' }
                        textSize={ 'h5' }
                        title={ title }
                        titleColor={ '#AD2831' }
                        titleSize={ 'h4' }
                    />
                </>
                : imagePosition == 'right' ?
                <>
                    <GridText 
                        size={ 7 } 
                        text={ text }
                        textColor={ '#800E13' }
                        textSize={ 'h5' }
                        title={ title }
                        titleColor={ '#AD2831' }
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
                        textColor={ '#800E13' }
                        textSize={ 'h5' }
                        title={ title }
                        titleColor={ '#AD2831' }
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
                        textColor={ '#800E13' }
                        textSize={ 'h5' }
                        title={ title }
                        titleColor={ '#AD2831' }
                        titleSize={ 'h5' }
                    />
                </>
            }
        </>
    )
}

export default GridProfileImageText