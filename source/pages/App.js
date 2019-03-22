// Core
import React from 'react';
import { hot } from 'react-hot-loader';

// Components
import * as Components from '../components';

export const App = hot(module)(() => {
    return (
        <>
            <Components.Feed />
        </>
    );
});

// dev
// export default hot(module)(App);

// prod
// export default App;
