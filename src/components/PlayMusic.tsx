import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Music } from "lucide-react";
import Spotify from "react-spotify-embed"
export default function PlayMusic() {
  return (
    <>
      <div className="fixed top-28 right-20 hidden md:block lg:block ">
              <iframe
                style={{ borderRadius: 12 }}
                src="https://open.spotify.com/embed/album/1XoE7ZirQ3gjxq8HIzTJU9?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
              
                allow="autoplay"
                loading="lazy"
              ></iframe>
      </div>
    </>
  );
}
