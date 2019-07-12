// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.7-5-b-221
description: >
    Object.defineProperties - value of 'get' property of 'descObj' is
    primitive values( value is string) (8.10.5 step 7.b)
---*/

var obj = {};
assert.throws(TypeError, function() {
  Object.defineProperties(obj, {
    property: {
      get: "string"
    }
  });
});
