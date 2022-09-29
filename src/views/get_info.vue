<template>
    <div class = "container">
        <div class = "prog">
         <div class="progs" id="progressing"></div>
        </div>
        <p style ="text-align : left;">0/15</p>
    </div>
    
    

    <div class ="context">
        <h1 class = "title_info">회사의 기본 정보</h1>
        <p>2022-09-07</p>

        <div class = "Q">
            <div class ="q">
                <p class ="q_text">회사의 업종을 입력해주세요.</p>
                <input class = "q_input" type = "search" placeholder="제조업">
                <input class = "q_btn" type = "button" value ="확 인">
            </div>

            <div class ="q">
                <p class ="q_text">현재 운영하는 기업체의 수를 입력해주세요.</p>   
                <input class ="q_input" type = "text" placeholder="0">
            </div>

            <div class ="q">
                <p class ="q_text">현재 기업의 직원 수를 입력해주세요.</p>
                <input class = "q_input" type = "text" placeholder="0"/>
                <select class = "q_btn" name="명" id ="selec">
                    <option value="">천 명</option>
                    <option value="1">백 명</option>
                    <option value="2">십 명</option>
                    <option value="3">명</option>
                </select>
            </div>
            <div class ="q">
                <p class ="q_text">연간 근무일 수를 입력해주세요.</p>
                <input class = "q_input" type = "text" placeholder="0">
            </div>
        </div>
        
    </div>
    <div class = "btn">
        <button type="button" onclick="location.href='./'">previous</button>
        <button type="button" onclick="location.href='info/page1'">next</button>
        
	</div>
</template>

<style>
    .container{
        margin: 50px 50px;
        background: #FFFFFF;
    }

    .prog {
        background: #EAEAEA;
        border-radius: 14px;
    }
    .progs{
        width: 0%;
        height: 10px;
        background: #C3DAAE;
        border-radius: 14px;
        line-height: 50px;
    }

    .context {
        position: absolute;
        left: 30%;
        top: 20%
        
    }
    
    h1.title_info {
        font-family: 'B612';
        font-size: 300;
        font-weight: nomal;
        line-height: 0px;
        color: #3E7519;
    }

    .Q {
        margin-top: 100px;
        margin-left: 30px;
    }

    .q {
        position: relative;
        margin-top: 70px;
    }

    .q_text {
        margin-bottom: 12px;
    }
        
    .q_input {
        width: 500px;
        height : 30px;
        background-color: #ECECEC;
        border: none;
        border-radius: 7px;
    }

    .q_btn{
        margin-left: 10px;
        width: 70px;
        height : 30px;
        background-color: #ECECEC;
        border: none;
        border-radius: 7px;
    }
    .q_btn:active {
        background-color: #C1C1C1;
    }
    .btn {
        position: relative;
        top : 800px;
        left : 50px;
    }
</style>
