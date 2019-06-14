import React from 'react';
import NavBar from "./NavBar";
import CourseGridTableHeader from "./CourseGridTableHeader";
import CourseService from "../services/course-service";


export default class CourseManager extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCourse: '',
            course: {
                courseId: (new Date()).getTime(),
                title: "New Course",
                modules: [
                    {
                        moduleId: (new Date()).getTime(),
                        title: "New Module",
                        lessons: [
                            {
                                lessonId: (new Date()).getTime(),
                                title: "New Lesson",
                                topics: [
                                    {
                                        id: (new Date()).getTime(),
                                        title: "New Topic",
                                        widgets: []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            courses: []
        }
    }

    componentDidMount() {
        this.courseService = new CourseService();
        this.courseService.findAllCourses()
            .then( courses =>
                this.setState({
                    courses: courses
                }))
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(this.props !== nextProps) {
            this.setState({
                courses: nextProps.courses,
                selectedCourse: nextProps.selectedCourse
            })
        }
    }

    courseTitleChanged = (event) =>
        this.setState( {
            course: {
                id: (new Date()).getTime(),
                title: event.target.value
            }
        });

    createCourse = () => {

        this.courseService.createCourse(this.state.course)
            .then(() => {
                this.courseService.findAllCourses()
                    .then(courses => this.setState({
                        courses: courses
                    }))
            })
    };

    deleteCourse = id => {

        this.courseService.deleteCourse(id)
            .then(() => {
                this.courseService.findAllCourses()
                    .then(courses => this.setState({
                        courses: courses
                    }))
            })
    };

    selectCourse = course =>
        this.setState({
            selectedCourse: course
        });

    render() {
        return (
            <div>
                <NavBar
                    courseTitleChanged = {this.courseTitleChanged}
                    createCourse = {this.createCourse}
                    course={this.state.course}/>
                <CourseGridTableHeader
                    selectCourse = {this.selectCourse}
                    selectedCourse = {this.state.selectedCourse}
                    deleteCourse = {this.deleteCourse}
                    courses = {this.state.courses}/>
            </div>
        );
    }
}