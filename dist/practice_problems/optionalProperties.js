"use strict";
function displayUserInfo(userInfo) {
    var _a, _b;
    let name = userInfo.name;
    let email = (_a = userInfo.email) !== null && _a !== void 0 ? _a : "N/A";
    let age = (_b = userInfo.age) !== null && _b !== void 0 ? _b : "unknown";
    return `${name} is ${age} years old. You can reach her at ${email}`;
}
