export function isValidData(data,regx){
    let pattern = new RegExp(regx);
    let res = pattern.test(data);
    return res;
}