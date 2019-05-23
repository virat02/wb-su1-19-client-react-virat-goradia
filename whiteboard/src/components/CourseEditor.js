import React from 'react'
import ModuleList from './ModuleList';
import LessonTabs from './LessonTabs';
import TopicPills from './TopicPills';
import CourseService from "../services/course-service";

export default class CourseEditor extends React.Component {

    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.courseId = this.props.match.params.courseId;

        this.state = {
            course: this.courseService.findCourseById(this.courseId),
            courseId: this.courseId
        };
    }

    render() {

        return (
            <div className="container-fluid">

                <div className="col-3">
                    <ModuleList
                        modules={this.state.course.modules}
                        course = {this.state.course}/>
                </div>
            </div>
        );
    }
}