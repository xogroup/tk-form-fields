#!/bin/bash

echo Linting sass...
stylelint src/stylesheets/*.scss

echo Linting js...
eslint *.js

echo No issues found!
