export interface Player {
  username: string;

  kills: number;
}

export interface Team {
  /** Название команды */
  name: string;
  players: Player[];
  /** Количество очков */
  points: number;
  /** Место в турнирной таблице */
  place: number;
  /** Количество убийств */
  total_kills: number;
}

/** Статус матча */
export enum MatchStatus {
  Scheduled = "Scheduled",
  Ongoing = "Ongoing",
  Finished = "Finished",
}

export interface Match {
  /**
   * Время проведения матча
   * @format date-time
   */
  time: string;
  /** Название матча */
  title: string;
  homeTeam: Team;
  awayTeam: Team;
  /** Счет домашней команды */
  homeScore: number;
  /** Счет гостевой команды */
  awayScore: number;
  /** Статус матча */
  status: MatchStatus;
}

export interface SuccessfulResponse {
  /**
   * Indicated whether the response is successful.
   * @default true
   */
  ok: boolean;
  /** If successful, response from api */
  data: {
    matches: Match[]; // Указываем, что data содержит поле matches
  };
}
