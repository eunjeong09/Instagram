"use strict";(self["webpackChunkmypofolgram_front"]=self["webpackChunkmypofolgram_front"]||[]).push([[868],{7651:function(l,o,t){t.r(o),t.d(o,{default:function(){return cl}});var s=t(6252),a=t(3577);const e=l=>((0,s.dD)("data-v-54d301bf"),l=l(),(0,s.Cn)(),l),i={class:"mypage"},d={class:"mypageHeader"},n=["textContent"],r={class:"myTop"},c=["src"],f=e((()=>(0,s._)("p",null,"게시물",-1))),u=["textContent"],p=e((()=>(0,s._)("p",null,"팔로워",-1))),h=["textContent"],w=e((()=>(0,s._)("p",null,"팔로잉",-1))),g=["textContent"],v={key:0},m=["src"],_={key:1,class:"empty"},k=e((()=>(0,s._)("div",null,[(0,s._)("i",{class:"fa-solid fa-camera"}),(0,s._)("h3",null,"게시물 없음")],-1))),b=[k],C={key:2,class:"bottomModal"},y=e((()=>(0,s._)("p",{class:"modalTitle"},"만들기",-1))),I=e((()=>(0,s._)("i",{class:"fa-solid fa-table-cells"},null,-1))),M=e((()=>(0,s._)("p",null,"게시물",-1))),D=[I,M],L=e((()=>(0,s._)("i",{class:"fa-solid fa-clapperboard"},null,-1))),P=e((()=>(0,s._)("p",null,"릴스",-1))),F=[L,P],U=e((()=>(0,s._)("i",{class:"fa-solid fa-circle-plus"},null,-1))),W=e((()=>(0,s._)("p",null,"스토리",-1))),x=[U,W],$=e((()=>(0,s._)("i",{class:"fa-brands fa-gratipay"},null,-1))),T=e((()=>(0,s._)("p",null,"스토리 하이라이트",-1))),Z=[$,T],q=e((()=>(0,s._)("i",{class:"fa-solid fa-satellite-dish"},null,-1))),z=e((()=>(0,s._)("p",null,"라이브 방송",-1))),E=[q,z],R=e((()=>(0,s._)("i",{class:"fa-solid fa-book-open"},null,-1))),S=e((()=>(0,s._)("p",null,"가이드",-1))),B=[R,S],H={key:3,class:"bottomModal"},j=e((()=>(0,s._)("i",{class:"fa-solid fa-gear"},null,-1))),K=e((()=>(0,s._)("p",null,"로그아웃",-1))),O=[j,K],Q=(0,s.uE)('<li data-v-54d301bf><i class="fa-solid fa-gear" data-v-54d301bf></i><p data-v-54d301bf>설정</p></li><li data-v-54d301bf><i class="fa-solid fa-clock" data-v-54d301bf></i><p data-v-54d301bf>내 활동</p></li><li data-v-54d301bf><i class="fa-solid fa-clock" data-v-54d301bf></i><p data-v-54d301bf>보관</p></li><li data-v-54d301bf><i class="fa-solid fa-qrcode" data-v-54d301bf></i><p data-v-54d301bf>QR 코드</p></li><li data-v-54d301bf><i class="fa-solid fa-bookmark" data-v-54d301bf></i><p data-v-54d301bf>저장됨</p></li><li data-v-54d301bf><i class="fa-solid fa-list" data-v-54d301bf></i><p data-v-54d301bf>친한 친구</p></li><li data-v-54d301bf><i class="fa-solid fa-star" data-v-54d301bf></i><p data-v-54d301bf>즐겨찾기</p></li><li data-v-54d301bf><i class="fa-brands fa-gratipay" data-v-54d301bf></i><p data-v-54d301bf>코로나19 정보 센터</p></li>',8),Y=e((()=>(0,s._)("div",{class:"topWithButton"},[(0,s._)("p",{class:"bold"},"확인창")],-1))),A=e((()=>(0,s._)("div",null,[(0,s._)("div",null,"개발중입니다. ")],-1))),G=e((()=>(0,s._)("div",null,null,-1)));function J(l,o,t,e,k,I){const M=(0,s.up)("dis"),L=(0,s.up)("post-list"),P=(0,s.up)("post-modal"),U=(0,s.up)("confirm-modal");return(0,s.wg)(),(0,s.iD)("div",i,[(0,s._)("div",d,[(0,s._)("h2",{class:"nickname",textContent:(0,a.zw)(l.getterUserInfo.userId)},null,8,n),(0,s.Wm)(M,{class:"right"},{default:(0,s.w5)((()=>[(0,s._)("i",{class:"fa-solid fa-square-plus",id:"createModal",onClick:o[0]||(o[0]=l=>I.checkModal(l))}),(0,s._)("i",{class:"fa-solid fa-bars",id:"settingModal",onClick:o[1]||(o[1]=l=>I.checkModal(l))})])),_:1})]),(0,s._)("div",r,[(0,s._)("div",null,[(0,s._)("img",{src:l.getterUserInfo.userImgUrl,alt:""},null,8,c)]),(0,s._)("div",null,[f,(0,s._)("span",{textContent:(0,a.zw)(l.getterUserInfo.postCnt)},null,8,u)]),(0,s._)("div",{onClick:o[2]||(o[2]=l=>I.gotoFollowWhen("follower",k.follow.followerCount>0))},[p,(0,s._)("span",{textContent:(0,a.zw)(k.follow.followerCount)},null,8,h)]),(0,s._)("div",{onClick:o[3]||(o[3]=l=>I.gotoFollowWhen("following",k.follow.followingCount>0))},[w,(0,s._)("span",{textContent:(0,a.zw)(k.follow.followingCount)},null,8,g)])]),(0,s._)("div",{class:"modify",onClick:o[4]||(o[4]=l=>this.$router.push({name:"modify"}))},"프로필 편집"),k.isEmpty?((0,s.wg)(),(0,s.iD)("div",_,b)):((0,s.wg)(),(0,s.iD)("div",v,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(k.localPosts,(l=>((0,s.wg)(),(0,s.iD)("div",{class:"myPost",key:l},[(0,s._)("img",{src:l.imgUrl,alt:"",onClick:o[5]||(o[5]=(...l)=>I.openMyPost&&I.openMyPost(...l))},null,8,m)])))),128))])),k.createModal?((0,s.wg)(),(0,s.iD)("div",C,[y,(0,s._)("ul",null,[(0,s._)("li",{id:"show-modal",onClick:o[6]||(o[6]=l=>k.showRegister=!0)},D),(0,s._)("li",{id:"show-modal",onClick:o[7]||(o[7]=l=>k.showDeveloping=!0)},F),(0,s._)("li",{id:"show-modal",onClick:o[8]||(o[8]=l=>k.showDeveloping=!0)},x),(0,s._)("li",{id:"show-modal",onClick:o[9]||(o[9]=l=>k.showDeveloping=!0)},Z),(0,s._)("li",{id:"show-modal",onClick:o[10]||(o[10]=l=>k.showDeveloping=!0)},E),(0,s._)("li",{id:"show-modal",onClick:o[11]||(o[11]=l=>k.showDeveloping=!0)},B)])])):(0,s.kq)("",!0),k.settingModal?((0,s.wg)(),(0,s.iD)("div",H,[(0,s._)("ul",null,[(0,s._)("li",{onClick:o[12]||(o[12]=(...l)=>I.checkLogout&&I.checkLogout(...l))},O),Q])])):(0,s.kq)("",!0),(0,s.Wm)(P,{show:k.showPost,onClose:o[13]||(o[13]=l=>k.showPost=!1)},{body:(0,s.w5)((()=>[(0,s._)("div",null,[(0,s.Wm)(L)])])),_:1},8,["show"]),(0,s.Wm)(U,{show:k.showDeveloping,onClose:o[14]||(o[14]=l=>k.showDeveloping=!1)},{header:(0,s.w5)((()=>[Y])),body:(0,s.w5)((()=>[A])),footer:(0,s.w5)((()=>[G])),_:1},8,["show"])])}var N=t(9963);const V={class:"confirm-modal-container"},X=(0,s.Uk)("default body");function ll(l,o,t,a,e,i){return(0,s.wg)(),(0,s.j4)(N.uT,{name:"modal"},{default:(0,s.w5)((()=>[t.show?((0,s.wg)(),(0,s.iD)("div",{key:0,class:"modal-mask",onClick:o[0]||(o[0]=o=>l.$emit("close"))},[(0,s._)("div",V,[(0,s.WI)(l.$slots,"body",{},(()=>[X]))])])):(0,s.kq)("",!0)])),_:3})}var ol={props:{show:Boolean}},tl=t(3744);const sl=(0,tl.Z)(ol,[["render",ll]]);var al=sl,el=t(4430),il=t(8108),dl=t(8637),nl={components:{postList:el.Z,postModal:al,confirmModal:al},data(){return{isEmpty:!1,createModal:!1,settingModal:!1,user:{},userId:"",follow:{followerCount:0,followingCount:0,followeeList:[],followerList:[]},showRegister:!1,showDeveloping:!1,showPost:!1,selectedFile:null,showComplete:!1,localPosts:[]}},created(){this.userId=sessionStorage.getItem("userId"),this.setUserId(this.userId),this.getUserInfo(),this.getFollowList(),this.getPostList()},computed:{...(0,dl.Se)("userInfo",["getterUserInfo"])},watch:{},mounted(){},methods:{...(0,dl.OI)("userInfo",["setUserId"]),...(0,dl.nv)("userInfo",["getUserInfo"]),...(0,dl.nv)("auth",["logout"]),async getFollowList(){await il.Z.get("/api/user/getFollowList",{params:{userId:this.userId}}).then((l=>{this.follow.followerCount=l.data.result.followCnt[0],this.follow.followingCount=l.data.result.followCnt[1],this.follow.followeeList=l.data.result.followeeList,this.follow.followerList=l.data.result.followerList}))},async getPostList(){await il.Z.get("/api/post/getPostList",{params:{userId:this.userId}}).then((l=>{this.localPosts=l.data.result}))},moveTo(l){this.$router.push({path:l})},gotoFollowWhen(l,o){o&&this.$router.push({path:`/mypage/follow/${l}`})},onFileSelected(l){this.selectedFile=l.target.files[0]},async onUpload(){const l=new FormData;let o=this.checkFile(l);o&&(l.append("imageTest",this.selectedFile,this.selectedFile.name),await il.Z.post("",l,{onUploadProgress:l=>{console.log("Upload Progress : "+Math.round(l.loaded/l.total*100)+"%")}}).then((l=>{console.log(l)})).catch((l=>{console.log(l)})).finally())},checkFile(l){return null!==l},checkModal(l){let o=l.currentTarget.id;"createModal"===o?(this.settingModal=!1,this.createModal=!this.createModal):(this.createModal=!1,this.settingModal=!this.settingModal)},checkLogout(){this.logout(),this.$router.push({path:"/login"})},openMyPost(){this.$router.push({path:"/mypage/mypostlist"})}}};const rl=(0,tl.Z)(nl,[["render",J],["__scopeId","data-v-54d301bf"]]);var cl=rl}}]);
//# sourceMappingURL=868.b6299347.js.map