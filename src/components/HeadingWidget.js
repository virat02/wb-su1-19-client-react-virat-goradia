import React from 'react'
import "../css/WidgetCss.css";
import WidgetHeaderComponent from "./WidgetHeaderComponent";

export default class HeadingWidget extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            widget: this.props.widget
        };
    }

    changeHeadingSize = event => {

        let widget = {...this.state.widget};
        widget.size = parseInt(event.target.value);

        this.setState({
            widget: widget
        })
    };

    headingTextChanged = event => {

        let widget = {...this.state.widget};
        widget.text = event.target.value;

        this.setState( {
            widget: widget
        })
    };

    render() {
        return (
            <div>
                { !this.props.isPreview &&
                    <div>
                        <WidgetHeaderComponent
                            widget={this.state.widget}
                            deleteWidget={this.props.deleteWidget}
                            updateWidget={this.props.updateWidget}
                            changeType={this.props.changeType}
                            moveUp={this.props.moveUp}
                            moveDown={this.props.moveDown}/>

                            <br/>

                        < input className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                            height="10px"
                            value={this.state.widget.text}
                            onChange={this.headingTextChanged}/>

                        <input className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                            height="10px" placeholder="Widget Name"/>

                        <select
                            className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                            onChange = {this.changeHeadingSize}
                            value={this.state.widget.size}>
                            <option value="1">Heading 1</option>
                            <option value="2">Heading 2</option>
                            <option value="3">Heading 3</option>
                        </select>

                        <h3> Preview </h3>
                    </div>
                }

                <div>
                    {
                        this.state.widget.size === 1 &&
                        <h1>{this.state.widget.text}</h1>
                    }

                    {
                        this.state.widget.size === 2 &&
                        <h2>{this.state.widget.text}</h2>
                    }

                    {
                        this.state.widget.size === 3 &&
                        <h3>{this.state.widget.text}</h3>
                    }
                </div>

            </div>
        );
    }
}