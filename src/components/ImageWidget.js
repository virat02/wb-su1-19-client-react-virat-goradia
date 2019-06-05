import React from 'react'
import "../css/WidgetCss.css";
import WidgetHeaderComponent from "./WidgetHeaderComponent";

export default class ImageWidget extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            widget: this.props.widget
        };

    }

    imageUrlChanged = event => {

        let widget = {...this.state.widget};
        widget.url = event.target.value;

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
                        deleteWidget = {this.props.deleteWidget}
                        updateWidget = {this.props.updateWidget}
                        changeType={this.props.changeType}
                        moveUp = {this.props.moveUp}
                        moveDown = {this.props.moveDown}/>

                        <br />

                        <input className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                           height="10px"
                           value={this.state.widget.url}
                           onChange={this.imageUrlChanged}/>

                        <input className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                           height="10px" placeholder="Widget Name"/>

                        <h3> Preview </h3>
                    </div>
                }

                <div>
                    <img src={this.state.widget.url} alt="Some random image." />
                </div>

            </div>
        );
    }
}