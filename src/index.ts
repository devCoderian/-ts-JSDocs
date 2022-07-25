console.log("blockchainTest");
import crypto from "crypto";//error => tsconfig.json 수정 => esModuleInterop: true


interface BlockShape{
    hash: string;
    prevHash: string;
    height: number;
    data: string;
}

class Block implements BlockShape{
    
    public hash:string;
    
    constructor(
        public prevHash:string,
        public height: number,
        public data: string
    ){
        this.hash = Block.conculate(prevHash, height, data);
    }

    static conculate(prevHash:string, height:number, data:string){
        const toHash = `${prevHash}${height}${data}`
        return crypto.createHash("sha256").update(toHash).digest("hex");

    }
}
