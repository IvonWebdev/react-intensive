// Core
import React from 'react';
import { hot } from 'react-hot-loader';

// Components
import { Feed } from 'components/Feed';
import avatar from '../theme/assets/lisa';

const options = {
    avatar,
    currentUserFirstName: 'Lisa',
    currentUserLastName:  'Simpson',
};

export const App = hot(module)(() => {
    return <Feed { ...options } />;
});
