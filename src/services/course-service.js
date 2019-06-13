let singleton = null;
let courses = {};
let baseURL = "http://localhost:8080";

export default class CourseService {
    constructor() {
        if(!singleton){
            singleton = this
        }
        this.courses = courses;
    }

    //creates a new course instance and adds it to the collection of courses
    createCourse = course =>
        fetch(baseURL + "/api/courses", {
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(response => response.json());

    //retrieves all course instances as an array of courses
    findAllCourses = () =>
        fetch(baseURL + "/api/courses")
            .then(response => response.json());

    //retrieves a course instance that matches the id parameter
    findCourseById = courseId =>
        fetch(baseURL + "/api/courses" + '/' + courseId)
            .then(response => response.json());

    //updates the course instance whose id matches the id parameter.
    updateCourse = (id, newCourse) =>
        fetch(baseURL + "/api/courses/" + id,
            {
                body: JSON.stringify(newCourse),
                headers: {'Content-Type': 'application/json'},
                method: 'PUT'
            })
            .then(response => response.json());

    //deletes course instance whose id matches the id parameter
    deleteCourse = courseId =>
        fetch(baseURL+ "/api/courses" + '/' + courseId,
            {
                method: 'DELETE'
            })
            .then(response => response.json());
}
