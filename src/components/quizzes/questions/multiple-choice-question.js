import React, {useState, useEffect}  from 'react'
const MultipleChoiceQuestion =({graded,question, questions, setQuestions}) =>
{
    // const [yourAnswer, setYourAnswer] = useState('');
    // const [grade, setGrade] = useState(false);
    const [answer, setAnswer] = useState('');
    const choices = question.choices;
    const rightChoice = answer === question.correct && graded;
    const wrongChoice = graded && answer !== question.correct && graded;
    let count = 0;
    useEffect(() => {
        if (graded) {
            const unrelated = questions.filter(q => q._id !== question._id);
            const target = questions.find(q => q._id === question._id);
            target.answer = answer;
            const updatedQuestions = [...unrelated, target];
            setQuestions(updatedQuestions);
        }
    }, [graded])
    return(
        <div>
            {/*<h5>*/}
            {/*    {!grade &&*/}
            {/*    <>*/}
            {/*        {question.question}*/}
            {/*    </>*/}
            {/*    }*/}
            {/*    {grade &&*/}
            {/*    <>*/}
            {/*        {question.question}*/}
            {/*        {*/}
            {/*            question.correct !== yourAnswer &&*/}
            {/*            <i className="fas fa-times float-right" style={{color: '#d9161d'}}></i>*/}
            {/*        }*/}
            {/*        {*/}
            {/*            question.correct === yourAnswer &&*/}
            {/*            <i className="fas fa-check float-right" style={{color: '#5ab83b'}}></i>*/}
            {/*        }*/}
            {/*    </>*/}
            {/*    }*/}
            {/*</h5>*/}

            {/*<ul className="list-group">*/}
            <h4>{question.question}
                {rightChoice && <i className="fas fa-check float-right" style={{color: '#5ab83b'}}/>}
                {wrongChoice && <i className="fas fa-times float-right" style={{color: '#d9161d'}}/>}</h4>
            <ul className='list-group'>
                {
                    // grade &&
                    // question.choices.map((choice) => {
                    //     return (
                    //         <>
                    //             {yourAnswer === question.correct && yourAnswer === choice &&
                    //             <li className='list-group-item list-group-item-success'>
                    //                 <lable>
                    //                     <input type='radio'
                    //                            className=''
                    //                            name={question._id}
                    //                            checked
                    //                            disabled
                    //                     />
                    //                     {choice}
                    //                     <i className="fas fa-check float-right" style={{color: '#5ab83b'}}></i>
                    //                 </lable>
                    //             </li>
                    //             }
                    //             {yourAnswer === question.correct && yourAnswer !== choice &&
                    //             <li className='list-group-item'>
                    //                 <lable>
                    //                     <input type='radio'
                    //                            className=''
                    //                            name={question._id}
                    //                            disabled
                    //                     />
                    //                     {choice}
                    //                 </lable>
                    //             </li>
                    //             }
                    //             {yourAnswer !== question.correct && yourAnswer === choice
                    //             && choice !== question.correct &&
                    //             <li className='list-group-item list-group-item-danger'>
                    //                 <lable>
                    //                     <input type='radio'
                    //                            className=''
                    //                            name={question._id}
                    //                            checked
                    //                            disabled
                    //                     />
                    //                     {choice}
                    //                     <i className="fas fa-times float-right" style={{color: '#d9161d'}}></i>
                    //                 </lable>
                    //             </li>
                    //             }
                    //             {yourAnswer !== question.correct && yourAnswer !== choice
                    //             && choice === question.correct &&
                    //             <li className='list-group-item list-group-item-success'>
                    //                 <lable>
                    //                     <input type='radio'
                    //                            className=''
                    //                            name={question._id}
                    //                            disabled
                    //                     />
                    //                     {choice}
                    //                     <i className="fas fa-check float-right" style={{color: '#5ab83b'}}></i>
                    //                 </lable>
                    //             </li>
                    //             }
                    //             {yourAnswer !== question.correct && yourAnswer !== choice
                    //             && choice !== question.correct &&
                    //             <li className='list-group-item'>
                    //                 <lable>
                    //                     <input type='radio'
                    //                            className=''
                    //                            name={question._id}
                    //                            disabled
                    //                     />
                //                         {choice}
                //                     </lable>
                //                 </li>
                //                 }
                //             </>
                //         )
                //     })
                // }
                // {
            //         !grade && question.choices.map((choice) => {
            //
            //             return (
            //                 <li className="list-group-item">
            //                     <lable>
            //                         <input type='radio'
            //                                className=''
            //                                onClick={() => {
            //                                    setYourAnswer(choice)
            //                                }}
            //                                name={question._id}/> {choice}
            //                     </lable>
            //                 </li>
            //             )
                    choices.map(choice => {
                        const ra = graded && question.correct === choice;
                        const swa = graded && question.correct !== answer && answer === choice;
                        return (<li className={`list-group-item ${ra ? 'list-group-item-success' : ''} ${swa ? 'list-group-item-danger' : ''}`} key={count++}>
                            <label>
                                <input type='radio'
                                       value={choice} checked={answer === choice}
                                       disabled={graded}
                                       onChange={e => setAnswer(e.target.value)}/>
                                {choice}
                            </label>
                            {
                                ra && <i className="fas fa-check float-right" style={{color: '#5ab83b'}}/>
                            }
                            {
                                swa && <i className="fas fa-times float-right" style={{color: '#d9161d'}}/>
                            }
                        </li>)
                    })
                }
            </ul>
            {/*<p>*/}
            {/*    Your answer: {yourAnswer}*/}
            {/*</p>*/}
            {/*<button type="button"*/}
            {/*        class="btn btn-success"*/}
            {/*        onClick={() => {*/}
            {/*            if (yourAnswer === '') {*/}
            {/*                alert('Please choose an answer before grading！')*/}
            {/*            } else {*/}
            {/*                if (grade) {*/}
            {/*                    setYourAnswer('')*/}
            {/*                }*/}
            {/*                setGrade(!grade)*/}
            {/*            }*/}
            {/*        }}*/}
            {/*>*/}
            {/*    Grade*/}
            {/*</button>*/}
            {/*<hr/>*/}
            <p>Your Answer: {answer}</p>
        </div>
    )
}
export default MultipleChoiceQuestion