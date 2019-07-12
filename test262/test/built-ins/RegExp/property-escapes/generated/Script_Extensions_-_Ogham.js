// Copyright 2018 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Ogham`
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
    [0x001680, 0x00169C]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Ogham}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Ogham}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Ogam}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Ogam}"
);
testPropertyEscapes(
  /^\p{scx=Ogham}+$/u,
  matchSymbols,
  "\\p{scx=Ogham}"
);
testPropertyEscapes(
  /^\p{scx=Ogam}+$/u,
  matchSymbols,
  "\\p{scx=Ogam}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00167F],
    [0x00169D, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Ogham}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Ogham}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Ogam}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Ogam}"
);
testPropertyEscapes(
  /^\P{scx=Ogham}+$/u,
  nonMatchSymbols,
  "\\P{scx=Ogham}"
);
testPropertyEscapes(
  /^\P{scx=Ogam}+$/u,
  nonMatchSymbols,
  "\\P{scx=Ogam}"
);
