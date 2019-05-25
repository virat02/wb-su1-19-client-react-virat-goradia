import React from 'react';
import NavBar from "./NavBar";
import CourseGridTableHeader from "./CourseGridTableHeader";
import CourseService from "../services/course-service";


export default class CourseManager extends React.Component {
    constructor(props) {
        super(props);
        this.courseService = new CourseService();

        this.state = {
            course: {
                id: -1,
                title: "New Course",
                lessons: [
                    {
                        id: -1,
                        title: "New Lesson",
                        topics: [
                            {
                                id: -1,
                                title: "New Topic"
                            }
                        ]
                    }
                ]
            },

            courses: this.courseService.findAllCourses()
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
        this.setState({
            courses: [...this.state.courses, this.state.course],
            course: {
                title: "New Course"
            }
        });
    };

    deleteCourse = id =>
        this.setState( {
            courses: this.state.courses.filter(course => course.id !== id)
        });

    render() {
        return (
            <div>
                <NavBar
                    courseTitleChanged = {this.courseTitleChanged}
                    createCourse = {this.createCourse}
                    course={this.state.course}/>
                <CourseGridTableHeader
                    deleteCourse = {this.deleteCourse}
                    courses = {this.state.courses}/>
            </div>
        );
    }
}