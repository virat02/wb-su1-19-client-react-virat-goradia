import React from 'react'
import "../css/WidgetCss.css";
import WidgetHeaderComponent from "./WidgetHeaderComponent";

export default class ImageWidget extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            imageUrl: "http://lorempixel.com/300/150/"
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
                <WidgetHeaderComponent
                    widget={this.props.widget}
                    deleteWidget = {this.props.deleteWidget}
                    updateWidget = {this.props.updateWidget}/>
                <br />
                <input className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                       height="10px"
                       value={this.state.imageUrl}
                       onChange={this.imageUrlChanged}/>

                <input className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                       height="10px" placeholder="Widget Name"/>

                <h3> Preview </h3>

                <div>
                    <img src={this.state.imageUrl} alt="Some random image." />
                </div>

            </div>
        );
    }
}