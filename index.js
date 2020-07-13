#!/usr/bin/env node

const mdlinks = require('./src/mdlinks.js')

const path = process.argv[2];

mdlinks(path, process.argv);
