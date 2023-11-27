import { PropsWithChildren, createContext, useState } from "react";

const PlaylistContext = createContext<
  [string[], React.Dispatch<React.SetStateAction<string[]>>]
>([[], () => null]);

export default function PlaylistContextProvider({
  children,
}: PropsWithChildren) {
  const playlistState = useState(DEFAULT_PLAYLSIT);
  return (
    <PlaylistContext.Provider value={playlistState}>
      {children}
    </PlaylistContext.Provider>
  );
}

const DEFAULT_PLAYLSIT = [
  "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
];
