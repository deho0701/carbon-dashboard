<template>
    <div class = "container">
        <div class = "prog">
         <div class="progs" id="progressing"></div>
        </div>
        <p>0/15</p>
    </div>
    
    

    <div class ="context">
        <h1 class = "title_info">회사의 기본 정보</h1>
        <p>2022-09-07</p>

        <div class = "Q">
            <div class ="q1">
                <p>회사의 업종을 입력해주세요.</p>
                <input type = "search">
                <input type = "button" value ="확 인">
            </div>

            <div class ="q2">
                <p>현재 운영하는 기업체의 수를 입력해주세요.</p>
                <input type = "text">
            </div>

            <div class ="q3">
                <p>현재 기업의 직원 수를 입력해주세요.</p>
                <input type = "text">
                <select name="명" id ="selec">
                    <option value="">천 명</option>
                    <option value="1">백 명</option>
                    <option value="2">십 명</option>
                    <option value="3">명</option>
                </select>
            </div>
            <div class ="q4">
                <p>연간 근무일 수 를 입력해주세요.</p>
                <input type = "text">
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
        margin: 100px 50px;
    }
    
    h1.title_info {
        font-family: 'B612';
        font-size: 50px;
        line-height: 0px;
        color: #3E7519;
    }

    div.q1 {
        margin: 30px;
    }
    div.q2 {
        margin: 30px;
    }
    div.q3 {
        margin: 30px;
    }
    div.q4 {
        margin: 30px;
    }
    .btn {
        margin: 200px 50px;
    }
</style>
