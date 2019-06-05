import React from 'react'
import "../css/WidgetCss.css";
import WidgetHeaderComponent from "./WidgetHeaderComponent";

export default class ListWidget extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            listOrderType: "ul",
            widget: this.props.widget,
            listTextDisplay: this.props.widget.text,
            listText : this.props.widget.text.split("\n")
        }
    }

    changeListOrder = event=>
        this.setState( {
            listOrderType: event.target.value
        });

    listTextChanged = event =>{

        let widget = {...this.state.widget};
        widget.text = (event.target.value).split('\n');

        this.setState( {
            listTextDisplay: event.target.value,
            listText : (event.target.value).split('\n')
        });
    };


    render() {

        return (
            <div>
                {   !this.props.isPreview &&
                    <WidgetHeaderComponent
                    widget={this.state.widget}
                    deleteWidget={this.props.deleteWidget}
                    updateWidget={this.props.updateWidget}
                    changeType={this.props.changeType}
                    moveUp={this.props.moveUp}
                    moveDown={this.props.moveDown}/>
                }

                { !this.props.isPreview && <br /> }


                {   !this.props.isPreview &&
                    <textarea className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                              rows="4" cols="50"
                              value={this.state.listTextDisplay}
                              onChange={this.listTextChanged}>
                    </textarea>
                }

                {   !this.props.isPreview &&
                    <select
                        className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                        onChange={this.changeListOrder}
                        value={this.state.listOrderType}>
                        <option value="ul">Unordered list</option>
                        <option value="ol">Ordered list</option>
                    </select>
                }


                {   !this.props.isPreview &&
                    <input className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                           height="10px" placeholder="Widget Name"/>
                }

                { !this.props.isPreview && <h3> Preview </h3> }

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