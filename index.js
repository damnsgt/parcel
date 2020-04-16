import React from 'react';
import ReactDOM from 'react-dom';

const Hello = () => {
    return (
        <div>Hi, this page is bundled using PARCEL!</div>
    )
};

ReactDOM.render(<Hello />, document.getElementById('app'));