var account= JSON.parse(localStorage.getItem('account'));
//localStorage.setItem('account',JSON.stringify([{username:'nct',email:'123@gmail.com',password:'12345678'}]));
//localStorage.setItem('phongcanh',JSON.stringify([{picname:'hoài niệm',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/hoainiem.png',price:'5.000.000',chatlieu:'sơn dầu',tonemau:'nóng',detail:'asset/img/tranhphongcanh/hoainiemct.png'},{picname:'kí ức hà nội',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/kiuchanoi.png',price:'13.000.000',chatlieu:'acrylic',tonemau:'nóng',detail:'asset/img/tranhphongcanh/kiuchanoict.png'},{picname:'hội an ngày nắng',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/hoianngaynang.png',price:'15.000.000',chatlieu:'sơn dầu',tonemau:'nóng',detail:'asset/img/tranhphongcanh/hoianngaynangct.png'},{picname:'phố nắng',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/phonang.png',price:'7.000.000',chatlieu:'acrylic',tonemau:'nóng',detail:'asset/img/tranhphongcanh/phonangct.png'},{picname:'lối về',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/loive.png',price:'10.000.000',chatlieu:'sơn dầu',tonemau:'nóng',detail:'asset/img/tranhphongcanh/loivect.png'},{picname:'nắng hạ',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/nangha.png',price:'16.000.000',chatlieu:'acrylic',tonemau:'nóng',detail:'asset/img/tranhphongcanh/nanghact.png'},{picname:'ngày nắng đẹp',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/ngaynangdep.png',price:'15.000.000',chatlieu:'acrylic',tonemau:'nóng',detail:'asset/img/tranhphongcanh/ngaynangdepct.png'},{picname:'hoàng hôn trên phố',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/hoanghontrenpho.png',price:'17.000.000',chatlieu:'sơn dầu',tonemau:'lạnh',detail:'asset/img/tranhphongcanh/hoanghontrenphoct.png'},{picname:'vùng ngoại ô',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/vungngoaio.png',price:'13.000.000',chatlieu:'sơn dầu',tonemau:'lạnh',detail:'asset/img/tranhphongcanh/vungngoaioct.png'},{picname:'phố mới',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/phomoi.png',price:'26.000.000',chatlieu:'acrylic',tonemau:'nóng',detail:'asset/img/tranhphongcanh/phomoict.png'},{picname:'tiệm cafe cũ',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/tiemcafecu.png',price:'14.000.000',chatlieu:'acrylic',tonemau:'nóng',detail:'asset/img/tranhphongcanh/tiemcafecuct.png'},{picname:'phố đường tàu',type:'tranh phong cảnh',imgsrc:'asset/img/tranhphongcanh/phoduongtau.png',price:'15.000.000',chatlieu:'acrylic',tonemau:'lạnh',detail:'asset/img/tranhphongcanh/phoduongtauct.png'}]));
//localStorage.setItem('tranhhoa',JSON.stringify([{picname:'hoa sen',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/hoasen.png',price:'7.000.000',chatlieu:'sơn dầu',tonemau:'lạnh',detail:'asset/img/tranhhoa/hoasenct.png'},{picname:'an',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/an.png',price:'5.000.000',chatlieu:'acrylic',tonemau:'nóng',detail:'asset/img/tranhhoa/anct.png'},{picname:'sen tháng 6',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/senthang6.png',price:'5.500.000',chatlieu:'sơn dầu',tonemau:'lạnh',detail:'asset/img/tranhhoa/senthang6ct.png'},{picname:'hạ vắng',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/havang.png',price:'6.500.000',chatlieu:'sơn dầu',tonemau:'nóng',detail:'asset/img/tranhhoa/havangct.png'},{picname:'sắc hồng',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/sachong.png',price:'180.000.000',chatlieu:'sơn dầu',tonemau:'nóng',detail:'asset/img/tranhhoa/sachongct.png'},{picname:'hoa hồng và cafe',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/hoahongvacafe.png',price:'3.500.000',chatlieu:'sơn dầu',tonemau:'nóng',detail:'asset/img/tranhhoa/hoahongvacafect.png'},{picname:'cành hồng',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/canhhong.png',chatlieu:'acrylic',tonemau:'lạnh',price:'3.000.000',detail:'asset/img/tranhhoa/canhhongct.png'},{picname:'hoa xuân',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/hoaxuan.png',price:'5.500.000',chatlieu:'acrylic',tonemau:'nóng',detail:'asset/img/tranhhoa/hoaxuanct.png'},{picname:'peony',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/peony.png',price:'3.500.000',chatlieu:'sơn dầu',tonemau:'lạnh',detail:'asset/img/tranhhoa/peonyct.png'},{picname:'ngày rực rỡ',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/ngayrucro.png',price:'3.000.000',chatlieu:'acrylic',tonemau:'nóng',detail:'asset/img/tranhhoa/ngayrucroct.png'},{picname:'mẫu đơn',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/maudon.png',price:'4.000.000',chatlieu:'sơn dầu',tonemau:'nóng',detail:'asset/img/tranhhoa/maudonct.png'},{picname:'mẫu đơn trắng',type:'tranh hoa',imgsrc:'asset/img/tranhhoa/maudontrang.png',price:'3.000.000',chatlieu:'sơn dầu',tonemau:'lạnh',detail:'asset/img/tranhhoa/maudontrangct.png'}]));
//localStorage.setItem('tinhvat',JSON.stringify([{picname:'hương thạch thảo',type:'tranh tĩnh vật',imgsrc:'asset/img/tranhtinhvat/huongthachthao.png',price:'12.000.000',chatlieu:'sơn dầu',tonemau:'nóng',detail:'asset/img/tranhtinhvat/huongthachthaoct.png'},{picname:'tĩnh vật tháng tư',type:'tranh tĩnh vật',imgsrc:'asset/img/tranhtinhvat/tinhvatthangtu.png',price:'5.000.000',chatlieu:'sơn dầu',tonemau:'lạnh',detail:'asset/img/tranhtinhvat/tinhvatthangtuct.png'},{picname:'hoa rừng',type:'tranh tĩnh vật',imgsrc:'asset/img/tranhtinhvat/hoarung.png',price:'6.000.000',chatlieu:'acrylic',tonemau:'lạnh',detail:'asset/img/tranhtinhvat/hoarungct.png'},{picname:'mộc lan',type:'tranh tĩnh vật',imgsrc:'asset/img/tranhtinhvat/moclan.png',price:'5.000.000',chatlieu:'sơn dầu',tonemau:'lạnh',detail:'asset/img/tranhtinhvat/moclanct.png'},{picname:'tĩnh vật',type:'tranh tĩnh vật',imgsrc:'asset/img/tranhtinhvat/tinhvathoacuc.png',price:'3.000.000',chatlieu:'sơn dầu',tonemau:'lạnh',detail:'asset/img/tranhtinhvat/tinhvathoacucct.png'},{picname:'bên khung cửa',type:'tranh tĩnh vật',imgsrc:'asset/img/tranhtinhvat/benkhungcua.png',price:'3.000.000',chatlieu:'acrylic',tonemau:'lạnh',detail:'asset/img/tranhtinhvat/benkhungcuact.png'},{picname:'bình hoa ly',type:'tranh tĩnh vật',imgsrc:'asset/img/tranhtinhvat/binhhoaly.png',price:'3.000.000',chatlieu:'sơn dầu',tonemau:'nóng',detail:'asset/img/tranhtinhvat/binhhoalyct.png'},{picname:'bông nắng',type:'tranh tĩnh vật',imgsrc:'asset/img/tranhtinhvat/bongnang.png',price:'3.000.000',chatlieu:'sơn dầu',tonemau:'nóng',detail:'asset/img/tranhtinhvat/bongnangct.png'},{picname:'tĩnh vật hoa và sách',type:'tranh tĩnh vật',imgsrc:'asset/img/tranhtinhvat/tinhvathoavasach.png',price:'5.000.000',chatlieu:'sơn dầu',tonemau:'lạnh',detail:'asset/img/tranhtinhvat/tinhvathoavasachct.png'},{picname:'góc thân quen',type:'tranh tĩnh vật',imgsrc:'asset/img/tranhtinhvat/gocthanquen.png',price:'4.500.000',chatlieu:'acrylic',tonemau:'lạnh',detail:'asset/img/tranhtinhvat/gocthanquenct.png'},{picname:'tĩnh vật quả lê',type:'tranh tĩnh vật',imgsrc:'asset/img/tranhtinhvat/tinhvatquale.png',price:'1.200.000',chatlieu:'sơn dầu',tonemau:'lạnh',detail:'asset/img/tranhtinhvat/tinhvatqualect.png'},{picname:'những trái hồng',type:'tranh tĩnh vật',imgsrc:'asset/img/tranhtinhvat/nhungtraihong.png',price:'6.000.000',chatlieu:'sơn dầu',tonemau:'nóng',detail:'asset/img/tranhtinhvat/nhungtraihongct.png'}]));
//localStorage.setItem('truutuong',JSON.stringify([{picname:'thăng hoa',type:'tranh trừu tượng',imgsrc:'asset/img/tranhtruutuong/thanghoa.png',price:'30.000.000',chatlieu:'acrylic',tonemau:'lạnh',detail:'asset/img/tranhtruutuong/thanghoact.png'},{picname:'hừng đông',type:'tranh trừu tượng',imgsrc:'asset/img/tranhtruutuong/hungdong.png',price:'15.000.000',chatlieu:'acrylic',tonemau:'lạnh',detail:'asset/img/tranhtruutuong/hungdongct.png'},{picname:'thu qua đông tới',type:'tranh trừu tượng',imgsrc:'asset/img/tranhtruutuong/thuquadongtoi.png',price:'15.000.000',chatlieu:'sơn dầu',tonemau:'lạnh',detail:'asset/img/tranhtruutuong/thuquadongtoict.png'},{picname:'bông nắng',type:'tranh trừu tượng',imgsrc:'asset/img/tranhtruutuong/bongnang.png',price:'13.000.000',chatlieu:'acrylic',tonemau:'lạnh',detail:'asset/img/tranhtruutuong/bongnangct.png'},{picname:'sắc xuân số 12',type:'tranh trừu tượng',imgsrc:'asset/img/tranhtruutuong/sacxuanso12.png',price:'17.000.000',chatlieu:'sơn dầu',tonemau:'nóng',detail:'asset/img/tranhtruutuong/sacxuanso12ct.png'},{picname:'sắc xuân số 11',type:'tranh trừu tượng',imgsrc:'asset/img/tranhtruutuong/sacxuanso11.png',price:'14.000.000',chatlieu:'acylic',tonemau:'nóng',detail:'asset/img/tranhtruutuong/sacxuanso11ct.png'},{picname:'sắc xuân số 7',type:'tranh trừu tượng',imgsrc:'asset/img/tranhtruutuong/sacxuanso7.png',price:'12.000.000',chatlieu:'acrylic',tonemau:'lạnh',detail:'asset/img/tranhtruutuong/sacxuanso7ct.png'},{picname:'bù nhìn',type:'tranh trừu tượng',imgsrc:'asset/img/tranhtruutuong/bunhin.png',price:'15.000.000',chatlieu:'sơn dầu',tonemau:'nóng',detail:'asset/img/tranhtruutuong/bunhinct.png'},{picname:'tiếng sáo gọi mùa',type:'tranh trừu tượng',imgsrc:'asset/img/tranhtruutuong/tiengsaogoimua.png',price:'9.000.000',chatlieu:'sơn dầu',tonemau:'nóng',detail:'asset/img/tranhtruutuong/tiengsaogoimuact.png'},{picname:'rừng khóc',type:'tranh trừu tượng',imgsrc:'asset/img/tranhtruutuong/rungkhoc.png',price:'9.000.000',chatlieu:'crylic',tonemau:'lạnh',detail:'asset/img/tranhtruutuong/rungkhocct.png'},{picname:'lỡ xuân thì',type:'tranh trừu tượng',imgsrc:'asset/img/tranhtruutuong/loxuanthi.png',price:'45.000.000',chatlieu:'sơn dầu',tonemau:'lạnh',detail:'asset/img/tranhtruutuong/loxuanthict.png'},{picname:'phố lên đèn',type:'tranh trừu tượng',imgsrc:'asset/img/tranhtruutuong/pholenden.png',price:'620.000.000',chatlieu:'sơn dầu',tonemau:'lạnh',detail:'asset/img/tranhtruutuong/pholendenct.png'}]));
//localStorage.setItem('tranhngua',JSON.stringify([{picname:'rong chơi',type:'tranh ngựa',imgsrc:'asset/img/tranhngua/rongchoi.png',price:'12.000.000',chatlieu:'sơn dầu',tonemau:'lạnh',detail:'asset/img/tranhngua/rongchoict.png'},{picname:'độc mã thảo nguyên',type:'tranh ngựa',imgsrc:'asset/img/tranhngua/docmathaonguyen.png',price:'9.000.000',chatlieu:'sơn dầu',tonemau:'nóng',detail:'asset/img/tranhngua/docmathaonguyenct.png'},{picname:'kề vai',type:'tranh ngựa',imgsrc:'asset/img/tranhngua/kevai.png',price:'10.000.000',chatlieu:'sơn dầu',tonemau:'lạnh',detail:'asset/img/tranhngua/kevaict.png'},{picname:'ngũ mã tranh châu',type:'tranh ngựa',imgsrc:'asset/img/tranhngua/ngumatranhchau.png',price:'10.000.000',chatlieu:'sơn dầu',tonemau:'nóng',detail:'asset/img/tranhngua/ngumatranhchauct.png'},{picname:'gia đình ngựa',type:'tranh ngựa',imgsrc:'asset/img/tranhngua/giadinhngua.png',price:'9.000.000',chatlieu:'sơn dầu',tonemau:'nóng',detail:'asset/img/tranhngua/giadinhnguact.png'},{picname:'hắc mã',type:'tranh ngựa',imgsrc:'asset/img/tranhngua/hacma.png',price:'7.000.000',chatlieu:'sơn dầu',tonemau:'nóng',detail:'asset/img/tranhngua/hacmact.png'},{picname:'bạch mã',type:'tranh ngựa',imgsrc:'asset/img/tranhngua/bachma.png',price:'18.000.000',chatlieu:'sơn dầu',tonemau:'nóng',detail:'asset/img/tranhngua/bachmact.png'},{picname:'phiêu du',type:'tranh ngựa',imgsrc:'asset/img/tranhngua/phieudu.png',price:'8.000.000',chatlieu:'sơn dầu',tonemau:'nóng',detail:'asset/img/tranhngua/phieuduct.png'},{picname:'kiêu hãnh',type:'tranh ngựa',imgsrc:'asset/img/tranhngua/kieuhanh.png',price:'6.000.000',chatlieu:'sơn dầu',tonemau:'nóng',detail:'asset/img/tranhngua/kieuhanhct.png'},{picname:'chuyện thảo nguyên',type:'tranh ngựa',imgsrc:'asset/img/tranhngua/chuyenthaonguyen.png',price:'7.000.000',chatlieu:'sơn dầu',tonemau:'nóng',detail:'asset/img/tranhngua/chuyenthaonguyenct.png'},{picname:'dấu chân phía trước',type:'tranh ngựa',imgsrc:'asset/img/tranhngua/dauchanphiatruoc.png',price:'10.000.000',chatlieu:'sơn dầu',tonemau:'nóng',detail:'asset/img/tranhngua/dauchanphiatruocct.png'},{picname:'thiên mã',type:'tranh ngựa',imgsrc:'asset/img/tranhngua/thienma.png',price:'9.000.000',chatlieu:'sơn dầu',tonemau:'nóng',detail:'asset/img/tranhngua/thienmact.png'}]));
var url ="" + document.location;
console.log(url);
arr=url.split('?');
var query = arr[1];
console.log(query);
var loginname = document.querySelector('.login_out');
for(var key in account){
    if(query==account[key].email){
        loginname.textContent=account[key].username;
    }
}
//trungbay
//canhbaodangnhap
function canhbaodangnhap(){
    document.querySelector('.warning').style.display="flex"
}
function removewarning(){
    document.querySelector('.warning').style.display="none"
}
// lay thong tin ng dung
const btnPopup =document.querySelector('.login_out');
const iconClose =document.querySelector('.icon-close-infor');
const log_out=document.querySelector('.dang_xuat');
btnPopup.addEventListener('click',function(){
    document.querySelector('.form_information').style.display="contents";
})

