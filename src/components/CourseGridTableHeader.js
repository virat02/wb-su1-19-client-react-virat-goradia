import React from 'react';
import {BrowserRouter as Router,Link,Route } from 'react-router-dom';
import CourseGrid from "./CourseGrid";
import CourseTable from "./CourseTable";

export default class CourseGridTableHeader extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
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
                <div className="container-fluid">
                    <div className="row bg-dark text-white">
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
                                            <i onClick={this.changeView}
                                               className="fa fa-list" aria-hidden = "true"/>
                                        </button>
                                    </Link>
                                    :
                                    <Link
                                        to="/course/grid">
                                        <button>
                                            <i onClick={this.changeView}
                                               className="fa fa-table" aria-hidden = "true"/>
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
                                   deleteCourse={this.props.deleteCourse}
                                   selectedCourse = {this.props.selectedCourse}
                                   courses={this.props.courses}/>} />

                        <Route exact path="/course/table"
                               render={() => <CourseTable
                                   selectCourse={this.props.selectCourse}
                                   deleteCourse={this.props.deleteCourse}
                                   selectedCourse = {this.props.selectedCourse}
                                   courses={this.props.courses}/>}/>
                    </div>
                </div>
            </Router>

        );
    }
}