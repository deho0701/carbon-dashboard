<template>
    <div class = "container4">
        <div class = "prog4">
         <div class="progs4" id="progressing4"></div>
        </div>
        <p>10/13</p>
    </div>
    <div class ="context4">
        <h1 class = "title_info2">소비 정보</h1>
        <p>2022-09-07</p>
    
        <div class = "Q4">
                <div class ="q4">
                    <p>연간 전자기기 구매 비용을 입력해주세요.</p>
                    <input class = "q_input4" type = "text">
                    <select class ="q_btn4" name="원" id ="selec">
                        <option value="">만 원</option>
                        <option value="1" >천 원</option>
                        <option value="2">원</option>
                    </select>
                    <div class = "radioBtn2">
                    <input type="radio" name="transport3" value="1" />전자기기를 구매하지 않았습니다.</div>
                    <div class = "radioBtn2">
                    <input type="radio" name="transport3" value="2" />잘 모르겠습니다.</div>
                </div>


                <div class ="q4">
                    <p>연간 비품 구매 비용을 입력해주세요.</p>
                    <input class = "q_input4" type = "text">
                    <select class ="q_btn4" name="원" id ="selec">
                        <option value="">만 원</option>
                        <option value="1" >천 원</option>
                        <option value="2">원</option>
                    </select>
                    <div class = "radioBtn2">
                    <input type="radio" name="transport1" value="1" />비품을 구매하지 않았습니다.</div>
                    <div class = "radioBtn2">
                    <input type="radio" name="transport1" value="1" />잘 모르겠습니다.</div>
                </div>
                <div class ="q4">
                    <p>연간 음식 구매 비용을 입력해주세요.</p>
                    <input class = "q_input4" type = "text">
                    <select class ="q_btn4" name="원" id ="selec">
                        <option value="">만 원</option>
                        <option value="1" >천 원</option>
                        <option value="2">원</option>
                    </select>
                    <div class = "radioBtn2">
                    <input type="radio" name="transport1" value="1" />음식을 구매하지 않았습니다.</div>
                    <div class = "radioBtn2">
                    <input type="radio" name="transport1" value="1" />잘 모르겠습니다.</div>
                </div>
        </div>
    </div>
    <div class = "btn4">
        <button type="button" class ="btn_pre4" id ="pre" onclick="location.href='/info/page1/page2'">previous</button>
        <button type="button" class = "btn_next4" id ="submmit" onclick="location.href='/'">submmit</button>  
	</div>
</template>

<style>
    .container4{
        margin: 5px 50px;
        background: #FFFFFF;
    }

    .prog4{
        background: #EAEAEA;
        border-radius: 14px;
    }
    .progs4{
        width: 75%;
        height: 10px;
        background: #C3DAAE;
        border-radius: 14px;
        line-height: 50px;
    }

    .q_input4 {
        margin-top: 10px;
        width: 500px;
        height : 30px;
        background-color: #ECECEC;
        border: none;
        border-radius: 7px;
    }

    .q_btn4{
        margin-left: 10px;
        width: 70px;
        height : 30px;
        background-color: #ECECEC;
        border: none;
        border-radius: 7px;
    }

    .q_btn4:active {
        background-color: #C1C1C1;
    }

    .context4{
        margin: 100px 100px;
    }
    
    h1.title_info4{
        font-family: 'B612';
        font-size: 50px;
        line-height: 0px;
        color: #3E7519;
    }

    .radioBtn2 {
        margin-top: 10px;
        font-family: 'B612';
        font-size: 12px;
    }

    div.q4 {
        margin: 50px;
    }
    .btn4{
        margin: 200px 50px;
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
    .btn_pre4{
        position:absolute;
        left : 100px;
        top: 800px;
    }

    #submmit {
        width: 150px;
        height : 35px;
        color: #FFFFFF;
        background-color: #7c9260;
        border: none;
        border-radius: 7px;
    }

    #submmit:active {
        background-color: #adbc9e;
    }
    
    .btn_next4{
        position:absolute;
        left : 600px;
        top: 800px;
    }


</style>