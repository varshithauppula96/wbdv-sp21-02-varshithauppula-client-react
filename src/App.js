import './App.css';
import CourseManager from "./components/course-manager";
import CourseEditor from "./components/course-editor/course-editor";
import {BrowserRouter, Route} from "react-router-dom";
import QuizzesList from "./components/quizzes/quizzes_list";
import Home from "./components/home"

function App() {
    return (
        <BrowserRouter>
            <div className="container-fill">
                <Route path="/" exact={true}  component={Home}/>
                <Route path="/home" exact={true}  component={Home}/>
                <Route path="/courses" component={CourseManager}/>
                <Route path ="/courses/:courseId/quizzes" exact={true}  component={QuizzesList}/>
                {/*<Route path="/editor" component={CourseEditor}/>*/}
                <Route path={[ "/courses/:layout/edit/:courseId","/courses/:layout/edit/:courseId/modules/:moduleId",
                   "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId",
                    "/courses/:layout/edit/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId/widgets"]} exact={true} render={(props) => <CourseEditor {...props}/>}/>
                {/*<div className="container-fluid">*/}
                {/*  <CourseManager/>*/}
                {/*  <CourseEditor/>*/}
                {/*</div>*/}

            </div>
        </BrowserRouter>
    );
}

export default App;