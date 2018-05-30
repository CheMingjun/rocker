"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isEmpty(v) {
    return typeof v === 'undefined' || v == null;
}
exports.isEmpty = isEmpty;
function isFunction(fn) {
    return !isEmpty(fn) && Object.prototype.toString.call(fn) === '[object Function]';
}
exports.isFunction = isFunction;
function getExtends(fn) {
    var pfn = Object.getPrototypeOf(fn);
    return pfn;
}
exports.getExtends = getExtends;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxpQkFBd0IsQ0FBTTtJQUMxQixPQUFPLE9BQU8sQ0FBQyxLQUFLLFdBQVcsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDO0FBQ2pELENBQUM7QUFGRCwwQkFFQztBQUVELG9CQUEyQixFQUFFO0lBQ3pCLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLG1CQUFtQixDQUFDO0FBQ3RGLENBQUM7QUFGRCxnQ0FFQztBQUVELG9CQUEyQixFQUFFO0lBQ3pCLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEMsT0FBTyxHQUFHLENBQUM7QUFDZixDQUFDO0FBSEQsZ0NBR0MifQ==