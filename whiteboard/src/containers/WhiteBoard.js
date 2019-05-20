import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import CourseTable from './CourseTable';
import CourseGrid from './CourseGrid';
import courses from '../input/courses';
import CourseService from '../services/course-service';
import NavBar from "../components/NavBar";

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
                <div className="container-fluid">
                    <Link to="/course/table">Table</Link>
                    <Link to="/course/grid">Grid</Link>
                    <Route path="/course/table"
                           render={() => <CourseTable courses={this.courses}/>}/>
                    <Route path="/course/grid"
                           render={() => <CourseGrid courses={this.courses}/>}/>
                </div>

            </Router>
        );
    }
}