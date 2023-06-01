<template>
    <section id="absolute-window">
        <div class="card w-50 p-3">
            <div class="row">
                <form class="col-12 mx-auto">
                    <div class="mb-4">
                        <label>Введите логин</label>
                        <input 
                            type="email" 
                            v-model="email" 
                            class="form-control"
                        >
                    </div>
                    <div class="mb-4">
                        <label>Введите пароль</label>
                        <input 
                            type="password" 
                            v-model="password" 
                            class="form-control"
                        >
                    </div>
                    <div class="mb-4">
                        <ButtonComponent 
                            v-on:click="sendForm"
                            buttonType="button"
                            buttonName="Войти"
                            buttonState="true"
                        />
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
    import ButtonComponent from '@/components/ButtonComponent.vue';

    export default{
        data() {
            return {
                email: null,
                password: null
            }
        },
        components: {
            ButtonComponent
        },
        methods: {
            isValid: function(email, password)
            {
                if (email.length > 0 && password.length > 0)
                {
                    return [email, password]
                }
            },
            setAuth: function()
            {
                localStorage.setItem("user_email", this.email)
                if (localStorage.getItem("user_email"))
                {
                    window.location.href = "/"
                }
            },
            sendForm: function()
            {
                if (this.isValid(this.email, this.password).length == 2)
                {
                    this.setAuth()
                }
            }
        }
    }
</script>

<style scoped>
    section#absolute-window{
        max-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(228, 228, 228, 0.966);
    }
</style>