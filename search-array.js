const inStock = ['test', 'test2', 'test3', 'test4', 'test5']


const search = prompt('Search array');

let message;


if (inStock.includes(search)){
  message = `We have item: ${search}. Its ${inStock.indexOf(search)} on the list`
} else{
  message = `We dont have item`
}


document.querySelector('main').innerHTML = `<p>${message}</p>`;