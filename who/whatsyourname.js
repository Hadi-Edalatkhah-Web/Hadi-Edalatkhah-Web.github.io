export function checkInput() {
    var input = document.querySelector('input[name="name"]');
    var value = input.value;

    if (value === '') {
        alert('Please enter your name.');
    } else if(value === 'nephenthe') {
        alert('آرمش جانم ... ');
    }else if(value === 'my girl') {
        alert('تویی که قلب منیی ');
    }else if(value === 'soton') {
        alert('Your name is: ');
    }else if(value === 'hadi') {
        alert('Your name is: ');
    }else if(value === 'sajjad') {
        alert('Your name is: ');
    }
}


