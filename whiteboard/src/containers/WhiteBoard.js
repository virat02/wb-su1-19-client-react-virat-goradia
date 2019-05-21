import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import courses from '../input/courses';
import CourseService from '../services/course-service';
import NavBar from "../components/NavBar";
import SwitchToggle from "../components/SwitchToggle";

export default class WhiteBoard extends React.Component {

    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.courses = this.courseService.findAllCourses();
        this.state = {
            selectedCourse: courses[0]
        }
    };

    selectCourse = course =>
        this.setState({selectedCourse: course});

    render() {
        return (
            <Router>
                <NavBar />
                <SwitchToggle/>

            </Router>
        );
    }
}