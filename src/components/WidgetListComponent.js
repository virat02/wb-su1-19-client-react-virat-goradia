import React from 'react'
import "../css/WidgetListComponentCss.css";
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import ImageWidget from "./ImageWidget";
import ListWidget from "./ListWidget";
import LinkWidget from "./LinkWidget";

export default class WidgetListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.props.findAllWidgets();
    }

    renderWidget = widget => {

        switch (widget.type) {
            case 'Heading':
                return <HeadingWidget
                            widget={widget}
                            deleteWidget = {this.props.deleteWidget}
                            updateWidget = {this.props.updateWidget}
                            moveUp = {this.props.moveUp}
                            moveDown = {this.props.moveDown}
                            isPreview = {this.props.isPreview}/>;
            case 'Paragraph':
                return <ParagraphWidget
                            widget={widget}
                            deleteWidget = {this.props.deleteWidget}
                            updateWidget = {this.props.updateWidget}
                            moveUp = {this.props.moveUp}
                            moveDown = {this.props.moveDown}
                            isPreview = {this.props.isPreview}/>;
            case 'Image':
                return <ImageWidget
                            widget={widget}
                            deleteWidget = {this.props.deleteWidget}
                            updateWidget = {this.props.updateWidget}
                            moveUp = {this.props.moveUp}
                            moveDown = {this.props.moveDown}
                            isPreview = {this.props.isPreview}/>;
            case 'List':
                return <ListWidget
                            widget={widget}
                            deleteWidget = {this.props.deleteWidget}
                            updateWidget = {this.props.updateWidget}
                            moveUp = {this.props.moveUp}
                            moveDown = {this.props.moveDown}
                            isPreview = {this.props.isPreview}/>;
            case 'Link':
                return <LinkWidget
                            widget={widget}
                            deleteWidget = {this.props.deleteWidget}
                            updateWidget = {this.props.updateWidget}
                            moveUp = {this.props.moveUp}
                            moveDown = {this.props.moveDown}
                            isPreview = {this.props.isPreview}/>
        }
    };

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
                                   onClick={this.props.togglePreviewMode}
                                   checked={this.props.preview}/>
                            <span className="slider round"/>
                        </label>
                    </label>
                </div>

                <br />

                <ul className="list-group">
                    {this.props.widgets.map(
                        widget =>
                            <li key={widget.order} className="list-group-item">
                                {this.renderWidget(widget)}
                            </li>
                    )}
                </ul>

                <br />

                <div className="wbdv-right-align">
                    <i className="fa fa-3x fa-plus-circle wbdv-new-widget"
                       onClick={this.props.addWidget}/>&nbsp;
                </div>

            </div>
        );
    }
}

