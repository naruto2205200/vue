//需求：封装一个方法，通过参数读取文件并返回内容
//node.js 的内容
const fs = require('fs')
const path = require('path')
// fs.readFile(path.join(__dirname,'./files/1.txt'),'utf-8',(err,dataStr)=>{
//     if(err) throw err;
//     console.log(dataStr);
// })

/**
 * 
 * @param {文件路径} fpath 
 * @param {回调方法} callback 
 */
function getFileByPath(fpath,callback){
    fs.readFile(fpath,'utf-8',(err,dataStr)=>{
        if(err) throw err;
        console.log(dataStr);
        callback(dataStr)
    })
}

getFileByPath(path.join(__dirname,'./files/'+fpath),(dataStr)=>{
    console.log(dataStr)
})

var promise = new Promise()

const promise = new Promise(function(resolve, reject) {
    // ... some code
  
    // if (/* 异步操作成功 */){
    //   resolve(value);
    // } else {
    //   reject(error);
    // }
  });