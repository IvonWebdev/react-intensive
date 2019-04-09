// Core
import React from 'react';
import { hot } from 'react-hot-loader';

// Components
import Catcher from 'components/Catcher';
import { Feed } from 'components';
import { Provider } from 'components/HOC/withProfile';

import avatar from '../theme/assets/lisa';

const options = {
    avatar,
    currentUserFirstName: 'Владимир',
    currentUserLastName:  'Ивченко',
};

export const App = hot(module)(() => {
    return (
        <Catcher>
            <Provider value = { options }>
                <Feed />
            </Provider>
        </Catcher>
    );
});
