import logo from './logo.svg';
import './App.css';
import CourseManager from "./components/course-manager";
import CourseEditor from "./components/course-editor";
import {BrowserRouter,Route} from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
          <Route path="/courses" component={CourseManager}/>
          <Route path="/editor" component={CourseEditor}/>

      </BrowserRouter>
  );
}

export default App;
