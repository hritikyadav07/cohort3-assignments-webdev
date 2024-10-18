let counter = 0; 


// const updateCounter = () => {
//   counter++; 
//   console.log(counter);
// };

// setInterval(updateCounter, 1000);


setInterval(updateInterval, 1000)
function updateInterval(){
    counter++;
    console.log(counter);
}