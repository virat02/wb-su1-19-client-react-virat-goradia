import React from 'react';
import TopicPillItem from "./TopicPillItem";

export default class TopicPills extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            topic: {
                id: -1,
                title : 'New Title'
            },

            topics: this.props.topics
        };

    }

    render() {
        return(

            <ul className="nav nav-pills">
                { this.props.topics.map((topic, index) =>
                        <TopicPillItem
                            topic={topic}
                            key={index}
                            deleteTopic={this.props.deleteTopic}
                            selectTopic = {this.props.selectTopic}
                            selectedTopic = {this.props.selectedTopic}/>
                )}

                {this.props.isCreateTopic ?
                    <div className="input-group">
                        <input type="text"
                            onChange={this.props.topicTitleChanged}
                            defaultValue="New Title"
                            className="form-control">
                        </input>
                        <span >
                            <i onClick={this.props.createTopic} className="fa fa-plus btn-success" />
                            &nbsp;&nbsp;
                            <i onClick={this.props.unsetCreateTopic} className="fa fa-times btn-danger" />
                        </span>
                    </div>
                    :
                    <button onClick={this.props.setCreateTopic} className="btn btn-primary ">
                        <i className="fa fa-plus" aria-hidden="true"/>
                    </button>
                }
            </ul>
        );
    }
}