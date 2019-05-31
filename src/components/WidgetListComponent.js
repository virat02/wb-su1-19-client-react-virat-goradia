import React from 'react'
import "../css/WidgetListComponentCss.css";

export default class WidgetListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.props.findAllWidgets();
    }

    render() {
        return(
            <div>

                <div className="wbdv-right-align">
                    <button className='btn btn-success' id='saveWidgetsBtn'
                            onClick={this.props.saveWidget}>Save
                    </button>&nbsp; &nbsp;
                    <label className="wbdv-preview-label"><b>Preview</b> &nbsp;
                        <label className="switch">
                            <input type="checkbox"
                                   onClick={this.props.previewWidget}
                                   checked={this.props.preview}/>
                            <span className="slider round"/>
                        </label>
                    </label>
                </div>

                <br />

                {this.props.widgets.map(
                    (widget,index) =>
                    <li key={index} className="list-group-item">
                        {widget.name}
                    </li>
                )}

                <br />

                <div className="wbdv-right-align">
                    <i className="fa fa-3x fa-plus-circle wbdv-new-widget"
                       onClick={this.props.addWidget}/>&nbsp;
                </div>

            </div>
        );
    }
}

