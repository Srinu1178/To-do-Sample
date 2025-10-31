 let item = document.getElementById('items');
         let main = document.getElementById('main');
          function addToTask(event){
            event.preventDefault();
            let text = document.getElementById('text');
            let date = document.getElementById('date');
            if(text.value!=="" && date.value!==""){
            let seleDate = document.getElementById('date').value;
            let textValue = text.value;
            let items = document.createElement('div');
            items.classList.add('items');
            let task = document.createElement('p');
            task.innerText = textValue;
            let disDate = document.createElement('p');
            disDate.innerText = seleDate;
            text.value='';
            date.value='';
            items.appendChild(task);
            items.appendChild(disDate);
            let buttons = document.createElement('div');
            buttons.classList.add('buttons');
            let edit = document.createElement('button');
            edit.classList.add('edit');
            edit.innerText='Edit';
            edit.addEventListener('click',()=>editData(event,task,disDate))
            let del = document.createElement('button');
            del.classList.add('delete');
            del.innerText='Delete';
            buttons.appendChild(edit);
            buttons.appendChild(del);
            items.appendChild(buttons);
            main.appendChild(items);
            del.addEventListener("click",()=>deleteItem(items));
            }
            else{
                alert("Enter your fields");
            }
          }
          function deleteItem(items){
            items.remove();
          }
           const form = document.getElementById('form');
          
           let send = document.getElementById('send');
           function editData(event,task,disDate){
            const editText = document.getElementById('editValue');
            const editDate = document.getElementById('editDate');
              event.preventDefault();
              form.style.display="flex";
              editText.value=task.innerText;
              editDate.value=disDate.innerText;
              editText.addEventListener('onchange',(e)=>{
                    e.preventDefault();
                    editText.value= e.target.value;
                })
                editDate.addEventListener('onchange',(e)=>{
                    editDate.value = e.target.value;
                    e.preventDefault();
                })
              send.addEventListener('click',(e)=>{
                if(editText.value!==""||editDate.value!==""){
                e.preventDefault();
                
                task.innerText = editText.value;
                disDate.innerText =  editDate.value;  
                form.style.display="none";          
                }
                else{
                    alert("Enter atleast one field");
                }
              })
              
          }
          function cancelForm(event){
            event.preventDefault();
            form.style.display="none";
          }      