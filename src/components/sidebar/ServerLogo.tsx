import Image from "next/image";

const ServerLogo: React.FC = () => {
    return (
        <div className="flex justify-center my-4">
            <Image src={'/devserv-temp.png'} alt='devserv temporary logo' width={150} height={100}/>
        </div>
    )
}

export default ServerLogo;