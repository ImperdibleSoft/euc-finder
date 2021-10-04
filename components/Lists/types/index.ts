export interface ListItem {
  iconProps?: {
    active?: boolean
  }
  icon?: string
  primary: string
  secondary?: string
}

export interface ListProps {
  items: ListItem[]
}