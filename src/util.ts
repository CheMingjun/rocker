export function isEmpty(v: any) {
    return typeof v === 'undefined' || v == null;
}

export function isFunction(fn) {
    return !isEmpty(fn) && Object.prototype.toString.call(fn) === '[object Function]';
}

export function getExtends(fn) {
    var pfn = Object.getPrototypeOf(fn);
    return pfn;
}