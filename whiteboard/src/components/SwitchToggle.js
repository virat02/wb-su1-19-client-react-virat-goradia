import React from 'react';
import './SwitchToggle.css';
import CourseTable from "../containers/CourseTable";
import CourseGrid from "../containers/CourseGrid";
import CourseService from "../services/course-service";

export default class SwitchToggle extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.courses = this.courseService.findAllCourses();
        this.state = {
            isChecked: props.isChecked || false,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({isChecked: !this.state.isChecked});
    }

    render() {
        return (
            <div>
                <label className="switch">
                    <input type="checkbox" value={this.state.isChecked} onChange={this.handleChange}/>
                    <span className = "slider round"/>
                </label>
                {   this.state.isChecked ?
                    <CourseGrid courses={this.courses}/> : <CourseTable courses={this.courses}/>
                }
            </div>
        );
    }
}