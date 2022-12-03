const inputName = document.querySelector('.input_name')
const contentName = document.querySelector('.content_name')

const inputSurname = document.querySelector('.input_surname')
const contentSurname = document.querySelector('.content_surname')

const inputParentname = document.querySelector('.input_parentname')
const parentname = document.querySelector('.parent_name')

const inputNumber = document.querySelector('.input_number')
const telephoneNumber = document.querySelector('.telephone_number')

const inputAdd = document.querySelector('.add_phoneNumber')
const telCont = document.querySelector('.tel_cont')

const telinfo = document.querySelector('.tele_info')

const bottomInputs = document.querySelector('.bottom_inputs')

const button = document.querySelector('.btn')

const right = document.querySelector('.right')

const accept = document.querySelector('.accept')

const addmailinput = document.querySelector('.add_mail_input')
const divmailinput = document.querySelector('.div_mail_input')
const mailinputs = document.querySelector('.mail_inputs')
const inputMail = document.querySelector('.input_mail')
const MailAdress = document.querySelector('.mail_adress')
const MailInfo = document.querySelector('.mail_info')

let count = 0;

let countMail = 0;

const transfer = (content, input, keyInput) => {
content.innerHTML = input.value 
}
 
const creator = (cloneInput,conteiner, str,count,) => {
    
    const div = cloneInput.cloneNode(true) // клонирую новый блок с инпутом и кнопкой удаления
    div.children[0].placeholder = `${count + 2} ${str}` // замена плейсхолдера в новых инпутах
    div.children[1].innerHTML = "X" // ставлю на первый элемент блока(кнопка) название
    div.children[1].className = "del_input" //заменяю класс мему первому элементу (кнопке)
    div.children[0].value = ""// обнуляю знаачение инпута при добавлении его
    conteiner.append(div) // вставляю мой новый блок в блок (bottomInputs)
    div.children[0].name += count + 2
    div.querySelector('.del_input').addEventListener('click',() => { // по селектору в моем диве ищу кнопку удаления,и даю ей вызов события
        div.remove() // удаляю блок див
        contHolder.remove() // удаляю отобразившийся блок в правом окне
        count --
    })
     const contHolder = telinfo.cloneNode(true) // клонирую блок со превью телефона
     contHolder.children[0].innerHTML = str + " :"
     const telehold = contHolder.querySelector('.telephone_number') // нахожу по селлектору блочок , в который будут записываться данные с инаута
     telehold.innerHTML = "" // обнуляю им значения после клонирования
     right.append(contHolder) // добавляю мой блок (клон) в правое окно
     div.children[0].addEventListener('input',() => transfer(telehold,div.children[0])) //чтобы срабатывала функция трансфер,когда я что-то пишу в своем инпуте,и передаю параметры функции
    
}


const deleteBtn = () => {
contentName.innerHTML = "" 
contentSurname.innerHTML = ""
parentname.innerHTML = ""
telephoneNumber.innerHTML = ""
inputName.value = ""
inputSurname.value = ""
inputParentname.value = ""
inputNumber.value = ""
const inputs = Array.from(document.querySelectorAll('.telephone_number'))
const inputs_1 = Array.from(document.querySelectorAll('.input_number'))
inputs.map((item,index,array) => item.innerHTML = "")
inputs_1.map((item,index,array) => item.value = "")
}

inputName.addEventListener('input', () => transfer(contentName,inputName))
inputSurname.addEventListener('input',() => transfer(contentSurname,inputSurname))
inputParentname.addEventListener('input',() => transfer(parentname, inputParentname))
inputNumber.addEventListener('input', () => transfer(telephoneNumber,inputNumber))
inputMail.addEventListener('input', () => transfer(MailAdress ,inputMail))


button.addEventListener('click', deleteBtn)


inputAdd.addEventListener('click', () => count < 4 ? [creator(telCont,bottomInputs,"Номер телефона",count), count++] : false )


addmailinput.addEventListener('click', () => countMail < 4 ? [ creator(divmailinput,mailinputs,"Почта",countMail), countMail++] : false)

const obj = {}
const getData = () => {
let forms = document.forms["content"]

   obj.name = forms.userName.value
   obj.surname = forms.userSurname.value
   obj.parentname = forms.userParentName.value
   obj.telephoneNumber = forms.userTelephoneNumber.value
   obj.userMail = forms.userMail.value
   obj.userTelephoneNumber2 = forms.userTelephoneNumber2.value
   obj.userMail2 = forms.userMail2.value
   obj.userTelephoneNumber3 = forms.userTelephoneNumber3.value
   obj.userMail3 = forms.userMail3.value
   obj.userTelephoneNumber4 = forms.userTelephoneNumber4.value
   obj.userMail4 = forms.userMail4.value
   obj.userTelephoneNumber5 = forms.userTelephoneNumber5.value
   obj.userMail5 = forms.userMail5.value

console.log(obj)
}


accept.addEventListener('click', getData)