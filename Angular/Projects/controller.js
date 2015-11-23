angular.module('project', [])
.controller('projectListController',function(){
     var project = this;
  project.items = [
      {id:1,name:'AngularJS',desc: 'HTML enhanced for web apps! angulajs.org'},
      {id:2,name:'Backbone', desc:'Models for your apps.'},
      {id:3,name:'Batman', desc:'Quick and beautiful.'},
      {id:4,name:'Cappucino', desc:'Objective-J.'},
      {id:5,name:'Ember', desc:'Ambitious web apps.'},
      {id:6,name:'GWT', desc:'JS in Java.'},
      {id:7,name:'jQuery', desc:'Write less, do more.3'},
      {id:8,name:'Knockout', desc:'MVVM pattern.'},
      {id:9,name:'Sammy', desc:'Small with class.'},
      {id:10,name:'Spine', desc:'Awesome MVC Apps.'},
      {id:11,name:'SproutCore', desc:'Innovative web-apps.'}
  ],
    project.newitem=false,
    project.viewitem=true,
    project.new = function(){
        console.log("Hi");
        console.log("Hi");
        project.newitem=true;
        project.viewitem=false;
    },
      project.showList = function(){
         project.newitem=false;
         project.viewitem=true;  
  },
  project.newproject = {id:'',name:'',desc:''},
  project.save = function(){
        project.items.push(project.newproject);
            project.newitem=false;
            project.viewitem=true;
    },
 project.edit = function(index){
    project.newproject.id = project.items[index-1].id;
    project.newproject.name = project.items[index-1].name;
    project.newproject.desc = project.items[index-1].desc;
      project.newitem=true;
      project.viewitem=false;
  },
 project.delete = function(index){
    console.log(index)
      project.items.splice(index-1,1);
       project.newitem=false;
      project.viewitem=true;
  }
})