import React from "react";
import title from "../../images/title.svg";
import errorIcon from "../../images/errorIcon.svg";
import styles from "./Header.module.css";
import refreshIcon from "../../images/refreshIcon.svg";

interface Props {
  errorMessage: string | null;
  isLoading: boolean;
  onClick: () => void;
}

export const Header = ({ errorMessage, isLoading, onClick }: Props) => {
  return (
    <div className={styles.headerContainer}>
      <img src={title} alt="site title" />
      <div className={styles.errorContainer}>
        <div
          className={
            errorMessage ? styles.errorMessage : styles.errorMessageHidden
          }
        >
          <img src={errorIcon} alt="Error icon" className={styles.errorIcon} />
          <p>{errorMessage}</p>
        </div>
        <button
          className={styles.refreshButton}
          onClick={() => onClick()}
          disabled={isLoading}
        >
          Обновить <img src={refreshIcon} alt="refresh icon" />
        </button>
      </div>
    </div>
  );
};
