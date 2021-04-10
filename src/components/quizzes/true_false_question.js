import React from 'react'
const TrueFalseQuestion =({question}) =>
{
    return(
        <div>
          <h4>
            {question.question}
          </h4>
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