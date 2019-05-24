import React from 'react';

export default class TopicPills extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isEdit: false,
            topic: this.props.selectedTopic,
        };

    }

    editTopic = () => {
        this.setState( {
            isEdit : true
        })
    };

    saveTopic = () => {
        this.setState( {
            isEdit : false
        })
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
                        <span className="float-right">
                            { this.state.isEdit ?
                                <i className="fa fa-check" aria-hidden="true"
                                   onClick={this.saveTopic}/>
                                :
                                <i className="fa fa-pencil" aria-hidden="true"
                                   onClick={this.editTopic}/>
                            }
                            &nbsp;
                            &nbsp;
                            <i className="fa fa-times" aria-hidden="true"
                               onClick={() => this.props.deleteTopic(topic.id)}/>
                        </span>
                    </li>
                )}

                {this.props.isCreateTopic ?
                    <div className="input-group">
                        <input type="text"
                            onChange={this.props.topicTitleChanged}
                            defaultValue={this.state.topic.title}
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