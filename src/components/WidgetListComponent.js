import React from 'react'
import "../css/WidgetListComponent.css";
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import ImageWidget from "./ImageWidget";
import ListWidget from "./ListWidget";
import LinkWidget from "./LinkWidget";
import Switch from 'react-switch';

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
                            changeType = {this.props.changeType}
                            moveUp = {this.props.moveUp}
                            moveDown = {this.props.moveDown}
                            isPreview = {this.props.isPreview}/>;
            case 'Paragraph':
                return <ParagraphWidget
                            widget={widget}
                            deleteWidget = {this.props.deleteWidget}
                            updateWidget = {this.props.updateWidget}
                            changeType = {this.props.changeType}
                            moveUp = {this.props.moveUp}
                            moveDown = {this.props.moveDown}
                            isPreview = {this.props.isPreview}/>;
            case 'Image':
                return <ImageWidget
                            widget={widget}
                            deleteWidget = {this.props.deleteWidget}
                            updateWidget = {this.props.updateWidget}
                            changeType = {this.props.changeType}
                            moveUp = {this.props.moveUp}
                            moveDown = {this.props.moveDown}
                            isPreview = {this.props.isPreview}/>;
            case 'List':
                return <ListWidget
                            widget={widget}
                            deleteWidget = {this.props.deleteWidget}
                            updateWidget = {this.props.updateWidget}
                            changeType = {this.props.changeType}
                            moveUp = {this.props.moveUp}
                            moveDown = {this.props.moveDown}
                            isPreview = {this.props.isPreview}/>;
            case 'Link':
                return <LinkWidget
                            widget={widget}
                            deleteWidget = {this.props.deleteWidget}
                            updateWidget = {this.props.updateWidget}
                            changeType = {this.props.changeType}
                            moveUp = {this.props.moveUp}
                            moveDown = {this.props.moveDown}
                            isPreview = {this.props.isPreview}/>
        }
    };

    render() {
        return(
            <div>

                <div className="wbdv-right-align">
                    <label className="wbdv-preview-label">
                        <b>Preview</b> &nbsp;
                        <Switch onChange={this.props.togglePreviewMode}
                                checked={this.props.isPreview}
                                id="toggle-switch"/>
                    </label>
                </div>

                <br />

                <ul className="list-group">
                    {this.props.widgets.map(
                        widget =>
                            <li key={widget.id} className="list-group-item">
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

