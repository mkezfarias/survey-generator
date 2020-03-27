const crearEncuesta = document.querySelector('.crear-encuesta');
const botones = document.createElement("DIV");
const contenedor = document.querySelector('.contenedor')
const formaVisual = document.querySelector('.forma-visual')
var counter = 1;
var optionsID = 1;
botones.classList.add("p-5")
var codigo1 = []

const addRow = () => {
    formaVisual.insertAdjacentHTML("beforeend", `<div class="answer"> <input type="text" placeholder="opcion" class= "ml-5 answ" id="opcion-${optionsID}"><div class="btn btn-primary add" onclick=addRow()"> + </div> </div>`)
    optionsID += 1
}

const optionsFactory = (key, label, value) => {
  return {key, label, value}
}

const generadorPreguntas = (type) =>{
  let obj = {}

  if (type === "select") {
    formaVisual.insertAdjacentHTML("beforeend", `<div><input type="text" placeholder="Pregunta ${counter}" id="pregunta-${counter}">
    <div class="btn btn-primary guardar" onclick=addCode() id="boton-${counter}"> Guardar </div> </div>
    <div class="answer"> <input type="text" placeholder="opcion" class= "ml-5 answ" id="opcion-${optionsID}"><div class="btn btn-primary add" onclick=addRow() id="boton-add"> + </div> </div>
    `)
    obj['key'] = `pregunta-${counter}`
    obj['label']= ""
    obj['type']= type
    obj['value'] = ""
    obj['options'] = []
    counter += 1
    optionsID += 1
    codigo1.push(obj)
    return obj
  } else {
  formaVisual.insertAdjacentHTML("beforeend", `<div><input type="text" placeholder="Pregunta ${counter}" id="pregunta-${counter}">
                           <div class="btn btn-primary guardar" onclick=addCode() id="boton-${counter}"> Guardar </div> </div>`)
  obj['key'] = `pregunta-${counter}`
  obj['label']= ""
  obj['type']= type

  counter += 1
  codigo1.push(obj)
  
  return obj
  }
};

  const preguntas = document.querySelectorAll('.preg')
  preguntas.forEach(boton => {
    boton.addEventListener('click', (e) =>{
        return generadorPreguntas(e.currentTarget.id)
    })
  });


  function addCode() {
    const toAdd = document.querySelectorAll('.guardar');
    toAdd.forEach(bot => {
      bot.addEventListener('click', (e) => {
        var indexx = e.currentTarget.id.split("-")[1]
        var setOfQuestions = e.currentTarget.parentElement.parentElement
        var answers = setOfQuestions.querySelectorAll('.answ')
        codigo1[indexx-1]['label'] = e.currentTarget.previousElementSibling.value;
        codigo1[indexx-1]['options'] = [optionsFactory()]
      // ] const mappedAnsw = answers.map( answer => {
        //  answer["key"] = answer.id
          //answer["label"] = answer.value
        //  answer["value"] = answer.value
       // })
        console.log(answers.map)

      //  console.log(codigo1)
      })
    });

   }
   
/*
<CreateForm
        className="form"
        title="Voting Form"
        schema={
                          [ 
                            
                            
          { key: "city", label: "City", type: "select", value: "Kerala",
            options: [{ key: "mumbai", label: "Mumbai", value: "Mumbai" },
                      { key: "bangalore", label: "Bangalore", value: "Bangalore" },
                      { key: "kerala", label: "Kerala", value: "Kerala" },
                      ],
           },
          {
            key: "gender",
            label: "Gender",
            type: "radio",
            options: [
              { key: "male", label: "Male", name: "gender", value: "male" },
              {
                key: "female",
                label: "Female",
                name: "gender",
                value: "female",
              },
            ],
          },
          {
            key: "skills",
            label: "Skills",
            type: "checkbox",
            options: [
              {
                key: "reactjs",
                label: "ReactJS",
                value: "reactjs",
              },
              {
                key: "angular",
                label: "Angular",
                value: "angular",
              },
              { key: "vuejs", label: "VueJS", value: "vuejs" },
            ],
          },
        ]
*/