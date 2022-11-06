<template>
    <table class="tg" style="border-radius: 40px;table-layout: fixed; ">
        <colgroup>
            <col style="width: 64px">
            <col style="width: 153px">
            <col style="width: 180px">
            <col style="width: 171px">
            <col style="width: 237px">
            <col style="width: 172px">
            <col style="width: 172px">
            <col style="width: 172px">
        </colgroup>
        <thead>
            <tr>
                <th class="tg-j0i3"><span class="employee-check"><input type="checkbox"/></span></th>
                <th class="tg-r2fn">이름</th>
                <th class="tg-r2fn">연락처</th>
                <th class="tg-r2fn">이메일</th>
                <th class="tg-r2fn">조직 정보</th>
                <th class="tg-r2fn">직위</th>
                <th class="tg-r2fn">사번</th>
                <th class="tg-r2fn">접근권한</th>
            </tr>
        </thead>
            <tbody>
                <tr v-for="employee in employees" :key="employee" class="employee-check-column">
                    <td class="tg-vcze"><span class="employee-check"><input type="checkbox"></span></td>
                    <td class="tg-s8v6">{{employee.name}}</td>
                    <td class="tg-s8v6">{{employee.call}}</td>
                    <td class="tg-s8v6">{{employee.eamil}}</td>
                    <td class="tg-s8v6">{{employee.groupInfo}}</td>
                    <td class="tg-s8v6">{{employee.position}}</td>
                    <td class="tg-s8v6">{{employee.employeeNumber}}</td>
                    <td class="tg-s8v6">{{employee.authority}}</td>
                </tr>
            </tbody>
    </table>
</template>

<style>
    .employee-check{
        scale: 1.4;
    }
    .tg  {border-collapse:collapse;border-spacing:0;}
    .tg td{border-color:#d5d5d5;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
    overflow:hidden;padding:10px 5px;word-break:normal;}
    .tg th{border-color:#d5d5d5;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
    font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
    .tg .tg-8t2t{background-color:#ffffff;border-color:#d5d5d5;color:#9b9b9b;text-align:left;vertical-align:top}
    .tg .tg-vcze{justify-content: center;        display: flex;
        background-color:#ffffff;border-color:#d5d5d5;color:#b6b6b6;text-align:left;vertical-align:top}
    .tg .tg-j0i3{justify-content: center;        display: flex;
        background-color:#f7f7f7;border-color:#d5d5d5;color:#656565;text-align:left;vertical-align:top}
    .tg .tg-s8v6{background-color:#ffffff;border-color:#d5d5d5;color:#0a0707;text-align:left;vertical-align:top}
    .tg .tg-sm7i{background-color:#f7f7f7;border-color:#d5d5d5;color:#656565;font-size:13px;font-weight:bold;text-align:left;
    vertical-align:top}
    .tg .tg-4zka{background-color:#ffffff;border-color:#d5d5d5;text-align:left;vertical-align:top}
    </style>

<script>
    export default {
        name :"table",
        components:{},
        data() {
            return{
            }
        },
        setup(){
            var employees =[
                {checked:false,name:"김재현",call:"010-2532-3242",eamil:"asda@dsa.net",groupInfo:"경상대",position:"교수",employeeNumber:"1231241",authority:"관리자"},
                {checked:false,name:"김재현",call:"010-2532-3242",eamil:"asda@dsa.net",groupInfo:"경상대",position:"교수",employeeNumber:"1231241",authority:"변경"},
                {checked:false,name:"김재현",call:"010-2532-3242",eamil:"asda@dsa.net",groupInfo:"경상대",position:"교수",employeeNumber:"1231241",authority:"변경"},
                {checked:false,name:"김재현",call:"010-2532-3242",eamil:"asda@dsa.net",groupInfo:"경상대",position:"교수",employeeNumber:"1231241",authority:"변경"},
                {checked:false,name:"김재현",call:"010-2532-3242",eamil:"asda@dsa.net",groupInfo:"경상대",position:"교수",employeeNumber:"1231241",authority:"변경"},
                {checked:false,name:"김재현",call:"010-2532-3242",eamil:"asda@dsa.net",groupInfo:"경상대",position:"교수",employeeNumber:"1231241",authority:"변경"},
                {checked:false,name:"김재현",call:"010-2532-3242",eamil:"asda@dsa.net",groupInfo:"경상대",position:"교수",employeeNumber:"1231241",authority:"변경"},
                {checked:false,name:"김재현",call:"010-2532-3242",eamil:"asda@dsa.net",groupInfo:"경상대",position:"교수",employeeNumber:"1231241",authority:"변경"},
                {checked:false,name:"김재현",call:"010-2532-3242",eamil:"asda@dsa.net",groupInfo:"경상대",position:"교수",employeeNumber:"1231241",authority:"변경"},
                {checked:false,name:"김재현",call:"010-2532-3242",eamil:"asda@dsa.net",groupInfo:"경상대",position:"교수",employeeNumber:"1231241",authority:"변경"},
                {checked:false,name:"김재현",call:"010-2532-3242",eamil:"asda@dsa.net",groupInfo:"경상대",position:"교수",employeeNumber:"1231241",authority:"변경"},
                {checked:false,name:"김재현",call:"010-2532-3242",eamil:"asda@dsa.net",groupInfo:"경상대",position:"교수",employeeNumber:"1231241",authority:"변경"},
                {checked:false,name:"김재현",call:"010-2532-3242",eamil:"asda@dsa.net",groupInfo:"경상대",position:"교수",employeeNumber:"1231241",authority:"변경"}
                
            ]

            return{employees}
        },
        components:{
            
        }
    }
</script>