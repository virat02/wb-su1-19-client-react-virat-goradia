import React from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import '../css/CourseRowCss.css';

const CourseRow = ({course, selectCourse, selectedCourse, deleteCourse}) =>
        <Router>
            <div onClick={() => selectCourse(course)}
                 className={selectedCourse === course ?
                     "row highlight " : "row"}>
                <div className="col-6 text-black" >
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
                        <i onClick={() => deleteCourse(course.id)}
                           className="fa fa-times"/>
                    </Link>
                </div>
            </div>
        </Router>;

export default CourseRow;
