import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.xrocket.finance",
      },
      {
        label: "Liquidity",
        href: "https://exchange.xrocket.finance/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
    status: status.LIVE,
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Team Battle",
    icon: "TeamBattleIcon",
    href: "/competition",
    status: status.SOON,
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    status: status.LIVE,
    items: [
      {
        label: "Leaderboard",
        href: "/teams",
        status: status.NEW,
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://xrocket.info",
      },
      {
        label: "Tokens",
        href: "https://xrocket.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://xrocket.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://xrocket.info/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://voting.xrocket.finance",
      },
      {
        label: "Github",
        href: "https://github.com/xrocket",
      },
      {
        label: "Docs",
        href: "https://docs.xrocket.finance",
      },
      {
        label: "Blog",
        href: "https://xrocket.medium.com",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/xrocket",
      },
      {
        label: "Bahasa Indonesia",
        href: "https://t.me/xrocketIndonesia",
      },
      {
        label: "中文",
        href: "https://t.me/xrocket_CN",
      },
      {
        label: "Tiếng Việt",
        href: "https://t.me/xrocketVN",
      },
      {
        label: "Italiano",
        href: "https://t.me/xrocket_ita",
      },
      {
        label: "русский",
        href: "https://t.me/xrocket_ru",
      },
      {
        label: "Türkiye",
        href: "https://t.me/xrocketturkiye",
      },
      {
        label: "Português",
        href: "https://t.me/xrocketPortuguese",
      },
      {
        label: "Español",
        href: "https://t.me/xrocketEs",
      },
      {
        label: "日本語",
        href: "https://t.me/xrocketjp",
      },
      {
        label: "Français",
        href: "https://t.me/xrocketfr",
      },
      {
        label: "Announcements",
        href: "https://t.me/xrocketAnn",
      },
      {
        label: "Whale Alert",
        href: "https://t.me/xrocketWhales",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/xrocket",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
