// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
import BrandLogo from '../../assets/images/brand-logo.jpg'
import Car from '../../assets/images/car.jpg'
import Dish from '../../assets/images/dish.jpg'
import Mosque from '../../assets/images/mosque.jpg'
import Place from '../../assets/images/place.jpg'
import Reptile from '../../assets/images/reptile.jpg'

export const generalKnowledge: Topic = {
  topic: 'GeneralKnowledge',
  level: 'Beginner',
  totalQuestions: 6,
  totalScore: 60,
  totalTime: 60,
  questions: [
    {
      question: 'What is the name of this reptile?',
      image: Reptile,
      choices: ['Snake', 'Turtle', 'Crocodile', 'Lizard'],
      type: 'MCQs',
      correctAnswers: ['Turtle'],
      score: 10,
    },
    {
      question: 'In which country is this historical place located?',
      image: Place,
      choices: ['China', 'Greece', 'India', 'Egypt'],
      type: 'MCQs',
      correctAnswers: ['China'],
      score: 10,
    },
    {
      question: 'This is a famous Pakistani dish. What is the name of this dish?',
      image: Dish,
      choices: ['Kebab', 'Haleem', 'Paya', 'Biryani'],
      type: 'MCQs',
      correctAnswers: ['Biryani'],
      score: 10,
    },
    {
      question: 'Which famous car is this?',
      image: Car,
      choices: ['Ford', 'Toyota', 'Mercedes', 'Honda'],
      type: 'MCQs',
      correctAnswers: ['Mercedes'],
      score: 10,
    },
    {
      question: 'To which renowned automobile brand does this logo belong?',
      image: BrandLogo,
      choices: ['Audi', 'Tesla', 'BMW', 'Hyundai'],
      type: 'MCQs',
      correctAnswers: ['Tesla'],
      score: 10,
    },
    {
      question: 'Do you recognize this iconic mosque? If so, where is it situated?',
      image: Mosque,
      choices: [
        'Faisal Mosque, Islamabad',
        'Sheikh Zayed Grand Mosque, UAE',
        'Taj Mahal, India',
        'Blue Mosque, Turkey',
      ],

      type: 'MCQs',
      correctAnswers: ['Faisal Mosque, Islamabad'],
      score: 10,
    },
  ],
}
