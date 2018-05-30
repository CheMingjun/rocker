"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const Util = require("./util");
/**
 * IOC Container
 */
class Container {
    /**
     * Provid type's implements factory
     * @param {Function} classDefine
     */
    static provides(...defAry) {
        defAry.forEach((_def) => {
            if (Array.isArray(_def)) {
                if (!Util.isFunction(_def[0])) {
                    throw new Error('Invalid class type, must be a class.');
                }
                if (!Util.isFunction(_def[1])) {
                    throw new Error('Invalid factory type, must be a function.');
                }
                globalProviders.set((_def[0]), _def[1]);
            }
            else {
                if (!Util.isFunction(_def)) {
                    throw new Error('Invalid Provider type, must be a class or a [class,function].');
                }
                let type = Util.getExtends(_def);
                globalProviders.set(type, function (...args) {
                    return factory(_def, ...args);
                });
            }
        });
    }
}
exports.Container = Container;
/**
 * Inject an object into  property|param
 * @param args decorator's params
 * @returns {any}
 * @constructor
 */
function Inject(...args) {
    let params = args, fn = function (target, key, name) {
        let dt = Reflect.getMetadata('design:type', target, key);
        if (!dt) {
            dt = Reflect.getMetadata('design:type', target.constructor, key);
        }
        injectProperty(target.constructor, key, dt, params);
        return;
    };
    if (args.length == 3
        && (typeof (args[0]) == 'object' && typeof (args[0]['constructor']) == 'function' //Instance property
            || typeof (args[0]) == 'function') //Class property
        && typeof (args[1]) == 'string') { //None parameters
        params = [];
        fn.apply(null, args);
    }
    else {
        return fn;
    }
}
exports.Inject = Inject;
// ---------------------------------------------------------------------------------
const globalProviders = new Map();
function injectProperty(target, key, propertyType, args) {
    const instanseName = `__${key}__`; // cache instanse
    Object.defineProperty(target.prototype, key, {
        enumerable: true,
        get: function () {
            let instanse = this[instanseName];
            if (!instanse) {
                let factoryFn = globalProviders.get(propertyType);
                if (factoryFn) {
                    instanse = factoryFn(...args);
                }
                else {
                    instanse = factory(propertyType, ...args);
                }
                this[instanseName] = instanse; // cache for singleton
            }
            return instanse;
        },
        set: function (properValue) {
            this[instanseName] = properValue;
        }
    });
}
function factory(fn, ...args) {
    try {
        if (args.length == 1 && typeof (args[0]) == 'function') { //Parameters factory
            args = args[0]();
        }
        return new fn(...args);
    }
    catch (e) {
        throw new Error('New instance of class\n\n' + fn + '\n,parameters:[' + args + '] error, message:' + e.toString());
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9jLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW9jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNEJBQTBCO0FBQzFCLCtCQUE4QjtBQUU5Qjs7R0FFRztBQUNIO0lBTUk7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQTJDO1FBQzFELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNwQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUMzQixNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7aUJBQzNEO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUMzQixNQUFNLElBQUksS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7aUJBQ2hFO2dCQUNELGVBQWUsQ0FBQyxHQUFHLENBQXNCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEU7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUMsK0RBQStELENBQUMsQ0FBQztpQkFDcEY7Z0JBQ0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDakMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsVUFBVSxHQUFHLElBQUk7b0JBQ3ZDLE9BQU8sT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO2dCQUNsQyxDQUFDLENBQUMsQ0FBQTthQUNM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