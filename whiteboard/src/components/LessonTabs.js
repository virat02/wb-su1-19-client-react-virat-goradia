import React from 'react';

export default class LessonTabs extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isEdit: false,
            lesson: this.props.lessons[0],
        };
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

    render() {
    return (
        <div>
            <ul className="nav nav-tabs">
                {
                    this.props.lessons.map((lesson, index) =>
                    <li key={index} className="nav-item" onClick={() => this.props.selectLesson(lesson)}>
                        <a className={lesson === this.props.selectedLesson ?
                            "nav-link active" : "nav-link"}>
                            {lesson.title}
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
                               onClick={() => this.props.deleteLesson(lesson.id)}/>
                        </span>
                    </li>
                )}

                {this.props.isCreateLesson ?
                    <div>
                        <input
                            onChange={this.props.lessonTitleChanged}
                            defaultValue="New Lesson"
                            className="form-control">
                        </input>
                        <button onClick={this.props.createLesson} className="btn btn-success btn-block">
                            Create
                        </button>
                        <button onClick={this.props.unsetCreateLesson} className="btn btn-danger btn-block">
                            Cancel
                        </button>
                    </div>
                    :
                    <button onClick={this.props.setCreateLesson} className="btn btn-primary">
                        <i className="fa fa-plus" aria-hidden="true"/>
                    </button>
                }
            </ul>
        </div>
    );
    }
}