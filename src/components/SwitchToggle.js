import React from 'react';
import './SwitchToggle.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import CourseTable from "./CourseTable";
import CourseGrid from "./CourseGrid";
import CourseService from "../services/course-service";

export default class SwitchToggle extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.state = {
            courses: this.courseService.findAllCourses(),
            isChecked: props.isChecked || false,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({isChecked: !this.state.isChecked});
    }

    render() {
        return (
            <Router>
                <div>
                    <label className="switch">
                        <input type="checkbox" value={this.state.isChecked} onChange={this.handleChange}/>
                        <span className = "slider round"/>
                    </label>
                    {   this.state.isChecked ?
                        <CourseGrid
                            selectCourse={this.props.selectCourse}
                            courses={this.state.courses}/>
                            :
                        <CourseTable
                            selectCourse={this.props.selectCourse}
                            courses={this.state.courses}/>
                    }
                </div>

            </Router>
        );
    }
}