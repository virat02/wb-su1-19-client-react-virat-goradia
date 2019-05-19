import React from 'react';
import {BrowserRouter as Link} from 'react-router-dom';

export default class CourseRow extends React.Component {

    render() {
        return (
            <tr>
                <td>
                    <Link to={`/course/edit/${course.id}`}>
                        {course.title}
                    </Link>
                </td>
            </tr>
        );
    }
}
