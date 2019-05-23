import React from 'react'
import ModuleList from './ModuleList';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
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
            module: this.courseService.findCourseById(this.courseId).modules[0],
            lesson: null,
            topic: null,
            courseId: this.courseId
        };

        this.selectModule = this.selectModule.bind(this);
    }

    selectModule = module =>
        this.setState(
            {
                module: module,
                lesson: module.lessons[0],
                topic: module.lessons[0].topics[0],
            }
        );

    render() { 

        return (
            <Router>
                <div className="row">

                    <div className="col-4 left">
                        <ModuleList
                            modules={this.state.course.modules}
                            course = {this.state.course}
                            selectModule = {this.selectModule}/>
                    </div>
                    <div className="col-8 right">
                        <LessonTabs lessons={this.state.module.lessons} />
                        <br />
                        <TopicPills topics={this.state.topic} />
                    </div>
                </div>
            </Router>
        );
    }
}