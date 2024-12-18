import { forwardRef } from 'react'
import { Icon, IconifyIcon } from '@iconify/react'
import { Box, SxProps } from '@mui/material'

interface IconifyProps {
  icon: IconifyIcon | string
  width?: number | string
  sx?: SxProps
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

const Iconify = forwardRef<HTMLDivElement, IconifyProps>(({ icon, width = 30, sx, ...other }, ref) => (
  <Box ref={ref} component={Icon} icon={icon} sx={{ width, height: width, ...sx }} {...other} />
))

export default Iconify
