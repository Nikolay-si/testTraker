import React from "react";
import icon from "../../images/icon.svg";
import styles from "./TeamInfo.module.css";
import { Team } from "../../types";

interface Props {
  team: Team;
  type: "home" | "away";
}

export const TeamInfo = ({ team, type }: Props) => {
  return (
    <div
      className={`${styles.container} ${type === "home" ? styles.home : ""}`}
    >
      <p className={styles.teamName}>{team.name}</p>
      <img src={icon} alt="team icon"></img>
    </div>
  );
};
