//input被選取效果
//DOM存取
const inputs = document.querySelectorAll('.input-field');
const spans = document.querySelectorAll('span');

//幫inputs增加事件聆聽
    inputs.forEach(input => {
        input.addEventListener('focus', el => {
            //被點擊(focus到的input新增selected-input
            el.target.classList.add('selected-input')
            spans.forEach(span => {
                 //被點擊(focus到input的title新增selected-title
                if(span.classList.contains(el.target.classList[0])) {
                    span.classList.add('selected-title')
                }
            })
        })
        input.addEventListener('blur', () => {
            //當user離開時，移除全部selected-input與selected-title
            inputs.forEach(input => {
                input.classList.remove('selected-input')
            })
            spans.forEach(span => {
               span.classList.remove('selected-title')
            })
        })
    })
