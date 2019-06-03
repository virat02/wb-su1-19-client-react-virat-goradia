import 'array.prototype.move';

const widgetReducer = (state = {widgets: [], isPreview: false}, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
        case "FIND_ALL_WIDGETS":
        case "DELETE_WIDGET":
        case "UPDATE_WIDGET":
            return {
                widgets: action.widgets
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