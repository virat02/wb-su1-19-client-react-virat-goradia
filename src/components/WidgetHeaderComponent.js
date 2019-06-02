import React from 'react'
import "../css/WidgetCss.css";

export default class WidgetHeaderComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            widget: this.props.widget,
        };
    }

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
            () => this.props.updateWidget(this.state.widget.id, this.state.widget)
        );

    };

    render() {

        return (
            <div>
                <h1 className="widgetHeading">{this.state.widget.type} widget</h1>

                <div className='wbdv-widget-edit-panel form-inline float-right'>

                    <button onClick={() => this.props.moveUp(this.state.widget)}
                            className='btn btn-warning wbdv-widget-up-btn'>
                        <i className='fa fa-arrow-up'/>
                    </button>
                    &nbsp;
                    <button onClick={() => this.props.moveDown(this.state.widget)}
                            className='btn btn-warning wbdv-widget-down-btn'>
                        <i className='fa fa-arrow-down'/>
                    </button>
                    &nbsp;
                    <select className="form-control wbdv-widget-types"
                            onChange={this.changeWidgetType}
                            value={this.state.widget.type}>
                        <option value = "Heading">Heading</option>
                        <option value = "Link">Link</option>
                        <option value = "Paragraph">Paragraph</option>
                        <option value = "Image">Image</option>
                        <option value="List">List</option>
                    </select> &nbsp;

                    <button onClick={() => this.props.deleteWidget(this.state.widget.id)}
                            className="btn btn-danger">
                        <i className="fa fa-times" aria-hidden="true"/>
                    </button>
                </div>
            </div>
        );
    }
}