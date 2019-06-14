import React from 'react'
import ModuleList from './ModuleList';
import {BrowserRouter as Router} from 'react-router-dom';
import LessonTabs from './LessonTabs';
import TopicPills from './TopicPills';
import CourseService from "../services/course-service";
import ModuleService from "../services/module-service";
import LessonService from "../services/lesson-service";
import TopicService from "../services/topic-service";

import widgetReducer from "../reducers/widgetReducer";
import WidgetListContainer from "../containers/WidgetListContainer";
import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(widgetReducer);

export default class CourseEditor extends React.Component {

    constructor(props) {
        super(props);

        this.courseService = new CourseService();
        this.moduleService = new ModuleService();
        this.lessonService = new LessonService();
        this.topicService = new TopicService();

        this.courseId = this.props.match.params.courseId;

        this.state = {
            isCreateLesson: false,
            isCreateModule : false,
            isCreateTopic : false,
            currentCourse: '',
            currentModule: '',
            currentLesson: '',
            currentTopic: '',

            module : {
                id : (new Date()).getTime(),
                title: 'New Module',
                lessons: []
            },

            lesson : {
                id : (new Date()).getTime(),
                title : 'New Lesson',
                topics: []
            },

            topic : {
                id: (new Date()).getTime(),
                title: 'New Title',
                widgets: []
            },

            topics: [],
            lessons: [],
            modules: []
        };

    }

    componentDidMount() {
        this.courseService.findCourseById(this.courseId)
            .then(course => {

                this.setState({
                    currentCourse: course,
                    currentModule: course.modules[0],
                    modules: course.modules
                })
            })
    };

    /**
     *  All methods for a module
     */
    selectModule = module =>
        this.setState(
            {
                currentModule: module,
                lessons: module.lessons,
            });

    createModule = () => {

        this.moduleService.createModule(this.courseId, this.state.module)
            .then(() => this.moduleService.findAllModulesForCourse(this.courseId)
                .then(modules => this.setState({
                    modules: modules,
                    isCreateModule : false
                })))
    };

    deleteModule = id => {
        this.moduleService.deleteModule(id)
            .then(() => this.moduleService.findAllModulesForCourse(this.courseId)
                .then(modules => this.setState({
                    modules: modules
                })))
    };

    setCreateModule = () => {
        this.setState( {
            isCreateModule: true,
            module : {
                title: "New Module"
            }
        });
    };

    unsetCreateModule = () => {
        this.setState( {
            isCreateModule: false
        });
    };

    moduleTitleChanged = (event) => {

        this.setState({
            module: {
                title: event.target.value
            }
        });
    };

    /**
     * All methods for a lesson
     */
    selectLesson = lesson =>
        this.setState(
            {
                currentLesson: lesson,
                topics: lesson.topics
            }
        );

    createLesson = () => {

        this.lessonService.createLesson(this.state.currentModule.moduleId, this.state.lesson)
            .then(() => this.lessonService.findAllLessonsForModule(this.state.currentModule.moduleId)
                .then(lessons => this.setState({
                    lessons: lessons,
                    isCreateLesson : false
                })))
    };

    deleteLesson = id => {

        this.lessonService.deleteLesson(id)
            .then(() => this.lessonService.findAllLessonsForModule(this.state.currentModule.moduleId)
                .then(lessons => this.setState({
                    lessons: lessons
                })))
    };

    setCreateLesson = () => {
        this.setState( {
            isCreateLesson: true,
            lesson: {
                title : "New Lesson"
            }
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

    /**
     *  All methods for a topic
     */
    selectTopic = topic =>
        this.setState(
            {
                currentTopic: topic
            }
        );

    createTopic = () => {

        this.topicService.createTopic(this.state.currentLesson.lessonId, this.state.topic)
            .then(() => this.topicService.findAllTopicsForLesson(this.state.currentLesson.lessonId)
                .then(topics => this.setState({
                    topics: topics,
                    isCreateTopic : false
                })))
    };

    deleteTopic = id => {
        this.topicService.deleteTopic(id)
            .then(() => this.topicService.findAllTopicsForLesson(this.state.currentLesson.lessonId)
                .then(topics => this.setState({
                    topics: topics
                })))
    };

    setCreateTopic = () => {
        this.setState( {
            isCreateTopic: true,
            topic: {
                title : "New Topic"
            }
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
                            topics={this.state.topics}
                            lesson = {this.state.currentLesson}
                            selectedTopic={this.state.currentTopic}
                            isCreateTopic = {this.state.isCreateTopic}
                            createTopic = {this.createTopic}
                            deleteTopic = {this.deleteTopic}
                            setCreateTopic = {this.setCreateTopic}
                            unsetCreateTopic = {this.unsetCreateTopic}
                            topicTitleChanged = {this.topicTitleChanged}
                            selectTopic = {this.selectTopic}/>

                        <br />

                        <Provider store={store}>
                            <WidgetListContainer topic = {this.state.currentTopic}/>
                        </Provider>
                    </div>
                </div>
            </Router>
        );
    }
}