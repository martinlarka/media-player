import { twMerge } from "tailwind-merge";
import { usePlaylistState } from "../Context/PlaylistContext";

export const Playlist = () => {
  const [playlist, setPlaylist] = usePlaylistState();
  console.log("playlist", playlist);
  return (
    <div className="flex flex-col justify-between">
      <div>
        {playlist.map((item, i) => (
          <div
            key={i}
            title={item}
            className={twMerge(
              "flex items-center justify-between gap-x-8",
              "px-2 py-2",
              "border-b",
              "group",
              "cursor-pointer"
            )}
          >
            <span className="group-hover:underline">
              {item.match(/(?=\w+\.\w{3,4}$).+/) || item}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setPlaylist((list) =>
                  list.slice(0, i).concat(list.slice(i + 1))
                );
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const mediaUrl = e.currentTarget.elements[0] as HTMLInputElement;
            const newUrl = mediaUrl.value;
            setPlaylist((list) => [...list, newUrl]);
            mediaUrl.value = "";
          }}
        >
          <label htmlFor="media-url">Media url:</label>
          <br />
          <input type="text" id="media-url" name="mediaUrl" required />
          <button type="submit" className="ml-2">
            Add media
          </button>
        </form>
      </div>
    </div>
  );
};
