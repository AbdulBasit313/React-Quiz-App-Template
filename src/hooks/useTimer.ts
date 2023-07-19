import { Dispatch, SetStateAction, useEffect } from 'react'

interface QuizDetails {
  totalTime: number
}

const useTimer = (
  timer: number,
  quizDetails: QuizDetails,
  setEndTime: (time: number) => void,
  setTimer: Dispatch<SetStateAction<number>>,
  setShowTimerModal: (time: boolean) => void,
  showResultModal: boolean
) => {
  useEffect(() => {
    if (timer <= 0) {
      const timeTaken = quizDetails.totalTime
      setEndTime(timeTaken)
      setShowTimerModal(true)
      setTimer(0)
    }
  }, [timer, quizDetails.totalTime, setEndTime, setShowTimerModal, setTimer])

  useEffect(() => {
    if (!showResultModal) {
      const countTimer = setTimeout(() => {
        setTimer((prevTimer) => prevTimer - 1)
      }, 1000)
      return () => clearTimeout(countTimer)
    }
  }, [timer, setTimer])
}

export default useTimer
