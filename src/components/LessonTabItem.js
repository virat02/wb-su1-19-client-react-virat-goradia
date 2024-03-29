import React from 'react'
import '../css/LessonTabItem.css';

export default class LessonTabItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isEditLesson : false,
            lesson: this.props.lesson
        };
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(this.props.lesson !== nextProps.lesson) {
            this.setState({
                lesson : nextProps.lesson
            });
        }
    }


    editLesson = () => {
        this.setState( {
            isEditLesson : true
        })
    };

    saveLesson = () => {
        this.setState( {
            isEditLesson : false
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

        return (
            <li className="nav-item">
                {this.state.isEditLesson ?
                    <span>
                    <input
                        onChange={this.lessonTabTitleChanged}
                        defaultValue={this.state.lesson.title}
                        className="form-control"/>
                    &nbsp;
                        <i className="fa fa-check" aria-hidden="true"
                           onClick={this.saveLesson}/>
                    </span>
                    :
                    <div onClick={() => this.props.selectLesson(this.props.lesson)}>
                        <span className={this.props.lesson === this.props.selectedLesson ?
                            "nav-link active" : "nav-link"}>

                            <label> {this.state.lesson.title} </label>
                            &nbsp;
                            &nbsp;
                            <span className="float-right">
                                <i className="fa fa-pencil" aria-hidden="true"
                                   onClick={this.editLesson}/>
                                &nbsp;
                                &nbsp;
                                <i className="fa fa-times" aria-hidden="true"
                                   onClick={() => this.props.deleteLesson(this.props.lesson.lessonId)}/>
                            </span>
                        </span>
                    </div>
                }
            </li>
        );
    }
}
        // return(
        //     <div>
        //         <li className="nav-item"
        //             onClick={() => this.props.selectLesson(this.props.lesson)}>
        //             <a className={this.props.lesson === this.props.selectedLesson ?
        //                 "nav-link active" : "nav-link"}>
        //                 {this.state.isEditLesson ?
        //                     <input
        //                         onChange={this.lessonTabTitleChanged}
        //                         defaultValue={this.state.lesson.title}
        //                         className="form-control"/>
        //                     :
        //                     <label> {this.state.lesson.title} </label>
        //                 }
        //             </a>
        //         </li>
        //         <span className="float-right">
        //         { this.state.isEditLesson ?
        //             <i className="fa fa-check" aria-hidden="true"
        //                onClick={this.saveLesson}/>
        //             :
        //             <i className="fa fa-pencil" aria-hidden="true"
        //                onClick={this.editLesson}/>
        //         }
        //         &nbsp;
        //         &nbsp;
        //         <i className="fa fa-times" aria-hidden="true"
        //            onClick={() => this.props.deleteLesson(this.props.lesson.id)}/>
        //         </span>
        //     </div>
        // );