import React from 'react';
import TopicPillItem from "./TopicPillItem";
import './LessonTabItem.css';

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
                {
                    this.props.topics.map(
                    (topic, index) =>
                        <TopicPillItem
                            topic={topic}
                            key={index}
                            deleteTopic={this.props.deleteTopic}
                            selectTopic = {this.props.selectTopic}
                            selectedTopic = {this.props.selectedTopic}/>
                    )
                }

                {
                    this.props.isCreateTopic ?
                    <div>
                        <input
                            onChange={this.props.topicTitleChanged}
                            defaultValue="New Title"
                            className="form-control">
                        </input> &nbsp;&nbsp;
                        <i onClick={this.props.createTopic} className="fa fa-plus" aria-hidden="true"/>
                        &nbsp;&nbsp;
                        <i onClick={this.props.unsetCreateTopic} className="fa fa-close" aria-hidden="true"/>
                        &nbsp;
                        &nbsp;
                    </div>
                    :
                    <button onClick={this.props.setCreateTopic} className="btn btn-dark">
                        <i className="fa fa-plus" aria-hidden="true"/>
                    </button>
                }
            </ul>
        );
    }
}