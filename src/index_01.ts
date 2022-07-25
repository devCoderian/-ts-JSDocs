// import { init, exit } from "myPackage";
//Could not find a declaration file for module 'myPackage'. '/Users/hn/Desktop/typechain/src/myPackage.js' implicitly has an 'any' type.ts(7016)
//myPackage.d.ts => ts 제공해주기
// myPackage.d.ts => 생성 후 타입 정의 필요
// interface Config{
//     url: string;
// }

// declare module "myPackage"{
//     function init(config: Config): boolean;
//     function exit(code: number): number;
// }

//ts에서 myPackage를 사용하려면?



import {init, exit} from "./myPackage"; 
//tsconfig.json => allowjs: true => 허용해주기

class Block {
    constructor(private data: string){}
        static hello(){
            return "hi"
        }
}

// debug: boolean;
// url: string;

let config ={
    debug: true,
    url: "value"
}
// localStorage.clear();
init(config);
// exit();