interface SectionIDProps {
    id: string|number
}

const SectionID: React.FC<SectionIDProps> = ({id}) => {
    switch (id) {
        case 0:
        case 'Viridia':
            return (
                <p>V</p>
            )
        case 1:
        case 'Greenill':
            return (
                <p>G</p>
            )
        case 2:
        case 'Skyly':
            return (
                <p>S</p>
            )
        case 3:
        case 'Blufefull':
            return (
                <p>B</p>
            )
        case 4:
        case 'Purplenum':
            return (
                <p>PR</p>
            )
        case 5:
        case 'Pinkal':
            return (
                <p>PK</p>
            )
        case 6:
        case 'Redria':
            return (
                <p>R</p>
            )
        case 7:
        case 'Oran':
            return (
                <p>O</p>
            )
        case 8:
        case 'Yellowboze':
            return (
                <p>Y</p>
            )
        case 9:
        case 'Whitill':
            return (
                <p>W</p>
            )
    }
}

export default SectionID;