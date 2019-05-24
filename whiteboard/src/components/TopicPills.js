import React from 'react';

export default class TopicPills extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isCreateTopic: false,
            editMode: false,
            topic: this.props.selectedTopic,
        };

    }

    createTopic = () => {

        this.setState({
            topics: this.props.topics.push(this.state.topic),
            isCreateTopic : false
        });
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

        console.log(event.target.value);

        this.setState({
            topic: {
                title: event.target.value,
                widgets: []
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
                    <div className="input-group">
                        <input type="text"
                            onChange={this.topicTitleChanged}
                            defaultValue={this.state.topic.title}
                            className="form-control">
                        </input>
                        <span >
                            <i onClick={this.createTopic} className="fa fa-plus btn-success" />
                            &nbsp;&nbsp;
                            <i onClick={this.unsetCreateTopic} className="fa fa-times btn-danger" />
                        </span>
                    </div>
                    :
                    <button onClick={this.setCreateTopic} className="btn btn-primary ">
                        <i className="fa fa-plus" aria-hidden="true"/>
                    </button>
                }
            </ul>
        );
    }
}