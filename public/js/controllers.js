"use strict";
var karazinApp=angular.module('karazinApp', []);

    karazinApp.controller('GroupCtrl', function ($scope,$http) { 
    $scope.getGroups = function(){
      $http.get('/groups/'+dep.value).success(function(data){
       $scope.groups = data;
      }).error(function(){
      })
      }
  });

   var datamass=[];
   var globalsubjects=[];
   var lector;
    var IsFacSelected = false;
   
    var IsGroupSelected = false;
    var IsDateSelected = false;
    var SelectedCourse=null;
    var SelectedGroup=null;


    karazinApp.controller('DayCtrl', function ($scope) { 
    
    $scope.days= [ 
      {'dname': 'Пн', 'dvalue': '1', 'date':''}, 
      {'dname': 'Вт', 'dvalue': '2', 'date':''}, 
      {'dname': 'Ср', 'dvalue': '3', 'date':''}, 
      {'dname': 'Чт', 'dvalue': '4', 'date':''}, 
      {'dname': 'Пт', 'dalue': '5', 'date':''},
       {'dname': 'Сб', 'dvalue': '6', 'date':''}, 
        {'dname': 'Нд', 'dvalue': '7', 'date':''}  
      ] 

      
    });

     

 


    karazinApp.controller('subjectsCtrl',function ($scope,$http){
      $http.get('/subjects').success(function(sub){
            $scope.subjects = sub;
            window.globalsubjects = sub;
            }).error(function(sub){

            });
    });

            karazinApp.controller('TimetableCtrl', function ($scope,$http) { 
        $scope.timetable = function(){
        var Days = Math.floor((window.mylastday.getTime() - window.myfirstday.getTime())/(1000*60*60*24))+1;
        var Sept1=new Date(2015,8,1);
        var d = window.myfirstday;
        if(Days>7-d.getUTCDay()){
        geta(d.getUTCDay(),8-d.getUTCDay(),getWeekType(d),0);
        if(Days-(8-d.getUTCDay())>7){
        geta(1,7,(getWeekType(d)+1)%2==0 ? 2 : 1,1)
        if(Days-(15-d.getUTCDay())>7){
        geta(1,7,(getWeekType(d)+1)%2==0 ? 2 : 1,2)
        } 
        else
        {
           geta(1,Days-(15-d.getUTCDay()),(getWeekType(d)+1)%2==0 ? 2 : 1,2)
        }
        }
        else
        {
        geta(1,Days-(8-d.getUTCDay()),(getWeekType(d)+1)%2==0 ? 2 : 1,1)
        }
        }
        else
        {
        geta(d.getUTCDay(),Days,getWeekType(d),0);
        }

        function getWeekType(day){
        var DaysFrom1Sept = Math.floor((day - Sept1.getTime())/(1000*60*60*24))+1;
        if(DaysFrom1Sept%14 < 7 && DaysFrom1Sept%14 >=0) return 1;
        else return 2;
        }
        function geta(day,days,weektype,i){
        $http.get('/'+SelectedGroup+"&"+day+'&'+days+'&'+weektype).success(function(data){
        window.datamass[i]=data;
        }).error(function(){
        alert('NO')
        });
        };
        }
        });

     karazinApp.controller('TimeCtrl', function ($scope) { 
     
       $scope.times= [ 
      {'tname': '08.00', 'tvalue': '1'}, 
      {'tname': '09.55', 'tvalue': '2'}, 
      {'tname': '11.10', 'tvalue': '3'}, 
      {'tname': '13.00', 'tvalue': '4'}, 
      {'tname': '15.15', 'tvalue': '5'},
       {'tname': '17.20', 'tvalue': '6'}
      ] 

      $scope.draw = function(par, id) {
    for(var i=1;i<=6;i++){
    for(var j=1;j<=5;j++){
    document.getElementById(''+i+j+id).innerHTML='';
    }
    }
    var subName;
    for(var i=0;i<window.datamass[par].length;i++){
    for(var k=0;k<window.globalsubjects.length;k++){
    if(window.datamass[par][i].subject_code == window.globalsubjects[k].subject_code)
    subName = window.globalsubjects[k].name;
    }
    document.getElementById(''+window.datamass[par][i].day+ window.datamass[par][i].number+id).innerHTML='<a href="#basicModal" data-toggle="modal">'+subName+'<br> Каб. '+window.datamass[par][i].auditorium+'</a>';
    document.getElementById('modal-body').innerHTML='<h3></h3>';
    document.getElementById('modal-body').innerHTML ='<h3>'+showmore(window.datamass[par][i])+', проф. ХНУ ім. Каразіна</h3>';
    }
    }
    });

     function Reset(id) {
      document.getElementById(id).selectedIndex=0;
      window.SelectedGroup=null;
     }

     function showmore(item){
      for(var k=0;k<window.globalsubjects.length;k++){
      if(item.subject_code == window.globalsubjects[k].subject_code){
        lector = window.globalsubjects[k].lecturer;
        return lector;
      }
      }
     }


      function RememberGroup() {
       // alert(selectGroup.value)
      window.SelectedGroup= selectGroup.value;
       //alert( window.SelectedGroup);
     }

     function Validate(){
      if(window.mylastday!=null && window.SelectedGroup!=null) {
        document.getElementById('mainButton').className = 'btn btn-primary active';        
      }
      else {document.getElementById('mainButton').className = 'btn btn-primary disabled'; }
      
     }

     
 