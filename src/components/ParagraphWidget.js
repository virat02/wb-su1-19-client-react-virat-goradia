import React from 'react'
import "../css/WidgetCss.css";
import WidgetHeaderComponent from "./WidgetHeaderComponent";

export default class ParagraphWidget extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            widget : this.props.widget
        }
    }

    paragraphTextChanged = event => {
        let widget = {...this.state.widget};
        widget.text = event.target.value;

        this.setState({
            widget: widget
        });
    };

    render() {

        return (
            <div>
                {!this.props.isPreview &&
                    <div>
                        <WidgetHeaderComponent
                            widget={this.state.widget}
                            deleteWidget={this.props.deleteWidget}
                            updateWidget={this.props.updateWidget}
                            changeType={this.props.changeType}
                            moveUp={this.props.moveUp}
                            moveDown={this.props.moveDown}/>

                        <br/>

                        <textarea className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                                  rows="4" cols="50"
                                  value={this.state.widget.text}
                                  onChange={this.paragraphTextChanged}>
                            </textarea>

                        <input className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                               height="10px" placeholder="Widget Name"/>

                        <h3> Preview </h3>
                    </div>
                }

                <div>
                    <p> {this.state.widget.text} </p>
                </div>

            </div>
        );
    }
}