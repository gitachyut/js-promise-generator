var prom1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('achyut')
  },3000)
})
var prom2 = (val)=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(val+' deka')
    },4000)
  })
}
   
var gen = function* (){
  var val1 = yield prom1;
  var val2 = yield prom2(val1);
  console.log(val2)
}

var iter = gen();
iter.next().value.then((data)=>{
  iter.next(data).value.then((data)=>{
    iter.next(data);
  })
});
