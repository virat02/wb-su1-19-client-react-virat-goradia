import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

const ModuleListItem = ({module, selectModule, deleteModule}) =>
    <Router>
        <li className="list-group-item">
            <button type="button" className="list-group-item list-group-item-action"
                    onClick={() => selectModule(module)}>
                {module.title}
                <span className="float-right">
                    <i className="fa fa-times" aria-hidden="true" onClick={() => deleteModule(module.id)}/>
                </span>
            </button>

        </li>
    </Router>;

export default ModuleListItem;
