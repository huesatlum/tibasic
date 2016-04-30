> This currently doesn't do much and is a work in progress

# TI-BASIC

This is an interpreter for TI-BASIC, written in JavaScript. [TI-BASIC](https://en.wikipedia.org/wiki/TI-BASIC) is the programming language used by Texas Instruments graphing calculators. There are many dialects, but perhaps the most common—and the one used by this interpreter—is for the TI-84 calculator.

It can be run online at [TODO] or locally, as shown below.

## Installation

To run locally, you will need [Node.js](https://nodejs.org/) installed on your machine. If you have [git](https://git-scm.com/), you can use `clone` to easily set it up:
```shell
$ git clone https://github.com/huesatlum/tibasic.git
$ cd tibasic
```

Next, you will want to install any necessary modules and add a [link](https://docs.npmjs.com/cli/link) to use it anywhere:
```shell
$ npm install
$ npm link
```

## Usage

    $ tibasic [options] [-e <code> | <file>] [ans]
