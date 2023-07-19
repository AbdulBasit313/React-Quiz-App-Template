import styled from 'styled-components'
import { device } from '../../../styles/BreakPoints'
interface ButtonType {
  outline?: boolean
}

export const ButtonStyle = styled.button.attrs(({ outline }: ButtonType) => ({
  outline,
}))`
  width: 195px;
  min-height: 50px;
  color: ${({ theme, outline }) =>
    outline ? theme.colors.themeColor : theme.colors.white};
  background: ${({ theme, outline }) =>
    outline ? theme.colors.white : theme.colors.themeGradient};
  font-size: clamp(16px, 5vw, 24px);
  border: 1px solid
    ${({ theme, outline }) => (!outline ? 'none' : theme.colors.themeColor)};
  font-weight: 400;
  border-radius: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.md} {
    width: 150px;
    min-height: 40px;
    tap-highlight-color: transparent;
    -webkit-tap-highlight-color: transparent;
  }
  &:active {
    transform: scale(0.98);
    box-shadow: ${({ theme }) => theme.shadows.activeButton};
    transition: 0.2s all;
  }
  &:disabled {
    background: ${({ theme }) => theme.colors.disabledButton};
    color: ${({ theme }) => theme.colors.darkGrayText};
    cursor: not-allowed;
    transform: unset;
    box-shadow: unset;
  }
`

export const IconLeft = styled.span`
  margin-right: 10px;
  display: flex;
`

export const IconRight = styled.span`
  margin-left: 20px;
  display: flex;
`
