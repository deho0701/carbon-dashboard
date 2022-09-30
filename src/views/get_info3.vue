<template>
    <div class = "container3">
        <div class = "prog3">
         <div class="progs3" id="progressing3"></div>
        </div>
        <p>6/13</p>
    </div>
    <div class ="context3">
        <h1 class = "title_info2">건물 정보</h1>
        <p>2022-09-07</p>
    
        <div class = "Q3">
                <div class ="q3_1">
                    <p>건물의 월 전기료를 입력해주세요.</p>
                    <input class = "q_input3" type = "text">
                    <select class = "q_btn3" name="원" id ="selec">
                        <option value="">만 원</option>
                        <option value="1" >천 원</option>
                        <option value="2">원</option>
                    </select>
                    <div class = "radioBtn1">
                    <input type="radio" name="transport1" value="1" />잘 모르겠습니다.</div>
                </div>


                <div class ="q3_2">
                    <p>건물의 월 수도료를 입력해주세요.</p>
                    <input class = "q_input3" type = "text">
                    <select class = "q_btn3" name="원" id ="selec">
                        <option value="">만 원</option>
                        <option value="1" >천 원</option>
                        <option value="2">원</option>
                    </select>
                    <div class = "radioBtn1">
                    <input type="radio" name="transport1" value="1" />잘 모르겠습니다.</div>
                </div>
                <div class ="q3_3">
                    <p>건물의 월 가스비를 입력해주세요.</p>
                    <input class = "q_input3" type = "text">
                    <select class = "q_btn3" name="원" id ="selec">
                        <option value="">만 원</option>
                        <option value="1" >천 원</option>
                        <option value="2">원</option>
                    </select>
                    <div class = "radioBtn1">
                    <input type="radio" name="transport1" value="1" />잘 모르겠습니다.</div>
                </div>
                <div class ="q3_4">
                    <p>기업의 폐기물 소각비(1년)을 입력해주세요.</p>
                    <input class = "q_input3" type = "text">
                    <select class = "q_btn3" name="원" id ="selec">
                        <option value="">만 원</option>
                        <option value="1" >천 원</option>
                        <option value="2">원</option>
                    </select>
                    <div class = "radioBtn1">
                    <input type="radio" name="transport1" value="1" />잘 모르겠습니다.</div>
                </div>
        </div>
    </div>
    <div class = "btn3">
        <button class = "btn_pre3" id = "pre" type="button" onclick="location.href='/info/page1'">previous</button>
        <button class = "btn_next3" id = "next" type="button" onclick="location.href='page2/page3'">next</button>  
	</div>
</template>

<style>
    .container3{
        margin: 50px 50px;
        background: #FFFFFF;
    }

    .prog3{
        background: #EAEAEA;
        border-radius: 14px;
    }
    .progs3{
        width: 55%;
        height: 10px;
        background: #C3DAAE;
        border-radius: 14px;
        line-height: 50px;
    }

    .q_input3 {
        width: 500px;
        height : 30px;
        background-color: #ECECEC;
        border: none;
        border-radius: 7px;
    }

    .context3{
        margin: 100px 50px;
    }
    
    h1.title_info3{
        font-family: 'B612';
        font-size: 50px;
        line-height: 0px;
        color: #3E7519;
    }

    .radioBtn1 {
        font-family: 'B612';
        font-size: 12px;
    }

    

    div.q3_1 {
        margin: 30px;
    }
    div.q3_2 {
        margin: 30px;
    }
    div.q3_3 {
        margin: 30px;
    }
    div.q3_4 {
        margin: 30px;
    }
    .btn3{
        margin: 200px 50px;
    }

    .q_btn3{
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

    .btn_pre3{
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
    
    .btn_next3{
        margin-left: 400px;
    }
</style>