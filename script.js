var ho=false, ef=true;

$(function(){

    /* $('#opn').click(function(){
        if(!ho){
    $('header').animate({height:'90px'},500);
    $(this).removeClass('fa-bars');
    $(this).addClass("fa-times");
    ho=true;
    }
    else{
        $('header').animate({height:'43px'},500);
    $(this).removeClass('fa-times');
    $(this).addClass("fa-bars");
    ho=false;
    }
});*/

    
    $(".demo,.copy,#start,#stop,#reset,#lap,.btn-close").on("touchstart",function(){
    $(this).css("transform","scale(0.85)");
    })
    
    $(".demo,.copy,#start,#stop,#reset,#lap,.btn-close").on("touchend",function(){
    $(this).css("transform","scale(1)");
    })

    $(".title").click(function(){
           var el = $(this);
           var id = '#d' + el.prop("id").slice(1,el.prop('id').length);
      $(".description").not(id).slideUp();
           $(id).slideToggle();
           $('.demo_cont').slideUp();
        });
        
 $.each($('.demo'), function (index, value) { 
        $(value).click(function(){
            $($(value).prop('id')).slideToggle();

        })
        });     
        
          var sa = Swal.mixin({
            customClass:{
                popup: 'pop animated bounceInDown',
                confirmButton: 'ok',
                input: 'inp',
            },
            buttonsStyling: false,
        })
        
        var sb = Swal.mixin({
            customClass:{
                popup: 'pop2 animated bounceInDown',
                closeButton: 'btn-close'
            },
            buttonsStyling: false,
        })
        sa.fire({
            html: '<i class="fa fa-user-circle" style="font-size:3em"></i>',
            input: "text",
            inputAttributes:{
                autocapitalize:false,
                required:true,
                placeholder:'Enter your name...',
            },
            showConfirmButton: true,
            confirmButtonText:'Next',
            padding: '2em',
            allowOutsideClick:false,
        }).then((name)=>{
            sb.fire({
                title: `_<i class='fa fa-smile-o' style=font-size:1.2em></i>_ Hi ${name.value}!`,
                html:'<div style=font-size:1em;>Thanks for the checking out my code.I Hope you like it.comment which one do you like most.<br /><br />Dont forget to upvote <i class="fa fa-thumbs-up"></i></div>',
            showConfirmButton: false,
            showCloseButton: false,
            padding: '2em',
            allowOutsideClick:true,
            onClose: ()=>{
                animation:false,
                $(".pop2").removeClass("animated bounceInDown")},
                
            }) 
        })
        
        
 /* ------------------------------------------
--------------calculator------------------
------------------------------------------*/       
        
        var input = $("#input"), inpVal, result = $("#result"), allowDot = true, r = false, x, bo = 0, bc = bo, more = false,prev_result=0,res=0;

    
    $(".n, .o, .dot, .open_brace, .close_brace, .plus_minus, .sqrt, .pi, .log, .ln, .sin, .cos, .tan,.clr,.del").click(function(){
        if(r){
            input.text("");
            allowDot = true;
            r= false;
            input.animate({opacity:"1",height:"60px"},0);
       result.animate({height:"60px",fontSize:"1em",lineHeight:"60px"},0);
       result.css("color","#aaa");
       prev_result =0,res=0;
        }
        result.text("0");
        inpVal = input.text();
        //evaluate();
    });
   
   $("button.n").click(function(){
      if(!more){
       getNum($(this).text());
       }
   });
   
   $("button.o").click(function(){
      if(!more || $(this).text()==="%"){
       getOperator($(this).text());
       }
   });
   
   $("button.open_brace").click(function(){
      if(!more){
       addOpenBrace();
       }
   });
   
  $("button.close_brace").click(function(){
       if(!more){
       addCloseBrace();
       }
   });
   
   $("button.dot").click(function(){
      if(!more){
       addDot();
       }
   });
   
   $("button.clr").click(function(){
       if(!more){
       input.text("");
       result.text("");
       bo = bc = 0;
       }
   })
   
   $("button.del").click(function(){
       if(!more){
       inpVal = input.text();
       result.text("0")
       r = false;
       del();
       }
   });
   
   $("button.eql").click(function(){
       if(!more){
       inpVal = input.text();
       input.animate({opacity:"0",height:"0"},300);
       result.animate({height:"120px",fontSize:"1.5em",lineHeight:"120px"},300);
       result.css("color","#000");
       evaluate();
       r = true;
       //prev_result=0,res=0;
       }
   });
   
   $("#more_less").click(function(){
       if(!more){
           $("#more").animate({left:'70%'},350);
           more = true;
       }
       else{
           $("#more").animate({left:'92%'},350);
           more = false;
       }
   });
   
   $(".n, .o, .dot, .open_brace, .close_brace,.clr,.eql").not("#percent").click(function(){
        $("#more").animate({left:'92%'},350);
           more = false;
    });
   
   $("#sqrt, #pi, #log, #ln, #sin, #cos, #tan").click(function(){
       more_func($(this).text());
       inpVal = input.text();
       evaluate();
   });
   
   $(".n,.o,.dot,.open_brace,.close_brace,.del,.eql,.clr").click(function(){
       inpVal = input.text();
       evaluate();
   })
   
  
    
    function isLastOperator(){
        if(inpVal[inpVal.length-1] == "+" || inpVal [inpVal .length-1] == "-" || inpVal [inpVal .length-1] == "*" || inpVal [inpVal .length-1] == "/" || inpVal[inpVal .length-1] == "." || inpVal[inpVal.length-1] == "%" || inpVal[inpVal .length-1] == "√"){
            return true;
        }
    
        return false;
    }
    
    function getNum(num){
        switch (num){
            case "0": x = 0;break;
            case "1": x = 1;break;
            case "2": x = 2;break;
            case "3": x = 3;break;
            case "4": x = 4;break;
            case "5": x = 5;break;
            case "6": x = 6;break;
            case "7": x = 7;break;
            case "8": x = 8;break;
            case "9": x = 9;break;
        }
        if('π)'.indexOf(inpVal[inpVal.length-1]) != -1){
        input.text(inpVal + '*' + x);
        //console.log(input.text())
        }
        else if('√gns'.indexOf(inpVal[inpVal.length-1]) != -1){
            input.text(inpVal + '(' + x);
            bo += 1;
            bc = bo;
        }
        else{
            input.text(inpVal+x);
            //console.log(input.text())
        }
    }
    
    function getOperator(opr){
        if(inpVal == '' && opr == '-'){
            input.text(inpVal + opr);
            allowDot = true;
        }
        else if(isLastOperator() && inpVal != '' && inpVal.length>1){
            if(inpVal[inpVal.length-1] != "-" && opr == '-'){
                input.text(inpVal + opr);
               // console.log(input.text())
                allowDot = true;
            }
            else if('+-*/'.indexOf(inpVal[inpVal.length-2]) != -1){
            if(('0123456789'.indexOf(inpVal[inpVal.length-2]) != -1 || inpVal[inpVal .length-2] == ")") && inpVal[inpVal.length-1] == '*' && opr == '*'){
                input.text(inpVal + opr);
                allowDot = true;
            }
            else{
            input.text(inpVal);
            //console.log(input.text());
            allowDot = true;
            }
            }
            //console.log("r")
            else if(bo == 0 ||('0123456789'.indexOf(inpVal[inpVal.length-2]) != -1 || inpVal[inpVal .length-2] == ")") && inpVal[inpVal.length-1] == '*' && opr == '*'){
            if(('0123456789'.indexOf(inpVal[inpVal.length-2]) != -1 || inpVal[inpVal .length-2] == ")") && inpVal[inpVal.length-1] == '*' && opr == '*'){
                input.text(inpVal + opr);
                allowDot = true;
            }
            else{
            input.text(inpVal.slice(0,[inpVal.length-1]) + opr);
            
            allowDot = true;
            //console.log(input.text());
            }
            }
        }
        else if(!isLastOperator() && inpVal != ''){
            if(inpVal[inpVal.length-1] == "("){
                if(opr =='-'){
                //console.log("c")
                input.text(inpVal + opr);
                //console.log(input.text())
                allowDot = true;
                }
                else{
                    //console.log("v")
                    input.text(inpVal );
                   // console.log(input.text())
                    allowDot = true;
                }
            }
            else{
            //console.log("f")
            input.text(inpVal + opr);
            //console.log(input.text())
            allowDot = true;
            }
        }
    }
    
    function addOpenBrace(){
        if('0123456789'.indexOf(inpVal[inpVal.length-1]) !== -1 || inpVal[inpVal.length-1] == ')'){
            input.text(inpVal + "*(");
            //console.log(input.text())
            bo+=1;
            bc = bo;
        }
        else if(inpVal[inpVal.length-1] == '.'){
            input.text(inpVal);
            //console.log(input.text())
        }
        else{
            input.text(inpVal + "(");
            //console.log(input.text());
            bo+=1;
            bc = bo;
        }
        
    }
    
    function addCloseBrace(){
        if(bc){
            input.text(inpVal + ")");
           // console.log(input.text())
            bc--;
            bo--;
        }
    }
    
    function addDot(){
        if(inpVal == "" && allowDot){
            input.text(inpVal + "0.");
            //console.log(input.text())
            allowDot = false;
        }
        else if(inpVal !='' && !isLastOperator() && allowDot){
            if(inpVal[inpVal.length-1] == "(" && allowDot ){
                input.text(inpVal + '0.');
                //console.log(input.text())
                allowDot = false;
            }
            else{
                input.text(inpVal + '.');
                //console.log(input.text())
                allowDot = false;
                }
            }
            else if(inpVal !='' && isLastOperator() && allowDot){
                input.text(inpVal + '0.');
                //console.log(input.text())
                allowDot = false;
        }
    }
    
    
    function del(){
        if(inpVal[inpVal.length-1] == '.'){
            allowDot = true;
        }
        if(inpVal[inpVal.length-1] == ')'){
            bc++;
            bo++;
        }
        if(inpVal[inpVal.length-1] == '('){
            bc--;
            bo--;
        }
        if('gns'.indexOf(inpVal[inpVal.length-1]) != -1){
            if('lsct'.indexOf(inpVal[inpVal.length-3])!= -1){
               input.text(inpVal.slice(0,inpVal.length-3)); 
            }
            else if(inpVal[inpVal.length-2] == 'l'){
                input.text(inpVal.slice(0,inpVal.length-2)); 
            }
        }
   else{  
        input.text(inpVal.slice(0,inpVal.length-1));
        }
       
    }
    
    function more_func(f){
        if(inpVal == '' && f != 'π'){
            input.text(inpVal + f +'(');
            bo += 1;
            bc = bo;
        }
        else if((inpVal == ''||inpVal != '') && f=='π'){
        if('+-*/('.indexOf(inpVal[inpVal .length-1]) != -1 || inpVal == ''){
            input.text(inpVal + f);
            }
          else if('1234567890)π'.indexOf(inpVal[inpVal .length-1]) != -1) {
              input.text(inpVal + '*' + f);
          } 
          
        }
        else if(inpVal != ''){
            if('1234567890)π'.indexOf(inpVal[inpVal .length-1]) != -1){
                input.text(inpVal +'*'+ f + '(');
                bo += 1;
                bc = bo;
            }
            else if('+-*/('.indexOf(inpVal[inpVal .length-1]) != -1){
            input.text(inpVal + f + '(');
            bo += 1;
            bc = bo;
            }
            else if(inpVal[inpVal .length-1] == '.'){
                input.text(inpVal);
            }
        }
    }
    
    function evaluate(){
        try{
            inpVal = inpVal.replace(/√/g,'Math.sqrt');
            inpVal = inpVal.replace(/π/g,'Math.PI');
            inpVal = inpVal.replace(/log/g,'Math.log10');
            inpVal = inpVal.replace(/ln/g,'Math.log');
            inpVal = inpVal.replace(/sin/g,'Math.sin');
            inpVal = inpVal.replace(/cos/g,'Math.cos');
            inpVal = inpVal.replace(/tan/g,'Math.tan');
           // console.log(inpVal)
           if(isLastOperator()){
               inpVal =inpVal.slice(0,inpVal.length-1);
           }
             res = eval(inpVal);
        }
        catch(e){
            var err = e.name;
           // console.log(err)
            if(err!=''){
                res=prev_result;
            }
        }
        finally{
        prev_result = res;
        //console.log("true "+prev_result)
        result.text(res);
        }
    }
    
   /*
-----------------------------------------------------unitconverter------------------
------------------------------------------
*/    
        
        var mm = $('.mm'), cm = $(".cm"), m = $(".m"), km = $(".km"), ml = $(".ml"), yd = $(".yd"), inch = $(".in"), ft = $(".ft"), c = $(".°c"), k = $(".k"), f = $(".°f"), g = $(".g"), kg = $(".kg"), po = $(".po"), ou = $(".ou"), st = $(".st"), mph = $(".mph"), kph = $(".kmph"), knots = $(".knot"), mach = $(".mach");
     var el,v;
     
     $(".heading").click(function(){
           var e = $(this);
           var id = '#de' + e.prop("id").slice(1,e.prop('id').length);
           $(".desc").not(id).slideUp();
           $(id).slideToggle();
        });
     
     
       $(".converter input").keyup(function(){
            
        switch(el.prop('class')){
        case 'mm': mmConv(el.val());break;
        case 'cm': cmConv(el.val());break;
        case  'm': mConv(el.val());break;
        case 'km': kmConv(el.val());break;
        case 'ml': mlConv(el.val());break;
        case 'yd': ydConv(el.val());break;
        case 'in': inConv(el.val());break;
        case 'ft': ftConv(el.val());break;
        case '°c': celConv(el.val());break;
        case  'k': kelConv(el.val());break;
        case '°f': fahConv(el.val());break;
        case  'g': grmConv(el.val());break;
        case 'kg': kgConv(el.val());break;
        case 'po': poConv(el.val());break;
        case 'ou': ouConv(el.val());break;
        case 'st': stConv(el.val());break;
        case 'mph': mphConv(el.val());break;
        case 'kmph': kphConv(el.val());break;
        case 'knot': knotConv(el.val());break;
        case 'mach': machConv(el.val());break;
            }
        });
        
        $("input").focus(function(){
            el = $(this);
        });
        
        
        function cmConv(v){
         if(v != ''){
           km.val(v/100000);
           m.val(v/100);
           mm.val(v/0.10000);
           ml.val(v*0.0000062137);
           yd.val(v*0.010936);
           inch.val(v/2.54);
           ft.val(v/30.48);
           }
           else{
               $("input").val("");
           }
    }
    function mConv(v){
    if(v != ""){
        km.val(v/1000.0);
        cm.val(v/0.010000);
        mm.val(v/0.0010000);
        ml.val(v* 0.00062137);
        yd.val(v* 1.0936);
        inch.val(v* 39.370);
        ft.val(v* 3.2808);
        }
        else{
            $("input").val("");
        }
        
    }
    function mmConv(v){
        if(v != ""){
        km.val(v/1000000);
        cm.val(v/10.000);
        m.val(v/1000.0);
        ml.val(v* 0.00000062137);
        yd.val(v* 0.0010936);
        inch.val(v* 0.039370);
        ft.val(v* 0.0032808);
        }
        else{
            $("input").val("");
        }
    }
    function kmConv(v){
    if(v != ""){
        mm.val(v/0.0000010000);
        cm.val(Math.round(v/0.000010000));
        m.val(v/0.0010000);
        ml.val(v* 0.62137);
        yd.val(v* 1093.6);
        inch.val(v* 39370);
        ft.val(v* 3280.8);
        }
        else{
            $("input").val("");
        }
    }
    function mlConv(v){
    if(v!=''){
        mm.val(v/0.00000062137);
        cm.val(v/0.0000062137);
        m.val(v/0.00062137);
        km.val(v/0.62137);
        yd.val(v*1760.0);
        inch.val(v*63360);
        ft.val(v* 5280.0);
        }
        else
        $("input").val("");
    }
    function ydConv(v){
    if(v!=''){
        mm.val(v/0.0010936);
        cm.val(v/0.010936);
        m.val(v/1.0936);
        km.val(v/1093.6);
        ml.val(v* 0.00056818);
        inch.val(v* 36.000);
        ft.val(v* 3.0000);
        }
        else
        $("input").val("");
    }
    function ftConv(v){
    if(v!=""){
        mm.val(v/0.0032808);
        cm.val(v/0.032808);
        m.val(v/3.2808);
        km.val(v/3280.8);
        ml.val(v* 0.00018939);
        inch.val(v* 12.000);
        yd.val(v*0.33333);
        }
        else
        $("input").val("");
    }
    function inConv(v){
    if(v!=""){
        mm.val(v/0.039370);
        cm.val(v/0.39370);
        m.val(v/39.370);
        km.val(v/39370);
        ml.val(v* 0.000015783);
        ft.val(v* 0.083333);
        yd.val(v* 0.027778);
        }
        else
        $("input").val("");
    }
    
    function celConv(v){
        if(v!=""){
            f.val(Math.round((v*1.8)+32));
            k.val(Number(v)+273);
        }
        else
        $("input").val("");
    }
    
    function kelConv(v){
        if(v!=""){
            f.val(Math.round(((v-273.15)*1.8)+32));
            c.val(v-273);
        }
        else
        $("input").val("");
    }
    
    function fahConv(v){
        if(v!=""){
            c.val(Math.round((v-32)/1.8));
            k.val(Math.round(((v-32)/1.8)+273.15));
        }
        else
        $("input").val("");
    }
    
    function grmConv(g){
        if(g!=""){
            po.val(g*0.0022046);
            kg.val(g/1000);
            ou.val(g*0.035274);
            st.val(g*0.00015747);
        }
        else
        $("input").val("");
    }
    
    function kgConv(kg){
        if(kg!=""){
            po.val(kg*2.2046);
            g.val(kg*1000);
            ou.val(kg*35.274);
            st.val(kg*0.1574);
        }
        else
        $("input").val("");
    }
    
    function poConv(lb){
        if(lb!=""){
            kg.val(lb/2.2046);
            g.val(lb/0.0022046);
            ou.val(lb*16);
            st.val(lb*0.071429);
        }
        else
        $("input").val("");
    }
    
    function ouConv(oz){
        if(oz!=""){
            kg.val(oz/35.274);
            g.val(oz/0.035274);
            po.val(oz*0.0625);
            st.val(oz*0.0044643);
        }
        else
        $("input").val("");
    }
    
    function stConv(st){
        if(st!=""){
            kg.val(oz/35.274);
            g.val(oz/0.035274);
            po.val(oz*0.0625);
            st.val(oz*0.0044643);
        }
        else
        $("input").val("");
    }
    
    function mphConv(MPH){
        if(MPH!=""){
            kph.val(MPH*1.609344);
            knots.val(MPH/1.150779);
            mach.val(MPH/761.207);
        }
        else
        $("input").val("");
    }
    
    function kphConv(KPH){
        if(KPH!=""){
            mph.val(KPH/1.609344);
            knots.val(KPH/1.852);
            mach.val(KPH/1225.044);
        }
        else
        $("input").val("");
    }
    
    function knotConv(knots){
        if(knots != ""){
            mph.val(knots*1.150779);
            kph.val(knots*1.852);
            mach.val(knots/661.4708);
        }
        else
        $("input").val("");
    }
    
    function machConv(Mach){
        if(Mach != ""){
            mph.val(Mach*761.207);
            kph.val(Mach*1225.044);
            knots.val(Mach*661.4708);
        }
        else
        $("input").val("");
   }
  
   /*
 ------------------------------------------
 -----------digital clock-----------------
 ------------------------------------------*/ 
       var tsec = true;
    setInterval(updateTime,1000);
      function updateTime(){
         
   var date = new Date();
   var days = ["#sun","#mon","#tue","#wed","#thu","#fri","#sat"];
   var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
   var hours = (date.getHours()>12)?(date.getHours()-12):(date.getHours() == 0)?12 : date.getHours();
   var min = (date.getMinutes()>9)?date.getMinutes():("0"+date.getMinutes());
   var sec = (date.getSeconds()>9)?date.getSeconds():("0"+date.getSeconds()); 
   var D = date.getDate();
   var mon = date.getMonth();
   var day = date.getDay();
   var year = date.getFullYear();
   var dn = (date.getHours()>12)?" PM":" AM"; 
  $("#clock_time").html(hours+"<span id=\"sec\" style=\"font-size:1.2em;\">:</span>"+min+"<span style=\"font-size:13px;\">  "+dn+"</span>"+"<div style=\"font-size:16px\">"+month[mon]+" "+D+", "+year+"</div>");
  
   
  if(tsec){
      $("#sec").css({"opacity":"0"});
      tsec=false;
  }
  else{
      $("#sec").css({"opacity":"1"});
      tsec=true;
  }
  
  $(days[day]).css({"color":"black"});
  
  
   }
     
/* ------------------------------------------
-------------Analog clock----------------- ------------------------------------------*/ 
 
    function drawTime(){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var millisec = now.getMilliseconds(); 
    //hour
    if(hour == 0){
        hour=12;
    }
    if(hour > 12){
        hour = hour-12;
    }
    hour=30*(hour+minute/60);
    document.getElementById("hh").style.transform = "rotate("+hour+"deg)";
    
    minute=6*(minute+second/60);
    document.getElementById("mh").style.transform = "rotate("+minute+"deg)";
    
    second=(second*6);
    document.getElementById("sh").style.transform = "rotate("+second+"deg)";
}

setInterval(drawTime, 1000);

 /* ------------------------------------------
-------------color picker----------------- ------------------------------------------*/ 

var red=0,green=0,blue=0,hr,hg,hb;

    var picker=$("#picker"), rgb=$("#rgb"), h=$("#hex");
    
    $("input.slider").on('input',function(){
        setColor($(this).prop("id"),Number($(this).val()));
        var color="rgb("+red+","+green+","+blue+")";
       rgb.text(color);
       picker.css("background",`${color}`);
       calhex(red,green,blue);
       h.html(`#${hr+hg+hb}`);
    })
   
   function setColor(c,val){
       if(c=='r'){
           red = val;
       }
       else if(c=='g'){
           green = val;
       }
       else if(c=='b'){
           blue = val;
       }
   }
   
   function calhex(r,g,b){
    var hex = "0123456789abcdef".split(""),q,r,i=0;
    x=[r,g,b];
    x.forEach(function(item){
    q=hex[Math.floor(item/16)];
    r=hex[item-(parseInt(q,16)*16)];
    (i==0)?hr= q+r:((i==1)?hg = q+r:hb = q+r);
    i++
    });
    
    
   }
   
   /*-------------------------------------
   --------------Stop watch---------------
   -------------------------------------*/
     
   var start = $("#start"), stop = $("#stop"), reset = $("#reset"), lap = $("#lap"), timer = $("#timer"), Lap = $(".lap"), min = 0,sec = 0,ms = 0,tms,running=false;
    function startTimer(){
        ms = parseInt(ms)+1;
        if(ms == 100){
            ms = 0;
            sec = parseInt(sec)+1;
        }
        if(sec == 60){
            sec = 0;
            min = parseInt(min)+1;
        }
        if(ms<10)
            ms = '0'+parseInt(ms);
            
        if(sec<10)
            sec = '0'+parseInt(sec);
            
        if(min<10)
            min = '0'+parseInt(min);
        
        timer.text(min+':'+sec+':'+ms);
    }
    
    start.click(function(){
        if(!running){
            tms = setInterval(startTimer,10);
            start.text("RESUME");
            running = true;
        }
    });
    
    stop.click(function(){
        if(running){
            clearInterval(tms);
            running = false;
        }
    });
    reset.click(function(){
        stop.click();
        timer.text("00:00:00");
        Lap.text("");
        Lap.css({"height":""});
        start.text("START");
    
});

lap.click(function(){
    if(running){
        Lap.prepend("<span>"+timer.text()+"</span>");
       if(parseInt(Lap.css("height"))>135)
            Lap.css({"height":"135px"});
            
         } 
    });
        
    });