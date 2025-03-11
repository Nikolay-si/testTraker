import React, { useEffect, useState } from "react";
import { MatchCard } from "../components/matchCard/MatchCard";
import { Match } from "../types";
import { fetchMatches } from "../services/api";
import { Header } from "../components/header/Header";
import { Loader } from "../components/loader/Loader";

export const MainPage = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadMatches = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchMatches();
      if (data.ok) {
        setMatches(data.data.matches);
      } else {
        setError("Ошибка: не удалось загрузить информацию");
      }
    } catch (err) {
      setError("API недоступно");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadMatches();
  }, []);

  return (
    <div>
      <header>
        <Header
          errorMessage={error}
          isLoading={isLoading}
          onClick={loadMatches}
        />
      </header>
      {isLoading ? (
        <Loader />
      ) : (
        matches.map((match) => <MatchCard key={match.title} match={match} />)
      )}
    </div>
  );
};
