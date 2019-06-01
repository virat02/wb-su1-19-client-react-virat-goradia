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

                    <button className='btn btn-warning wbdv-widget-up-btn'>
                        <i className='fa fa-arrow-up'/>
                    </button>
                    &nbsp;
                    <button className='btn btn-warning wbdv-widget-down-btn'>
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