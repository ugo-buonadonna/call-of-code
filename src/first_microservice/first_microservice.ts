/**
 * Created by ugo on 22/03/16.
 */
"use strict";
/// <reference path="../typings/main.d.ts" />

let seneca = require("seneca")();

seneca.add({cmd: "sum", role: "math"}, (msg: {left: number, right: number}, respond:  Function) => {
    let sum: number = msg.left + msg.right;
    respond(null, {answer: sum});
});

seneca.act({cmd: "sum", left: 1, right: 2, role: "math" }, (err: Error, result: number) => {
    if (err) { return console.error(err); }
    console.log(result);
});


/*
class FirstMicroservice {
    public greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }
    public greet(): void {
        return "Hello, " + this.greeting;
    }
}
*/

// let greeter = new Greeter("world");
