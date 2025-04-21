import { FC } from 'react'

interface QuizImageProps {
  image: string
}

const QuizImage: FC<QuizImageProps> = ({ image }) => (
  <img
    src={image}
    alt="picture quiz"
    className="rounded-[10px] mb-5 h-[400px] w-full shadow-[3px_3px_2px_var(--color-theme-color)] object-cover"
  />
)

export default QuizImage