iconClose.addEventListener('click',()=>{
    document.querySelector('.form_information').style.display="none"
});
log_out.addEventListener('click',()=>{
    window.location.href="index.html";
});
//lay thong tin nguoi dung
var infor;
function get_infor(){
    
    for(var key in account){
        if(query===account[key].email){
            infor=account[key];
        }
    }
}
get_infor();
document.querySelector('.name_infor').innerHTML='<p class="name_infor">'+'TÊN   <p style="color:#fff">'+infor.username+'</p></p>';
document.querySelector('.email').innerHTML='<p class="email">'+'EMAIL  <p style="color:#fff"> '+infor.email+'</p></p>';
document.querySelector('.number_phone').innerHTML='<p class="number_phone">'+'SĐT  <p style="color:#fff">    '+infor.phonenumber+'</p></p>';
document.querySelector('.dia_chi').innerHTML='<p class="dia_chi">'+'ĐỊA CHỈ  <p style="color:#fff"> '+infor.address+'</p></p>';
;

//filter
function onfilter(){
    document.querySelector('.filter').style.display='flex';
}
function removefilter(){
    document.querySelector('.filter').style.display='none';
}
function reset(){
    document.querySelector("#typechoice form").reset();
    document.querySelector("#tonechoice form").reset();
    document.querySelector("#chatlieuchoice form").reset();
}
function filterspaging(){
    html="";
for(var key in filpic){
    if(key>=ftstart && key<ftend){
    html+='<div class="filters_box" onclick="onpicinfor(\''+filpic[key].imgsrc+'\')">'
    html+='<div class="filters_box_img">'
    html+='<img src="'+filpic[key].imgsrc+ '"alt="'+filpic[key].picname+'"style="width:264.52px;height:281.2px">'
    html+='</div>'
    html+='<div class="filters_box_content">'
    html+=' <h2 class="name">'+filpic[key].picname+'</h2>'
    html+='<p class="content">'+filpic[key].type+'</p>'
    html+='<p class="price">'+filpic[key].price+' đ</p>'
    html+='</div>'
    html+='</div>'
    }
}
document.querySelector('.filters_picture_content').innerHTML=html;
}
var filpic=[];
var ftperpage=8;
var fttotalpage=Math.ceil(filpic.length/ftperpage);
var ftcurrentpage=1;
var ftstart=0;
var ftend=ftperpage;
function Stringtoprice(a){
    var tach=a.split('.');
    return Number.parseFloat(tach[0])*1000000+Number.parseFloat(tach[1])*1000+Number.parseFloat(tach[2])
}
function filter(){
    filpic=[];
    var checksame=0;
    const types = document.getElementsByName("type_pic");
    const tones = document.getElementsByName("tone_pic");
    const chatlieus = document.getElementsByName("chatlieu_pic");
    filpic=pc.concat(th);filpic=filpic.concat(tt);filpic=filpic.concat(tn);filpic=filpic.concat(tv);
    console.log(document.querySelector('#downprice').value);
    if(document.querySelector('#downprice').value!=''){
        checksame=1;
            for(var i=0;i<filpic.length;i++){
                if(Stringtoprice(filpic[i].price)<Number.parseFloat(document.querySelector('#downprice').value)){
                    filpic.splice(i,1);
                    i=i-1;
                }
            }
    }
    if(document.querySelector('#upprice').value!=''){
        checksame=1;
            for(var i=0;i<filpic.length;i++){
                if(Stringtoprice(filpic[i].price)>Number.parseFloat(document.querySelector('#upprice').value)){
                    filpic.splice(i,1);
                    i=i-1;
                }
            }
    }
    for (const type of types) {
        if (type.checked) {
            checksame=1;
            for(var i=0;i<filpic.length;i++){
                if(filpic[i].type!=type.value){
                    filpic.splice(i,1);
                    i=i-1;
                }
            }
        }
      }
      for (const tone of tones) {
        if (tone.checked) {
            checksame=1;
            for(var i=0;i<filpic.length;i++){
                if(filpic[i].tonemau!=tone.value){
                    filpic.splice(i,1);
                    i=i-1;
                }
            }
        }
      }

      for (const chatlieu of chatlieus) {
        if (chatlieu.checked) {
            checksame=1;
            for(var i=0;i<filpic.length;i++){
                if(filpic[i].chatlieu!=chatlieu.value){
                    filpic.splice(i,1);
                    i=i-1;
                }
            }
        }
      }

      if(document.querySelector('#searchbar').value!=''){
        checksame=1;
        for(var i=0;i<filpic.length;i++){
            if(filpic[i].picname.toUpperCase().includes(document.querySelector('#searchbar').value.toUpperCase())==false){
                filpic.splice(i,1);
                i=i-1;
            }
        }
      }
      if(filpic.length==0||checksame==0){filpic.splice(0,filpic.length);}
     ftperpage=8;
     fttotalpage=Math.ceil(filpic.length/ftperpage);
     ftcurrentpage=1;
     ftstart=0;
    ftend=ftperpage;
    filterspaging();
    ftpagebutton="";
    for(i=0;i<fttotalpage;i++){
        ftpagebutton+= '<div class="pagebox '+ (i+1)+'" onclick=ftpaging('+(i+1)+')>'
        ftpagebutton+=i+1;
        ftpagebutton+='</div>'
    }     
    document.querySelector('.filters_picture_paging').innerHTML=ftpagebutton;
}

