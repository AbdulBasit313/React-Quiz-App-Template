import { FC } from 'react'
import HighlightedText from '../../ui/HighlightedText'

interface RightAnswerProps {
  correctAnswers: string[]
  choices: string[]
}

const RightAnswer: FC<RightAnswerProps> = ({ correctAnswers, choices }) => {
  return (
    <p className="text-darker-grey mt-4 text-lg leading-[1.2] font-normal">
      {`Right ${correctAnswers.length < 2 ? 'Answer' : 'Answers'}: `}
      {correctAnswers.map((item: string, index: number) => {
        const label = String.fromCharCode(65 + choices.indexOf(item))

        return (
          <HighlightedText key={index} themeText>
            {`${label} (${item})${index !== correctAnswers.length - 1 ? ', ' : ''}`}
          </HighlightedText>
        )
      })}
    </p>
  )
}

export default RightAnswer
