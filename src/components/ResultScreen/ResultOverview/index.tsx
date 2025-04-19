import { useQuiz } from '../../../context/QuizContext'
import { Result } from '../../../types'
import { convertSeconds } from '../../../utils/helpers'
import { FC } from 'react'
import HighlightedText from '../../ui/HighlightedText'

interface ResultOverviewProps {
  result: Result[]
}

const ResultOverview: FC<ResultOverviewProps> = ({ result }) => {
  const { quizDetails, endTime } = useQuiz()

  const totalQuestionAttempted = result.length

  const obtainedScore = result
    .filter((item) => item.isMatch && typeof item.score === 'number')
    .reduce((accumulator, currentValue) => accumulator + (currentValue.score || 0), 0)

  // Passed if 60 or more than 60% marks
  const calculateStatus =
    (obtainedScore / quizDetails.totalScore) * 100 >= 60 ? 'Passed' : 'Failed'

  return (
    <div className="mb-7 text-center md:mb-18">
      <p className="mt-4 text-lg font-medium">
        You attempted questions:{' '}
        <HighlightedText> {totalQuestionAttempted} </HighlightedText>/{' '}
        {quizDetails.totalQuestions}
      </p>
      <p className="mt-4 text-lg font-medium">
        Score secured:<HighlightedText> {obtainedScore} </HighlightedText>/{' '}
        {quizDetails.totalScore}
      </p>
      <p className="mt-4 text-lg font-medium">
        Time Spent:<HighlightedText> {convertSeconds(endTime)} </HighlightedText>
      </p>
      <p className="mt-4 text-lg font-medium">
        Status:<HighlightedText> {calculateStatus}</HighlightedText>
      </p>
    </div>
  )
}

export default ResultOverview
