//@ts-check 
/**
 * intialize program
 * @param {object} config 
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config){
    return true;
}

/**
 * Exits the program
 * @param {number} code 
 * @returns number
 */
export function exit(code){
    return code + 1;
}


//  jsDocs는 코멘트로 이루어진 문법이다. 
//  함수 바로 위에 코멘트 달기
//  코멘트 입력시 타입스크립트가 인식할 수 있다.
/*
JSDoc은 자바스크립트 API 문서 생성기다. 자바스크립트 소스코드에 JSDoc 형식의 주석을 추가하면 API를 설명하는 HTML 문서를 생성할 수 있다. 
*/

//브라우저에서 문제없이 작동된다.