import { useGames } from "./useGames";

export const Games: React.FC = () => {
  const games = useGames();

  console.log({ games });

  return (
    <ul>
      {games.map((g) => (
        <li key={g.foo}>{g.foo}</li>
      ))}
    </ul>
  );
};
