import React from 'react';
import '../css/CourseRowCss.css';

const CourseCard = ({course, selectCourse, selectedCourse, deleteCourse}) => {
    console.log(course);

    return <div onClick={() => selectCourse(course)}
         className={selectedCourse === course ?
             "card highlight " : "card"}>
        <img className="card-img-top"
             src="https://picsum.photos/300/200"/>
        <div className="card-body">
            <h5 className="card-title">{course.title}</h5>
            <p className="card-text text-muted">Modified {course.lastModified}</p>
            <a href={`/course/edit/${course.courseId}`}>
                More
            </a>
            &nbsp;&nbsp;&nbsp;
            <button
                onClick={() => deleteCourse(course.courseId)}
                className="btn btn-danger">
                Remove
            </button>
        </div>
    </div>
};

export default CourseCard;