<template>
    <div class = "container2">
        <div class = "prog2">
         <div class="progs2" id="progressing2"></div>
        </div>
        <p>4/13</p>
    </div>
    
    

    <div class ="context2">
        <h1 class = "title_info2">운송 수단에 대한 정보</h1>
        <p>2022-09-07</p>

        <div class = "Q2">
            <div class ="q2_1">
                <p>기업 소유 운송수단 1달 유류비를 입력해주세요.</p>
                <input type = "text">
                <select name="원" id ="selec">
                    <option value="">만 원</option>
                    <option value="1" >천 원</option>
                    <option value="2">원</option>
                </select>
                <div class = "radioBtn">
                <input type="radio" name="transport1" value="1" />운송수단을 사용하지 않습니다.</div>
                <div class = "radioBtn">
                <input type="radio" name="transport1" value="2" />잘 모르겠습니다.</div>
            </div>


            <div class ="q2_2">
                <p>직원 출장시 이용 운송수단의 총 거리를 입력해주세요.</p>
                <input type = "text">
                <select name="명" id ="selec">
                    <option value="">천 명</option>
                    <option value="1">백 명</option>
                    <option value="2">십 명</option>
                    <option value="3">명</option>
                </select>
                <div class = "radioBtn">
                <input type="radio" name="transport1" value="1" />운송수단을 사용하지 않습니다.</div>
                <div class = "radioBtn">
                <input type="radio" name="transport1" value="2" />잘 모르겠습니다.</div>
            </div>
        </div>
        
    </div>
    <div class = "btn2">
        <button type="button" onclick="location.href='/info'">previous</button>
        <button type="button" onclick="location.href='page1/page2'">next</button>  
	</div>
</template>

<style>
    .container2{
        margin: 50px 50px;
        background: #FFFFFF;
    }

    .prog2 {
        background: #EAEAEA;
        border-radius: 14px;
    }
    .progs2{
        width: 35%;
        height: 10px;
        background: #C3DAAE;
        border-radius: 14px;
        line-height: 50px;
    }

    .context2 {
        margin: 100px 50px;
    }
    
    h1.title_info2 {
        font-family: 'B612';
        font-size: 50px;
        line-height: 0px;
        color: #3E7519;
    }

    div.q2_1 {
        margin: 30px ;
    }
    div.q2_2 {
        margin: 30px ;
    }

    .radioBtn {
        font-family: 'B612';
        font-size: 12px;
    }

    .btn2 {
        margin: 200px 50px;
    }
</style>