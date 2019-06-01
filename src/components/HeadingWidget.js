import React from 'react'
import "../css/WidgetCss.css";
import WidgetHeaderComponent from "./WidgetHeaderComponent";

export default class HeadingWidget extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            headingSize : "h1"
        };

    }

    changeHeadingSize = event => {

        this.setState({
            headingSize: event.target.value
        })
    };

    render() {
        return (
            <div>
                <WidgetHeaderComponent
                    widget={this.props.widget}
                    deleteWidget = {this.props.deleteWidget}
                    headingSize = {this.state.headingSize}/>
                <br />
                <input className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                       height="10px"
                       defaultValue={this.props.widget.text}/>

                <input  className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                        height="10px"
                        defaultValue={this.props.widget.size}/>

                <select
                    className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                    onChange = {this.changeHeadingSize}
                    value={this.state.headingSize}>
                    <option value="h1">Heading 1</option>
                    <option value="h2">Heading 2</option>
                    <option value="h3">Heading 3</option>
                </select>

                <h3> Preview </h3>

            </div>
        );
    }
}