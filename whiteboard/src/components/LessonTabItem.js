import React from 'react'

export default class LessonTabItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isEdit : false,
            lesson: this.props.lesson,
            selectedLesson: this.props.selectedLesson
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {

        console.log(nextProps);

        this.setState({
            lesson : nextProps.lesson,
            selectedLesson: nextProps.selectedLesson
        });
    }


    editLesson = () => {
        this.setState( {
            isEdit : true
        })
    };

    saveLesson = () => {
        this.setState( {
            isEdit : false
        })
    };

    lessonTabTitleChanged = (event) => {
        this.setState( {
            lesson : {
                title: event.target.value
            }
        })
    };

    render() {
        console.log(this.state.selectedLesson);

        return(
            <li className="nav-item"
                onClick={() => this.props.selectLesson(this.props.lesson)}>
                <a className={this.props.lesson === this.state.selectedLesson ?
                    "nav-link active" : "nav-link"}>
                    {this.state.isEdit ?
                        <input
                            onChange={this.lessonTabTitleChanged}
                            defaultValue={this.state.lesson.title}
                            className="form-control"/>
                        :
                        <label> {this.state.lesson.title} </label>
                    }
                </a>
                <span className="float-right">
                    { this.state.isEdit ?
                        <i className="fa fa-check" aria-hidden="true"
                           onClick={this.saveLesson}/>
                        :
                        <i className="fa fa-pencil" aria-hidden="true"
                           onClick={this.editLesson}/>
                    }
                    &nbsp;
                    &nbsp;
                    <i className="fa fa-times" aria-hidden="true"
                       onClick={() => this.props.deleteLesson(this.props.lesson.id)}/>
                </span>
            </li>
        );
    }
}