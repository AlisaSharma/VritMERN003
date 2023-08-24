// const firstName = document.querySelector('#firstname').value;
// console.log(firstName);
// const button = document.getElementById("submit-handle");
// const handleSubmit=(event)=>{
//     const firstName = document.querySelector('#firstname').value;
//     console.log(firstName);
    
//     }
// button.addEventListener('click',handleSubmit)
const inputType = document.querySelector('#inputType');
const form =document.querySelector('#form');
const labelValue = document.querySelector('#labelValue');

labelValue.addEventListener('keyup',(event)=>{
    const keyPressed = event.key;
    console.log(keyPressed);
    if(keyPressed === 'Enter'){
        const type = inputType.value;
        const label = labelValue.value;
        
        const labelInput= document.createElement('label');
        const div = document.createElement('div');

        let input;
        if (type=='textarea'){
            input=document.createElement('textarea');
        }else{
            input=document.createElement('input');
        }
        //add label value
        labelInput.innerHTML=label;
        // type add
        input.type=type;
        input.classList.add('form-control');

        labelInput.classList.add('form-label');
        div.classList.add("mb-3");

        if (type === 'submit'){
            input.classList.add('btn');
            input.classList.add('btn-success');
            input.value=label;
        }

        div.appendChild(labelInput)
        div.appendChild(input)

        form.append(div)
    }
    

    
})