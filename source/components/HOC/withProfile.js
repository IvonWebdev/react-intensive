import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext();

const withProfile = (Enhanciable) => {
    return class WithProfile extends Component {
        render() {
            return (
                <Consumer>{(context) => (
                    <Enhanciable
                        { ...context }
                        { ...this.props }
                    />
                )}
                </Consumer>
            );
        }
    };
};

export { Provider, Consumer, withProfile };
