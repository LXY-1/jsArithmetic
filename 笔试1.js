/**  o1 算法：1024元 ，现有面值1、4、16、64的硬币可以找零，要求输入一个商品价值求找零的最少硬币个数
 * *思路：最大使用最大面值的硬币，最后可以获得最少的硬币个数
 * * 下面的方法测试通过率只有90%:因为提交的时候没有发现一个判断出错了:price是大于0小于等于1024的,这里忽略了等与1024
*/

const moneyNum = 1024;
// *硬币常量数组按照硬币面值从小到大排序
const coins = [1,4,16,64];

/**
 *
 *
 * @param {*} price :[剩余需要找0的]:0<price<=1024]
 * @param {*} coinInd : [硬币面值数组索引,注意第一次调用从最大索引开始]
 * @param {*} totalCoins : [总共需要的硬币个数]
 * @returns
 */
function getMinCoins(leftMoney,coinInd,totalCoins) {
    if(leftMoney > 1024 || leftMoney < 0){
        console.log('输入的商品价格不和规范，请重新输入大于0小于等于1024的数值');
        return false;
    }
    // 计算使用64面值的硬币找零，需要的硬币个数以及除后的余数
    totalCoins += leftMoney / coins[coinInd] ;
    totalCoins = Math.floor(totalCoins);
    let remainder = leftMoney % coins[coinInd];
    if(remainder == 0){
        // print(coinNums);
        console.log(totalCoins);
        return true;
    } else{
       // 在剩余的零钱继续找零 
       getMinCoins(remainder,coinInd - 1,totalCoins)

    }

}

//计算第一次花费后剩余的钱
let spendMoney = 200;
// let leftMoney = moneyNum - spendMoney;
// getMinCoins(leftMoney,coins.length - 1,0);
// 遍历看一下哪一种情况是不可以的：现在都可以了
for (let index = 1; index <= 1024; index++) {
    let leftMoney = moneyNum - index;
    getMinCoins(leftMoney,coins.length - 1,0);
    
}

