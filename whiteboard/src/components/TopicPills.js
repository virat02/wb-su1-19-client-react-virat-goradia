import React from 'react';

export default class TopicPills extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isCreateTopic: false,
            editMode: false,
            topic: this.props.selectedTopic,
            topics: this.props.topics
        };


    }

    createTopic = () => {

        this.state.topic.id = (new Date()).getTime();

        this.setState({
            topics: [...this.state.topics, this.state.topic],
            isCreateTopic : false
        })
    };

    deleteTopic = (id) => {
        this.setState({
            topics: this.state.topics.filter(topic => topic.id !== id)
        })
    };

    setCreateTopic = () => {
        this.setState( {
            isCreateTopic: true
        });
    };

    unsetCreateTopic = () => {
        this.setState( {
            isCreateTopic: false
        });
    };

    topicTitleChanged = (event) => {
        this.setState({
            topic: {
                title: event.target.value
            }
        });
    };

    render() {
        return(
            <ul className="nav nav-pills">
                { this.props.topics.map((topic, index) =>
                    <li key={index} className="nav-item" onClick={() => this.props.selectTopic(topic)}>
                        <a className={topic === this.props.selectedTopic ?
                            "nav-link active" : "nav-link"}>
                            {topic.title}
                        </a>
                    </li>
                )}

                {this.state.isCreateTopic ?
                    <div>
                        <input
                            onChange={this.topicTitleChanged}
                            defaultValue={this.state.topic.title}
                            className="form-control">
                        </input>
                        <button onClick={this.createTopic} className="btn btn-success btn-block">
                            Create
                        </button>
                        <button onClick={this.unsetCreateTopic} className="btn btn-danger btn-block">
                            Cancel
                        </button>
                    </div>
                    :
                    <button onClick={this.setCreateTopic} className="btn btn-primary btn-block">
                        <i className="fa fa-plus" aria-hidden="true"/>
                    </button>
                }
            </ul>
        );
    }
}