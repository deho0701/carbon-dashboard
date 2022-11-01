<template>
    <div class ="body">
        <div>
            <button class="input1_back_btn" onclick="location.href='/measure';"> ◀ </button>
        </div>
        <div class="total_carbon" >
            <img style=" margin:30px; width: 70px; height: 70px; float: left; position: relative;" src="@/assets/co2_background.png" alt="" class="menu-icon"/>
            <div style="color:#223354; font-size:18px; font-weight:600; margin-top:20px; position: relative; float: left;">총 탄소 배출량
                <div class="chart"></div>
            </div>
            <div style="margin-right:40px">
                <div class="emissions">
                    <p class ="text_">0CO2kg</p>
                    <p class ="text_" id="text_kor">질소 배출량</p>
                </div>
                <div class="emissions">
                    <p class ="text_">0CO2kg</p>
                    <p class ="text_" id="text_kor">메탄 배출량</p>
                </div>
            </div>
        </div>
        <div class="info_group">
            <p style="margin-top:30px; font-weight: 700; font-size: 18px;">그룹 정보</p>
            <div class="info_group_content">
                <ul>
                    <li>
                    </li>
                </ul>
            </div>

        </div>
    </div>
</template>

<style>
.input1_back_btn{
    border: none;
    height: 50px;
    width: 50px;
}
.total_carbon{
    position: relative;
    margin-top: 30px;
    background-color: #ffffff;
    border-radius: 5px;
    height: 13vh;
    

}
.emissions{
    float:right; 
    margin-right: 50px;
    margin-top: 15px;

}
.text_{
    text-align: center;
}
#text_kor{
    font-weight: 600;
    color: #223354;
    font-size: 18px;
}
</style>