import cn from 'classnames'
import { FC, ReactNode } from 'react'

interface FlexProps {
  center?: boolean
  spaceBetween?: boolean
  flxEnd?: boolean
  gap?: string
  children: ReactNode
}

const Flex: FC<FlexProps> = ({ center, spaceBetween, flxEnd, gap, children }) => {
  return (
    <div
      className={cn(
        'flex',
        { 'items-center justify-center': center },
        { 'items-center justify-between': spaceBetween },
        { 'items-center justify-end': flxEnd },
      )}
      style={{ gap }}
    >
      {children}
    </div>
  )
}

export default Flex
