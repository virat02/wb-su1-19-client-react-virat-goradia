import React from 'react'
import "../css/WidgetCss.css";
import WidgetHeaderComponent from "./WidgetHeaderComponent";

export default class LinkWidget extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            linkUrl : "https://www.youtube.com/user/jannunzi",
            linkText: "Link Text"
        };

    }

    changeLinkUrl = event => {

        this.setState({
            linkUrl: event.target.value
        })
    };

    changeLinkText = event => {

        this.setState( {
            linkText: event.target.value
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
                       value={this.state.linkUrl}
                       onChange={this.changeLinkUrl}/>
                <br />
                <input className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                       height="10px"
                       value={this.state.linkText}
                       onChange={this.changeLinkText}/>
                <br />

                <input className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                       height="10px" placeholder="Widget Name"/>

                <h3> Preview </h3>
                <div>
                    {
                        <a href={this.state.linkUrl}>{this.state.linkText}</a>
                    }
                </div>

            </div>
        );
    }
}