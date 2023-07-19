import { DefaultTheme } from 'styled-components'

export const theme: DefaultTheme = {
  colors: {
    primaryText: '#11052C', // question text color
    secondaryText: '#2D264B', // answer text color
    themeColor: '#800080',
    themeGradient: 'linear-gradient(to right,#800080, #FFC0CB)',
    text: '#000000',
    background: '#E5E5E5',
    success: '#12B40E',
    successLight: '#DDFFDC',
    danger: '#FF143E',
    dangerLight: '#FFD7DE',
    lightPink: '#FFD6FF',
    infoText: '#FF783F', // skip button text
    infoBackground: '#ffb23f26', // skip button background
    codeBackground: '#F9F9F9',
    disabledCard: '#fbf4ecbc',
    disabledButton: '#e7e8e9',
    white: '#FFFFFF',
    black: '#000000',
    grayText: '#9993A3',
    darkGrayText: '#9fa3a9',
    darkerGray: '#817a8e',
    lightGray: '#eaeaea',
    darkText: '',
  },
  fonts: {
    anekMalayalam: 'Anek Malayalam',
  },
  shadows: {
    activeButton: '3px 2px 22px 1px rgba(0, 0, 0, 0.24)',
  },
  paddings: {
    container: '15px',
    pageTop: '30px',
  },
  margins: {
    pageTop: '30px',
  },
}
