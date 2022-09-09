import { SvgIconTypeMap } from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'

export interface IAsideMenuItem {
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
  title: string
  handler: Function
}