import React from 'react';
import {BrowserRouter as Link, Route} from 'react-router-dom';
import CourseEditor from "./CourseEditor";

const CourseCard = ({course, selectCourse}) =>

    <div className="card">
        <img className="card-img-top"
             src="https://picsum.photos/300/200"/>
        <div className="card-body">
            <h5 className="card-title">{course.title}</h5>
            <p className="card-text text-muted">Modified {course.lastModified}</p>
            <Link className="btn btn-primary"
                to={`/course/${course.id}`}>
                <button className="btn btn-primary">
                    More
                </button>
            </Link>
        </div>
    </div>;

export default CourseCard;