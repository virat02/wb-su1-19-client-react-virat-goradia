const widgetReducer = (state = {widgets: []}, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
        case "FIND_ALL_WIDGETS":
        case "DELETE_WIDGET":
            return {
                widgets: action.widgets
            };
        default:
            return state;
    }
};

export default widgetReducer;