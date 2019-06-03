import React from 'react'
import "../css/WidgetCss.css";
import WidgetHeaderComponent from "./WidgetHeaderComponent";

export default class ImageWidget extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            imageUrl: this.props.widget.url
        };

    }

    imageUrlChanged = event => {

        this.setState( {
            imageUrl: event.target.value
        })
    };

    render() {

        return (
            <div>
                { !this.props.isPreview &&
                    <WidgetHeaderComponent
                    widget={this.props.widget}
                    deleteWidget = {this.props.deleteWidget}
                    updateWidget = {this.props.updateWidget}
                    moveUp = {this.props.moveUp}
                    moveDown = {this.props.moveDown}/>
                }

                { !this.props.isPreview && <br /> }

                {   !this.props.isPreview &&
                    <input className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                       height="10px"
                       value={this.state.imageUrl}
                       onChange={this.imageUrlChanged}/>
                }

                {   !this.props.isPreview &&
                    <input className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                       height="10px" placeholder="Widget Name"/>
                }

                { !this.props.isPreview && <h3> Preview </h3> }

                <div>
                    <img src={this.state.imageUrl} alt="Some random image." />
                </div>

            </div>
        );
    }
}