

function logout(){
     window.location.href="index.html";
 }

function pricetodata(a){
    if(a.length==1){
        return a.slice(0,1);
    }
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



function Stringtoprice(a){
    var tach=a.split('.');
    return Number.parseFloat(tach[0])*1000000+Number.parseFloat(tach[1])*1000+Number.parseFloat(tach[2])
}

var pc= JSON.parse(localStorage.getItem('phongcanh'));
var th= JSON.parse(localStorage.getItem('tranhhoa'));
var tv= JSON.parse(localStorage.getItem('tinhvat'));
var tt= JSON.parse(localStorage.getItem('truutuong'));
var tn= JSON.parse(localStorage.getItem('tranhngua'));
filpic=pc.concat(th);filpic=filpic.concat(tt);filpic=filpic.concat(tn);filpic=filpic.concat(tv);
var perpage=8;
var totalpage=Math.ceil(filpic.length/perpage);
var currentpage=1;
var start=0;
var end=perpage;
function moveto(a){
    var page=['.main_home','.landscape_manage','.donhang_manage'];
    for(var value of page){
        if(a==value){
            document.querySelector(value).style.display="contents";
        }
        else{
            document.querySelector(value).style.display="none";
        }
    }
     
    list(filpic);   
}

function billlist(a){
    var page=['.main_home','.landscape_manage','.donhang_manage'];
    for(var value of page){
        if(a==value){
            document.querySelector(value).style.display="contents";
        }
        else{
            document.querySelector(value).style.display="none";
        }
    }
    var account= JSON.parse(localStorage.getItem('account'));
    listbill(account);
}
const iconClose =document.querySelector('.icon-close-infor');
iconClose.addEventListener('click',()=>{
    document.querySelector('.form_information').style.display="none"
});
function listbill(a){
   account=a;
    var html=''
    html+='<tr>'
    html+='<td>ngày</td>'
    html+=' <td>khách hàng</td>'
    html+='<td>chi tiết</td>'
    html+=' <td>giá</td>'
    html+='<td>trạng thái</td>'
    html+=' </tr>'
    for(key in account){
        for(value in account[key].bill){
        var s=0;
        html+='<tr>'
        html+='<td>'+account[key].bill[value].date+'</td>'
        html+='<td class="customername" onclick="information(\''+account[key].username+'\')">'+account[key].username+'</td>'
        html+='<td>'
        for(key2 of account[key].bill[value].list){
            html+= key2.picname+' / số lượng: '+key2.quantity+'<br>'
            s=s+(Stringtoprice(key2.price)*key2.quantity);
        }
        html+='<td class="picprice">'+pricetodata(s.toString())+'đ</td>'
        if(account[key].bill[value].status=='đã xử lí')html+='<td class="static">'+account[key].bill[value].status+'</td>'
        else html+='<td class="static" onclick="statused(\''+account[key].username+'\','+Number.parseInt(value)+')">'+account[key].bill[value].status+'</td>'
        html+='</tr>'
        }
    }
    document.querySelector('.piccontent1donhang table').innerHTML=html;
}
function information(a){
    document.querySelector('.form_information').style.display="flex";
    var account= JSON.parse(localStorage.getItem('account'));
    for(value of account){
        if(a==value.username){
            document.querySelector('.name_infor').innerHTML='<p class="name_infor">'+'TÊN   <p style="color:#fff">'+value.username+'</p></p>';
document.querySelector('.email').innerHTML='<p class="email">'+'EMAIL  <p style="color:#fff"> '+value.email+'</p></p>';
document.querySelector('.number_phone').innerHTML='<p class="number_phone">'+'SĐT  <p style="color:#fff">    '+value.phonenumber+'</p></p>';
document.querySelector('.dia_chi').innerHTML='<p class="dia_chi">'+'ĐỊA CHỈ  <p style="color:#fff"> '+value.address+'</p></p>';
        }
    }
}

function statused(a,b){
    var account= JSON.parse(localStorage.getItem('account'));
    var result=confirm('bạn có muốn đánh dấu đơn hàng đã xử lí')
    if(result){
    for(value in account){
        if(a==account[value].username){
            account[value].bill[b].status="đã xử lí";
            break;
        }
    }
    localStorage.setItem('account',JSON.stringify(account));
    listbill(account);
    }
}

 function findbill(){
    var account= JSON.parse(localStorage.getItem('account'));
    var downdate=document.getElementById('downdate').value
    var update=document.getElementById('update').value
    var date1 = new Date(downdate)
    var date2 = new Date(update)
    for(value in account){
        for(var key=0;key< account[value].bill.length;key++){
            var date = new Date(account[value].bill[key].date)
            if(date<date1||date>date2){
                account[value].bill.splice(key,1);
                key--;
            }    
        }
    }
    for(value in account){
        for(var key=0;key< account[value].bill.length;key++){
            if(document.getElementById("statusfind").value!='all'){
                if(document.getElementById("statusfind").value!=account[value].bill[key].status)
                {
                    account[value].bill.splice(key,1);
                key--;
                }
            }
        }
    }
    
   
    listbill(account)
}
function resetbill(){
    var account= JSON.parse(localStorage.getItem('account'));
    document.getElementById('downdate').value=''
    document.getElementById('update').value=''
    document.getElementById('statusfind').value='all'
    listbill(account)
}
function list(a){
    pagebutton=""
    if(a.length==0){
        var pagebutton='không có sản phẩm yêu cầu';
        document.querySelector('.picture_paging').innerHTML=pagebutton;
    }     
    else{
    for(i=0;i<Math.ceil(a.length/perpage);i++){
        pagebutton+= '<div class="pagebox '+ (i+1)+'" onclick=paging('+(i+1)+')>'
        pagebutton+=i+1;
        pagebutton+='</div>'
    }     
    document.querySelector('.picture_paging').innerHTML=pagebutton;
    }
    var html="";
    html+='<tr>'
    html+='<td>stt</td>'
    html+=' <td>tên</td>'
    html+='<td>hình ảnh</td>'
    html+=' <td>giá</td>'
    html+='<td>chi tiết</td>'
    html+=' <td>sửa xóa</td>'
    html+=' </tr>'
    for(key in a){
        if(key>=start && key<end)
        {
            html+='<tr>'
            html+='<td>'+(parseInt(key)+1)+'</td>'
            html+='<td class="picname">'+a[key].picname+'</td>'
            html+='<td><div class="headlist pic"><img src="'+a[key].imgsrc+'" alt="pdt"style="height:88.173px;width: 88.173px;padding-top:5px;border-radius:20px"></div></td>'
            html+='<td class="picprice">'+a[key].price+'đ</td>'
            html+='<td class="pictonematerial">tone màu: '+a[key].tonemau+'<br>tranh '+a[key].chatlieu+'<br>'+a[key].type+'</td>'
            html+=' <td><div class="refixpic" onclick="fix(\''+a[key].picname+'\',\''+a[key].type+'\')" >sửa</div><div class="refixpic" onclick="remove(\''+a[key].picname+'\',\''+a[key].type+'\')">xóa</div></td>'
            html+='</tr>'
        }
    }
    document.querySelector('.piccontent1 table').innerHTML=html;
   
}


function paging(a){
    perpage=8;
    currentpage=a;
    start=(currentpage-1)*perpage;
    end=currentpage*perpage;
    window.scrollTo(0, 0);
    list(filpic);
}

//find

function find(){
    start=0;
    end=perpage;
    var pc= JSON.parse(localStorage.getItem('phongcanh'));
    var th= JSON.parse(localStorage.getItem('tranhhoa'));
    var tv= JSON.parse(localStorage.getItem('tinhvat'));
    var tt= JSON.parse(localStorage.getItem('truutuong'));
    var tn= JSON.parse(localStorage.getItem('tranhngua'));
    filpic=pc.concat(th);filpic=filpic.concat(tt);filpic=filpic.concat(tn);filpic=filpic.concat(tv);
    var namefind = document.getElementById("findname");
    var pricemin = document.getElementById("minprice");
    var pricemax = document.getElementById("maxprice");
    var findtype = document.getElementById("typefind");
    var findtone = document.getElementById("tonefind");
    var findmaterial = document.getElementById("materialfind");
    if(namefind.value!=''){
        for(var i=0;i<filpic.length;i++){
            if(filpic[i].picname.toUpperCase().includes(namefind.value.toUpperCase())==false) {filpic.splice(i,1);
                i--;}
        }
    }
    if(pricemin.value!=''){
        for(var i=0;i<filpic.length;i++){
            if(Stringtoprice(filpic[i].price)<Number.parseFloat(pricemin.value)) {filpic.splice(i,1);
                i--;}
        }
    }
    if(pricemax.value!=''){
        for(var i=0;i<filpic.length;i++){
            if(Stringtoprice(filpic[i].price)>Number.parseFloat(pricemax.value)) {filpic.splice(i,1);
                i--;}
        }
    }
    if(findtype.value!='all'){
        for(var i=0;i<filpic.length;i++){
            if(filpic[i].type!=findtype.value) {filpic.splice(i,1);
                i--;}
        }
    }
    if(findtone.value!='all'){
        for(var i=0;i<filpic.length;i++){
            if(filpic[i].tonemau!=findtone.value) {filpic.splice(i,1);
                i--;}
        }
    }
    if(findmaterial.value!='all'){
        for(var i=0;i<filpic.length;i++){
            if(filpic[i].chatlieu!=findmaterial.value) {filpic.splice(i,1);
                i--;}
        }
    }
    list(filpic);
}

function reset(){
    var pc= JSON.parse(localStorage.getItem('phongcanh'));
    var th= JSON.parse(localStorage.getItem('tranhhoa'));
    var tv= JSON.parse(localStorage.getItem('tinhvat'));
    var tt= JSON.parse(localStorage.getItem('truutuong'));
    var tn= JSON.parse(localStorage.getItem('tranhngua'));
    filpic=pc.concat(th);filpic=filpic.concat(tt);filpic=filpic.concat(tn);filpic=filpic.concat(tv);
    document.getElementById("findname").value='';
    document.getElementById("minprice").value='';
    document.getElementById("maxprice").value='';
    document.getElementById("typefind").value='all';
    document.getElementById("tonefind").value='all';
    document.getElementById("materialfind").value='all';
    list(filpic);
}

 var img= document.getElementById('imgcreate');
 var input= document.getElementById('createpic');
var ctdataimg;
 var dataimg
 input.onchange=(e)=>{
    if(input.value==''){
        img.src='asset/img/img.png';
    }
    else{
    const reader = new FileReader;
    reader.addEventListener("load",() =>{
        dataimg=reader.result;
    });
     reader.readAsDataURL(input.files[0]);
    if(input.files[0])
        img.src=URL.createObjectURL(input.files[0]);
}
 };

 var imgct= document.getElementById('imgctcreate');
var inputct= document.getElementById('createpicct');

inputct.onchange=(e)=>{
    if(inputct.value==''){
        imgct.src='asset/img/imgct.png';
    }
    {
    const reader = new FileReader; 
    reader.addEventListener("load",() =>{
        ctdataimg=reader.result;
    });
    reader.readAsDataURL(inputct.files[0]);
    if(inputct.files[0])
        imgct.src=URL.createObjectURL(inputct.files[0]);
}
};

function addon(){
    var pc= JSON.parse(localStorage.getItem('phongcanh'));
    var th= JSON.parse(localStorage.getItem('tranhhoa'));
    var tv= JSON.parse(localStorage.getItem('tinhvat'));
    var tt= JSON.parse(localStorage.getItem('truutuong'));
    var tn= JSON.parse(localStorage.getItem('tranhngua'));
    var namecreate = document.getElementById("createname");
    var pricecreate = document.getElementById("createprice");
    var createtype = document.getElementById("typecreate");
    var createtone = document.getElementById("tonecreate");
    var creatematerial = document.getElementById("materialcreate");
        if(namecreate.value==''||inputct.value==''||input.value==''||pricecreate.value==''||createtype.value==''||createtone.value==''||creatematerial.value==''){
            alert('chưa thêm đầy đủ thông tin!!');
            return false;
        }
        else if(Number.parseFloat(pricecreate.value)<1000000||Number.parseFloat(pricecreate.value)>999999999999){
            alert('giá trị tối thiểu là 1.000.000 và tối đa là 999.999.999.999');
            return false;
        }
        if(createtype.value=='tranh phong cảnh'){
            for(value of pc){
                if(namecreate.value==value.picname){
                    alert('tên sản phẩm đã tồn tại');
                    return false;
                }
            }
            pc.push({picname :namecreate.value  ,detail : ctdataimg ,imgsrc : dataimg,price : pricetodata(pricecreate.value),chatlieu : creatematerial.value , tonemau : createtone.value ,type : createtype.value})
            console.log(pc);
            filpic=pc.concat(th);filpic=filpic.concat(tt);filpic=filpic.concat(tn);filpic=filpic.concat(tv);
            localStorage.setItem('phongcanh',JSON.stringify(pc));
            find()
            alert('thêm thành công')
            window.scrollTo(0, 0);
            resetcreate();
        }

        if(createtype.value=='tranh trừu tượng'){
            for(value of tt){
                if(namecreate.value==value.picname){
                    alert('tên sản phẩm đã tồn tại');
                    return false;
                }
            }
            tt.push({picname :namecreate.value  ,detail : ctdataimg ,imgsrc : dataimg,price : pricetodata(pricecreate.value),chatlieu : creatematerial.value , tonemau : createtone.value ,type : createtype.value})
            filpic=pc.concat(th);filpic=filpic.concat(tt);filpic=filpic.concat(tn);filpic=filpic.concat(tv);
            localStorage.setItem('truutuong',JSON.stringify(tt));
            find()
            alert('thêm thành công');
            window.scrollTo(0, 0);
            resetcreate();
        }

        if(createtype.value=='tranh hoa'){
            for(value of th){
                if(namecreate.value==value.picname){
                    alert('tên sản phẩm đã tồn tại');
                    return false;
                }
            }
            th.push({picname :namecreate.value  ,detail : ctdataimg ,imgsrc : dataimg,price : pricetodata(pricecreate.value),chatlieu : creatematerial.value , tonemau : createtone.value ,type : createtype.value})
            filpic=pc.concat(th);filpic=filpic.concat(tt);filpic=filpic.concat(tn);filpic=filpic.concat(tv);
            localStorage.setItem('tranhhoa',JSON.stringify(th));
            find()
            alert('thêm thành công');
            window.scrollTo(0, 0);
            resetcreate();
        }

        if(createtype.value=='tranh ngựa'){
            for(value of tn){
                if(namecreate.value==value.picname){
                    alert('tên sản phẩm đã tồn tại');
                    return false;
                }
            }
            tn.push({picname :namecreate.value  ,detail : ctdataimg ,imgsrc : dataimg,price : pricetodata(pricecreate.value),chatlieu : creatematerial.value , tonemau : createtone.value ,type : createtype.value})
            filpic=pc.concat(th);filpic=filpic.concat(tt);filpic=filpic.concat(tn);filpic=filpic.concat(tv);
            localStorage.setItem('tranhngua',JSON.stringify(tn));
            find()
            alert('thêm thành công');
            window.scrollTo(0, 0);
            resetcreate();
        }

        if(createtype.value=='tranh tĩnh vật'){
            for(value of tv){
                if(namecreate.value==value.picname){
                    alert('tên sản phẩm đã tồn tại');
                    return false;
                }
            }
            tv.push({picname :namecreate.value  ,detail : ctdataimg ,imgsrc : dataimg,price : pricetodata(pricecreate.value),chatlieu : creatematerial.value , tonemau : createtone.value ,type : createtype.value})
            filpic=pc.concat(th);filpic=filpic.concat(tt);filpic=filpic.concat(tn);filpic=filpic.concat(tv);
            localStorage.setItem('tinhvat',JSON.stringify(tv));
            find()
            alert('thêm thành công');
            window.scrollTo(0, 0);
            resetcreate();
        }

    }

    function resetcreate(){
        var pc= JSON.parse(localStorage.getItem('phongcanh'));
    var th= JSON.parse(localStorage.getItem('tranhhoa'));
    var tv= JSON.parse(localStorage.getItem('tinhvat'));
    var tt= JSON.parse(localStorage.getItem('truutuong'));
    var tn= JSON.parse(localStorage.getItem('tranhngua'));
    var namecreate = document.getElementById("createname");
        var namecreate = document.getElementById("createname");
        var pricecreate = document.getElementById("createprice");
        var createtype = document.getElementById("typecreate");
        var createtone = document.getElementById("tonecreate");
        var creatematerial = document.getElementById("materialcreate");
        namecreate.value=''
        pricecreate.value=''
        createtype.value=''
        createtone.value=''
        creatematerial.value=''
        img.src='asset/img/img.png';
        imgct.src='asset/img/imgct.png';
        inputct.value==''
        input.value==''
    }

    function remove(a,b){
        var pc= JSON.parse(localStorage.getItem('phongcanh'));
    var th= JSON.parse(localStorage.getItem('tranhhoa'));
    var tv= JSON.parse(localStorage.getItem('tinhvat'));
    var tt= JSON.parse(localStorage.getItem('truutuong'));
    var tn= JSON.parse(localStorage.getItem('tranhngua'));
        result= confirm('bạn có chắc chắn xóa không')
        if(result){
            if(b=='tranh phong cảnh'){
                for(value in pc){
                    if(a==pc[value].picname){
                        pc.splice(value,1);
                        break;
                    }
                }
                filpic=pc.concat(th);filpic=filpic.concat(tt);filpic=filpic.concat(tn);filpic=filpic.concat(tv);
                localStorage.setItem('phongcanh',JSON.stringify(pc));
                find()
                alert('xóa thành công')
            }

            if(b=='tranh trừu tượng'){
                for(value in tt){
                    if(a==tt[value].picname){
                        tt.splice(value,1);
                        break;
                    }
                }
                filpic=pc.concat(th);filpic=filpic.concat(tt);filpic=filpic.concat(tn);filpic=filpic.concat(tv);
                localStorage.setItem('truutuong',JSON.stringify(tt));
                find()
                alert('xóa thành công')
            }

            if(b=='tranh hoa'){
                for(value in th){
                    if(a==th[value].picname){
                        th.splice(value,1);
                        break;
                    }
                }
                filpic=pc.concat(th);filpic=filpic.concat(tt);filpic=filpic.concat(tn);filpic=filpic.concat(tv);
                localStorage.setItem('tranhhoa',JSON.stringify(th));
                find()
                alert('xóa thành công')
            }

            if(b=='tranh ngựa'){
                for(value in tn){
                    if(a==tn[value].picname){
                        tn.splice(value,1);
                        break;
                    }
                }
                filpic=pc.concat(th);filpic=filpic.concat(tt);filpic=filpic.concat(tn);filpic=filpic.concat(tv);
                localStorage.setItem('tranhngua',JSON.stringify(tn));
                find()
                alert('xóa thành công')
            }

            if(b=='tranh tĩnh vật'){
                for(value in tv){
                    if(a==tv[value].picname){
                        tv.splice(value,1);
                        break;
                    }
                }
                filpic=pc.concat(th);filpic=filpic.concat(tt);filpic=filpic.concat(tn);filpic=filpic.concat(tv);
                localStorage.setItem('tinhvat',JSON.stringify(tv));
                find()
                alert('xóa thành công')
            }
    
           
        }

    }

    const iconClose_info_img =document.querySelector('.icon-close-infor_img');

iconClose_info_img.addEventListener('click',()=>{
    document.querySelector('.picture_information').style.display="none"
});

var fiximg= document.getElementById('imgfix');
 var fixinput= document.getElementById('fixpic');
var ctdataimgfix;
 var dataimgfix;
 fixinput.onchange=(e)=>{
    if(fixinput.value==''){
        fiximg.src='asset/img/img.png';
    }
    else{
    const reader = new FileReader;
    reader.addEventListener("load",() =>{
        dataimgfix=reader.result;
    });
     reader.readAsDataURL(fixinput.files[0]);
    if(fixinput.files[0])
        fiximg.src=URL.createObjectURL(fixinput.files[0]);
}
 };

 var fiximgct= document.getElementById('imgctfix');
var fixinputct= document.getElementById('fixpicct');

fixinputct.onchange=(e)=>{
    if(fixinputct.value==''){
        fiximgct.src='asset/img/imgct.png';
    }
    {
    const reader = new FileReader; 
    reader.addEventListener("load",() =>{
        ctdataimgfix=reader.result;
    });
    reader.readAsDataURL(fixinputct.files[0]);
    if(fixinputct.files[0])
        fiximgct.src=URL.createObjectURL(fixinputct.files[0]);
}
};
function fix(a,b){
    var pc= JSON.parse(localStorage.getItem('phongcanh'));
    var th= JSON.parse(localStorage.getItem('tranhhoa'));
    var tv= JSON.parse(localStorage.getItem('tinhvat'));
    var tt= JSON.parse(localStorage.getItem('truutuong'));
    var tn= JSON.parse(localStorage.getItem('tranhngua'));
document.querySelector('.picture_information').style.display="flex";
        var namefix = document.getElementById("fixname");
        var pricefix = document.getElementById("fixprice");
        var fixtype = document.getElementById("typefix");
        var fixtone = document.getElementById("tonefix");
        var fixmaterial = document.getElementById("materialfix");
        filpic=pc.concat(th);filpic=filpic.concat(tt);filpic=filpic.concat(tn);filpic=filpic.concat(tv);
        for(key in filpic){
            if(filpic[key].picname==a&&filpic[key].type==b)
            {
                namefix.value=filpic[key].picname;
                pricefix.value=Stringtoprice(filpic[key].price);
                fixtype.value=filpic[key].type;
                fixtone.value=filpic[key].tonemau;
                fixmaterial.value=filpic[key].chatlieu;
                imgfix.src=filpic[key].imgsrc;
                imgctfix.src=filpic[key].detail;
                var html=""
                html+='<div id="confirmfix" style="margin-right: 20px;margin-bottom: 20px;"onclick="confirmfix(\''+filpic[key].picname+'\',\''+filpic[key].type+'\')" >sửa</div>'
                document.getElementById('fixoption').innerHTML=html;
            }
        }
}

function confirmfix(a,b){
    console.log(1)
    var pc= JSON.parse(localStorage.getItem('phongcanh'));
    var th= JSON.parse(localStorage.getItem('tranhhoa'));
    var tv= JSON.parse(localStorage.getItem('tinhvat'));
    var tt= JSON.parse(localStorage.getItem('truutuong'));
    var tn= JSON.parse(localStorage.getItem('tranhngua'));
    var namefix = document.getElementById("fixname");
        var pricefix = document.getElementById("fixprice");
        var fixtype = document.getElementById("typefix");
        var fixtone = document.getElementById("tonefix");
        var fixmaterial = document.getElementById("materialfix");
        filpic=pc.concat(th);filpic=filpic.concat(tt);filpic=filpic.concat(tn);filpic=filpic.concat(tv);
    var result=confirm('bạn có chắc chắn sửa');
    if(result){
    if(b=='tranh phong cảnh'){
        for(value in pc){
            if(pc[value].picname==a){
                if(fixinput.value==''){
                    dataimgfix=pc[value].imgsrc;
                }
                if(fixinputct.value==''){
                    ctdataimgfix=pc[value].detail;
                }
                if(namefix.value==''||pricefix.value==''||fixtype.value==''||fixtone.value==''||fixmaterial.value==''){
                    alert('chưa thêm đầy đủ thông tin!!');
                    return false;
                }
                else if(Number.parseFloat(pricefix.value)<1000000||Number.parseFloat(pricefix.value)>999999999999){
                    alert('giá trị tối thiểu là 1.000.000 và tối đa là 999.999.999.999');
                    return false;
                }
                for(key in filpic){
                    if(namefix.value==filpic[key.name]&&namefix.value!=a&&fixtype.value==filpic[key].type)
                    {
                        alert("tên sản phẩm đã tồn tại")
                        return false;
                    }
                }
                pc.splice(value,1);
                localStorage.setItem('phongcanh',JSON.stringify(pc));
                break;
            }
        }
    }
    if(b=='tranh trừu tượng'){
        
        for(value in tt){
            if(tt[value].picname==a){
                if(fixinput.value==''){
                    dataimgfix=tt[value].imgsrc;
                }
                if(fixinputct.value==''){
                    ctdataimgfix=tt[value].detail;
                }
                if(namefix.value==''||pricefix.value==''||fixtype.value==''||fixtone.value==''||fixmaterial.value==''){
                    alert('chưa thêm đầy đủ thông tin!!');
                    return false;
                }
                else if(Number.parseFloat(pricefix.value)<1000000||Number.parseFloat(pricefix.value)>999999999999){
                    alert('giá trị tối thiểu là 1.000.000 và tối đa là 999.999.999.999');
                    return false;
                }
                for(key in filpic){
                    if(namefix.value==filpic[key.name]&&namefix.value!=a&&fixtype.value==filpic[key].type)
                    {
                        alert("tên sản phẩm đã tồn tại")
                        return false;
                    }
                }
                tt.splice(value,1);
                localStorage.setItem('truutuong',JSON.stringify(tt));
                break;
            }
        }
    }
    if(b=='tranh tĩnh vật'){
       
        for(value in tv){
            if(tv[value].picname==a){
                if(fixinput.value==''){
                    dataimgfix=tv[value].imgsrc;
                }
                if(fixinputct.value==''){
                    ctdataimgfix=tv[value].detail;
                }
                if(namefix.value==''||pricefix.value==''||fixtype.value==''||fixtone.value==''||fixmaterial.value==''){
                    alert('chưa thêm đầy đủ thông tin!!');
                    return false;
                }
                else if(Number.parseFloat(pricefix.value)<1000000||Number.parseFloat(pricefix.value)>999999999999){
                    alert('giá trị tối thiểu là 1.000.000 và tối đa là 999.999.999.999');
                    return false;
                }
                for(key in filpic){
                    if(namefix.value==filpic[key.name]&&namefix.value!=a&&fixtype.value==filpic[key].type)
                    {
                        alert("tên sản phẩm đã tồn tại")
                        return false;
                    }
                }
                tv.splice(value,1);
                localStorage.setItem('tinhvat',JSON.stringify(tv));
                break;
            }
        }
    }
    if(b=='tranh ngựa'){
       
        for(value in tn){
            if(tn[value].picname==a){
                if(fixinput.value==''){
                    dataimgfix=tn[value].imgsrc;
                }
                if(fixinputct.value==''){
                    ctdataimgfix=tn[value].detail;
                }
                if(namefix.value==''||pricefix.value==''||fixtype.value==''||fixtone.value==''||fixmaterial.value==''){
                    alert('chưa thêm đầy đủ thông tin!!');
                    return false;
                }
                else if(Number.parseFloat(pricefix.value)<1000000||Number.parseFloat(pricefix.value)>999999999999){
                    alert('giá trị tối thiểu là 1.000.000 và tối đa là 999.999.999.999');
                    return false;
                }
                for(key in filpic){
                    if(namefix.value==filpic[key.name]&&namefix.value!=a&&fixtype.value==filpic[key].type)
                    {
                        alert("tên sản phẩm đã tồn tại")
                        return false;
                    }
                }
                tn.splice(value,1);
                localStorage.setItem('tranhngua',JSON.stringify(tn));
                break;
            }
        }
    }

    if(b=='tranh hoa'){

        for(value in th){
            if(th[value].picname==a){
                if(fixinput.value==''){
                    dataimgfix=th[value].imgsrc;
                }
                if(fixinputct.value=''){
                    ctdataimgfix=th[value].detail;
                }
                if(namefix.value==''||pricefix.value==''||fixtype.value==''||fixtone.value==''||fixmaterial.value==''){
                    alert('chưa thêm đầy đủ thông tin!!');
                    return false;
                }
                else if(Number.parseFloat(pricefix.value)<1000000||Number.parseFloat(pricefix.value)>999999999999){
                    alert('giá trị tối thiểu là 1.000.000 và tối đa là 999.999.999.999');
                    return false;
                }
                for(key in filpic){
                    if(namefix.value==filpic[key.name]&&namefix.value!=a&&fixtype.value==filpic[key].type)
                    {
                        alert("tên sản phẩm đã tồn tại")
                        return false;
                    }
                }
                th.splice(value,1);
                localStorage.setItem('tranhhoa',JSON.stringify(th));
                break;
            }
        }
    }

    if(fixtype.value=='tranh phong cảnh'){
        pc.push({picname :namefix.value  ,detail : ctdataimgfix ,imgsrc : dataimgfix,price : pricetodata(pricefix.value),chatlieu : fixmaterial.value , tonemau : fixtone.value ,type : fixtype.value})
        console.log(pc);
        
        localStorage.setItem('phongcanh',JSON.stringify(pc));
        filpic=pc.concat(th);filpic=filpic.concat(tt);filpic=filpic.concat(tn);filpic=filpic.concat(tv);
        list(filpic);
        alert('sửa thành công')
        document.querySelector('.picture_information').style.display="none"
        window.scrollTo(0, 0);
    }

    if(fixtype.value=='tranh trừu tượng'){
        tt.push({picname :namefix.value  ,detail : ctdataimgfix ,imgsrc : dataimgfix,price : pricetodata(pricefix.value),chatlieu : fixmaterial.value , tonemau : fixtone.value ,type : fixtype.value})
        
        localStorage.setItem('truutuong',JSON.stringify(tt));
        filpic=pc.concat(th);filpic=filpic.concat(tt);filpic=filpic.concat(tn);filpic=filpic.concat(tv);
        list(filpic);
        alert('sửa thành công');
        document.querySelector('.picture_information').style.display="none"
        window.scrollTo(0, 0);
    }

    if(fixtype.value=='tranh hoa'){
        
        th.push({picname :namefix.value  ,detail : ctdataimgfix ,imgsrc : dataimgfix,price : pricetodata(pricefix.value),chatlieu : fixmaterial.value , tonemau : fixtone.value ,type : fixtype.value})
        
        localStorage.setItem('tranhhoa',JSON.stringify(th));
        filpic=pc.concat(th);filpic=filpic.concat(tt);filpic=filpic.concat(tn);filpic=filpic.concat(tv);
        list(filpic);
        alert('sửa thành công');
        document.querySelector('.picture_information').style.display="none"
        window.scrollTo(0, 0);
    }

    if(fixtype.value=='tranh ngựa'){
       
        tn.push({picname :namefix.value  ,detail : ctdataimgfix ,imgsrc : dataimgfix,price : pricetodata(pricefix.value),chatlieu : fixmaterial.value , tonemau : fixtone.value ,type : fixtype.value})
        
        localStorage.setItem('tranhngua',JSON.stringify(tn));
        filpic=pc.concat(th);filpic=filpic.concat(tt);filpic=filpic.concat(tn);filpic=filpic.concat(tv);
        list(filpic);
        alert('thêm thành công');
        document.querySelector('.picture_information').style.display="none"
        window.scrollTo(0, 0);
    }

    if(fixtype.value=='tranh tĩnh vật'){
        tv.push({picname :namefix.value  ,detail : ctdataimgfix ,imgsrc : dataimgfix,price : pricetodata(pricefix.value),chatlieu : fixmaterial.value , tonemau : fixtone.value ,type : fixtype.value})
        
        localStorage.setItem('tinhvat',JSON.stringify(tv));
        filpic=pc.concat(th);filpic=filpic.concat(tt);filpic=filpic.concat(tn);filpic=filpic.concat(tv);
        list(filpic);
        alert('sửa thành công');
        document.querySelector('.picture_information').style.display="none"
        window.scrollTo(0, 0);
    }

}
}

