import { PropsWithChildren, createContext, useContext, useState } from "react";

type PlayerContextState = {
  playingUrl: string;
};

const DEFAULT_STATE = { playingUrl: "" };

const PlayerContext = createContext<
  [PlayerContextState, React.Dispatch<React.SetStateAction<PlayerContextState>>]
>([DEFAULT_STATE, () => null]);

export const usePlayerState = () => {
  return useContext(PlayerContext);
};

export default function PlayerContextProvider({ children }: PropsWithChildren) {
  const playerState = useState(DEFAULT_STATE);
  return (
    <PlayerContext.Provider value={playerState}>
      {children}
    </PlayerContext.Provider>
  );
}
