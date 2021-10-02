
// Đối tượng 'Validator'
function Validator(options) {

    function getParent(element, selector) {
        while(element.parentElement){
            if(element.parentElement.matches(selector)){
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRules = {};

    // Hàm thực thi validate
    function validate (inputElement, rule){
        var errorElement = getParent(inputElement,options.formGroupSelector).querySelector(options.errorSelector); // lấy ra thẻ cha rồi query đến class có tên là form-message là con của class cha;
        var errorMessage;

        // Lấy các rules của selector
        var rules = selectorRules[rule.selector];
        
        // lặp qua từng rule và kiểm tra nếu có lỗi thì break 
        for(var key in rules){

            // Xử lý vs checked và radio , các trường hợp khác trả về default
            switch (inputElement.type){
                case "checked":
                case "radio":
                    errorMessage = rules[key](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[key](inputElement.value);
            }

            if(errorMessage){
                break;
            }
        }
                    
        if(errorMessage){
            errorElement.innerText = errorMessage;
            getParent(inputElement,options.formGroupSelector).classList.add('invalid');
        }
        else{
            errorElement.innerText = '';
            getParent(inputElement,options.formGroupSelector).classList.remove('invalid');
        }
        return !errorMessage;
    }
    
    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form);

    if(formElement){
        
        // Bỏ qua hành vi mặc định trong vd này là submit form
        formElement.onsubmit = function (event){
            event.preventDefault();

            var isFormValid = true;

            // Lặp qua từng rules và validate
            options.rules.forEach(function(rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement,rule);
                if(!isValid){
                    isFormValid = false;
                }
            });

            if(isFormValid){

                // Trường hợp submit với JS
                if(typeof options.onSubmit === 'function'){
                    var enableInputs = formElement.querySelectorAll('[name]:not([disable])'); // Lấy ra những attribute có name và khồn có disable
                    var formValues = Array.from(enableInputs).reduce(function (values, input){
                        switch (input.type){
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="'+input.name+'"]:checked').value; 
                                break;
                            case 'checkbox':
                                if(!input.matches(':checked')) return values;
                                if(!Array.isArray(values[input.name])){
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name]= input.value;
                        }
                        return values;
                        
                    },{});
                    options.onSubmit(formValues);
                }
                else{
                    formElement.submit();// Mặc định submit 
                }
                
            }
        }

        // Lặp qua mỗi rule và xử lý ( lắng nghe sự kiện blur, input, ...)
        options.rules.forEach(function (rule){

            // Lưu lại các rules cho mỗi input 
            if(Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test);

            }else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);
            
            Array.from(inputElements).forEach( function (inputElement) {
                // xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    validate(inputElement, rule);
                }

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function () {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                }
                
            })
            
        });

    }
}

// Định nghĩa rules
// Nguyên tắc của rules:
// 1. Khi có lỗi => trả về message lỗi
// 2. Khi hợp lệ => KHông trả ra cái gì cả ( undefined)

Validator.isRequired = function(selector, message){
    return {
        selector: selector,
        test: function(value){
            return value ? undefined: message || 'Vui lòng nhập trường này';
        }
    }
}

Validator.isEmail= function (selector, message){
    return {
        selector: selector,
        test: function(value){
            var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return regex.test(value)? undefined: message || 'Trường này phải là email';
        }
    }
}

Validator.minLength = function (selector, min ,message){
    return {
        selector: selector,
        test: function(value){
            return value.length>=min? undefined: message || `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    }
}

Validator.isConfirmed = function(selector, getConfirmValue, message){
    return {
        selector: selector,
        test: function(value){
            return value === getConfirmValue() ? undefined: message ||'Giá trị nhập vào không hợp lệ';// Nếu tồn tại biến message thì lấy không thì lấy giá trị còn lại.
        }
    }
}