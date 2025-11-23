export interface ServerSummary {
  Server: {
    StartTimeUsecs: number;
    StartTime: string;
    UptimeUsecs: number;
    Uptime: string;
    LobbyCount: number;
    GameCount: number;
    ClientCount: number;
    ProxySessionCount: number;
    ServerName: string;
  };
  Games: PSOGame[];
  Clients: PSOClient[];
}

export interface PSOGame {
  ID: number;
  HasPassword: boolean;
  Name: string;
  CheatsEnabled: boolean;
  Players: number;
  Episode: string;
  QuestSelectionInProgress: boolean;
  QuestInProgress: boolean;
  JoinableQuestInProgress: boolean;
  SectionID: string;
  Mode: string;
  Difficulty: string;
  Quest: number;
}

export interface PSOClient {
  ID: number;
  Class: string;
  AccountID: number;
  LobbyID: number;
  Name: string;
  Version: string;
  Language: string;
  IsOnProxy: boolean;
  Level: number;
  SectionID: string;
}
