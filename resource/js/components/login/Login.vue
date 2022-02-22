<template>
    <div>
        <p class="login-box-msg">Sign in to Dashboard</p>
    
        <div class="alert alert-danger" role="alert" v-if="loginError">
            Incorrect user or password
        </div>

        <form v-on:submit.prevent="login" method="post">
            <input type="hidden" name="csrf_token" :value="csrf">
            <div class="input-group mb-3">
                <input type="text" class="form-control" :class="isInvalid" placeholder="Username" name="username" v-model="username">
                <div class="input-group-append">
                    <div class="input-group-text">
                        <span class="fas fa-envelope"></span>
                    </div>
                </div>
            </div>
            <div class="input-group mb-3">
                <input type="password" class="form-control" :class="isInvalid" placeholder="Password" name="password" v-model="password">
                <div class="input-group-append">
                    <div class="input-group-text">
                        <span class="fas fa-lock"></span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-8">
                    <div class="icheck-primary">
                        <input type="checkbox" id="remember">
                        <label for="remember">
                            Remember Me
                        </label>
                    </div>
                </div>
                <!-- /.col -->
                <div class="col-4">
                    <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                </div>
                <!-- /.col -->
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: "login-form",
    props: ['csrf'],
    data(){
        return {
            username: '',
            password: '',
            loginError: false,
        }
    },
    methods:{
        login(){
            axios({
                method:'post',
                url: '/api/login',
                data:{
                    csrf_token: this.csrf,
                    username: this.username,
                    password: this.password
                }
            }).then(response => {
                const { data: { status, response: data } } = response;
                if(status){
                    this.setCookie('session', this.csrf, 365);
                    location.href = '/dashboard';
                }else{
                    this.loginError = true;
                }
            });
        },
        setCookie(name,value,days) {
            let expires = "";
            if (days) {
                const date = new Date();
                date.setTime(date.getTime() + (days*24*60*60*1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "")  + expires + "; path=/";
        }
    },
    computed:{
        isInvalid(){
            if(this.loginError == true){
                return 'is-invalid'
            }else{
                return ''
            }
        }
    }
}
</script>