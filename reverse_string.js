// Create a function that reverse a string:
// 'Hi, I am Juyel' should be:
// 'leyuJ ma I ,iH'

const reverse = (str) =>{
    if (!str || str.length < 2 || typeof str !== 'string') {
        return 'Hmm, thats not good!'
    }
    str = str.split('');
    for (let i = 0; i < str.length / 2; i++) {
        [str[i], str[str.length - (i+1)]] = [str[str.length - (i+1)], str[i]];
    }
    return str.join('');
}

const reverse2 = (str) =>{
    return str.split('').reverse().join('')
}

const reverse3 = str => [...str].reverse().join('');

console.log(reverse('Hi, I am Juyel'));
console.log(reverse2('I love you!'));
console.log(reverse2('I hate you!'));