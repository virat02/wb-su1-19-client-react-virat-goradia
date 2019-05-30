let singleton = null;
let i = 1;
let widgets = {};

export default class WidgetService {
    constructor() {
        if(!singleton){
            singleton = this
        }
        this.widgets = widgets;
    }

    //creates a new widget instance and adds it to the collection of widgets
    createWidget = widget => {

        //If encounter the very first course
        if(widget === null) {
            widget = {
                id: i++,
                title: 'New Widget'
            }
        }

        //Append the course to the courses object
        this.widgets.push(widget);
    };

    //retrieves all widget instances as an array of widgets
    findAllWidgets = () =>
        fetch("http://localhost:8080/api/widgets")
            .then(response => response.json());
        // this.widgets;

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
