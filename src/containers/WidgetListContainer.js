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
           ),

   addWidget: () =>
       widgetService.createWidget()
           .then( widgets =>
               dispatch({
                   type: "CREATE_WIDGET",
                   widgets: widgets
               })
           ),

   deleteWidget: id =>
       widgetService.deleteWidget(id)
           .then(widgets =>
           dispatch({
               type: "DELETE_WIDGET",
               widgets: widgets
           })
       )
});

const WidgetListContainer = connect(stateToPropertyMapper, dispatcherToPropertyMapper)(WidgetListComponent);

export default WidgetListContainer;