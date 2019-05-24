import React from 'react';
import {BrowserRouter as Router,Link,Route } from 'react-router-dom';
import CourseGrid from "../containers/CourseGrid";
import CourseTable from "../containers/CourseTable";
import CourseService from "../services/course-service";

export default class CourseGridTableHeader extends React.Component {

    constructor(props) {
        super(props);
        this.courseService = new CourseService();
        this.state = {
            courses: this.courseService.findAllCourses(),
            isTable : false
        };

        this.changeView = this.changeView.bind(this);
    }

    changeView = () =>
        this.setState(
            {isTable: !this.state.isTable}
        );


    render() {
        return(
            <Router>
                <div className="row">
                    <div className="col-6">
                        Title
                    </div>
                    <div className="col-2 d-none d-sm-block dropdown-toggle">
                        Owned By
                    </div>
                    <div className="col-2">
                        Last modified by me
                    </div>

                    <div className="viewType">
                        {
                            this.state.isTable ?
                                <Link
                                    to="/course/table">
                                    <button>
                                        <i onClick={this.changeView} className="fa fa-list" aria-hidden = "true"/>
                                    </button>
                                </Link>
                                :
                                <Link
                                    to="/course/grid">
                                    <button>
                                        <i onClick={this.changeView} className="fa fa-table" aria-hidden = "true"/>
                                    </button>
                                </Link>
                        }
                    </div>
                    <div>

                    </div>



                </div>
                <br/>
                <div>
                    <Route exact path="/course/grid"
                           render={() => <CourseGrid
                               selectCourse={this.props.selectCourse}
                               courses={this.state.courses}/>} />

                    <Route exact path="/course/table"
                           render={() => <CourseTable
                               selectCourse={this.props.selectCourse}
                               courses={this.state.courses}/>}/>
                </div>
            </Router>

        );
    }
}