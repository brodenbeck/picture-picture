import React    from 'react';
import Datetime from './Datetime.jsx';

import './Page.scss';

class Page extends React.Component {

    constructor( props ) {

        super( props );
    }

    render() {

        return (
            <div className="dashboard__page">
                <Datetime />
            </div>
        )
    }
}

if (module.hot) {

    module.hot.accept('./Datetime.jsx', Page.render );
}

export default Page;
