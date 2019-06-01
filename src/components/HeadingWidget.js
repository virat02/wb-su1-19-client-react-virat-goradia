import React from 'react'
import "../css/WidgetCss.css";

export default class HeadingWidget extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.widget.type} widget</h1>

                <input className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                       height="10px"
                       defaultValue={this.props.widget.text}/>

                <input  className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                        height="10px"
                        defaultValue={this.props.widget.size}/>

                <select className="form-control form-control-lg col-lg-12 float-left widgetTextbox">
                    <option value="1"> Heading 1 </option>
                    <option value="2">Heading 2</option>
                    <option value="3">Heading 3</option>
                </select>
                
            </div>
        );
    }
}