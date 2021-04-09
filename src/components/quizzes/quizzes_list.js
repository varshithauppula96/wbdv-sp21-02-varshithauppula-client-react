import React, {useState,useEffect} from "react"
import quizService from "../services/quiz-service"
const QuizzesList =() =>{
    const [quizzes,setQuizzes] =useState([])
    useEffect(() =>{
// fetch("http://localhost:3000/api/quizzes")
//     .then(response => response.json())
//     .then((quizzes)=>{setQuizzes(quizzes)

            quizService.findAllQuizzes().then((quizzes) => {setQuizzes(quizzes)})
    }, [])
    return(
        <div>
            <h1>Quizzes list</h1>
    <ul className="list-group"> {quizzes.map((quiz) => {
        return(
            <li className="list-group-item">{quiz.title}</li>
        )
    })}</ul>
        </div>
    )
}
export default QuizzesList