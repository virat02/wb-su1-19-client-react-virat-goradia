import React from 'react'
import "../css/WidgetCss.css";
import WidgetHeaderComponent from "./WidgetHeaderComponent";

export default class HeadingWidget extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            headingSize : "h1",
            headingText: "Heading Text"
        };

    }

    changeHeadingSize = event => {

        this.setState({
            headingSize: event.target.value
        })
    };

    headingTextChanged = event => {

        this.setState( {
            headingText: event.target.value
        })
    };

    render() {

        return (
            <div>
                <WidgetHeaderComponent
                    widget={this.props.widget}
                    deleteWidget = {this.props.deleteWidget}
                    updateWidget = {this.props.updateWidget}/>
                <br />
                <input className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                       height="10px"
                       value={this.state.headingText}
                       onChange={this.headingTextChanged}/>

                <input className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                       height="10px" placeholder="Widget Name"/>

                <select
                    className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                    onChange = {this.changeHeadingSize}
                    value={this.state.headingSize}>
                    <option value="h1">Heading 1</option>
                    <option value="h2">Heading 2</option>
                    <option value="h3">Heading 3</option>
                </select>

                <h3> Preview </h3>
                <div>
                    {
                        this.state.headingSize === "h1" &&
                        <h1>{this.state.headingText}</h1>
                    }

                    {
                        this.state.headingSize === "h2" &&
                        <h2>{this.state.headingText}</h2>
                    }

                    {
                        this.state.headingSize === "h3" &&
                        <h3>{this.state.headingText}</h3>
                    }
                </div>

            </div>
        );
    }
}