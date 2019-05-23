import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

const ModuleListItem = ({courseId, module, deleteModule}) =>
    <Router>
        <li className="list-group-item">
            <Link
                to = {`/course/edit/${courseId}/module/${module.id}`}>
            {module.title}
            </Link>
            <span className="float-right">
                <i className="fa fa-times" aria-hidden="true" onClick={() => deleteModule(module.id)}/>
            </span>
        </li>
    </Router>;

export default ModuleListItem;
