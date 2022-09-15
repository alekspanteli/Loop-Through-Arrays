// const myArray = ['test', 'test2', 'test3', 'test4', 'test5']

// for (let i = 0; i < myArray.length; i++){
//   document.write(myArray[i])
// }



const myArray = ['test', 'test2', 'test3', 'test4', 'test5']

const createListItems = arr =>{
  let items = '';
  for (let i = 0; i < arr.length; i++){
    items += `<li>${arr[i]}</li>`
  }
  return items;
}



document.querySelector('main').innerHTML = `
  <ol>
    ${createListItems(myArray)}
  </ol>
`;