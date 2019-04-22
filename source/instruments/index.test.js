import { sum, delay, getUniqueID, getFullApiUrl } from './index';

describe('instruments:', () => {
    test('sum function should be a function', () => {
        expect(sum).toBeInstanceOf(Function);
    });

    test('sum function should throw, when called with non-number type as second argument', () => {
        expect(() => sum(2, 'test')).toThrow();
    });

    test('sum function should throw, when called with non-number type as first argument', () => {
        expect(() => sum('hi', 2)).toThrow();
    });

    test('sum function should return correct result of sum', () => {
        expect(sum(3, 2)).toBe(5);
        expect(sum(3, 0)).toMatchSnapshot();
    });

    test('delay resolves should be undefined', async () => {
        await expect(delay()).resolves.toBeUndefined;
    });

    test('getUniqueID should be Function', () => {
        expect(getUniqueID).toBeInstanceOf(Function);
    });

    test('getUniqueID Throw error if param not Int', () => {
        expect(() => getUniqueID('test')).toThrow();
    });

    test('getUniqueID should return string', () => {
        expect(typeof getUniqueID()).toBe('string');
        expect(getUniqueID(5)).toHaveLength(5);
        expect(getUniqueID(12)).toHaveLength(12);
    });

    test('ensure getFullApiUrl is a function', () => {
        expect(getFullApiUrl).toBeInstanceOf(Function);
    });

    test('throw Error with first param is not a string', () => {
        expect(() => getFullApiUrl(2, 'second')).toThrow();
    });

    test('throw Error with second param is not a string', () => {
        expect(() => getFullApiUrl('first', null)).toThrow();
    });

    test('should return string', () => {
        expect(typeof getFullApiUrl('first', 'second')).toBe('string');
    });
});
