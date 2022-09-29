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
                <div class ="q4_1">
                    <p>연간 전자기기 구매 비용을 입력해주세요.</p>
                    <input type = "text">
                    <select name="원" id ="selec">
                        <option value="">만 원</option>
                        <option value="1" >천 원</option>
                        <option value="2">원</option>
                    </select>
                    <div class = "radioBtn2">
                    <input type="radio" name="transport3" value="1" />전자기기를 구매하지 않았습니다.</div>
                    <div class = "radioBtn1">
                    <input type="radio" name="transport3" value="2" />잘 모르겠습니다.</div>
                </div>


                <div class ="q4_2">
                    <p>연간 비품 구매 비용을 입력해주세요.</p>
                    <input type = "text">
                    <select name="원" id ="selec">
                        <option value="">만 원</option>
                        <option value="1" >천 원</option>
                        <option value="2">원</option>
                    </select>
                    <div class = "radioBtn1">
                    <input type="radio" name="transport1" value="1" />비품을 구매하지 않았습니다.</div>
                    <div class = "radioBtn1">
                    <input type="radio" name="transport1" value="1" />잘 모르겠습니다.</div>
                </div>
                <div class ="q4_3">
                    <p>연간 음식 구매 비용을 입력해주세요.</p>
                    <input type = "text">
                    <select name="원" id ="selec">
                        <option value="">만 원</option>
                        <option value="1" >천 원</option>
                        <option value="2">원</option>
                    </select>
                    <div class = "radioBtn2">
                    <input type="radio" name="transport1" value="1" />음식을 구매하지 않았습니다.</div>
                    <div class = "radioBtn1">
                    <input type="radio" name="transport1" value="1" />잘 모르겠습니다.</div>
                </div>
        </div>
    </div>
    <div class = "btn4">
        <button type="button" onclick="location.href='/info/page1/page2'">previous</button>
        <button type="button" onclick="location.href='/'">submmit</button>  
	</div>
</template>

<style>
    .container4{
        margin: 50px 50px;
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

    .context4{
        margin: 100px 50px;
    }
    
    h1.title_info4{
        font-family: 'B612';
        font-size: 50px;
        line-height: 0px;
        color: #3E7519;
    }

    .radioBtn2 {
        font-family: 'B612';
        font-size: 12px;
    }

    div.q4_1 {
        margin: 30px;
    }
    div.q4_2 {
        margin: 30px;
    }
    div.q4_3 {
        margin: 30px;
    }
    div.q4_4 {
        margin: 30px;
    }
    .btn4{
        margin: 200px 50px;
    }
</style>