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
            isEditModule: false,
            isCreateLesson: false,
            isCreateModule : false,
            isCreateTopic : false,
            currentCourse: this.course,
            currentModule: this.course.modules[0],
            currentLesson: this.course.modules[0].lessons[0],
            currentTopic: this.course.modules[0].lessons[0].topics[0],
            courseId: this.courseId,

            module : {
                id : (new Date()).getTime(),
                title: 'New Module',
                lessons: [{
                    id: -1,
                    title: "New Lesson",
                    topics : [{
                        id: -1,
                        title: "New topic"
                    }]
                }]
            },

            lesson : {
                id : -1,
                title : 'New Lesson',
                topics: [ {
                    id: -1,
                    title: 'New Title'
                }]
            },

            topic : {
                id: -1,
                title: 'New Title'
            },

            topics: this.course.modules[0].lessons[0],
            lessons: this.course.modules[0].lessons,
            modules: this.course.modules
        };

        this.selectModule = this.selectModule.bind(this);
        this.selectLesson = this.selectLesson.bind(this);
        this.selectTopic = this.selectTopic.bind(this);

    }

    //All methods for a module

    selectModule = module =>
        this.setState(
            {
                currentModule: module,
                currentLesson: module.lessons[0],
                currentTopic: module.lessons[0].topics[0],
                lessons: module.lessons
            }
        );

    createModule = () => {

        this.state.module.id = (new Date()).getTime();

        this.state.module.lessons = [{
                id: -1,
                title: "New Lesson",
                topics : [{
                    id: -1,
                    title: "New topic"
                }]
            }];

        this.setState({

            modules: [...this.state.modules, this.state.module ],
            isCreateModule : false
        })
    };

    deleteModule = (id) => {
        this.setState({
            modules: this.state.modules.filter(module => module.id !== id)
        })
    };

    setCreateModule = () => {
        this.setState( {
            isCreateModule: true
        });
    };

    unsetCreateModule = () => {
        this.setState( {
            isCreateModule: false
        });
    };

    moduleTitleChanged = (event) => {

        console.log(event.target);

        this.setState({
            module: {
                title: event.target.value
            }
        });
    };

    //All methods for a lesson

    selectLesson = lesson =>
        this.setState(
            {
                currentLesson: lesson,
                currentTopic: lesson.topics[0],
            }
        );

    createLesson = () => {

        this.state.lesson.id = (new Date()).getTime();
        this.state.lesson.topics = [ {
            id: -1,
            title : "New Topic"
        }];

        this.setState({
            lessons: [...this.state.lessons, this.state.lesson],
            isCreateLesson : false
        })
    };

    deleteLesson = (id) => {
        this.setState({
            lessons : this.state.lessons.filter(lesson => lesson.id !== id)
        })
    };

    setCreateLesson = () => {
        this.setState( {
            isCreateLesson: true
        });
    };

    unsetCreateLesson = () => {
        this.setState( {
            isCreateLesson: false
        });
    };

    lessonTitleChanged = (event) => {
        this.setState({
            lesson: {
                title: event.target.value
            }
        });
    };

    //All methods for a topic

    selectTopic = topic =>
        this.setState(
            {
                currentTopic: topic
            }
        );

    createTopic = () => {

        this.state.topic.id = (new Date()).getTime();

        this.setState({
            topics: [...this.state.topics , this.state.topic],
            isCreateTopic : false
        });
    };

    deleteTopic = (id) => {
        this.setState({
            topics : this.state.topics.filter(topic => topic.id !== id)
        })
    };

    setCreateTopic = () => {
        this.setState( {
            isCreateTopic: true
        });
    };

    unsetCreateTopic = () => {
        this.setState( {
            isCreateTopic: false
        });
    };

    topicTitleChanged = (event) => {

        this.setState({
            topic: {
                title: event.target.value,
            }
        });
    };

    render() {

        return (
            <Router>
                <div className="row">

                    <div className="col-3 left">
                        <ModuleList
                            modules={this.state.modules}
                            isCreateModule = {this.state.isCreateModule}
                            selectedModule={this.state.currentModule}
                            course = {this.state.currentCourse}
                            createModule = {this.createModule}
                            deleteModule = {this.deleteModule}
                            setCreateModule = {this.setCreateModule}
                            unsetCreateModule = {this.unsetCreateModule}
                            moduleTitleChanged = {this.moduleTitleChanged}
                            selectModule = {this.selectModule}/>
                    </div>
                    <div className="col-9 right">
                        <LessonTabs
                            lessons={this.state.lessons}
                            module = {this.state.currentModule}
                            selectedLesson={this.state.currentLesson}
                            isCreateLesson = {this.state.isCreateLesson}
                            createLesson = {this.createLesson}
                            deleteLesson = {this.deleteLesson}
                            setCreateLesson = {this.setCreateLesson}
                            unsetCreateLesson = {this.unsetCreateLesson}
                            lessonTitleChanged = {this.lessonTitleChanged}
                            selectLesson = {this.selectLesson}/>
                        <br />
                        <TopicPills
                            topics={this.state.currentLesson.topics}
                            lesson = {this.state.currentLesson}
                            selectedTopic={this.state.currentTopic}
                            isCreateTopic = {this.state.isCreateTopic}
                            createTopic = {this.createTopic}
                            deleteTopic = {this.deleteTopic}
                            setCreateTopic = {this.setCreateTopic}
                            unsetCreateTopic = {this.unsetCreateTopic}
                            topicTitleChanged = {this.topicTitleChanged}
                            selectTopic = {this.selectTopic}/>
                    </div>
                </div>
            </Router>
        );
    }
}