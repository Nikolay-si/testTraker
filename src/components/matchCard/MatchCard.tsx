import React from "react";
import { TeamInfo } from "../team/TeamInfo";
import { Score } from "../score/Score";
import styles from "./MatchCard.module.css";
import { Match } from "../../types";

interface Props {
  match: Match;
}

export const MatchCard = ({ match }: Props) => {
  return (
    <div className={styles.container}>
      <TeamInfo team={match.homeTeam} type="home" />
      <Score
        homeScore={match.homeScore}
        awayScore={match.awayScore}
        status={match.status}
      />
      <TeamInfo team={match.awayTeam} type="away" />
    </div>
  );
};
