import React from 'react';

const LessonTabs = ({lessons}) =>
    <ul className="nav nav-tabs">
        { lessons.map((lesson, index) =>
            <li key={index} className="nav-item">
                <a className="nav-link">
                    {lesson.title}</a></li>
        )}
    </ul>;

export default LessonTabs;