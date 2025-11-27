'use server'

import { getServerInfos } from "@/src/actions/server-infos.actions";
import ServerLogo from "./ServerLogo";
import { ServerSummary } from "@/src/types/server-summary";
import GameDisplay from "./GamesDisplay";
import ServerStatus from "./ServerStatus";
import SidebarNavigation from "./SiderbarNavigation";

const Sidebar: React.FC = async () => {
    const serverInfos: ServerSummary = await getServerInfos();

    return (
        <div className="w-[15%] h-screen overflow-hidden bg-white text-black">
            <ServerLogo />
            <SidebarNavigation/>
            <ServerStatus serverInfos={serverInfos} />
            <GameDisplay serverInfos={serverInfos} />
        </div>
    );
}

export default Sidebar;