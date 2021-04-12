import React,{useState} from 'react'
const TrueFalseQuestion =({question}) =>
{
    const {answer,setAnswer} = useState(null)
    return(
        <div>
            {question.correct}
          <h4>
            {question.question}
          </h4>

            <br/>
            {answer}
            <label>
                <input name={question._id} type ="radio"/>
                True
            </label>
            <label>
                <input name={question._id}    type ="radio"/>
                False
            </label>

        </div>
    )
}
export default TrueFalseQuestion