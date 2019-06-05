import React from 'react'
import "../css/WidgetCss.css";
import WidgetHeaderComponent from "./WidgetHeaderComponent";

export default class LinkWidget extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            widget: this.props.widget
        };

    }

    changeLinkUrl = event => {

        let widget = {...this.state.widget};
        widget.url = event.target.value;

        this.setState({
            widget: widget
        })
    };

    changeLinkText = event => {

        let widget = {...this.state.widget};
        widget.text = event.target.value;

        this.setState({
            widget: widget
        })
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

                    <input className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                           height="10px"
                           value={this.state.widget.url}
                           onChange={this.changeLinkUrl}/>

                    <br/>

                    <input className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                           height="10px"
                           value={this.state.widget.text}
                           onChange={this.changeLinkText}/>

                    <br/>

                    <input className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                           height="10px" placeholder="Widget Name"/>

                    <h3> Preview </h3>
                </div>
                }

                <div>
                    {
                        <a href={this.state.widget.url}>{this.state.widget.text}</a>
                    }
                </div>

            </div>
        );
    }
}