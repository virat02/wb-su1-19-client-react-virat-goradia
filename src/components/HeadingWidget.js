import React from 'react'
import "../css/WidgetCss.css";
import WidgetHeaderComponent from "./WidgetHeaderComponent";

export default class HeadingWidget extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            headingSize : "h1",
            widget: this.props.widget
        };
    }

    changeHeadingSize = event => {

        this.setState({
            headingSize: event.target.value
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
                    <WidgetHeaderComponent
                        widget={this.state.widget}
                        deleteWidget={this.props.deleteWidget}
                        updateWidget={this.props.updateWidget}
                        changeType={this.props.changeType}
                        moveUp={this.props.moveUp}
                        moveDown={this.props.moveDown}/>
                }

                { !this.props.isPreview && <br/> }

                {   !this.props.isPreview &&
                    < input className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                    height="10px"
                    value={this.state.widget.text}
                    onChange={this.headingTextChanged}/>
                }

                {   !this.props.isPreview &&
                    <input className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                        height="10px" placeholder="Widget Name"/>
                }

                {   !this.props.isPreview &&
                    <select
                        className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                        onChange = {this.changeHeadingSize}
                        value={this.state.headingSize}>
                        <option value="h1">Heading 1</option>
                        <option value="h2">Heading 2</option>
                        <option value="h3">Heading 3</option>
                    </select>
                }

                { !this.props.isPreview && <h3> Preview </h3> }

                <div>
                    {
                        this.state.headingSize === "h1" &&
                        <h1>{this.state.widget.text}</h1>
                    }

                    {
                        this.state.headingSize === "h2" &&
                        <h2>{this.state.widget.text}</h2>
                    }

                    {
                        this.state.headingSize === "h3" &&
                        <h3>{this.state.widget.text}</h3>
                    }
                </div>

            </div>
        );
    }
}