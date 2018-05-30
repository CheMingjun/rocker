import {Container, Inject} from '..'

abstract class GetTransData {
    constructor(p0: number, p1: string) {
        console.log(p0 + p1)
    }

    abstract async getDetail(_proId: number): Promise<string>;
}

class GetDubboData {
    p0: number;

    constructor(p0: number, p1: string) {
        //throw new Error('');
        console.log(p0 + p1)
        this.p0 = p0;
    }

    test() {
        return this.p0;
    }
}

class SomeControl {
    //场景1.直接传递构造函数的参数
    @Inject(1, 'aaa')
    private dubbo: GetDubboData

    //场景2.给出构造函数的工厂函数
    @Inject(function () {
        return [1, 'aaa']
    })
    private dubbo1: GetDubboData

    //场景3.无构造函数或参数为空
    @Inject
    transGet: GetTransData;

    test() {
        return this.dubbo1.test();
    }

    async tt(_productId?: number) {
        let json: any = await this.transGet.getDetail(_productId);
        console.log(json);
    }
}

//指定类型的工厂函数
Container.provides([GetTransData, (_p0, _p1) => {
    return new class extends GetTransData {
        constructor(p0: number, p1: string) {
            super(p0, p1);
        }

        async getDetail(_id: number): Promise<string> {
            await  ((ms) => new Promise(res => setTimeout(res, ms)))(100)
            return 'aaaaaa';
        }
    }(_p0, _p1);
}]);

console.log(new SomeControl().test());