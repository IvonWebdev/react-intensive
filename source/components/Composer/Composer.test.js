import React from 'react';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Composer } from './';

const props = {
    _createPost:          jest.fn(),
    avatar:               'string',
    currentUserFirstName: 'string',
};

const comment = 'Merry Christmas!';

const initialState = {
    comment: '',
};

const updatedState = {
    comment,
};

const result = mount(<Composer { ...props } />);

const _submitCommentSpy = jest.spyOn(result.instance(), '_submitComment');
const _handleFormSubmitSpy = jest.spyOn(result.instance(), '_handleFormSubmit');
const _updateCommentSpy = jest.spyOn(result.instance(), '_updateComment');
const _submitOnEnterSpy = jest.spyOn(result.instance(), '_submitOnEnter');

describe('composer component:', () => {
    test('should have 1 section element', () => {
        expect(result.find('section')).toHaveLength(1);
    });

    test('should have 1 form element', () => {
        expect(result.find('form')).toHaveLength(1);
    });

    test('should have 1 textarea element', () => {
        expect(result.find('textarea')).toHaveLength(1);
    });

    test('should have 1 input element', () => {
        expect(result.find('input')).toHaveLength(1);
    });

    test('should have 1 img element', () => {
        expect(result.find('img')).toHaveLength(1);
    });

    test('should have initial stat', () => {
        expect(result.state()).toEqual(initialState);
    });

    test('textarea should be empty', () => {
        expect(result.find('textarea').text()).toBe('');
    });

    test('should respond to state change prperly', () => {
        result.setState({
            comment,
        });

        expect(result.state()).toEqual(updatedState);
        expect(result.find('textarea').text()).toBe(comment);

        result.setState({
            comment: '',
        });

        expect(result.state()).toEqual(initialState);
        expect(result.find('textarea').text()).toBe('');
    });

    test('should change textarea', () => {
        result.find('textarea').simulate('change', {
            target: {
                value: comment,
            },
        });

        expect(result.find('textarea').text()).toBe(comment);
        expect(result.state()).toEqual(updatedState);
    });

    test('should submit form', () => {
        result.find('form').simulate('submit');

        expect(result.find('textarea').text()).toBe('');
    });

    test('_createPost method should be invoked', () => {
        expect(props._createPost).toHaveBeenCalledTimes(1);
    });

    test('_submitCommentSpy and _handleFormSubmitSpy should be invoked', () => {
        expect(_submitCommentSpy).toHaveBeenCalledTimes(1);
        expect(_handleFormSubmitSpy).toHaveBeenCalledTimes(1);
        expect(_submitOnEnterSpy).toHaveBeenCalledTimes(0);
        expect(_updateCommentSpy).toHaveBeenCalledTimes(1);

        result.find('textarea').simulate('keypress', { key: 'Enter' });
        expect(_submitOnEnterSpy).toHaveBeenCalledTimes(1);
    });
});