function ftpaging(i){
    ftcurrentpage=parseInt(i);
    ftstart=(ftcurrentpage-1)*ftperpage;
    ftend=ftcurrentpage*ftperpage;
    window.scrollTo(0, 0);
    filterspaging();
}
// live_show
let list=document.querySelector('.slider .list');
let items=document.querySelectorAll('.slider .list .item');
let dots=document.querySelectorAll('.slider .dots li');
let prev=document.getElementById('prev');
let next=document.getElementById('next');

let active=0;
let lengthItems=items.length-1;

next.onclick=function(){
    if(active+1>lengthItems){
        active=0;
    }else{
        active++;
    }
    reloadSlider();
}
prev.onclick=function(){
    if(active-1<0){
        active=lengthItems;
    }else{
        active--;
    }
    reloadSlider();
}
let refreshSlider=setInterval(()=>{next.click()}, 3000)
function reloadSlider() {
    let checkLeft=items[active].offsetLeft;
    list.style.left=-checkLeft+'px';

    let lastAtiveDot=document.querySelector('.slider .dots li.active');
    lastAtiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider=setInterval(()=>{next.click()}, 3000)
}
dots.forEach((li, key)=>{
    li.addEventListener('click', function(){
        active=key;
        reloadSlider();
    })
})

// chuyen trang thong tin
function movepage(a){
    var page = ['.main_home','.recruitment','.contact','.introduce','.cooperate-main','.landscape_picture_wrapper','.flower_picture_wrapper','.still_picture_wrapper','.abstract_picture_wrapper','.horse_picture_wrapper','.filters_picture_wrapper','#shopping-mall-wrapper'];
    for(var value of page){
        if(a==value){
            document.querySelector(value).style.display="contents";
        }
        else{
            document.querySelector(value).style.display="none";
        }
    }
}


