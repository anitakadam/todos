import React from "react";
import ReactDOM from 'react-dom';
import Todos from './todos';

ReactDOM.render( <Todos data={[]}/ > ,
    document.getElementById('todos')
);