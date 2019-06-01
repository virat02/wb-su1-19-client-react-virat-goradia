import React from 'react'
import "../css/WidgetCss.css";

export default class WidgetHeaderComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className="widgetHeading">{this.props.widget.type} widget</h1>

                <button onClick={() => this.props.deleteWidget(this.props.widget.id)}
                        className="btn btn-danger float-right">
                    <i className="fa fa-times" aria-hidden="true"/>
                </button>
            </div>
        );
    }
}