const hoptac=document.querySelector(".hoptac");
hoptac.addEventListener('click',()=>{
    movepage('.cooperate-main');
});
const tuyendung=document.querySelector(".tuyendung");
tuyendung.addEventListener('click',()=>{
    movepage('.recruitment');
});
const lienhe=document.querySelector(".lienhe");
lienhe.addEventListener('click',()=>{
    movepage('.contact');
});
const gioithieu=document.querySelector(".gioithieu");
gioithieu.addEventListener('click',()=>{
   movepage('.introduce');
});
const phongcanh=document.querySelector(".phongcanh");
phongcanh.addEventListener('click',()=>{
    movepage('.landscape_picture_wrapper');
 });

 const tranhhoa=document.querySelector(".tranhhoa");
tranhhoa.addEventListener('click',()=>{
    movepage('.flower_picture_wrapper');
 });

 const tinhvat =document.querySelector(".tinhvat");
 tinhvat.addEventListener('click',()=>{
     movepage('.still_picture_wrapper');
  });

  const truutuong =document.querySelector(".truutuong");
  truutuong.addEventListener('click',()=>{
      movepage('.abstract_picture_wrapper');
   });

   const tranhngua =document.querySelector(".tranhngua");
   tranhngua.addEventListener('click',()=>{
       movepage('.horse_picture_wrapper');
    });

    const timkiem =document.querySelector(".fa-search");
    timkiem.addEventListener('click',()=>{
        movepage('.filters_picture_wrapper');
     });

     const shopping =document.querySelector(".shopping");
     shopping.addEventListener('click',()=>{
         movepage('#shopping-mall-wrapper');
         listshopping();
         
      });
      function listshopping(){
        var account= JSON.parse(localStorage.getItem('account'));
        var giohang = ''
         for(value in account){
            if(account[value].email==query){
                if(account[value].shopping.length==0){
                    giohang+='<tr>không có sản phẩm nào</tr>'
                    document.querySelector('#giohang table').innerHTML=giohang
                }
                else{
                giohang+=' <tr>'
                giohang+= '<th>ảnh</th>'
                giohang+='<th>sản phẩm</th>'
                giohang+='<th>giá</th>'
                giohang+='<th>số lượng</th>'
                giohang+='<th>tổng</th>'
                giohang+='<th>xóa</th>'
                giohang+=' </tr>'
                i=0;
                s=0;
                for(var shopcount in account[value].shopping){
                    giohang+='<tr>'
                    giohang+='<th><img src="'+account[value].shopping[shopcount].src+'" alt="pdt"style="height:88.173px;width: 88.173px;padding-top:5px;border-radius:20px"></th>'
                    giohang+='<th>'+account[value].shopping[shopcount].namepic+'</th>'
                    giohang+='<th>'+account[value].shopping[shopcount].pricepic+'đ</th>'
                    giohang+='<th><div id="quantity"><div id="downquantity" onclick="downquantity('+i+')"style="font-size: 25px;">-</div><div style="font-size: 25px;" id="quantityvalue">'+account[value].shopping[shopcount].quantity+'</div><div style="font-size: 25px;" id="upquantity" onclick="upquantity('+i+')">+</div></div></th>'
                    s=s+(Stringtoprice(account[value].shopping[shopcount].pricepic)*account[value].shopping[shopcount].quantity)
                    giohang+='<th>'+pricetodata((Stringtoprice(account[value].shopping[shopcount].pricepic)*account[value].shopping[shopcount].quantity).toString())+'đ</th>'
                    giohang+=' <th class="removequantity" onclick=removequantity('+i+')>xóa</th>'
                    giohang+='</tr>'
                    i++;
                }
                giohang+='<tr>'
                giohang+='<th></th>'
                giohang+='<th></th>'
                giohang+='<th></th>'
                giohang+='<th>tổng thành tiền</th>'
                giohang+='<th>'+pricetodata(s.toString())+'đ</th>'
                document.querySelector('#giohang table').innerHTML=giohang
                }
                var donhang=''
                
                for(key in account[value].bill){
                    var s=0;
                    donhang+='<div style="padding-top:10px;width:80%;border: #1A4185 1px solid; justify-content: space-between;font-family:\'SVN-HC Calvous\' ;color:aliceblue;display: flex;background-color: #BD2C13;border-radius: 20px; padding: 20px;height: auto;width:100%">'
                    donhang+='<div style="width:25%">'
                    for(listitem of account[value].bill[key].list){
                        donhang+=listitem.picname+' / số lượng: '+listitem.quantity+'<br>';
                        s=s+(Stringtoprice(listitem.price)*listitem.quantity);
                    }
                    donhang+='</div>'
                    donhang+='<div style="width:25%">'+pricetodata(s.toString())+'đ</div>'
                    donhang+='<div style="width:25%">'+account[value].bill[key].date+'</div>'
                    donhang+='<div >'+account[value].bill[key].status+'</div>'
                    donhang+='</div>'
                }
                document.querySelector('#donhang').innerHTML=donhang
            }
        }
      }
      function removequantity(a){
        var account= JSON.parse(localStorage.getItem('account'));
        var result=confirm('bạn có chắc chắn muốn xóa')
        if(result){
        for(value in account){
            if(account[value].email==query){
                account[value].shopping.splice(a,1);
                localStorage.setItem('account',JSON.stringify(account));
                var account= JSON.parse(localStorage.getItem('account'));
                listshopping();
            }
        }
    }
      }
      function downquantity(a){
        var account= JSON.parse(localStorage.getItem('account'));
        for(value in account){
            if(account[value].email==query){
                if(account[value].shopping[a].quantity==1){
                    alert("1 là tối thiểu")
                    return false;
                }
                // Number.parseInt(account[value].shopping[a].quantity)++;
                account[value].shopping[a].quantity= (Number.parseInt(account[value].shopping[a].quantity)-1);
                localStorage.setItem('account',JSON.stringify(account));
                var account= JSON.parse(localStorage.getItem('account'));
                listshopping();
            }
        }
      }

      function upquantity(a){
        var account= JSON.parse(localStorage.getItem('account'));
        for(value in account){
            if(account[value].email==query){
                // Number.parseInt(account[value].shopping[a].quantity)++;
                account[value].shopping[a].quantity= (Number.parseInt(account[value].shopping[a].quantity)+1);
                localStorage.setItem('account',JSON.stringify(account));
                var account= JSON.parse(localStorage.getItem('account'));
                listshopping();
            }
        }
      }
      var sphtml=""
      var i=0;

