"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
class GetTransData {
    constructor(p0, p1) {
        console.log(p0 + p1);
    }
}
class GetDubboData {
    constructor(p0, p1) {
        //throw new Error('');
        console.log(p0 + p1);
        this.p0 = p0;
    }
    test() {
        return this.p0;
    }
}
class SomeControl {
    test() {
        return this.dubbo1.test();
    }
    tt(_productId) {
        return __awaiter(this, void 0, void 0, function* () {
            let json = yield this.transGet.getDetail(_productId);
            console.log(json);
        });
    }
}
__decorate([
    __1.Inject(1, 'aaa'),
    __metadata("design:type", GetDubboData
    //场景2.给出构造函数的工厂函数
    )
], SomeControl.prototype, "dubbo", void 0);
__decorate([
    __1.Inject(function () {
        return [1, 'aaa'];
    }),
    __metadata("design:type", GetDubboData
    //场景3.无构造函数或参数为空
    )
], SomeControl.prototype, "dubbo1", void 0);
__decorate([
    __1.Inject,
    __metadata("design:type", GetTransData)
], SomeControl.prototype, "transGet", void 0);
//指定类型的工厂函数
__1.Container.provides([GetTransData, (_p0, _p1) => {
        return new class extends GetTransData {
            constructor(p0, p1) {
                super(p0, p1);
            }
            getDetail(_id) {
                return __awaiter(this, void 0, void 0, function* () {
                    yield ((ms) => new Promise(res => setTimeout(res, ms)))(100);
                    return 'aaaaaa';
                });
            }
        }(_p0, _p1);
    }]);
console.log(new SomeControl().test());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBCQUFvQztBQUVwQztJQUNJLFlBQVksRUFBVSxFQUFFLEVBQVU7UUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUE7SUFDeEIsQ0FBQztDQUdKO0FBRUQ7SUFHSSxZQUFZLEVBQVUsRUFBRSxFQUFVO1FBQzlCLHNCQUFzQjtRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQTtRQUNwQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsSUFBSTtRQUNBLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNuQixDQUFDO0NBQ0o7QUFFRDtJQWVJLElBQUk7UUFDQSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVLLEVBQUUsQ0FBQyxVQUFtQjs7WUFDeEIsSUFBSSxJQUFJLEdBQVEsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUM7S0FBQTtDQUNKO0FBcEJHO0lBREMsVUFBTSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7OEJBQ0YsWUFBWTtJQUUzQixpQkFBaUI7OzBDQUZVO0FBTTNCO0lBSEMsVUFBTSxDQUFDO1FBQ0osT0FBTyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUNyQixDQUFDLENBQUM7OEJBQ2MsWUFBWTtJQUU1QixnQkFBZ0I7OzJDQUZZO0FBSTVCO0lBREMsVUFBTTs4QkFDRyxZQUFZOzZDQUFDO0FBWTNCLFdBQVc7QUFDWCxhQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO1FBQzNDLE9BQU8sSUFBSSxLQUFNLFNBQVEsWUFBWTtZQUNqQyxZQUFZLEVBQVUsRUFBRSxFQUFVO2dCQUM5QixLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2xCLENBQUM7WUFFSyxTQUFTLENBQUMsR0FBVzs7b0JBQ3ZCLE1BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtvQkFDN0QsT0FBTyxRQUFRLENBQUM7Z0JBQ3BCLENBQUM7YUFBQTtTQUNKLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyJ9