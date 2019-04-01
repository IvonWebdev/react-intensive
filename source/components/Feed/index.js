// Core
import React, { Component } from 'react';

// Components
import { StatusBar, Composer, Post } from '../../components';
import Spinner from 'components/Spinner';

// Instruments
import Styles from './styles.m.css';

class Feed extends Component {
    state = {
        posts: [
            { id: '1', comment: 'Hello world', created: 23123131231 },
            { id: '2', comment: 'Sam hello', created: 23123131231 },
        ],
        isSpinning: true,
    };

    render() {
        const { posts, isSpinning } = this.state;

        const postJSQX = posts.map((post) => {
            return (
                <Post
                    key = { post.id }
                    { ...post }
                />
            );
        });

        return (
            <section className = { Styles.feed }>
                <Spinner isSpinning = { isSpinning === true ? isSpinning : false } />
                <StatusBar />
                <Composer />
                {postJSQX}
            </section>
        );
    }
}

export { Feed };
