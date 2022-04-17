// 1.verilen saniye deyerinin nece deqiqe ve saniye oldugun hesablayan proqram yaz
// meselen:1200 ---20deq 0san

// let san=1567
// a=san/60
// deq=parseInt(a)
// c=san-deq*60
// console.log(`${deq} deq ${c} san`)

// optimal
let sanString=prompt("saniye daxil edin")
let san=parseInt(sanString)
let deq=parseInt(san/60)
let qaliq=san%60
alert(`${deq} deq,${qaliq} san`)


// 2. 
// let f=100;
// let c=5/9*(f-32)
// console.log(c)
     