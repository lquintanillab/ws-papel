import React from 'react';
import { useHistory } from "react-router-dom";

import './BackButton.css';
const BackButton = ({value = 'Regresar'}) => {
    let history = useHistory();
    return (
        <>
          <button className="back-button" onClick={() => history.goBack()}>{value}</button>
        </>
    );
}

export default BackButton;
