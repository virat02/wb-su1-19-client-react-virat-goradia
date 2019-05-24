import React from 'react';

export default class LessonTabs extends React.Component {

    constructor(props) {
        super(props);

        console.log(this.props.lessons[0] === this.props.selectedLesson);
    }

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

                <button className="btn btn-primary float-right">
                    <i className="fa fa-plus" aria-hidden="true"/>
                </button>
            </ul>
        </div>
    );
    }
}