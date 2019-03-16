/*
 * @Description:对于不规范的部分重复字符串进行规范处理:找到不规范的部分,进行相关规则的裁剪处理 (注意针对英文字符)
 * @Author: Lxiaowei
 * @Github: https://github.com/LXY-1/itemName
 * @LastEditors: Lxiaowei
 * @Date: 2019-03-16 15:12:11
 * @LastEditTime: 2019-03-16 16:31:46
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
      if(!result){
          return false;
      } else{ 
          return result;
      }
  }
   console.log(reg1('hellooolooolooooo'));
/**
 *
 *规则二:查找满足规则而的子字符串:lloo
 * @param {*} str:
 */
function reg2(str) {
    let reg = /([a-zA-Z])\1{1} ([a-zA-Z])\1{1}/g
    let result = str.match(reg);
    console.log(result);
    
} 
reg2('helloo');

  
