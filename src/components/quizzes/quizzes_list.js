import React, {useState,useEffect} from "react"

const QuizzesList =() =>{
    const [quizzes,setQuizzes] =useState([])
    useEffect(() =>{
fetch("http://localhost:3000/api/quizzes")
    .then(response => response.json())
    .then((quizzes)=>{setQuizzes(quizzes)})
    },[])
    return(
        <div>
            <h1>Quizzes list</h1>
        </div>
    )
}
export default QuizzesList