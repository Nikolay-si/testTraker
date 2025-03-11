import React from "react";
import styles from "./Score.module.css";
import { getStatusButtonColor } from "../../helpers/helpers";

interface Props {
  homeScore: number;
  awayScore: number;
  status: string;
}

export const Score = ({ homeScore, awayScore, status }: Props) => {
  const statusColor = getStatusButtonColor(status);
  return (
    <div className={styles.container}>
      <div className={styles.score}>
        <p>{homeScore}</p>
        <p>:</p>
        <p>{awayScore}</p>
      </div>
      <button className={styles.status} style={{ background: statusColor }}>
        {status === "Ongoing"
          ? "Live"
          : status === "Scheduled"
            ? "Match preparing"
            : status}
      </button>
    </div>
  );
};
