//Bad version
$("#submit").on("click", function(){
    do some stuff
}

//Good version
var obj = {
    init:function(){
        this.cacheDom();
        this.bindEvents();
    }
    cacheDom: function(){
        this.$submit = $("#submit");
        this.$crackHo = $("#crackHo");
    }
    bindEvents: function(){
        this.$submit.on("click", this.testFunction);

        //OR
        this.$submit.on("click", this.testFunction.bind(this));
    }
    testFunction: function(){
        kill crack ho
    }
}









var login_signup_modal = {
            init: function(){
                this.cacheDom();
                this.bindEvents();
                this.failedSubmit();
            },
            cacheDom: function(){
                this.$modal = $("#login_signup_modal");
                this.$modal_signup_grp = $(".modal_signup");
                this.$modal_login_grp = $(".modal_login");
                this.$modal_signup_btn = $("button.modal_signup");
                this.$modal_login_btn = $("button.modal_login");
                this.$modal_btns = $(".modal_btns");
                this.$modal_forms = $(".modal_forms");
                this.$modal_trigger_login = $(".modal_trigger_login");
                this.$modal_trigger_signup = $(".modal_trigger_signup");
                this.$modal_submit_btn = $(".login_signup_modal_submit");
                this.$modal_close_btn = $(".modal_close");
            },
            openModal: function(){
                this.$modal.modal("show");
            },
            bindEvents: function(){
                this.$modal_trigger_login.on("click", this.setLoginActive.bind(this));
                this.$modal_trigger_signup.on("click", this.setSignupActive.bind(this));
                this.$modal_login_btn.on("click", this.setLoginActive.bind(this));
                this.$modal_signup_btn.on("click",this.setSignupActive.bind(this));
                this.$modal_submit_btn.on("click",this.submitForm.bind(this));
                this.$modal_close_btn.on("click", this.resetActive.bind(this));
            },
            setLoginActive: function(){
                this.resetActive();
                this.$modal_login_grp.addClass("active");
            },
            setSignupActive: function(){
                this.resetActive();
                this.$modal_signup_grp.addClass("active");
            },
            resetActive: function(){
                this.$modal_forms.removeClass("active");
                this.$modal_btns.removeClass("active");
            },
            failedSubmit: function(){
                this.resetActive();
                if(this.$modal_login_grp.hasClass("failed_submit")){
                    this.setLoginActive();
                    this.openModal();
                }else if(this.$modal_signup_grp.hasClass("failed_submit")){
                    this.setSignupActive();
                    this.openModal();
                }
            },
            submitForm: function(e){
                $(".modal_forms.active").submit();
            }
        }