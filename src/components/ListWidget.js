import React from 'react'
import "../css/WidgetCss.css";
import WidgetHeaderComponent from "./WidgetHeaderComponent";

export default class ListWidget extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            widget: this.props.widget,
            listTextDisplay: this.props.widget.text,
            listText : this.props.widget.text.split("\n")
        };
        
        console.log("PROPS", this.props.widget.text);
    }

    changeListOrder = event=> {
        let widget = {...this.state.widget};
        widget.listType = event.target.value;

        this.setState({
            widget: widget
        });
    };

    listTextChanged = event =>{

        let widget = {...this.state.widget};
        widget.text = event.target.value;

        this.setState( {
            widget: widget,
            listTextDisplay: event.target.value,
            listText : (event.target.value).split('\n')
        });
    };


    render() {

        console.log(this.state.widget.listType);

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
                              value={this.state.listTextDisplay}
                              onChange={this.listTextChanged}>
                    </textarea>

                    <select
                        className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                        onChange={this.changeListOrder}
                        value={this.state.widget.listType}>
                        <option value="ul">Unordered list</option>
                        <option value="ol">Ordered list</option>
                    </select>

                    <input className="form-control form-control-lg col-lg-12 float-left widgetTextbox"
                           height="10px" placeholder="Widget Name"/>

                    <h3> Preview </h3>
                </div>
                }

                <div>
                    {
                        this.state.widget.listType === "ul" ?
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