import { MediaPlayer } from "./MediaPlayer";
import { Playlist } from "./Playlist/Playlist";

function App() {
  return (
    <div className="grid grid-cols-[auto,1fr] gap-x-5">
      <MediaPlayer />
      <Playlist />
    </div>
  );
}

export default App;
