import React from 'react';
import {Link} from 'react-router-dom'
import {  useSelector } from 'react-redux';

import './Breadcrumbs.css'

const Breadcrumbs = ({}) => {
    
    const uiState = useSelector(state => state.ui)

    return (
        <div className="breadcrumb-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <nav aria-label="breadcrumb" >
                            <ol className="breadcrumb">
                                {uiState.breadcrumbPath.map(
                                    breadcrumb => breadcrumb !== undefined ? 
                                    <li className="breadcrumb-item">
                                        <Link className="breadcrumb-link" to={breadcrumb.path}>
                                            {breadcrumb.name.toUpperCase()}
                                        </Link>
                                    </li> :
                                    null
                                )}
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcrumbs;





