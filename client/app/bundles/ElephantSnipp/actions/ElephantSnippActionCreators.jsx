/* eslint-disable import/prefer-default-export */

import { HELLO_WORLD_NAME_UPDATE } from '../constants/elephantSnippConstants';

export const updateName = (text) => ({
  type: HELLO_WORLD_NAME_UPDATE,
  text,
});

export const changeControl = (text) => ({
  type: 'CHANGE_CONTROL',
  text
})

export const addSnipp = (snipp) => ({
  type: 'ADD_SNIPP',
  snipp
})
