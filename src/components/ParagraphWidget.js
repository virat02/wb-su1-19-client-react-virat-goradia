import React from 'react'
import "../css/WidgetCss.css";

export default class ParagraphWidget extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.widget.type} widget</h1>

                <input className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                       height="10px"
                       defaultValue={this.props.widget.text}/>

                <input  className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                        height="10px"
                        defaultValue={this.props.widget.size}/>

            </div>
        );
    }
}