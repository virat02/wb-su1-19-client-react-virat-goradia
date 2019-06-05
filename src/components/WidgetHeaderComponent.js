import React from 'react'
import "../css/WidgetCss.css";
import "../css/widgetHeader.css";

export default class WidgetHeaderComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            widget: this.props.widget,
        };

    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps.widget !== this.props.widget){
            this.setState({
                widget: nextProps.widget
            })
        }
    };

    changeWidgetType = event => {

        let widget = {...this.state.widget};
        widget.type = event.target.value;
        widget.name = event.target.value;

        if(widget.type === "Image"){
            widget.url = "http://lorempixel.com/300/150/";
            widget.text = null;
        }

        else if(widget.type === "Heading"){
            widget.url = null;
            widget.text = "Heading Text";
        }

        else if(widget.type === "Paragraph"){
            widget.url = null;
            widget.text = "Lorem ipsum";
        }

        else if(widget.type === "Link"){
            widget.url = "https://www.youtube.com/user/jannunzi";
            widget.text = "Link Text";
        }

        else if(widget.type === "List"){
            widget.url = null;
            widget.text = "Put each\nitem in\na separate row";
        }

        this.setState({
            widget: widget
        },
            () => this.props.changeType(this.state.widget)
        );

    };

    render() {

        return (
            <div>
                <h1 className="widgetHeading">{this.state.widget.type} widget</h1>

                <span>
                    <span>&nbsp;&nbsp;</span>

                    <button onClick={() => this.props.deleteWidget(this.state.widget.id)}
                            className="btn btn-danger float-right wbdv-btn-margin">
                        <i className="fa fa-times" aria-hidden="true"/>
                    </button>

                    <button className='btn btn-success wbdv-btn-margin float-right' id='saveWidgetsBtn'
                            onClick={() => this.props.updateWidget(this.state.widget)}>Save
                    </button>&nbsp;&nbsp;

                    <select className="form-control col-sm-2 wbdv-widget-types
                    wbdv-btn-margin float-right"
                            onChange={this.changeWidgetType}
                            value={this.state.widget.type}>
                        <option value = "Heading">Heading</option>
                        <option value = "Link">Link</option>
                        <option value = "Paragraph">Paragraph</option>
                        <option value = "Image">Image</option>
                        <option value="List">List</option>
                    </select>

                    <span>&nbsp;&nbsp;</span>

                    <button onClick={() => this.props.moveUp(this.state.widget)}
                            className='btn btn-warning wbdv-widget-up-btn wbdv-btn-margin float-right'>
                        <i className='fa fa-arrow-up'/>
                    </button>
                    <button onClick={() => this.props.moveDown(this.state.widget)}
                            className='btn btn-warning wbdv-widget-down-btn wbdv-btn-margin float-right'>
                        <i className='fa fa-arrow-down'/>
                    </button>

                </span>
            </div>
        );
    }
}