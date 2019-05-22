import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import courses from '../input/courses';
import CourseEditor from "../components/CourseEditor";
import CourseManager from "../components/CourseManager";
import CourseService from "../services/course-service";
import CourseGrid from "./CourseGrid";
import CourseTable from "./CourseTable";

export default class WhiteBoard extends React.Component {

    constructor(props) {
        super(props);
        // this.courseService = new CourseService();
        this.state = {
            // courses: this.courseService.findAllCourses(),
            selectedCourse: courses[0]
        };
    };

    selectCourse = course =>
        this.setState({selectedCourse: course});

    render() {
        return (
            <Router>
                <div>


                    <Switch>
                        <Route exact path="/" component = {CourseManager} />
                        <Route exact path="/edit/:courseId" component={CourseEditor}/>

                        <Route path="/course/grid"
                               render={() => <CourseGrid
                                   selectCourse={this.props.selectCourse}
                                   courses={this.state.courses}/>} />

                        <Route path="/course/table"
                               render={() => <CourseTable
                                   selectCourse={this.props.selectCourse}
                                   courses={this.state.courses}/>}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}