import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

export default class ModuleListItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            module: this.props.module,
            isEdit: false,
        };

        console.log(this.state.module);
    }

    editModule = () => {
        this.setState( {
            isEdit : true
        })
    };

    saveModule = () => {
        this.setState( {
            isEdit : false
        })
    };

    titleChanged = (event) => {
        this.setState(
            {
                module : {
                    title: event.target.value
                }
            }
        )
    };

    render() {
        return (
            <Router>
                <li className="list-group-item">
                    <button type="button" className={this.props.module === this.props.selectedModule ?
                        "list-group-item active list-group-item-action" :
                        "list-group-item list-group-item-action"}
                            onClick={() => this.props.selectModule(this.props.module)}>
                        {this.state.isEdit ?
                            <input
                                onChange={this.titleChanged}
                                defaultValue={this.state.module.title}
                                className="form-control"/>
                            :
                            <label>{this.state.module.title} </label>
                        }

                        <span className="float-right">
                            { this.state.isEdit ?
                                <i className="fa fa-check" aria-hidden="true"
                                   onClick={this.saveModule}/>
                                :
                                <i className="fa fa-pencil" aria-hidden="true"
                                   onClick={this.editModule}/>
                            }
                            &nbsp;
                            &nbsp;
                            <i className="fa fa-times" aria-hidden="true"
                               onClick={() => this.props.deleteModule(this.props.module.id)}/>
                        </span>
                    </button>
                </li>
            </Router>
        )
    }
}