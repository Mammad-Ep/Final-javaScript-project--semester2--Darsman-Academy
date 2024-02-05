
class FormAccountingValidation {
    constructor(register_form,login_form) {
        this.__register_form = register_form;
        this.__login_form = login_form;
        // this.submitHandler();
        this.submitRegisterHandler();
        this.submitLoginHandler();
    };

    // submitHandler() {
    //     this.__form.addEventListener('submit',(event)=>{
    //         $('.messages-form ul').html('');
    //         event.preventDefault();
    //         var form_input = this.__form.querySelectorAll('input');
    //         var message_list = [];

    //         for (let i = 0; i < form_input.length; i++) {
    //             var input = form_input[i];
    //             const validation = input.dataset.validation;
    //             let validation_list = validation.split(' ');
    //             if (validation_list.length > 0) {
    //                 for (let j = 0; j < validation_list.length; j++) {
    //                     const func = validation_list[j];
    //                     const message = this[func](input.value, input.dataset.name);
    //                     if (message !== "") {
    //                         message_list.push(message)
    //                     }

    //                 }
    //             }

    //         };
    //         console.log(message_list);
            
    //         if (message_list.length > 0) {
    //             $('.messages-form ul').html('');
    //             let $message_box = $('.messages-form');
    //             $message_box.show(100, function () {
    //                 for (let i = 0; i < message_list.length; i++) {
    //                     const message = message_list[i];
    //                     $('.messages-form ul').append(`<li>${message}</li>`)
    //                 }
    //             });

    //             setTimeout(function () {
    //                 $message_box.slideUp(1000)
    //             }, 4000);

    //         } else {
    //             this.__form.submit();
    //         }
    //     })
    // };
    
    submitRegisterHandler() {
        this.__register_form.addEventListener('submit',(event)=>{
            event.preventDefault();
            var form_input = this.__register_form.querySelectorAll('input');
            var message_list = [];

            for (let i = 0; i < form_input.length; i++) {
                var input = form_input[i];
                const validation = input.dataset.validation;
                let validation_list = validation.split(' ');
                if (validation_list.length > 0) {
                    for (let j = 0; j < validation_list.length; j++) {
                        const func = validation_list[j];
                        const message = this[func](input.value, input.dataset.name);
                        if (message !== "") {
                            message_list.push(message)
                        }

                    }
                }

            };
            console.log(message_list);

            if (message_list.length > 0) {
                $('.messages-form ul').html('');
                let $message_box = $('.messages-form');
                $message_box.show(100, function () {
                    for (let i = 0; i < message_list.length; i++) {
                        const message = message_list[i];
                        $('.messages-form ul').append(`<li>${message}</li>`)
                    }
                });

                setTimeout(function () {
                    $message_box.slideUp(1000)
                }, 4000);

            } else {
                this.__register_form.submit();
            }
        })
    };
    
    submitLoginHandler() {
        this.__login_form.addEventListener('submit',(event)=>{
            event.preventDefault();
            var form_input = this.__login_form.querySelectorAll('input');
            var message_list = [];

            for (let i = 0; i < form_input.length; i++) {
                var input = form_input[i];
                const validation = input.dataset.validation;
                let validation_list = validation.split(' ');
                if (validation_list.length > 0) {
                    for (let j = 0; j < validation_list.length; j++) {
                        const func = validation_list[j];
                        const message = this[func](input.value, input.dataset.name);
                        if (message !== "") {
                            message_list.push(message)
                        }

                    }
                }

            };
            console.log(message_list);

            if (message_list.length > 0) {
                $('.messages-form ul').html('');
                let $message_box = $('.messages-form');
                $message_box.show(100, function () {
                    for (let i = 0; i < message_list.length; i++) {
                        const message = message_list[i];
                        $('.messages-form ul').append(`<li>${message}</li>`)
                    }
                });

                setTimeout(function () {
                    $message_box.slideUp(1000)
                }, 4000);

            } else {
                this.__login_form.submit();
            }
        })
    };

    isEmpty(value, name) {

        if (value.trim() === "") {
            return `فیلد ${name} نباید خالی باشد`
        } else {
            return ""
        }
    };

    isBetween(value, name) {
        if (value.length < 3 || value.length > 30) {
            return `فیلد ${name} باید بین 3 تا 30 کاراکتر باشد`

        } else {
            return ""
        }

    }

    isPassword(value, name) {
        const re = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);

        if (!re.test(value)) {
            return `فیلد ${name} باید شامل حروف کوچک و بزرگ و اعداد و کاراکتر خاص باشد`

        } else {
            return ""
        }
    };

    rePassword(pass2, name) {
        let $pass1 = $('#password1-register').val();
        if ($pass1 !== pass2) {
            return `رمز عبور با ${name} برابر نمی باشد`

        } else {
            return ""
        }

    };


    isEmail(value, name) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!re.test(value.trim())) {
            return `فرمت فیلد ${name} نادرست می باشد`

        } else {
            return ""
        }
    }

}



// ______________________________________________________________________

function change_button_account() {
    $('#register-button').click(function () {
        $('.account-login').attr('style', 'transition: all 0.1s;');
        $('.account-register').attr('style', 'transition: all 1s;');
        $('.account-login').css('right', '-500px');
        $('.account-register').css('top', '0');
    });

    $('#login-button').click(function () {
        $('.account-register').attr('style', 'transition: all 0.1s;');
        $('.account-login').attr('style', 'transition: all 1s;');
        $('.account-register').css('top', '-600px');
        $('.account-login').css('right', '0');
    })
}




// ______________________________________________________________________

$(document).ready(function () {

    change_button_account();

    // var $register_form = $('#register-form');
    // var $login_form = $('#login-form');

    var register_form = document.getElementById('register-form');
    var login_form = document.getElementById('login-form');

    // $('#register-form button').click(function(){
    //     new FormAccountingValidation(register_form)
    // });


    // $('#login-form button').click(function(){
    //     new FormAccountingValidation(login_form)
    // });


    new FormAccountingValidation(register_form,login_form)

})


