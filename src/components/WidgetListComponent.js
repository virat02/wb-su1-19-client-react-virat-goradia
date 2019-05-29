import React from 'react'

const WidgetListComponent = ({ widgets }) => (
    <ul className="list-group">
        {   widgets.map
                (
                    (widget,index) =>
                    <li key={index} className="list-group-item">
                        {widget.title}
                    </li>
                )
        }
    </ul>);

export default WidgetListComponent;