function pricetodata(a){
    if(a.length==7){
         return a.slice(0, 1) + "." + a.slice(1,4)+"."+a.slice(4,8);
    }
    if(a.length==8){
        return a.slice(0, 2) + "." + a.slice(2,5)+"."+a.slice(5,9);
    }
   if(a.length==9){
    return a.slice(0, 3) + "." + a.slice(3,6)+"."+a.slice(6,10);
}
if(a.length==10){
    return  a.slice(0, 1) + "."+a.slice(1, 4) + "." + a.slice(4,7)+"."+a.slice(7,10);
}
if(a.length==11){
    return  a.slice(0, 2) + "."+a.slice(2, 5) + "." + a.slice(5,8)+"."+a.slice(8,11);
}
if(a.length==12){
    return a.slice(0, 3) + "." + a.slice(3,6)+"."+a.slice(6,9)+"."+a.slice(9,12);
}   
}
function submitbill(){
    var result=confirm('bạn có chắc chắn đặt hàng')
    if(result){
    var account= JSON.parse(localStorage.getItem('account'));
    var a=[]
    for(var key in account){
        if(query==account[key].email){
            if(account[key].shopping.length==0){
                alert("không có sản phẩm")
                return false;
            }
            for(var value=0; value<account[key].shopping.length;value++){
                a.push({picname:account[key].shopping[value].namepic,quantity: account[key].shopping[value].quantity,price:pricetodata((Stringtoprice(account[key].shopping[value].pricepic)*account[key].shopping[value].quantity).toString())})
                console.log(a[value])
                account[key].shopping.splice(value,1);
                value--;
            }
            var date=new Date();
            const formattedDate = date.toLocaleDateString("en-US", {
                day: "numeric",
                month: "numeric",
                year: "numeric",
              });
    account[key].bill.push({list:a,status:'chưa xử lý',date:formattedDate});
    localStorage.setItem('account',JSON.stringify(account));
    listshopping();
    window.scrollTo(0, 0);
    alert("đã đặt hàng thành công")
        }
    }
}
        
    
}

