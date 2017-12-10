import React from 'react';
// import './Page.scss';

class Page extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let content = "Render Content";

        return (
            <div className="dashboard__page">
                {content}
            </div>
        )
    }
}

export default Page;
