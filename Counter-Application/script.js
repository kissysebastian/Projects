let count = 0;

document.getElementById('increment').addEventListener('click', increment);
function increment(){
    if(count < 9){
        count++;
        countUpdate()
    }else{
        alert('Maximum number exceeded!');
    }
}

document.getElementById('decrement').addEventListener('click', decrement);
function decrement(){
    if(count > 0){
        count--;
        countUpdate()
    }else{
        alert('Number is below Zero!');
    }
}

document.getElementById('reset').addEventListener('click', reset);
function reset(){
    count = 0;
    countUpdate()
}

let countValue = document.getElementById('count');
function countUpdate(){
    countValue.textContent = count;
}





