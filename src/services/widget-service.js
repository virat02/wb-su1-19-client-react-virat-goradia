let singleton = null;
let i = 2;
let widgets = {};
//let baseURL = "http://localhost:8080";
let baseURL = "https://immense-bastion-78527.herokuapp.com";

let order = 2;

export default class WidgetService {

    constructor() {
        if (!singleton) {
            singleton = this
        }
        this.widgets = widgets;
    }

    //creates a new widget instance and adds it to the collection of widgets
    createWidget = () =>
        fetch(baseURL + "/api/widgets",
            {
                body: JSON.stringify(
                    {
                        id: i++,
                        title: "New Heading",
                        order: order++,
                        name: "Heading",
                        type: "Heading",
                        size: 1,
                        text: "Heading Text"
                    }
                ),
                headers: {'Content-Type': 'application/json'},
                method: 'POST'
            })
            .then(response => response.json());

    //retrieves all widget instances as an array of widgets
    findAllWidgets = () =>
        fetch(baseURL + "/api/widgets")
            .then(response => response.json());

    //retrieves a widget instance that matches the id parameter
    findWidgetById = widgetId =>
        this.widgets.find(
            widget => widget.id === widgetId
        );

    //updates the widget instance whose id matches the id parameter.
    //Updates the instance with values in widget parameter
    updateWidget = (id, newWidget) =>
        fetch(baseURL + "/api/widgets/" + id,
            {
                body: JSON.stringify(
                    {
                        order: newWidget.order,
                        name: newWidget.name,
                        type: newWidget.type,
                        text: newWidget.text,
                        url: newWidget.url,
                        size: newWidget.size
                    }
                ),
                headers: {'Content-Type': 'application/json'},
                method: 'PUT'
            })
            .then(response => response.json());

    //deletes widget instance whose id matches the id parameters
    deleteWidget = id =>
        fetch(baseURL + "/api/widgets/" + id,
            {
                headers: {'Content-Type': 'application/json'},
                method: 'DELETE'
            })
            .then(response =>response.json());
}