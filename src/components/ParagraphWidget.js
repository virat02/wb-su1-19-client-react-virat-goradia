import React from 'react'
import "../css/WidgetCss.css";
import WidgetHeaderComponent from "./WidgetHeaderComponent";

export default class ParagraphWidget extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            paragraphText : this.props.widget.text
        }
    }

    paragraphTextChanged = event =>
        this.setState( {
            paragraphText : event.target.value
        });

    render() {
        return (
            <div>
                <WidgetHeaderComponent
                    widget={this.props.widget}
                    deleteWidget = {this.props.deleteWidget}/>
                <br />
                <textarea className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                          rows="4" cols="50"
                          value={this.state.paragraphText}
                          onChange={this.paragraphTextChanged}>
                </textarea>

                <input className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                       height="10px" placeholder="Widget Name"/>

                 <h3> Preview </h3>

                <div>
                    <p> {this.state.paragraphText} </p>
                </div>

            </div>
        );
    }
}