function removebill(){
    var index;
    for(var key in account){
        if(query==account[key].email){
            index=key;
        }
    }
    const result=confirm("bạn có chắc chắn muốn hủy các đơn này");
    if(result){
    var count=0;
    checksame=0;
    var list=document.getElementsByName("removelist");
    for(var i=0;i<list.length;i++){
        if(list[i].checked){
            console.log(account[index].bill[count])
            account[index].bill.splice(count,1);
            checksame=1;
            count-- ;      
        }
        else count++;
    }
    localStorage.setItem('account',JSON.stringify(account));
    if(checksame==0){
        alert("bạn chưa tích vào đơn hàng nào");
    }
    else{
        location.reload();
        window.scrollTo(0, 0);
        alert("bạn đã hủy đơn hàng thành công")
    }
}
}
var count=1;
var sphtml=""

// danh muc san pham
//phongcanh
var pc= JSON.parse(localStorage.getItem('phongcanh'));
var pcperpage=8;
const pctotalpage=Math.ceil(pc.length/pcperpage);
var pccurrentpage=1;
var pcstart=0;
var pcend=pcperpage;
pcpagebutton="";
for(i=0;i<pctotalpage;i++){
    pcpagebutton+= '<div class="pagebox '+ (i+1)+'" onclick=pcpaging('+(i+1)+')>'
    pcpagebutton+=i+1;
    pcpagebutton+='</div>'
}     
document.querySelector('.landscape_picture_paging').innerHTML=pcpagebutton;
function landscapepaging(){
    html="";
for(var key in pc){
    if(key>=pcstart && key<pcend){
    html+='<div class="landscape_box" name="'+pc[key].imgsrc+'" onclick="onpicinfor(\''+pc[key].imgsrc+'\')">'
    html+='<div class="landscape_box_img">'
    html+='<img src="'+pc[key].imgsrc+ '"alt="'+pc[key].picname+'"style="width:264.52px;height:281.2px">'
    html+='</div>'
    html+='<div class="landscape_box_content">'
    html+=' <h2 class="name">'+pc[key].picname+'</h2>'
    html+='<p class="content">'+pc[key].type+'</p>'
    html+='<p class="price">'+pc[key].price+' đ</p>'
    html+='</div>'
    html+='</div>'
    }
}
document.querySelector('.landscape_picture_content').innerHTML=html;
}
landscapepaging();
function pcpaging(i){
    pccurrentpage=parseInt(i);
    pcstart=(pccurrentpage-1)*pcperpage;
    pcend=pccurrentpage*pcperpage;
    window.scrollTo(0, 0);
    landscapepaging();
}

