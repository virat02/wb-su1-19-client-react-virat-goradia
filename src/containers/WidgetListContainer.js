import React from 'react';
import {connect} from "react-redux";
import WidgetListComponent from "../components/WidgetListComponent";
import WidgetService from "../services/widget-service";
const widgetService = new WidgetService();

const stateToPropertyMapper = state => ({
    widgets: state.widgets,
    isPreview: state.isPreview
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
           ),

   updateWidget: newWidget =>
       widgetService.updateWidget(newWidget.id, newWidget)
           .then(widgets =>
               dispatch({
                   type: "UPDATE_WIDGET",
                   widgets: widgets,
                   widgetType: newWidget.type
               })
           ),

   moveUp: widget =>
       dispatch({
           type: "MOVE_UP",
           widget: widget
       }),

   moveDown: widget =>
       dispatch({
           type: "MOVE_DOWN",
           widget: widget
       }),

   togglePreviewMode: () =>
      dispatch({
          type: "TOGGLE_PREVIEW_MODE",
      }),

   changeType: widget =>
       dispatch({
           type: "CHANGE_WIDGET_TYPE",
           widget: widget
       })

});

const WidgetListContainer = connect(stateToPropertyMapper, dispatcherToPropertyMapper)(WidgetListComponent);

export default WidgetListContainer;