import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import CourseEditor from "./CourseEditor";

const CourseRow = ({course, selectCourse}) =>
        <Router>
            <div className="row">
                <div className="col-6">
                   <Link
                        to={`/edit/${course.id}`}>
                        {course.title}
                    </Link>

                </div>
                <div className="col-2">
                    {course.ownedBy}
                </div>
                <div className="col-2 d-none d-sm-block">
                    {course.lastModified}
                </div>
                <div className="col-2">
                    <Link
                        to={`/course/delete/${course.id}`}>
                        <i className="fa fa-times"/>
                    </Link>

                </div>
            </div>
        </Router>;

export default CourseRow;
