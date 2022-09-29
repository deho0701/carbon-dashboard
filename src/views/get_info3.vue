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
                    <input type = "text">
                    <select name="원" id ="selec">
                        <option value="">만 원</option>
                        <option value="1" >천 원</option>
                        <option value="2">원</option>
                    </select>
                    <div class = "radioBtn1">
                    <input type="radio" name="transport1" value="1" />잘 모르겠습니다.</div>
                </div>


                <div class ="q3_2">
                    <p>건물의 월 수도료를 입력해주세요.</p>
                    <input type = "text">
                    <select name="원" id ="selec">
                        <option value="">만 원</option>
                        <option value="1" >천 원</option>
                        <option value="2">원</option>
                    </select>
                    <div class = "radioBtn1">
                    <input type="radio" name="transport1" value="1" />잘 모르겠습니다.</div>
                </div>
                <div class ="q3_3">
                    <p>건물의 월 가스비를 입력해주세요.</p>
                    <input type = "text">
                    <select name="원" id ="selec">
                        <option value="">만 원</option>
                        <option value="1" >천 원</option>
                        <option value="2">원</option>
                    </select>
                    <div class = "radioBtn1">
                    <input type="radio" name="transport1" value="1" />잘 모르겠습니다.</div>
                </div>
                <div class ="q3_4">
                    <p>기업의 폐기물 소각비(1년)을 입력해주세요.</p>
                    <input type = "text">
                    <select name="원" id ="selec">
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
        <button type="button" onclick="location.href='/info/page1'">previous</button>
        <button type="button" onclick="location.href='page2/page3'">next</button>  
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
</style>