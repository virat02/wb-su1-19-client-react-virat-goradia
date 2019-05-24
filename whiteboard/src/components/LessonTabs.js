import React from 'react';

export default class LessonTabs extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isCreateLesson: false,
            editMode: false,
            lesson: this.props.selectedLesson
        };
    }

    createLesson = () => {
        this.state.lesson.id = (new Date()).getTime();


        this.setState({
            lessons: this.props.lessons.push(this.state.lesson),
            isCreateLesson : false
        })
    };

    deleteLesson = (id) => {
        this.setState({
            lessons: this.state.lessons.filter(lesson => lesson.id !== id)
        })
    };

    setCreateLesson = () => {
        this.setState( {
            isCreateLesson: true
        });
    };

    unsetCreateLesson = () => {
        this.setState( {
            isCreateLesson: false
        });
    };

    lessonTitleChanged = (event) => {
        this.setState({
            lesson: {
                title: event.target.value
            }
        });
    };

    render() {
    return (
        <div>
            <ul className="nav nav-tabs">
                { this.props.lessons.map((lesson, index) =>
                    <li key={index} className="nav-item" onClick={() => this.props.selectLesson(lesson)}>
                        <a className={lesson === this.props.selectedLesson ?
                            "nav-link active" : "nav-link"}>
                            {lesson.title}
                        </a>
                    </li>
                )}

                {this.state.isCreateLesson ?
                    <div>
                        <input
                            onChange={this.lessonTitleChanged}
                            defaultValue={this.state.lesson.title}
                            className="form-control">
                        </input>
                        <button onClick={this.createLesson} className="btn btn-success btn-block">
                            Create
                        </button>
                        <button onClick={this.unsetCreateLesson} className="btn btn-danger btn-block">
                            Cancel
                        </button>
                    </div>
                    :
                    <button onClick={this.setCreateLesson} className="btn btn-primary">
                        <i className="fa fa-plus" aria-hidden="true"/>
                    </button>
                }
            </ul>
        </div>
    );
    }
}