import React from 'react';
import {BrowserRouter as Link} from 'react-router-dom';
import '../css/CourseRowCss.css';

const CourseCard = ({course, selectCourse, selectedCourse, deleteCourse}) =>

    <div onClick={() => selectCourse(course)}
         className={selectedCourse === course ?
             "card highlight " : "card"}>
        <img className="card-img-top"
             src="https://picsum.photos/300/200"/>
        <div className="card-body">
            <h5 className="card-title">{course.title}</h5>
            <p className="card-text text-muted">Modified {course.lastModified}</p>
            <a href = {`/course/edit/${course.id}`}>
                More
            </a>
            <div className="col-2">
                <Link
                    to={`/course/delete/${course.id}`}>
                    <button
                        onClick={() => deleteCourse(course.id)}
                        className="btn btn-danger" >
                        Remove
                    </button>
                </Link>
            </div>
        </div>
    </div>;

export default CourseCard;