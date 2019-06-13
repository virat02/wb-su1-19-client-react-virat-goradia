let singleton = null;
let topics = {};
let baseURL = "http://localhost:8080";

export default class TopicService {

    constructor() {
        if(!singleton){
            singleton = this
        }
        this.topics = topics;
    }

    //creates a new topic instance and adds it to the collection of topics
    createTopic = (lessonId, topic) =>
        fetch(baseURL + "/api/lessons/" + lessonId + "/topic",
            {body: JSON.stringify(topic),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST'
            })
            .then(response => response.json());

    //Retrieves all the topics that belong the the lesson
    findAllTopicsForLesson = lessonId =>
        fetch(baseURL + "/api/lessons/" + lessonId + "/topics")
            .then(response => response.json());

    //retrieves a topic instance that matches the id parameter
    findTopicById = topicId =>
        fetch(baseURL + "/api/topics/" + topicId)
            .then(response => response.json());

    //updates the course instance whose id matches the id parameter.
    updateTopic = (id, newTopic) =>
        fetch(baseURL + "/api/modules/" + id,
            {
                body: JSON.stringify(newTopic),
                headers: {'Content-Type': 'application/json'},
                method: 'PUT'
            })
            .then(response => response.json());

    //deletes topic instance whose id matches the id parameter
    deleteTopic = topicId =>
        fetch(baseURL + "/api/topics/" + topicId, {
            method: 'DELETE'
        }).then(response => response.json());
}
