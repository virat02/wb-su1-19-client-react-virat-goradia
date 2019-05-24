import React from 'react';

export default class TopicPillItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isEditTopic: false,
            topic: this.props.topic,
            selectedTopic: this.props.selectedTopic
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(this.props.topic !== nextProps.topic) {
            this.setState({
                topic : nextProps.topic,
                selectedTopic: nextProps.selectedTopic
            });
        }

    }

    editTopic = () => {
        this.setState( {
            isEditTopic : true
        })
    };

    saveTopic = () => {
        this.setState( {
            isEditTopic : false
        })
    };

    topicPillTitleChanged = (event) => {

        this.setState( {
            topic : {
                title: event.target.value
            }
        })
    };

    render() {

        return(
            <li className="nav-item"
                onClick={() => this.props.selectTopic(this.props.topic)}>
                <a className={this.props.topic === this.props.selectedTopic ?
                    "nav-link active" : "nav-link"}>
                    {this.state.isEditTopic ?
                        <input
                            onChange={this.topicPillTitleChanged}
                            defaultValue={this.state.topic.title}
                            className="form-control"/>
                        :
                        <label> {this.state.topic.title} </label>
                    }
                </a>
                <span className="float-right">
                    { this.state.isEditTopic ?
                        <i className="fa fa-check" aria-hidden="true"
                           onClick={this.saveTopic}/>
                        :
                        <i className="fa fa-pencil" aria-hidden="true"
                           onClick={this.editTopic}/>
                    }
                    &nbsp;
                    &nbsp;
                    <i className="fa fa-times" aria-hidden="true"
                       onClick={() => this.props.deleteTopic(this.props.topic.id)}/>
                </span>
            </li>
        );
    }
}