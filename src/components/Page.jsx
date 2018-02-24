import React from 'react';
import Datetime from './Datetime.jsx';

import './Page.scss';

class Page extends React.Component {
    render() {
        return (
            <div className="dashboard__page">
                <Datetime />
            </div>
        );
    }
}

export default Page;