//tranhhoa
var th= JSON.parse(localStorage.getItem('tranhhoa'));
var thperpage=8;
const thtotalpage=Math.ceil(th.length/thperpage);
var thcurrentpage=1;
var thstart=0;
var thend=thperpage;
thpagebutton="";
for(i=0;i<thtotalpage;i++){
    thpagebutton+= '<div class="pagebox '+ (i+1)+'" onclick=thpaging('+(i+1)+')>'
    thpagebutton+=i+1;
    thpagebutton+='</div>'
}     
document.querySelector('.flower_picture_paging').innerHTML=thpagebutton;
function flowerpaging(){
    html="";
for(var key in th){
    if(key>=thstart && key<thend){
    html+='<div class="flower_box" onclick="onpicinfor(\''+th[key].imgsrc+'\')">'
    html+='<div class="flower_box_img">'
    html+='<img src="'+th[key].imgsrc+ '"alt="'+th[key].picname+'"style="width:264.52px;height:281.2px">'
    html+='</div>'
    html+='<div class="flower_box_content">'
    html+=' <h2 class="name">'+th[key].picname+'</h2>'
    html+='<p class="content">'+th[key].type+'</p>'
    html+='<p class="price">'+th[key].price+' đ</p>'
    html+='</div>'
    html+='</div>'
    }
}
document.querySelector('.flower_picture_content').innerHTML=html;
}
flowerpaging();
function thpaging(i){
    thcurrentpage=parseInt(i);
    thstart=(thcurrentpage-1)*thperpage;
    thend=thcurrentpage*thperpage;
    window.scrollTo(0, 0);
    flowerpaging();
}

//tinhvat
var tv= JSON.parse(localStorage.getItem('tinhvat'));
var tvperpage=8;
const tvtotalpage=Math.ceil(tv.length/tvperpage);
var tvcurrentpage=1;
var tvstart=0;
var tvend=tvperpage;
tvpagebutton="";
for(i=0;i<tvtotalpage;i++){
    tvpagebutton+= '<div class="pagebox '+ (i+1)+'" onclick=tvpaging('+(i+1)+')>'
    tvpagebutton+=i+1;
    tvpagebutton+='</div>'
}     
document.querySelector('.still_picture_paging').innerHTML=tvpagebutton;
function stillpaging(){
    html="";
for(var key in tv){
    if(key>=tvstart && key<tvend){
    html+='<div class="still_box" onclick="onpicinfor(\''+tv[key].imgsrc+'\')">'
    html+='<div class="still_box_img">'
    html+='<img src="'+tv[key].imgsrc+ '"alt="'+tv[key].picname+'"style="width:264.52px;height:281.2px">'
    html+='</div>'
    html+='<div class="still_box_content">'
    html+=' <h2 class="name">'+tv[key].picname+'</h2>'
    html+='<p class="content">'+tv[key].type+'</p>'
    html+='<p class="price">'+tv[key].price+' đ</p>'
    html+='</div>'
    html+='</div>'
    }
}
document.querySelector('.still_picture_content').innerHTML=html;
}
stillpaging();
function tvpaging(i){
    tvcurrentpage=parseInt(i);
    tvstart=(tvcurrentpage-1)*tvperpage;
    tvend=tvcurrentpage*tvperpage;
    window.scrollTo(0, 0);
    stillpaging();
}

