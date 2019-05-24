import React from 'react'
import ModuleList from './ModuleList';
import {BrowserRouter as Router} from 'react-router-dom';
import LessonTabs from './LessonTabs';
import TopicPills from './TopicPills';
import CourseService from "../services/course-service";

export default class CourseEditor extends React.Component {

    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.courseId = this.props.match.params.courseId;
        this.course = this.courseService.findCourseById(this.courseId);

        this.state = {
            course: this.course,
            module: this.course.modules[0],
            lesson: this.course.modules[0].lessons[0],
            topic: this.course.modules[0].lessons[0].topics[0],
            courseId: this.courseId
        };

        this.selectModule = this.selectModule.bind(this);
        this.selectLesson = this.selectLesson.bind(this);
        this.selectTopic = this.selectTopic.bind(this);

    }

    selectModule = module =>
        this.setState(
            {
                module: module,
                lesson: module.lessons[0],
                topic: module.lessons[0].topics[0],
            }
        );

    selectLesson = lesson =>
        this.setState(
            {
                lesson: lesson,
                topic: lesson.topics[0],
            }
        );

    selectTopic = topic =>
        this.setState(
            {
                topic: topic
            }
        );

    render() {

        return (
            <Router>
                <div className="row">

                    <div className="col-3 left">
                        <ModuleList
                            modules={this.state.course.modules}
                            selectedModule={this.state.module}
                            course = {this.state.course}
                            selectModule = {this.selectModule}/>
                    </div>
                    <div className="col-9 right">
                        <LessonTabs
                            lessons={this.state.module.lessons}
                            selectedLesson={this.state.lesson}
                            selectLesson = {this.selectLesson}/>
                        <br />
                        <TopicPills
                            topics={this.state.lesson.topics}
                            selectedTopic={this.state.topic}
                            selectTopic = {this.selectTopic}/>
                    </div>
                </div>
            </Router>
        );
    }
}