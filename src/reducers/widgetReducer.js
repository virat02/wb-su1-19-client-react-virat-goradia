import 'array.prototype.move';

const widgetReducer = (state = {widgets: [], isPreview: false}, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
        case "FIND_ALL_WIDGETS":
        case "DELETE_WIDGET":
            return {
                widgets: action.widgets
            };

        case "UPDATE_WIDGET":

            alert("Data saved for "+action.widgetType+" widget");
            return {
                widgets: action.widgets
            };

        case "CHANGE_WIDGET_TYPE":
            return {
              widgets: state.widgets.map(widget =>
                  widget.id === action.widget.id ? action.widget : widget)
            };

        case "MOVE_UP":
            let index = state.widgets.indexOf(action.widget);
            if(index !== 0) {
                state.widgets.move(index, index - 1)
            }
            else
            {
                alert('Cannot move further up!')
            }
            return Object.assign({} ,{
                widgets:state.widgets.splice(0)
            });

        case "MOVE_DOWN" :
            let indx = state.widgets.indexOf(action.widget);
            if(indx + 1  !== state.widgets.length)
            {
                state.widgets.move(indx,indx+1)}

            else{

                alert('Cannot move further down!')
            }
            return Object.assign({} ,{
                widgets:state.widgets.splice(0)
            });

        case "TOGGLE_PREVIEW_MODE":

            return {
                isPreview: !state.isPreview,
                widgets: state.widgets
            };

        default:
            return state;
    }
};

export default widgetReducer;