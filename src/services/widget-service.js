let singleton = null;
let i = 1;
let widgets = {};
let baseURL = "http://localhost:8080";

export default class WidgetService {
    constructor() {
        if(!singleton){
            singleton = this
        }
        this.widgets = widgets;
    }

    //creates a new widget instance and adds it to the collection of widgets
    createWidget = () => {

        return fetch(baseURL + "/api/widgets",
            {
                    body: JSON.stringify(
                    {
                        title: "New Heading",
                        name: "Heading",
                        type:"Heading",
                        size: 1,
                        text: "default, widget, text"
                        }
                    ),
                    headers: { 'Content-Type': 'application/json' },
                    method: 'POST'
                })
            .then(response => response.json());
    };

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
        this.widgets.map(
            currentWidget => currentWidget.id === id ? newWidget : currentWidget
        );

    //deletes widget instance whose id matches the id parameters
    deleteWidget = deleteWidget =>
        this.widgets = this.widgets.filter(
            widget => widget.id !== deleteWidget.id
        );
}
