import cn from 'classnames'
import { FC } from 'react'
import { AppLogo, Refresh } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import { refreshPage } from '../../utils/helpers'
import Button from '../ui/Button'
import CodeSnippet from '../ui/CodeSnippet'
import Flex from '../ui/Flex'
import QuizImage from '../ui/QuizImage'
import ResultOverview from './ResultOverview'
import RightAnswer from './RightAnswer'

const ResultScreen: FC = () => {
  const { result } = useQuiz()

  const onClickRetry = () => {
    refreshPage()
  }

  return (
    <div className="mx-auto my-8 w-[90%] max-w-[900px] p-10 md:my-14 md:w-auto md:p-0">
      <div className="text-app-logo mb-8 text-center md:mb-12">
        <AppLogo width={220} className="mx-auto" />
      </div>
      <div className="bg-card-bg mx-auto mt-0 mb-10 rounded-sm p-4 md:px-[90px] md:pt-10 md:pb-[90px]">
        <ResultOverview result={result} />
        {result.map(
          (
            {
              question,
              choices,
              code,
              image,
              correctAnswers,
              selectedAnswer,
              score,
              isMatch,
            },
            index: number,
          ) => {
            return (
              <div
                key={question}
                className="mt-10 flex flex-col justify-between md:flex-row"
              >
                <div className="w-[90%]">
                  <Flex gap="4px">
                    <h6 className="text-primary-text text-[clamp(16px,_5vw,_24px)] leading-[1.3] font-medium">{`${index + 1}. `}</h6>
                    <span className="text-primary-text mb-[10px] text-[clamp(16px,_5vw,_24px)] leading-[1.3] font-medium md:mb-5">
                      {question}
                    </span>
                  </Flex>
                  <div>
                    {code && <CodeSnippet code={code} language="javascript" />}
                    {image && <QuizImage image={image} />}
                    <ul>
                      {choices.map((ans: string, index: number) => {
                        // Convert index to alphabet character
                        const label = String.fromCharCode(65 + index)
                        const correct =
                          selectedAnswer.includes(ans) && correctAnswers.includes(ans)
                        const wrong =
                          selectedAnswer.includes(ans) && !correctAnswers.includes(ans)

                        return (
                          <li
                            key={ans}
                            className={cn(
                              'border-border bg-answer-bg text-secondary-text mt-[clamp(13px,_calc(10px_+_6_*_((100vw_-_600px)_/_1320)),_16px)]_md:w-[90%]_w-full rounded-2xl border p-4 text-[clamp(16px,_5vw,_18px)] font-normal md:font-semibold',
                              { 'border-success bg-success-light border': correct },
                              { 'border-danger bg-danger-light border': wrong },
                            )}
                          >
                            <span className="mr-[14px]">{label}.</span>
                            {ans}
                          </li>
                        )
                      })}
                    </ul>
                    {/* only show if the answer is wrong */}
                    {!isMatch && (
                      <RightAnswer correctAnswers={correctAnswers} choices={choices} />
                    )}
                  </div>
                </div>
                <span
                  className={cn(
                    'mt-[10px] mr-[10px] flex justify-end text-base font-medium md:mt-1 md:mr-0 md:inline',
                    isMatch ? 'text-success' : 'text-danger',
                  )}
                >{`Score ${isMatch ? score : 0}`}</span>
              </div>
            )
          },
        )}
      </div>
      <Flex flxEnd>
        <Button
          text="RETRY"
          onClick={onClickRetry}
          icon={<Refresh />}
          iconPosition="left"
          bold
        />
      </Flex>
    </div>
  )
}

export default ResultScreen
