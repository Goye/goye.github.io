#!/usr/bin/env node

const workshopper = require('workshopper'),
      path        = require('path');

function fpath (f) {
    return path.join(__dirname, f);
}

workshopper({
    name        : 'node-runner',
    title       : 'Demo Workshopper',
    subtitle    : 'Learn how to create a workshopper lesson',
    appDir      : __dirname,
    menuItems   : [],
    exerciseDir : fpath('./exercises/')
});