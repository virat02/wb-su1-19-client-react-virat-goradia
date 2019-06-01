import React from 'react'
import "../css/WidgetCss.css";

export default class WidgetHeaderComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {   this.props.headingSize === "h1" &&
                        <h1 className="widgetHeading">{this.props.widget.type} widget</h1>
                }

                {   this.props.headingSize === "h2" &&
                        <h2 className="widgetHeading">{this.props.widget.type} widget</h2>
                }

                {
                    this.props.headingSize === "h3" &&
                        <h3 className="widgetHeading">{this.props.widget.type} widget</h3>
                }

                <button onClick={() => this.props.deleteWidget(this.props.widget.id)}
                        className="btn btn-danger float-right">
                    <i className="fa fa-times" aria-hidden="true"/>
                </button>
            </div>
        );
    }
}