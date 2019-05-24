import React from 'react';

const LessonTabs = ({lessons, selectLesson}) =>
    <ul className="nav nav-tabs">
        { lessons.map((lesson, index) =>
            <li key={index} className="nav-item" onClick={() => selectLesson(lesson)}>
                <a className="nav-link">
                    {lesson.title}
                </a>
            </li>
        )}
    </ul>;

export default LessonTabs;