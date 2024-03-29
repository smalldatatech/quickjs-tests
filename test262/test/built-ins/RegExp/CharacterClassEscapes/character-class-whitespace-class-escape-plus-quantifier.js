// Copyright (C) 2018 Leo Balter.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-CharacterClassEscape
description: >
    Compare range for Whitespace class escape, \\s+ with flags g
info: |
    This is a generated test, please checkout https://github.com/bocoup/test262-regexp-generator
    for any changes.

    CharacterClassEscape[U] ::
        d
        D
        s
        S
        w
        W

    21.2.2.12 CharacterClassEscape
    
    The production CharacterClassEscape :: d evaluates as follows:
        Return the ten-element set of characters containing the characters 0 through 9 inclusive.
    The production CharacterClassEscape :: D evaluates as follows:
        Return the set of all characters not included in the set returned by CharacterClassEscape :: d.
    The production CharacterClassEscape :: s evaluates as follows:
        Return the set of characters containing the characters that are on the right-hand side of
        the WhiteSpace or LineTerminator productions.
    The production CharacterClassEscape :: S evaluates as follows:
        Return the set of all characters not included in the set returned by CharacterClassEscape :: s.
    The production CharacterClassEscape :: w evaluates as follows:
        Return the set of all characters returned by WordCharacters().
    The production CharacterClassEscape :: W evaluates as follows:
        Return the set of all characters not included in the set returned by CharacterClassEscape :: w.
features: [String.fromCodePoint]
includes: [regExpUtils.js]
---*/

const chunks = [];
const lastCodePoint = 0xffff;
let codePoint = 0;
while (codePoint <= lastCodePoint) {
   let n = Math.min(0x10000, lastCodePoint - codePoint + 1);
   chunks.push(codePointRange(codePoint, codePoint + n));
   codePoint += n;
}

const re = /\s+/g;
const matchingRange = /[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+/g;

const errors = [];

function matching(str) {
    return str.replace(re, '') === str.replace(matchingRange, '');
}

for (const str of chunks) {
    if (!matching(str)) {
        // Error, let's find out where
        for (const char of str) {
            if (!matching(char)) {
                errors.push('0x' + char.codePointAt(0).toString(16));
            }
        }
    }
};

assert.sameValue(
    errors.length,
    0,
    'Expected matching code points, but received: ' + errors.join(',')
);
