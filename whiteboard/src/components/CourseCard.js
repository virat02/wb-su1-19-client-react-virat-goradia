import React from 'react';
import {BrowserRouter as Link} from 'react-router-dom';

const CourseCard = ({course, selectCourse}) =>

    <div className="card">
        <img className="card-img-top"
             src="https://picsum.photos/300/200"/>
        <div className="card-body">
            <h5 className="card-title">{course.title}</h5>
            <p className="card-text text-muted">Modified {course.lastModified}</p>
            <a href = {`/course/edit/${course.id}`}>
                More
            </a>
        </div>
    </div>;

export default CourseCard;