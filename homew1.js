
function recursiveSum (n) {
    if (n ===1){
    return 1 ; }
    else {
        return n + recursiveSum (n-1);
    }
}
function iterativeSum (n)
{
    let sum=0 ;
    for (let i = 1 ; i <=n ; i++)
    {sum+=i;}
    return sum ;
}

const testCases = [5 ,25,125, 625 ,3125,15625 ,78125 , 390625 ,1953125 , 9765625 , 48828125, 224140625];
for (const testCase of testCases) {
    let start = performance.now();
    recursiveSum(testCase);
    let end = performance.now();
    let rt= end - start ;
    
    console.log(`Recursive Sum - n= ${testCase}, Execution Time: ${rt} ms`);

    start = performance.now();
    iterativeSum(testCase);
    end = performance.now();
     let it= end - start ;
    console.log(`Iterative Sum - n= ${testCase}, Execution Time: ${it} ms`);
}
