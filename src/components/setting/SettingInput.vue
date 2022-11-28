<template>
<div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-lg-10 col-xl-8 mx-auto">
                <div class="my-4">
                    <form>
                        <hr class="line" />
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="firstname">이름</label>
                                <input type="text" id="firstname" class="form-control"/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="inputEmail4">Email</label>
                            <input type="email" class="form-control" id="inputEmail4" placeholder="ho@naver.me" />
                        </div>
                        <div class="form-group">
                            <label for="inputAddress5">주소</label>
                            <input type="text" class="form-control" id="inputAddress5" placeholder="진주대로 501번길" />
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputCompany5">소속</label>
                                <input type="text" class="form-control" id="inputCompany5" placeholder="경상대학교" />
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputState5">직위</label>
                                <select id="inputState5" class="form-control">
                                    <option selected="">Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                        </div>
                        <hr class="line" />
                        <div class="row mb-4">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="inputPassword4">Old Password</label>
                                    <input type="password" class="form-control" id="inputPassword5" />
                                </div>
                                <div class="form-group">
                                    <label for="inputPassword5">New Password</label>
                                    <input type="password" class="form-control" id="inputPassword5" />
                                </div>
                                <div class="form-group">
                                    <label for="inputPassword6">Confirm Password</label>
                                    <input type="password" class="form-control" id="inputPassword6" />
                                </div>
                            </div>
                        </div>
                        <div class="change">
                            <button type="submit" class="btn-save">변경</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style>
.line{
    width: 100%;
    margin-bottom: 3vh;
}
body{
    color: #8e9194;
    background-color: #f4f6f9;
}
.avatar-xl img {
    width: 110px;
}
.rounded-circle {
    border-radius: 50% !important;
}
.text-muted {
    color: #aeb0b4 !important;
}
.text-muted {
    font-weight: 300;
}
.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    color: #4d5154;
    background-color: #ffffff;
    background-clip: padding-box;
    border: 1px solid #eef0f3;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.btn-save{
    width: 8vw;
    height: 4vh;
    background-color: #3DC984;
    color: #eef0f3;
    border:none;
    border-radius: 7px;
    font-weight: 700;
}
.form-group{
    margin:1vh;
}
.change{
    margin-top: 5vh;
    text-align: center;
}
</style>
<script>

export default{ 
    name:'',
    components:{},
    data(){
        return{
            sampleData:''
        };
    },
    setup(){},
    created(){},
    mounted(){},
    unmounted(){},
    methods:{}
}
</script>