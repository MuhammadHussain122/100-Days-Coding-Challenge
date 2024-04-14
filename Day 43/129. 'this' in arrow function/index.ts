/* Explain how this behaves in arrow functions compared to traditional functions.
*/
const traditionalVsArrowFunction = {
    value: "traditionalVsArrow",
    traditionalFunction: function () {
      console.log("Traditional function:", this.value); 
    },
    arrowFunction: () => {
    // console.log("Arrow function:", this.value); 
  },
};
  traditionalVsArrowFunction.traditionalFunction(); 
  traditionalVsArrowFunction.arrowFunction();
