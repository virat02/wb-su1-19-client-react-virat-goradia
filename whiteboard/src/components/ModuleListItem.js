import React from 'react';

const ModuleListItem = ({module, deleteModule}) =>
    <li className="list-group-item">
        {module.title}
        <span className="float-right">
            <i className="fa fa-times" aria-hidden="true" onClick={() => deleteModule(module.id)}/>
        </span>
    </li>;

export default ModuleListItem;
