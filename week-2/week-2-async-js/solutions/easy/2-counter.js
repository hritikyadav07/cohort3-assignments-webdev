// let counter = 0; 

// const updateCounter = () => {
//   counter++; 
//   console.log(counter); 

//   setTimeout(updateCounter, 1000);
// };

// updateCounter();

let counter = 0;
function counterer(){
    counter++;
    console.log(counter);

    setTimeout(counterer, 1000);

}

counterer();
