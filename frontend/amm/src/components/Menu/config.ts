import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'http://mountain.classic999.com/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'http://mountain.classic999.com/farms',
  },
  {
    label: 'Staking',
    icon: 'PoolIcon',
    href: 'http://mountain.classic999.com/nests',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'NFTs',
    icon: 'NftIcon',
    href: '/nft',
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: '/ifo',
  },
  {
    label: 'Docs',
    icon: 'GooseIcon',
    href: '/doc',
  },
  {
    label: 'Markets',
    icon: 'InfoIcon',
    href: '/markets',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/climbtoken/',
      },
      {
        label: 'Docs',
        href: 'https://climbtoken.gitbook.io/climb-token/',
      },
      {
        label: 'Blog',
        href: 'https://climbtoken.medium.com/',
      },
    ],
  },
  {
    label: 'Climb Token',
    icon: 'ClimbIcon',
    href: '/climb',
  },
  {
    label: 'Mountain Token',
    icon: 'MountainIcon',
    href: '/mountain',
  },
]

export default config
