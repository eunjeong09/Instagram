(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0bd91b"],{"2d0c":function(e,t,c){"use strict";c.r(t);var a=c("7a23"),n={class:"topBack"},l=Object(a["createElementVNode"])("p",null,"댓글",-1),r=Object(a["createElementVNode"])("i",{class:"fa-solid fa-paper-plane right"},null,-1),s={id:"commentList"},o={class:"content"},i=["src"],m={class:"area"},d=Object(a["createElementVNode"])("p",null,null,-1),u={class:"time"},b=["src"],j={class:"area"},g={class:"time"};function p(e,t,c,p,O,h){var k=this;return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("i",{class:"fa-solid fa-chevron-left",onClick:t[0]||(t[0]=function(t){return e.$router.go(-1)})}),l,r]),Object(a["createElementVNode"])("div",s,[Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("img",{src:this.userImgUrl,alt:"프로필"},null,8,i),Object(a["createElementVNode"])("div",m,[Object(a["createElementVNode"])("b",null,Object(a["toDisplayString"])(this.nickName),1),Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(this.body),1),d,(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(this.hashtags,(function(e){return Object(a["openBlock"])(),Object(a["createElementBlock"])("span",{class:"hashtag",key:e},[Object(a["createElementVNode"])("span",null,"#"+Object(a["toDisplayString"])(e)+" ",1)])})),128)),Object(a["createElementVNode"])("p",u,Object(a["toDisplayString"])(this.calculateDate(O.createDate)),1)])]),(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(O.rows,(function(e){return Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{class:"comment",key:e},[Object(a["createElementVNode"])("img",{src:e.userImgUrl,alt:"프로필"},null,8,b),Object(a["createElementVNode"])("div",j,[Object(a["createElementVNode"])("b",null,Object(a["toDisplayString"])(e.nickName),1),Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(e.comment),1),Object(a["createElementVNode"])("p",g,Object(a["toDisplayString"])(k.calculateDate(e.createDate)),1)])])})),128))])],64)}var O=c("cf45"),h={data:function(){return{postId:"",body:"",userImgUrl:"",nickName:"",createDate:"",hashtags:[],rows:[]}},mounted:function(){this.postId=this.$route.params.id,this.getComments()},methods:{getComments:function(){var e={body:"여기완전 맛집",nickName:"게시물 작성자",userImgUrl:"/images/example.jpeg",createDate:"2022/04/05",hashtags:["압구정 맛집","압구정","김치찌개 맛집"],rows:[{id:1,nickName:"eunjeong",userImgUrl:"/images/example.jpeg",comment:"인정인정",createDate:"2022/04/10"},{id:2,nickName:"nick",userImgUrl:"/images/example.jpeg",comment:"@eunjeong",createDate:"2022/04/11"},{id:3,nickName:"name",userImgUrl:"/images/example.jpeg",comment:"",createDate:"2022/04/1"}]};this.body=e.body,this.nickName=e.nickName,this.userImgUrl=e.userImgUrl,this.createDate=e.createDate,this.hashtags=e.hashtags,this.rows=e.rows},calculateDate:function(e){return O["a"].getDate(e)}}},k=c("6b0d"),N=c.n(k);const E=N()(h,[["render",p]]);t["default"]=E}}]);
//# sourceMappingURL=chunk-2d0bd91b.27e59021.js.map