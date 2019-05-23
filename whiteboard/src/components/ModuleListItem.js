import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

const ModuleListItem = ({module, selectModule, selectedModule, deleteModule, editModule}) =>
    <Router>
        <li className="list-group-item">
            <button type="button" className={module === selectedModule ?
                "list-group-item active list-group-item-action" :
                "list-group-item list-group-item-action"}
                    onClick={() => selectModule(module)}>
                {module.title}
                <span className="float-right">
                    <i className="fa fa-pencil" aria-hidden="true" onClick={() => editModule(module.id)}/>
                    &nbsp;
                    <i className="fa fa-times" aria-hidden="true" onClick={() => deleteModule(module.id)}/>
                </span>
            </button>

        </li>
    </Router>;

export default ModuleListItem;
