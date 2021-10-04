// Write your solution in this file!
let employee = {name: "Seen", streetAddress: "123 Snowflake Lane"};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    let newObj = {...obj};
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {}