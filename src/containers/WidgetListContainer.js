import React from 'react';
import {connect} from "react-redux";
import WidgetListComponent from "../components/WidgetListComponent";
import WidgetService from "../services/widget-service";
const widgetService = new WidgetService();

const stateToPropertyMapper = state => ({
    widgets: state.widgets
});

const dispatcherToPropertyMapper = dispatch => ({
   findAllWidgets: () =>
       widgetService.findAllWidgets()
           .then(widgets =>
               dispatch({
                   type: 'FIND_ALL_WIDGETS',
                   widgets:widgets
               })
           )
});

const WidgetListContainer = connect(stateToPropertyMapper, dispatcherToPropertyMapper)(WidgetListComponent);

export default WidgetListContainer;