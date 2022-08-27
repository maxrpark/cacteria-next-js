import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
} from "next-share";
import { ForwardRefExoticComponent, FC } from "react";

interface ShareIconInt {
  id: number;
  Wrapper: ForwardRefExoticComponent<any>;
  Icon: FC;
  url: string;
  hashtag: string;
}

export const shareIcons: ShareIconInt[] = [
  {
    id: 1,
    Wrapper: FacebookShareButton,
    Icon: FacebookIcon,
    url: "http://localhost:3000/products/",
    hashtag: "#cacteria",
  },
  {
    id: 2,
    Wrapper: TwitterShareButton,
    Icon: TwitterIcon,
    url: "http://localhost:3000/products/",
    hashtag: "#cacteria",
  },
  {
    id: 3,
    Wrapper: PinterestShareButton,
    Icon: PinterestIcon,
    url: "http://localhost:3000/products/",
    hashtag: "#cacteria",
  },
];
