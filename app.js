console.log('added');
let count = 0;
let btn = document.querySelector('.btn');
btn.addEventListener('click', ()=>{
    let wordCount = document.querySelector('.wordCount');
    let text = document.querySelector('.text').value;
    let words = text.split(' ');
    for ( let i = 0 ; i< words.length ; i++){
        if( words[i]==''){
            count = 0
        }
        else{
         count++   
        }
    }
    wordCount.innerHTML = `Word Count : ${count}`
})