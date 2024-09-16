import { BiLike, BiNews, BiSolidUserAccount } from "react-icons/bi";
import { GoHistory } from "react-icons/go";
import { HiDownload } from "react-icons/hi";
import { FaFire } from "react-icons/fa";
import { PiFilmSlateLight } from "react-icons/pi";

import {
  MdPlaylistPlay,
  MdOutlineAccessTime,
  MdVideoLibrary,
  MdOutlineShoppingBag,
  MdMusicNote,
  MdPodcasts,
} from "react-icons/md";
import Anurag from "./assets/anurag.jpg";
import Nishant from "./assets/nishant.jpg";
import Qick_Icon from "./assets/quick.jpg";
import Shradha from "./assets/shradha.jpg";
import LC from "./assets/lc.jpg";

export const listItems = [
  {
    id: 1,
    class: "show",
    icon: BiSolidUserAccount,
    title: "Your channel",
  },
  {
    id: 2,
    class: "show",
    icon: GoHistory,
    title: "History",
  },
  {
    id: 3,
    class: "show",
    icon: MdPlaylistPlay,
    title: "Playlists",
  },
  {
    id: 4,
    icon: MdVideoLibrary,
    title: "Your videos",
  },
  {
    id: 5,
    class: "show",
    icon: MdOutlineAccessTime,
    title: "Watch Later",
  },
  {
    id: 6,
    class: "show",
    icon: BiLike,
    title: "Liked videos",
  },
  {
    id: 7,
    icon: HiDownload,
    title: "Downloads",
  },
];
export const subscriptions = [
  {
    id: 1,
    class: "show",
    imgUrl: Anurag,
    title: "Anurag Singh",
  },
  {
    id: 2,
    class: "show",
    imgUrl: Nishant,
    title: "Nishant Chahar",
  },
  {
    id: 3,
    class: "show",
    imgUrl: Shradha,
    title: "Apna College",
  },
  {
    id: 4,
    class: "show",
    imgUrl: Qick_Icon,
    title: "Quick Support",
  },
  {
    id: 5,
    class: "show",
    imgUrl: LC,
    title: "Learning Coding",
  },
];
export const explore = [
  {
    id: 1,
    class: "show",
    icon: FaFire,
    title: "Trending",
  },
  {
    id: 2,
    class: "show",
    icon: MdOutlineShoppingBag,
    title: "Shopping",
  },
  {
    id: 3,
    class: "show",
    icon: MdMusicNote,
    title: "Music",
  },
  {
    id: 4,
    class: "show",
    icon: PiFilmSlateLight,
    title: "Films",
  },
  {
    id: 5,
    class: "show",
    icon: BiNews,
    title: "News",
  },
  {
    id: 6,
    class: "show",
    icon: MdPodcasts,
    title: "Podcasts",
  },
];


