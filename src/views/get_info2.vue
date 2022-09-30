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
                <input class = "q_input2" type = "text" placeholder ="0">
                <select class = "q_btn2" name="원" id ="selec">
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
                <input class = "q_input2" type = "text">
                <select class = "q_btn2" name="명" id ="selec">
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
        <button type="button" class ="btn_pre2" id ="pre" onclick="location.href='/info'">Back</button>
        <button type="button" class = "btn_next2" id ="next" onclick="location.href='page1/page2'">Next question</button>    
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

    .q_input2 {
        width: 500px;
        height : 30px;
        background-color: #ECECEC;
        border: none;
        border-radius: 7px;
    }

    .context2 {
        margin: 100px 50px;
    }
    
    h1.title_info2 {
        font-family: 'B612';
        font-size: 300;
        font-weight: nomal;
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

    .q_btn2{
        margin-left: 10px;
        width: 70px;
        height : 30px;
        background-color: #ECECEC;
        border: none;
        border-radius: 7px;
    }

    #pre {
        width: 100px;
        height : 35px;
        background-color: #ECECEC;
        border: none;
        border-radius: 7px;
        
    }

    #pre:active {
        background-color: #C1C1C1;
    }
    .btn_pre2{
        margin-left: 30px;
    }

    #next {
        width: 150px;
        height : 35px;
        color: #FFFFFF;
        background-color: #818181;
        border: none;
        border-radius: 7px;
    }

    #next:active {
        background-color: #C1C1C1;
    }
    
    .btn_next2{
        margin-left: 400px;
    }
</style>