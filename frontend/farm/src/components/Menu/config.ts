import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'http://mexchange.classic999.com/',
      },
      {
        label: 'Liquidity',
        href: 'http://mexchange.classic999.com/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Staking',
    icon: 'PoolIcon',
    href: '/nests',
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
