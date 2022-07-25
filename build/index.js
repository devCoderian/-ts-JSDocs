// import { init, exit } from "myPackage";
//Could not find a declaration file for module 'myPackage'. '/Users/hn/Desktop/typechain/src/myPackage.js' implicitly has an 'any' type.ts(7016)
//myPackage.d.ts => ts 제공해주기
//tsconfig.json => allowjs: true => 허용해주기
class Block {
    constructor(data) {
        this.data = data;
    }
    static hello() {
        return "hi";
    }
}
localStorage.clear();
export {};
