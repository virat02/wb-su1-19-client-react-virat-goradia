import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';

const CourseRow = ({course, selectCourse}) =>
        <Router>
            <div className="row">
                <div className="col-6">
                   <a href = {`/course/edit/${course.id}`}>
                       {course.title}
                   </a>
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
