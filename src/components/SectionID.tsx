import Image from "next/image";

interface ClassIconProps {
    id: string,
    size: number
}

const SectionID: React.FC<ClassIconProps> = ({id, size}) => {
    if (id in ['Viridia', 'Greenill', 'Skyly', 'Bluefull', 'Purplenum', 'Pinkal', 'Redria', 'Oran', 'Yellowboze', 'Whitill']) return (
        <p>?</p>
    )
    
    return (
        <Image src={`section-id/${id.toLowerCase()}.svg`} alt={`${id} icon`} width={size} height={size} className='select-none'/>
    )
}

export default SectionID;