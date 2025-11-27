import Link from "next/link"

type NavigationLink = {
    link: string,
    label: string
}

const SidebarNavigation: React.FC = () => {
    const links: NavigationLink[] = [
        {
            link: "/",
            label: "Home"
        },
        {
            link: "/account",
            label: "Account Management"
        }
    ]

    return (
        <div className="flex flex-col text-center">            
            {links.map((l: NavigationLink, i) => (
                <Link 
                    key={`navlink-${i}`}
                    href={l.link}
                    className="hover:bg-gray-300 transition-colors duration-400 py-1">
                    {l.label}
                </Link>
            ))}
        </div>
    )
}

export default SidebarNavigation;