import React from 'react';
import LessonTabItem from "./LessonTabItem";

export default class LessonTabs extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            lesson: {
                title: 'New Lesson',
                topics: [
                    {
                        id: -1,
                        title : 'New Title'
                    }
                ]
            },

            lessons : this.props.lessons
        };
    }

    render() {
    return (
        <div>
            <ul className="nav nav-tabs">
                {
                    this.props.lessons.map(
                        (lesson, index) =>
                            <LessonTabItem
                                lesson={lesson}
                                key={index}
                                deleteLesson={this.props.deleteLesson}
                                selectLesson = {this.props.selectLesson}
                                selectedLesson = {this.props.selectedLesson}/>
                    )
                }

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
                        &nbsp;
                    </div>
                    :
                    <button onClick={this.props.setCreateLesson} className="btn btn-dark">
                        <i className="fa fa-plus" aria-hidden="true"/>
                    </button>
                }
            </ul>
        </div>
    );
    }
}