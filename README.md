# rocker
轻量级、易用的Javascript/Typescript IOC框架

## Usage
安装 npm install rocker

## 代码示例
```javascript
import {Container} from 'rocker';

class User{
    id:string = 'testId';
    name:string = 'testName';
}

abstract class UserService{
    abstract  getUser(id:string):User;
}


// 1. 注册Provider(实现类 或 工厂)
// 形式一：形如 Container.provides(class extends UserService{})
Container.provides(class extends UserService {
   async getUser(_id: string): User {
       return new User();
   }
});

//或者

// 形式二：形如 Container.provides([UserService,FactoryFunction])
Container.provides([UserService,() => {
    return new class extends UserService {
          async getUser(_id: string): User {
              return new User();
          }
       }();
}]);

// 2. 依赖注入

class Control{
    @Inject
    userService:UserService;
    
    test(){
        let user:User = this.userService.getUser();
        console.log(user);
    }
}

(new Control()).test();

```

## 场景:RPC调用
```javascript
import {Container, Inject} from 'rocker'

//PRC Demo实现
let RPC = {
    config: function (_cfg: { serviceUrl: string, interfaces: Function[] }) {
        if (_cfg.interfaces) {
            _cfg.interfaces.forEach((_type: FunctionConstructor) => {
                if (_type.prototype) {
                    let newObj = {}, proto = _type.prototype;
                    let nms = Object.getOwnPropertyNames(proto);
                    if (nms) {
                        nms.forEach((nm) => {
                            if (nm != 'constructor' && typeof(proto[nm]) === 'function') {
                                newObj[nm] = function () {
                                    ////{nm:方法名,arguments:参数表},改为调用远程请求过程
                                    return arguments[0];//test return
                                }
                            }
                        })
                    }
                    Container.provides([_type, () => {
                        return newObj;
                    }])
                }
            })
        }

    }
}

//--DEMO--------------------------------------------------------

//1. 接口声明（注意,此处只能使用Concrete class）
class Product {
    getById(id: string): string {
        return null;
    }
}

//2. 应用RPC Framework
RPC.config({
    serviceUrl: null,
    interfaces: [Product]//提供接口描述，在RPC中构建factory
})

//3. Service class
class Service {
    @Inject
    product: Product;

    test() {
        let id: string = 'tid';
        let rst = this.product.getById(id);
        console.log(rst);
    }
}

//4.测试
new Service().test();
```