export interface NavItemType {
  name: string | React.ReactElement<SVGAElement>,
  to: string
}

export type NavType = NavItemType[]