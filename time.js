const date  = new Date() ;
// const year = date.getFullYear();
// const month  = date.getMonth() +1 ;
// const day  = date.getDate();
const locale  = date.toLocaleString();
const test = setInterval(() => {
    const text  = `현재시간은 ${locale} 입니다.`
    document.querySelector('.time').innerHTML = text
}, 1000)
