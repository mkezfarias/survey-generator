
jQuery($ => {
    const fbEditor = document.getElementById("build-wrap");
    const formBuilder = $(fbEditor).formBuilder();
  
const transformer = (data) => {
let elDato = data
console.log(elDato)
return elDato

}

setTimeout(() => document.querySelector(".save-template").addEventListener("click", () => transformer(formBuilder.actions.getData('json', true))), 5000);
  });

