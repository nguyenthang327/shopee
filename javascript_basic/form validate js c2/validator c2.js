
function Validator(formSelector) {

    var _this =this;

    function getParent(element,selector){
        while (element.parentElement){
            if(element.parentElement.matches(selector))
            return element.parentElement;
            element = element.parentElement;
        }
       
    }

    var formRules = {};

    /*
        Quy ước Rules
        Nếu có lỗi return `errorMessage`
        Nếu không có lỗi thì return `undefined`
    */

    var validatorRules = {
        required: function (value) {
            return value ? undefined: `Vui lòng nhập trường này`;
        },
        email: function (value){
            var regex = /^\w+([\.-]?\w+)+@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined: `Vui lòng nhập email`;
        },
        min: function (min){
            return function (value) {
                return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự`;
            } 
        }
    }

    // lấy ra element trong DOM theo formSelector
    var formElement = document.querySelector(formSelector);

    // chỉ xử lý khi có element trong DOM
    if(formElement){

        var inputs = formElement.querySelectorAll('[name][rules]');
        // console.log(inputs);

        for(var input of inputs){

            var rules = input.getAttribute('rules').split('|');
            for(var rule of rules){

                var isRuleHasValue = rule.includes(':');
                var ruleInfo;
                
                if(isRuleHasValue){
                    ruleInfo = rule.split(':');
                    rule = ruleInfo[0];
                    
                    // console.log(ruleInfo);
                }

                var ruleFunc = validatorRules[rule];

                if(isRuleHasValue){
                    ruleFunc = ruleFunc(ruleInfo[1]);
                }

                //  console.log(rule);

                if(!Array.isArray(formRules[input.name])){
                    formRules[input.name] = [ruleFunc];
                }
                else{
                    formRules[input.name].push(ruleFunc);
                }

                // Lắng nghe sự kiện để validate (blur, change)
                input.onblur = handleValidate;
                input.oninput = handleClearError;
            
            }

            function handleValidate(e){
                var rules = formRules[e.target.name];
                var errorMessage;
                
                for(var rule of rules){
                    errorMessage = rule(e.target.value);
                    if(errorMessage){
                        break;
                    }
                }

                // Nếu có lỗi hiển thị message lỗi ra UI
                if(errorMessage){
                    var formGroup = getParent(e.target, '.form-group');
                    
                    if(formGroup){
                        var formMessage = formGroup.querySelector('.form-message');
                        formGroup.classList.add('invalid');
                        if(formMessage){
                            formMessage.innerText = errorMessage;
                           
                        }
                    }
                }
                return !errorMessage; // Khong có lỗi trả về true
            }

            // Hàm clear message
            function handleClearError(e){
                var formGroup = getParent(e.target, '.form-group');
                if(formGroup.classList.contains('invalid')){
                    formGroup.classList.remove('invalid');
                    var formMessage = formGroup.querySelector('.form-message');
                    if(formMessage){
                        formMessage.innerText = '';
                    }
                }
            }
            
            
        }
        // console.log(formRules);
    }

    // Xử lý hành vi submit form
    formElement.onsubmit = function(e){
        e.preventDefault();

        var inputs = formElement.querySelectorAll('[name][rules]');
        var isValid =true;

        for(var input of inputs){
            if(!handleValidate({target: input})){
                isValid = false;
            }
        }

        //Khi khong co lỗi thì submit form
        if(isValid){
            
            if(typeof _this.onSubmit === 'function'){
                _this.onSubmit();
            }
            else{
                formElement.submit();// Khi khong có options thì submit theo hành vi mặc định
            }
        }
    }
}
