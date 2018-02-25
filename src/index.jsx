import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Page from './components/Page.jsx';

import './index.scss';

function renderApp() {
    ReactDOM.render(
        <AppContainer>
            <Page />
        </AppContainer>,
        document.getElementById('main'),
    );
}

renderApp();

// If the boiz are toasty
if (module.hot) {
    // This registers the Page and it's dependancy tree to be accepted as toasty boiz
    module.hot.accept('./components/Page.jsx', () => {
        const NextApp = Page.default;
        renderApp();
    });
}
