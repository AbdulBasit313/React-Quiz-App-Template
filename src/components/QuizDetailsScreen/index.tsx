import { AppLogo, StartIcon } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import { ScreenTypes } from '../../types'
import { convertSeconds } from '../../utils/helpers'
import Button from '../ui/Button'
import CenterCardContainer from '../ui/CenterCardContainer'
import HighlightedText from '../ui/HighlightedText'
import PageCenter from '../ui/PageCenter'

const QuizDetailsScreen = () => {
  const { setCurrentScreen, quizDetails } = useQuiz()

  const { selectedQuizTopic, totalQuestions, totalScore, totalTime } = quizDetails

  const goToQuestionScreen = () => {
    setCurrentScreen(ScreenTypes.QuestionScreen)
  }

  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer>
        <div className="text-app-logo mb-8 text-center md:mb-12">
          <AppLogo width={220} />
        </div>
        <h2 className="text-theme-color text-3xl font-bold">XEVEN QUIZ</h2>

        <div className="mt-4 mb-10 max-w-[500px] text-center text-xl font-medium">
          <p className="text-5 mt-4 leading-[1.3] font-medium">
            Selected Quiz Topic: <HighlightedText>{selectedQuizTopic}</HighlightedText>
          </p>

          <p className="text-5 mt-4 leading-[1.3] font-medium">
            Total questions to attempt:{' '}
            <HighlightedText>{totalQuestions}</HighlightedText>
          </p>
          <p className="text-5 mt-4 leading-[1.3] font-medium">
            Score in total: <HighlightedText>{totalScore}</HighlightedText>
          </p>
          <p className="text-5 mt-4 leading-[1.3] font-medium">
            Total time: <HighlightedText>{convertSeconds(totalTime)}</HighlightedText>
          </p>
        </div>

        <Button
          text="Start"
          icon={<StartIcon />}
          iconPosition="left"
          onClick={goToQuestionScreen}
          bold
        />
      </CenterCardContainer>
    </PageCenter>
  )
}

export default QuizDetailsScreen
