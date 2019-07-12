// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Result of boolean conversion from nonempty string value (length is not
    zero) is true; from empty String (length is zero) is false
esid: sec-toboolean
es5id: 9.2_A5_T1
description: "\"\" is converted to Boolean by explicit transformation"
---*/

// CHECK#1
if (Boolean("") !== false) {
  $ERROR('#1: Boolean("") === false. Actual: ' + (Boolean("")));
}