//truu tuong
var tt= JSON.parse(localStorage.getItem('truutuong'));
var ttperpage=8;
const tttotalpage=Math.ceil(tt.length/ttperpage);
var ttcurrentpage=1;
var ttstart=0;
var ttend=ttperpage;
ttpagebutton="";
for(i=0;i<tttotalpage;i++){
    ttpagebutton+= '<div class="pagebox '+ (i+1)+'" onclick=ttpaging('+(i+1)+')>'
    ttpagebutton+=i+1;
    ttpagebutton+='</div>'
}     
document.querySelector('.abstract_picture_paging').innerHTML=ttpagebutton;
function abstractpaging(){
    html="";
for(var key in tt){
    if(key>=ttstart && key<ttend){
    html+='<div class="abstract_box" onclick="onpicinfor(\''+tt[key].imgsrc+'\')">'
    html+='<div class="abstract_box_img">'
    html+='<img src="'+tt[key].imgsrc+ '"alt="'+tt[key].picname+'"style="width:264.52px;height:281.2px">'
    html+='</div>'
    html+='<div class="abstract_box_content">'
    html+=' <h2 class="name">'+tt[key].picname+'</h2>'
    html+='<p class="content">'+tt[key].type+'</p>'
    html+='<p class="price">'+tt[key].price+' đ</p>'
    html+='</div>'
    html+='</div>'
    }
}
document.querySelector('.abstract_picture_content').innerHTML=html;
}
abstractpaging();
function ttpaging(i){
    ttcurrentpage=parseInt(i);
    ttstart=(ttcurrentpage-1)*ttperpage;
    ttend=ttcurrentpage*ttperpage;
    window.scrollTo(0, 0);
    abstractpaging();
}

//tranhngua
var tn= JSON.parse(localStorage.getItem('tranhngua'));
var tnperpage=8;
const tntotalpage=Math.ceil(tn.length/tnperpage);
var tncurrentpage=1;
var tnstart=0;
var tnend=tnperpage;
tnpagebutton="";
for(i=0;i<tntotalpage;i++){
    tnpagebutton+= '<div class="pagebox '+ (i+1)+'" onclick=tnpaging('+(i+1)+')>'
    tnpagebutton+=i+1;
    tnpagebutton+='</div>'
}     
document.querySelector('.horse_picture_paging').innerHTML=tnpagebutton;
function horsepaging(){
    html="";
for(var key in tn){
    if(key>=tnstart && key<tnend){
    html+='<div class="horse_box" onclick="onpicinfor(\''+tn[key].imgsrc+'\')">'
    html+='<div class="horse_box_img">'
    html+='<img src="'+tn[key].imgsrc+ '"alt="'+tn[key].picname+'"style="width:264.52px;height:281.2px">'
    html+='</div>'
    html+='<div class="horse_box_content">'
    html+=' <h2 class="name">'+tn[key].picname+'</h2>'
    html+='<p class="content">'+tn[key].type+'</p>'
    html+='<p class="price">'+tn[key].price+' đ</p>'
    html+='</div>'
    html+='</div>'
    }
}
document.querySelector('.horse_picture_content').innerHTML=html;
}
horsepaging();
function tnpaging(i){
    tncurrentpage=parseInt(i);
    tnstart=(tncurrentpage-1)*tnperpage;
    tnend=tncurrentpage*tnperpage;
    window.scrollTo(0, 0);
    horsepaging();
}

//chitietsanpham

const iconClose_info_img =document.querySelector('.icon-close-infor_img');

iconClose_info_img.addEventListener('click',()=>{
    document.querySelector('.picture_information').style.display="none"
});
function onpicinfor(a){
    var listpic=pc.concat(th);listpic=listpic.concat(tt);listpic=listpic.concat(tn);listpic=listpic.concat(tv);
    for(value of listpic ){
        if(a==value.imgsrc){
            document.querySelector('.picture_infor-box-img img').src=value.detail;
            document.querySelector('.picture_infor-box-title h1').textContent=value.picname;
            document.querySelector('#inforname h4').textContent=value.type;
            document.querySelector('#infortone h4').textContent=value.tonemau;
            document.querySelector('#inforchatlieu h4').textContent=value.chatlieu;
            document.querySelector('#inforprice h2').textContent=value.price+'đ';
            document.querySelector('.picture_information').style.display="flex";
        }
    }
}
function removesubmitmall(){
    document.querySelector('.submitmall').style.display="none";
}
function submitmall(a){
    var account= JSON.parse(localStorage.getItem('account'));
    for(value of account){
        if(value.email==query){
            for(listshop of value.shopping)
            {
                if(document.querySelector('.picture_infor-box-title h1').textContent==listshop.namepic)
                {
                    alert("bạn đã thêm giỏ hàng rồi")
                    return false;
                }
            }
        }
    }
    document.querySelector('.submitmall').style.display="flex";
}
function nosubmit(){
    document.querySelector('.submitmall').style.display="none";
}

function yessubmit(){
    var account= JSON.parse(localStorage.getItem('account'));
    document.querySelector('.submitmall').style.display="none";
    var listpic=pc.concat(th);listpic=listpic.concat(tt);listpic=listpic.concat(tn);listpic=listpic.concat(tv);
    var a;
    var b;
    var c;
    for(value of listpic){
        if(document.querySelector('.picture_infor-box-title h1').textContent==value.picname){
            a=value.imgsrc;
            b=value.picname;
            c=value.price;
            var date=new Date();
            const formattedDate = date.toLocaleDateString("en-US", {
                day: "numeric",
                month: "numeric",
                year: "numeric",
              });
              var totalprice=c
            var d={src:a,namepic:b,pricepic:c,status:'chưa xử lí',date:formattedDate,quantity:1};
            for(key in account){
                if(account[key].email==infor.email){
                    account[key].shopping.push(d);
                    localStorage.setItem('account',JSON.stringify(account));
                }
            }
        }
    }
    alert('đã thêm vào giỏ hàng')
    window.scrollTo(0, 0);
    // location.reload();
    document.querySelector('.picture_information').style.display="none"
}

