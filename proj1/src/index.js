import React from 'react';
import {Choice, Remove} from './helpers.js';
import fruits from './foods';

const pick = Choice(fruits);

console.log(`I'd like one ${pick} please.`);
console.log(`Here you go: ${pick}`);
const length = fruits.length - 1;
Remove(fruits, pick);
console.log(`I'm sorry, we're all out. We have ${length} left`);
