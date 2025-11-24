'use server'

import { getServerInfos } from "@/src/actions/server-infos.actions";
import GameSummary from "./GameSummary";
import { PSOClient } from "@/src/types/server-summary";
import Image from "next/image";

const apiURL = `${process.env.NEWSERV_API_URL}:${process.env.NEWSERV_API_PORT}/y/server`;

const ServerStatus = async () => {
  const serverInfos = await getServerInfos();

  const getClientsInGame = (gameID: number, clients: PSOClient[]) =>
    clients.filter(c => c.LobbyID === gameID);

  return (
    <div className="w-[15%] h-screen overflow-hidden bg-white text-black">
      <div className="flex justify-center my-4">
        <Image src={'/devserv-temp.png'} alt='devserv temporary logo' width={150} height={100}/>
      </div>
      <div>
        <p>Player Count: {serverInfos.Server.ClientCount ?? 'Unavailable'}</p>
        <p>{serverInfos.Server.GameCount > 0 ? serverInfos.Server.GameCount : 'No'} {serverInfos.Server.GameCount > 1 ? 'games' : 'game'} active</p>
      </div>
      <hr/>
      <div className="mt-2 max-h-full overflow-y-auto space-y-2 pr-2">
        {serverInfos.Games.map((g, i) => (
          <GameSummary
            key={`game-${i}`}
            game={g}
            party={getClientsInGame(g.ID, serverInfos.Clients)}
          />
        ))}
      </div>
    </div>
  );
}

export default ServerStatus;