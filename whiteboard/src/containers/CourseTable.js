import React from 'react';
import CourseRow from '../components/CourseRow';

let courses = [
    {
        "id": "123",
        "title": "CS5610",
        "modules": [
            {
                "title": "Week 1",
                "lessons": [
                    {
                        "title": "HTML",
                        "topics": [
                            {
                                "title": "DOM",
                                "widgets": [
                                    {
                                        "type": "HEADING",
                                        "size": 1,
                                        "text": "The Document Object Model"
                                    },
                                    {
                                        "type": "PARAGRAPH",
                                        "text": "This topic introduces the DOM"
                                    },
                                    {
                                        "type": "LIST",
                                        "items": "Nodes,Attributes,Tag names,IDs,Styles,Classes"
                                    },
                                    {
                                        "type": "IMAGE",
                                        "src": "https://picsum.photos/200"
                                    },
                                    {
                                        "type": "LINK",
                                        "title": "The DOM",
                                        "href": "https://en.wikipedia.org/wiki/Document_Object_Model"
                                    }
                                ]
                            },
                            {
                                "title": "Tags",
                                "widgets": []
                            },
                            {
                                "title": "Attributes",
                                "widgets": []
                            }
                        ]
                    },
                    {
                        "title": "CSS",
                        "topics": []
                    }
                ]
            },
            {
                "title": "Week 2",
                "lessons": []
            }
        ]
    },
    {
        "id": "234",
        "title": "CS5200",
        "modules": []
    }
];

export default class CourseTable extends React.Component {

    render() {
        return (
            <table className="table">
                <tbody>
                { courses.map((course, key) =>
                    <CourseRow course={course}key={key}/>
                )}
                </tbody>
            </table>
        );
    }

}