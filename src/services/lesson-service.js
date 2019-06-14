let singleton = null;
let lessons = {};
let baseURL = "http://localhost:8080";

export default class LessonService {

    constructor() {
        if(!singleton){
            singleton = this
        }
        this.lessons = lessons;
    }

    //creates a new lesson
    createLesson = (moduleId, lesson) =>
        fetch(baseURL + "/api/modules/" + moduleId + "/lesson",
            {body: JSON.stringify(lesson),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            })
            .then(response => response.json());

    //retrieves all lessons for a particular module
    findAllLessonsForModule = moduleId =>
        fetch(baseURL + "/api/modules/" + moduleId + "/lessons")
            .then(response => response.json());

    //retrieves a lesson instance that matches the id parameter
    findLessonById = lessonId =>
        fetch(baseURL + "/api/lessons/" + lessonId)
            .then(response => response.json());


    //updates the lesson instance whose id matches the id parameter.
    updateLesson = (id, newLesson) =>
        fetch(baseURL + "/api/lessons/" + id,
            {
                body: JSON.stringify(newLesson),
                headers: {'Content-Type': 'application/json'},
                method: 'PUT'
            })
            .then(response => response.json());

    //Deletes the lesson from the database
    deleteLesson = lessonId =>
        fetch(baseURL + "/api/lessons/" + lessonId,
            {
            method: 'DELETE'
        })
            //.then(response => response.json());
}
