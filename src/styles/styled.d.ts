// import original module declarations
import 'styled-components'

export interface Theme {
  colors: {
    primaryText: string
    secondaryText: string
    themeText: string
    themeColor: string
    themeGradient: string
    background: string
    cardBackground: string
    selectTopicBg: string
    appLogo: string
    buttonText: string
    outlineButtonText: string
    buttonBackground: string
    selectedAnswer: string
    infoText: string
    infoBackground: string
    border: string
    answerBg: string
    disabledCard: string
    disabledButton: string
    success: string
    successLight: string
    danger: string
    dangerLight: string
    white: string
    black: string
    dark: string
    darkGray: string
    darkerGray: string
  }
  fonts: {
    anekMalayalam: string
  }
  shadows: {
    activeButton: string
  }
  paddings: {
    container: string
    pageTop: string
  }
  margins: {
    pageTop: string
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
