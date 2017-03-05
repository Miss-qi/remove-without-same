function removeWithoutSame(array, item) {
  //在下面实现函数
  for(var i = 0; i < array.length; i++){
    if(array[i] === item){
      array.splice(i,1);
      i--;
    }
  }
  return array;
}

module.exports = removeWithoutSame;