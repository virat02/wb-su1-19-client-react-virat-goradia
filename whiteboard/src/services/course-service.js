import courses from '../input/courses';

let singleton = null;
let i = 1;

export default class CourseService {
    constructor() {
        if(!singleton){
            singleton = this
        }
        this.courses = courses;
    }

    //creates a new course instance and adds it to the collection of courses
    createCourse = course => {

        //If encounter the very first course
        if(course === null) {
            course = {
                id: i++,
                title: 'New Course'
            }
        }

        //Append the course to the courses object
        this.courses.push(course);

        return this.courses
    };

    //retrieves all course instances as an array of courses
    findAllCourses = () =>
        this.courses;

    //retrieves a course instance that matches the id parameter
    findCourseById = courseId =>
        this.courses = this.courses.find(
            course => course.id === courseId
        );

    //updates the course instance whose id matches the id parameter.
    //Updates the instance with values in course parameter
    updateCourse = (id, course) =>
        this.courses = this.courses.map(
            currentCourse => currentCourse.id === id ? course : currentCourse
        );

    //deletes course instance whose id matches the id parameters
    deleteCourse = deleteCourse =>
        this.courses = this.courses.filter(
            course => course.id !== deleteCourse.id
        );
}
