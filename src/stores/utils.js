import { createAction } from '@reduxjs/toolkit'

/**
 * @see https://redux-toolkit.js.org/api/createAction
 */

export const makeCreators = (Types) =>
    Object.entries(Types).reduce(
        (acc, [key, type]) => ({
            ...acc,
            [key]: createAction(key, type),
        }),
        {}
    )

export const makeTypes = (Types) =>
    Object.keys(Types).reduce((acc, type) => ({ ...acc, [type]: type }), {})