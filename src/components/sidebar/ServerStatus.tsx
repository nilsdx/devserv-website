'use server'

import { getServerInfos } from "@/src/actions/server-infos.actions";
import GameSummary from "./GameSummary";
import { PSOClient } from "@/src/types/server-summary";

const apiURL = `${process.env.NEWSERV_API_URL}:${process.env.NEWSERV_API_PORT}/y/server`;

const ServerStatus = async () => {
  const serverInfos = await getServerInfos();

  const getClientsInGame = (gameID: number, clients: PSOClient[]) =>
    clients.filter(c => c.LobbyID === gameID);

  return (
    <div className="w-[15%]">
      <p>Player Count: {serverInfos.Server.ClientCount ?? 'Unavailable'}</p>
      <p>{serverInfos.Server.GameCount > 0 ? serverInfos.Server.GameCount : 'No'} {serverInfos.Server.GameCount > 1 ? 'games' : 'game'} active</p>
      {serverInfos.Games.map((g) => (
        <GameSummary game={g} key={g.Name} party={getClientsInGame(g.ID, serverInfos.Clients)}/>
      ))}
    </div>
  );
}

export default ServerStatus;