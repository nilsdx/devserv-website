import Image from "next/image";

interface SectionIDProps {
    character: string,
    size: number
}

const ClassIcon: React.FC<SectionIDProps> = ({character, size}) => {
    if (character in ['HUmar', 'HUnewearl', 'HUcast', 'HUcaseal', 'RAmar', 'RAmarl', 'RAcast', 'RAcaseal', 'FOmar', 'FOmarl', 'FOnewm', 'FOnewearl']) return (
        <p>?</p>
    )

    return (
        <Image src={`/class/icon/${character.toLowerCase()}.png`} alt={`${character} icon`} width={size} height={size}/>
    )
}

export default ClassIcon;