// Copyright 2018 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script=Coptic`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v11.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x0003E2, 0x0003EF],
    [0x002C80, 0x002CF3],
    [0x002CF9, 0x002CFF]
  ]
});
testPropertyEscapes(
  /^\p{Script=Coptic}+$/u,
  matchSymbols,
  "\\p{Script=Coptic}"
);
testPropertyEscapes(
  /^\p{Script=Copt}+$/u,
  matchSymbols,
  "\\p{Script=Copt}"
);
testPropertyEscapes(
  /^\p{Script=Qaac}+$/u,
  matchSymbols,
  "\\p{Script=Qaac}"
);
testPropertyEscapes(
  /^\p{sc=Coptic}+$/u,
  matchSymbols,
  "\\p{sc=Coptic}"
);
testPropertyEscapes(
  /^\p{sc=Copt}+$/u,
  matchSymbols,
  "\\p{sc=Copt}"
);
testPropertyEscapes(
  /^\p{sc=Qaac}+$/u,
  matchSymbols,
  "\\p{sc=Qaac}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0003E1],
    [0x0003F0, 0x002C7F],
    [0x002CF4, 0x002CF8],
    [0x002D00, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script=Coptic}+$/u,
  nonMatchSymbols,
  "\\P{Script=Coptic}"
);
testPropertyEscapes(
  /^\P{Script=Copt}+$/u,
  nonMatchSymbols,
  "\\P{Script=Copt}"
);
testPropertyEscapes(
  /^\P{Script=Qaac}+$/u,
  nonMatchSymbols,
  "\\P{Script=Qaac}"
);
testPropertyEscapes(
  /^\P{sc=Coptic}+$/u,
  nonMatchSymbols,
  "\\P{sc=Coptic}"
);
testPropertyEscapes(
  /^\P{sc=Copt}+$/u,
  nonMatchSymbols,
  "\\P{sc=Copt}"
);
testPropertyEscapes(
  /^\P{sc=Qaac}+$/u,
  nonMatchSymbols,
  "\\P{sc=Qaac}"
);
