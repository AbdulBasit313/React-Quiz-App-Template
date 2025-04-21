import { FC } from 'react'

interface HighlightedTextProps {
  themeText?: boolean
  children?: React.ReactNode
}

const HighlightedText: FC<HighlightedTextProps> = ({ themeText, children }) => {
  return (
    <span className={themeText ? 'text-theme-text' : 'text-theme-color'}>{children}</span>
  )
}

export default HighlightedText
