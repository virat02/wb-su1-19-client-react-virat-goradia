let singleton = null;
let modules = {};
//let baseURL = "http://localhost:8080";
let baseURL = "https://evening-brook-77037.herokuapp.com";

export default class ModuleService {

    constructor() {
        if(!singleton){
            singleton = this
        }
        this.modules = modules;
    }

    //creates a new module instance and adds it to the collection of modules
    createModule = (courseId, module) =>
        fetch(baseURL + "/api/courses/" + courseId + "/module",
            {body: JSON.stringify(module),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            }).then(response => response.json());

    //Retrieves all the modules that belong the the course
    findAllModulesForCourse = courseId =>
        fetch(baseURL + "/api/courses/cid/modules"
                .replace('cid', courseId))
            .then(response => response.json());

    //retrieves a module instance that matches the id parameter
    findModuleById = moduleId =>
        fetch(baseURL + "/api/modules/" + moduleId)
            .then(response => response.json());

    //updates the course instance whose id matches the id parameter.
    updateModule = (id, newModule) =>
        fetch(baseURL + "/api/modules/" + id,
            {
                body: JSON.stringify(newModule),
                headers: {'Content-Type': 'application/json'},
                method: 'PUT'
            })
            .then(response => response.json());

    //deletes module instance whose id matches the id parameter
    deleteModule = moduleId =>
        fetch(baseURL + "/api/modules/" + moduleId,
            {
                method: 'DELETE'
            })
            //.then(response => response.json());
}
