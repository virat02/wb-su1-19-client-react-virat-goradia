import React from 'react';

export default class TopicPills extends React.Component {

    constructor(props) {
        super(props);
    }

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

                <button className="btn btn-primary float-right">
                    <i className="fa fa-plus" aria-hidden="true"/>
                </button>
            </ul>
        );
    }
}