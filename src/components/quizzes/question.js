import React from 'react'
const Question = ({question}) => {
return(
    <div>
        <h3>{question.title}</h3>
        {question.question}
    </div>
)
}
export default Question