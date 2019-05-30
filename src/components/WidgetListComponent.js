import React from 'react'

export default class WidgetListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.props.findAllWidgets();
    }

    render() {
        return(
            <ul className="list-group">
                {   this.props.widgets.map
                    (
                    (widget,index) =>
                        <li key={index} className="list-group-item">
                            {widget.name}
                        </li>
                    )
                }
            </ul>
        );
    }
}

