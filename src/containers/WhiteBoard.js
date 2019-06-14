import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//import courses from '../input/courses';
import CourseEditor from "../components/CourseEditor";
import CourseManager from "../components/CourseManager";
import CourseService from "../services/course-service";

let courseService = new CourseService();

export default class WhiteBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courses: null,
            selectedCourse: ''
        };
    };

    componentDidMount() {
        this.setState({
            courses: courseService.findAllCourses()
        })
    };

    selectCourse = course =>
        this.setState({selectedCourse: course});

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component = {() =>
                            <CourseManager
                                courses = {this.state.courses} />}
                        />

                        <Route exact path="/course/edit/:courseId" component={CourseEditor}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}