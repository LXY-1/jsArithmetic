/*
 * @Description:对于不规范的部分重复字符串进行规范处理:找到不规范的部分,进行相关规则的裁剪处理 (注意针对英文字符)
 * @Author: Lxiaowei
 * @Github: https://github.com/LXY-1/itemName
 * @LastEditors: Lxiaowei
 * @Date: 2019-03-16 15:12:11
 * @LastEditTime: 2019-03-16 17:38:31
 */

/**
 * 规则1:对与重复三个相同字符连载一起的除去一个,比如:
 * 'helloooolooo' => 'hellooloo'
 * 规则二:对于连续两对重复的除去最左边的一个相同字符
 * 'hellooloo'=> 'helooloo'
 */

/** 
 * 思路:正则表达式:匹配上面的规则,使用字符串裁减或者是replace
 * 方法进行处理,除去不规范的部分
 * * 具体算法:设计两个规则判断函数,如果是不匹配到的返回false
 * * 说明没有问题不用处理,如果匹配到的返回对应的数组.方便进行
 * * replace处理
 */

/**
 *规则1:查找满足规则一的子字符串:oooo
 * 
 * @param {*} str :用于检查的字符串配
 */
function reg1(str) {
    // \w可能会匹配到汉字:视你的操作系统而定.所以为了不意外匹配到 汉字也就是这里只对字母进行匹配
    let reg = /([a-zA-Z])\1{2,}/g;
    let result = str.match(reg);
    if (!result) {
        return false;
    } else {
        return result;
    }
}
console.log(reg1('hellooolooolooooo'));
/**
 *
 * *规则二:查找满足规则二的子字符串:lloo
 * @param {*} str:
 */
function reg2(str) {
    // ?正则表达式判断 AABB类型
    let reg = /(.)\1((?!\1).)\2/g
    let result = str.match(reg);
    if (!result) {
        return false
    } else {
        return result;
    }

}
reg2('helloololoaabb');
/**
 *
 * 检查字符串后进行处理
 * @param {*} str
 */
function operate(str) {
    let result1 = reg1(str);
     //处理完result1d 之后再用新的字符串检查是否不满足规则2
    let result2 = '';

    if (result1) {
        // 新除去不满足规则一的
        for (let i = 0; i < result1.length; i++) {
            // * 注意了字符串是replace方法只是返回新的字符串不会对元字符串有影响
            str = str.replace(result1[i], result1[i].substr(0, 2));
        }
        result2 = reg2(str)
    }
    if (result2) {
        // 新除去不满足规则二的
        for (let i = 0; i < result2.length; i++) {
            // * 注意了字符串是replace方法只是返回新的字符串不会对元字符串有影响
            str = str.replace(result2[i], result2[i].substr(0, 1));
        }
    }
    return str;
}
// test
console.log(operate('hellooolooolllkkk'));