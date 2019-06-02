import React from 'react'
import "../css/WidgetCss.css";
import WidgetHeaderComponent from "./WidgetHeaderComponent";
import HeadingWidget from "./HeadingWidget";

export default class ListWidget extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            listOrderType: "ul",
            listTextDisplay: this.props.widget.text,
            listText : this.props.widget.text.split("\n")
        }
    }

    changeListOrder = event=>
        this.setState( {
            listOrderType: event.target.value
        });

    listTextChanged = event =>
        this.setState( {
            listTextDisplay: event.target.value,
            listText : (event.target.value).split('\n')
        });

    render() {

        return (
            <div>
                <WidgetHeaderComponent
                    widget={this.props.widget}
                    deleteWidget = {this.props.deleteWidget}
                    updateWidget = {this.props.updateWidget}
                    moveUp = {this.props.moveUp}
                    moveDown = {this.props.moveDown}/>
                <br />
                <textarea className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                          rows="4" cols="50"
                          value={this.state.listTextDisplay}
                          onChange={this.listTextChanged}>
                </textarea>

                <select
                    className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                    onChange = {this.changeListOrder}
                    value={this.state.listOrderType}>
                    <option value="ul">Unordered list</option>
                    <option value="ol">Ordered list</option>
                </select>

                <input className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                       height="10px" placeholder="Widget Name"/>

                <h3> Preview </h3>

                <div>
                    {
                        this.state.listOrderType === "ul" ?
                            <ul> {this.state.listText.map( (line,index) =>
                                <li key={index}>{line}</li>)} </ul>
                            :
                            <ol> {this.state.listText.map( (line,index) =>
                                <li key={index}>{line}</li>)} </ol>
                    }
                </div>

            </div>
        );
    }
}