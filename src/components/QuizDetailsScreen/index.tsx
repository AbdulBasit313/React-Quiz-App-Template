import styled from 'styled-components'

import { Logo, StartIcon } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import { CenterCardContainer, HighlightedText, PageCenter } from '../../styles/Global'
import { ScreenTypes } from '../../types'
import { convertSeconds } from '../../utils/helpers'
import { useShuffleQuestions } from '../../hooks'

import Button from '../ui/Button'

const AppTitle = styled.h2`
  font-weight: 700;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.themeColor};
  margin-top: 34px;
`

const DetailTextContainer = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 40px;
  text-align: center;
  max-width: 500px;
`

const DetailText = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 15px;
  line-height: 1.3;
`

const QuizDetailsScreen = () => {
  const { setCurrentScreen, quizDetails } = useQuiz()

  const { selectedQuizTopic, totalQuestions, totalScore, totalTime } = quizDetails

  const goToQuestionScreen = () => {
    setCurrentScreen(ScreenTypes.QuestionScreen)
  }

  // to shuffle or randomize quiz questions
  useShuffleQuestions()

  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer>
        <Logo />
        <AppTitle>XEVEN QUIZ</AppTitle>
        <DetailTextContainer>
          <DetailText>
            Selected Quiz Topic: <HighlightedText>{selectedQuizTopic}</HighlightedText>
          </DetailText>
          <DetailText>
            Total questions to attempt:{' '}
            <HighlightedText>{totalQuestions}</HighlightedText>
          </DetailText>
          <DetailText>
            Score in total: <HighlightedText>{totalScore}</HighlightedText>
          </DetailText>
          <DetailText>
            Total time: <HighlightedText>{convertSeconds(totalTime)}</HighlightedText>
          </DetailText>
        </DetailTextContainer>
        <Button
          text="Start"
          icon={<StartIcon />}
          iconPosition="left"
          onClick={goToQuestionScreen}
        />
      </CenterCardContainer>
    </PageCenter>
  )
}

export default QuizDetailsScreen
