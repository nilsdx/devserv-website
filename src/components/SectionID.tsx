import Image from "next/image";

interface ClassIconProps {
    id: string,
    size: number
}

const SectionID: React.FC<ClassIconProps> = ({id, size}) => {
    const sectionIds = ['Viridia', 'Greennill', 'Skyly', 'Bluefull', 'Purplenum', 'Pinkal', 'Redria', 'Oran', 'Yellowboze', 'Whitill'];

    if (!sectionIds.includes(id)) return (
        <p>?</p>
    )
    
    return (
        <Image src={`section-id/${id.toLowerCase()}.svg`} alt={`${id} icon`} width={size} height={size} className='select-none'/>
    )
}

export default SectionID;