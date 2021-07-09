var defFloor = "lamino-javor";
var imageWidth = 1920;
var imageHeight = 999;
var imageRatio = imageHeight/imageWidth;
var hideDuration = 800; /* po nacitani sa prepise */
var rightSectionOpen = true;
var leftSectionOpen = true;
var doorOrientation = "front";
var frameColorImg = "";
var equipments = [];
var frontSameAsBack = true;

function changeDoor(obj){
    var id = '#selected_door';
    $(id).attr('src', changeImgSrc(obj, id) + ".png");
}

function changeMaterial(obj){
    var id = '#selected_material';
    $(id).attr('src', changeImgSrc2(obj, id, doorOrientation) + ".png");
}

function doesFileExist(urlToFile) {
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();
     
    if (xhr.status == "404") {
        return false;
    } else {
        return true;
    }
}

function changeFloor(obj){
    var id = '#selected_wall';
    var image_url = changeImgSrc(obj, id) + ".png";

    if(doesFileExist(image_url)){
        $(id).attr('src', image_url);
    }else{
        var adr = image_url.split("/");
        adr = adr.splice(0,adr.length-1);
        $(id).attr('src', adr.join("/") + "/" + defFloor + ".png");
    }
}

function changeHandle(obj){
    var id = '#selected_handle';
    $(id).attr('src', changeImgSrc(obj, id) + ".png");
}

function changeRoom(obj){
    var id = '#selected_room';
    $(id).attr('src', changeImgSrc(obj, id) + ".png");
}

function changeImgSrc(obj, id){
    var src = $(id).attr('src');
    var adr = src.split("/");
    adr = adr.splice(0,adr.length-1);
    var name = $(obj).attr('id').split("_").splice(-1,1);
    var newAdr = adr.join("/") + "/" + name;

    return newAdr;
}

function changeImgSrc2(obj, id, folder){
    var src = $(id).attr('src');
    var adr = src.split("/");
    adr = adr.splice(0,adr.length-2);
    var name = $(obj).attr('id').split("_");
    name.shift();
    name = name.join("_");
    var newAdr = adr.join("/") + "/" + folder + "/" + name;

    return newAdr;
}

//hide left side if left is open (used when canvas is regenerate)
function hideLeftIfAllShown(){
    if(leftSectionOpen){
        setTimeout(function(){
            $('#room_section_openclose_btn').click(); 
        }, 500);
    }
}

function generateCanvas(){

    var materialSrc = $('#selected_material').attr('src');
    var doorSrc = $('#selected_door').attr('src');
    var roomSrc = $('#selected_room').attr('src');
    var doorFrameSrc = "./images/zarubna/"+doorOrientation+".png";
    var wallSrc = $('#selected_wall').attr('src');
    var handleSrc = $('#selected_handle').attr('src');
    var textureSrc = "./images/walls/structure.jpg"
	
	if(frontSameAsBack){
		materialSrc = materialSrc.replace("/front/","/back/");
	}

    if(doorOrientation === "back"){
        let position = handleSrc.lastIndexOf('.');
        handleSrc = [handleSrc.slice(0, position), "-back", handleSrc.slice(position)].join('');
    }

    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");
    var texture = new Image();
    var wall = new Image();
    var room = new Image();
    var material = new Image();
    var door = new Image();
    var frame = new Image();
    var handle = new Image();

    $('#loading').removeClass('hide');
    hideLeftIfAllShown();

    texture.src = textureSrc;
    texture.onload = function(){
        wall.src = wallSrc;
        wall.onload = function(){
            room.src = roomSrc;
            room.onload = function(){
                material.src = materialSrc;
                material.onload = function() {
                    door.src = doorSrc;
                    door.onload = function() {
                        frame.src = doorFrameSrc;
                        frame.onload = function() {
                            handle.src = handleSrc;
                            handle.onload = function() {
                                ctx.drawImage(texture, 0, 0, imageWidth, imageHeight);
                                ctx.drawImage(wall, 0, 0, imageWidth, imageHeight);
                                ctx.drawImage(room, 0, 0, imageWidth, imageHeight);
                                ctx.drawImage(material,317,185,322,690);                           
                                ctx.drawImage(door,317,185,322,690);
                                
                                if(frameColorImg!=""){
                                    var frameColor = new Image();
                                    frameColor.src = frameColorImg;
                                    frameColor.onload = function(){
                                        ctx.drawImage(frameColor,317,185,322,690);
                                        ctx.drawImage(frame,317,185,322,690);
                                        ctx.drawImage(handle,317,185,322,690);

                                        loadEqImagesCanvas(c,ctx,0);

                                    }
                                }else{
                                    ctx.drawImage(frame,317,185,322,690);
                                    //var img = c.toDataURL("image/png");
                                    ctx.drawImage(handle,317,185,322,690);

                                    loadEqImagesCanvas(c,ctx,0);

                                }
                            }                
                        }
                    }
                }
            }
        }
    };
}

function finalizeCanvas(c){

    var data = c.toDataURL();
    var myElement = document.getElementById('content_back');
    
    myElement.style.backgroundImage = 'url('+data+')';

    $('#loading').addClass('hide');
}

function loadEqImagesCanvas(c,ctx,idx){

    if(equipments.length > idx){

        var eqPath = $('#equipment_path')[0].innerHTML + "/big/" + doorOrientation + "/";
        if(eqPath.indexOf("./") == 0){
            eqPath = eqPath.substr(1);
        }

        let pathname = window.location.pathname.substr(0, window.location.pathname.lastIndexOf('/')+1);
        var fullPath = window.location.origin + pathname + eqPath + equipments[idx]["id"] + ".png";
        if(fileExists(fullPath)){
            var image = new Image();
            image.src = fullPath
            image.onload = function(){
                ctx.drawImage(image,317,185,322,690);
                loadEqImagesCanvas(c,ctx,idx+1);
            }
        }
        else{
            loadEqImagesCanvas(c,ctx,idx+1);
        }
        
    }else{
        finalizeCanvas(c);
    }
    
}

function fileExists(image_url){

    var http = new XMLHttpRequest();

    http.open('HEAD', image_url, false);
    http.send();

    return http.status != 404;

}

function updateCanvasSize(){
    $("#content_back").attr("width", document.body.clientWidth);
    $("#content_back").attr("height", document.body.clientHeight);
}

function setBoldTextDoorDesc(){
    if(doorOrientation === "front"){
        $("#desc_text_front").addClass("bold-text");
        $("#desc_text_back").removeClass("bold-text");
    }else{
        $("#desc_text_back").addClass("bold-text");
        $("#desc_text_front").removeClass("bold-text");
    }
}

// door selection clicked - door
    $(document).ready(function(){
        $(".doors .door .door-img").click(function(){
            if($(this).attr('class')=="door-img desel") {
                $('#loading').removeClass('hide');

                $(".doors .door .door-img").attr('class', 'door-img desel');
                var id = $("img", this).attr('id');
                //$(".doors .door-text").attr('class', 'door-text hidden');
                var sellector = ".doors #" + id + "-text";
                $(sellector).attr('class', 'door-text shown');
                $(this).attr('class', 'door-img sel');

                if(id=="s2"){
                    doorOrientation = "back";
                }else{
                    doorOrientation = "front";                    
                }

                setBoldTextDoorDesc();

                let el = $("#farba_zarubne .item a.sel .material-img")
                frameColorImg = "./images/zarubna/colored/" + doorOrientation +"/"+ el[0].id + ".png";

                /* if(id=="s3"){
                    $("#farba_zarubne").attr('class','shown');
                    
                    var el = $("#farba_zarubne .material-img")[0];
                    frameColorImg = "./images/zarubna/colored/" + el.id + ".png";
                }else{
                    $("#farba_zarubne").attr('class','');
                    frameColorImg = "";
                } */

                changeMaterial($("#door_materials .item .sel"));
                
                //setTimeout(function(){
                    generateCanvas();
                //}, 800)
            }
        });

        $("#farba_zarubne .item a").click(function(){
            var el = $(this).find('.material-img');
            frameColorImg = "./images/zarubna/colored/" + doorOrientation +"/"+ el[0].id + ".png";

            if(this.class != "sel"){
                $("#farba_zarubne .sel").attr('class','desel');
                
                $(this).attr('class','sel');
            }

            generateCanvas();
        });

        //nacitaj defaultnu zaruben
        var selFrameColors = $("#farba_zarubne .item .sel");
        if(selFrameColors != null){
            var selFrameColor = selFrameColors[0];
            var selFrameID = $(selFrameColor).find('.material-img')[0].id;
            if(selFrameID != null){
                frameColorImg = "./images/zarubna/colored/" + doorOrientation +"/"+ selFrameID + ".png";
            }
        }
    });

// door selection clicked - material
    $(document).ready(function(){
        $("#door_materials .item a").click(function(){
            if($(this).attr('class')=="desel") {
                $("#door_materials .item a").attr('class', 'desel');
                $(this).attr('class', 'sel');
                changeMaterial(this);
                if(checkIsDefaultFloor()){
                    changeFloor(this);
                }
                generateCanvas();
            }
        });
    });

// door selection clicked - handle/equpments
$(document).ready(function(){
    /* $("#handle_types .item a").click(function(){
        if($(this).attr('class')=="desel") {
            $("#handle_types .item a").attr('class', 'desel');
            $(this).attr('class', 'sel');
            changeHandle(this);
            generateCanvas();
        }
    }); */

    $("#equipment_types .item a:not(.handle)").click(function(){

        if($(this).hasClass("desel")){
            let addItem = {}
            addItem["id"] = $(this).attr('id').split("_").splice(-1,1)[0];
            addItem["groupe"] = $(this).attr('eq-groupe');

            $(this).removeClass("desel");
            deselEqupmentsByGroupe(addItem["groupe"]);
            removeFromEquipmentsByGroupe(addItem["groupe"]);
            $(this).addClass('sel');
            equipments.push(addItem);
        }else{
            $(this).removeClass("sel");
            $(this).addClass('desel');
            let removeItem = $(this).attr('id').split("_").splice(-1,1)[0];
            removeFromEquipments(removeItem);
        }
        generateCanvas();

    });

    $("#equipment_types .item a.handle").click(function(){
        $("#equipment_types .item a.handle.sel").removeClass('sel').addClass('desel');
        $(this).removeClass('desel').addClass('sel');
        changeHandle(this);
        generateCanvas();
    });
});

function deselEqupmentsByGroupe(groupe){
    $("#equipment_types .item a.sel").each(async function(index, element){
        if($(element).attr('eq-groupe') == groupe){
            $(element).removeClass("sel");
            $(element).addClass("desel");
        }
    });
}

function removeFromEquipmentsByGroupe(groupe){
    equipments = jQuery.grep(equipments, function(value) {
        let res = value["groupe"] != groupe;
        return res;
    });
    equipments;
}

function removeFromEquipments(id){
    equipments = jQuery.grep(equipments, function(value) {
            let res = value["id"] != id;
            return res;
        });
        equipments;
}

// room selection clicked - category
$(document).ready(function(){
    $(".categories a").click(function(){
        var id = $(".room .sel").attr('id').split('_')[1];
        $(this).attr('href', this.href + "&room=" + id);
    });
});

// room selection clicked - room
$(document).ready(function(){
    $(".rooms_container .room a").click(function(){
        if($(this).attr('class')=="desel") {
            $(".rooms_container .room a").attr('class', 'desel');
            $(this).attr('class', 'sel');
            changeRoom(this);
            generateCanvas();
        }
    });
});

function checkIsDefaultFloor(){
    var isDefaultFloor = $("#floor_materials .item .sel").attr('id')=="floor_default";
    return isDefaultFloor;
}

// room selection clicked - floor
$(document).ready(function(){
    $("#floor_materials .item a").click(function(){
        if($(this).attr('class')=="desel") {
            $("#floor_materials .item a").attr('class', 'desel');
            $(this).attr('class', 'sel');
            var id = $(this).attr('id');
            if(checkIsDefaultFloor()){
                changeFloor($("#door_materials .item .sel"));
            }else{
                changeFloor(this);
            }
            generateCanvas();
        }
    });
});

    // section animation

function hideLeftSide(leftSide){
    if(!rightSectionOpen){
        leftSide.addClass('disappear');
    }else{
        leftSide.removeClass('disappear');
    }
}

$(document).ready(function(){
    var leftSide = $(".left_side"),
    doorSection = $(".door_selection_container.selection_container"),
    doorBtn = $("#door_section_side_btn .side_btn_img"),
    roomSection = $(".room_selection_container.selection_container"),
    roomBtn = $("#room_section_openclose_btn .openclose_btn_img");

    function moveLeft(){
        roomSection.toggleClass('moveLeft');
        leftSectionOpen = !leftSectionOpen;
        roomSection.scroll();
    
        var btn = roomSection.find('.section_openclose_btn');
        //btn.css('margin-right', '0');
        setTimeout(function(){
            btn.css('margin-right', '');
        }, hideDuration)
    
        setTimeout(function(){
            roomBtn.toggleClass('rotateRight');
            hideLeftSide(leftSide);
        }, 450)
    }

    function changeOpenCloseText(show){
        $("#opencloseTextLong").addClass("hide");
        $("#opencloseTextShort").addClass("hide");
        $(show).removeClass("hide");
    }
    
    function moveRight(){
		doorSection.toggleClass('moveRight');
		
		if(rightSectionOpen){
            rightSectionOpen = !rightSectionOpen;
            doorSection.css( "overflow", "initial" );			
		}else{
			setTimeout(function(){
                doorSection.css( "overflow", "" );
                rightSectionOpen = !rightSectionOpen;
                changeOpenCloseText("#opencloseTextShort");
                setMarginOnBackLink()
                hideLeftSide(leftSide);
                doorSection.scroll();
			}, hideDuration)
        }
		
		doorSection.scroll();
		
        setTimeout(function(){
            doorBtn.toggleClass('rotateLeft');
            changeOpenCloseText("#opencloseTextLong");
            setMarginOnBackLink()
        }, 450)  
    }

    $("#door_section_side_btn").click(function(){
        moveRight();
    });

    $("#backLink_btn_text_area").on("click", function(event){
        //disable posunu
        event.stopPropagation();
    });

    $("#room_section_openclose_btn").click(function(){
        moveLeft();
    });

    //swipe right
    $(".door_selection_container").swipe( {
        swipeRight:function(event, direction, distance, duration, fingerCount) {
            if(rightSectionOpen){
                moveRight();
            }
        }
    });
    //swipe left
    $(".door_selection_container").swipe( {
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
            if(!rightSectionOpen){
                moveRight();
            }
        }
    });

    //swipe left
    $(".room_selection_container").swipe( {
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
            if(leftSectionOpen){
                moveLeft();
            }
        }
    });
    //swipe right
    $(".room_selection_container").swipe( {
        swipeRight:function(event, direction, distance, duration, fingerCount) {
            if(!leftSectionOpen){
                moveLeft();
            }
        }
    });

    $(".selection_container").scroll(function(){
        var fromTop = $(this).scrollTop();
        var btn = $(this).find(".section_side_btn");
        var id = btn.attr('id').split('_')[0];
        
        if(id=="room" && !leftSectionOpen){
            btn.css("top", fromTop + "px");
        }else if(id=="door" && !rightSectionOpen){
            btn.css("top", fromTop + "px");
        }else{

                btn.css("top", '');

        }
        
     });
});

//under-door text position
function updateTextAndLoadingPosition(){
    var underDoorElement = $('#under_door');
    var loadingElement = $('#loading .loading_img');

    var windowHeight = document.body.clientHeight;
    var windowWidth = document.body.clientWidth;

    var windowRatio = windowHeight/windowWidth;

    if(windowRatio >= imageRatio){
        var widthtOfImg = windowHeight/imageRatio;
        var widthOfDoor = widthtOfImg * 0.255;
        var leftPosition = widthtOfImg * 0.12;
        var widthOfDoorL = widthtOfImg * 0.135;
        var leftPositionL = widthtOfImg * 0.18;
        underDoorElement.css('width',widthOfDoor+'px');

        underDoorElement.css('top','');
        underDoorElement.css('left',leftPosition + 'px');
        underDoorElement.css('bottom','');

        loadingElement.css('width',widthOfDoorL + 'px');
        loadingElement.css('margin-left',(leftPositionL+15) + 'px');
 
    } else{
        //var imageMinHeight = windowWidth * imageRatio;
        //underDoorElement.css('top',imageMinHeight*0.88 + 'px');
        var widthOfDoor = windowWidth * 0.135;
        underDoorElement.css('width',widthOfDoor+'px');
        underDoorElement.css('top','unset');
        underDoorElement.css('left','');
        underDoorElement.css('bottom','20px');

        loadingElement.css('width',widthOfDoorL + 'px');
        loadingElement.css('margin-left','55%');
    }

    fitty('.under_door .price_container',{
        minSize: 13
    });
    fitty('#under_door_desc',{
        minSize: 11
    });
    
}

function showAPNGIfPossible(){
    //if(supportAPNG()){
    if(false){
        var element = $("#loading img");
        var src = element.attr('src').split('.');
        var newSrc = src.splice(0,src.length-1).join(".") + ".png";
        element.attr('src', newSrc);
    }
}

// farba zarubne height
function farbaZarubneHeight(){
    var els = $(".doors_container .doors .door .sel img")[0];
    var height = els.clientHeight/4;

    els = $(".doors_container .material_z");

    Array.prototype.forEach.call(els, function(el) {
        el.style.height = height;
    });
}

//sirka textoeho pola pri dverech
function sirkaTextovehoPola(){
    $(".doors_container .doors .door-text-down").removeAttr('style');
    var width = $(".doors_container .doors .shown .door-text-down").width();

    $(".doors_container .doors .door-text-down").css({"min-width": width + "px"});
}

//nastavenie posunutia backLink tlacidla
function setMarginOnBackLink(){
    let height = $("#openClose_btn_text_area").outerHeight();
    $("#backLink_btn_text_area").css('margin-top', (height + 8)+'px');
}

//on load

$(document).ready(function(){
    showMobileAlert();

    showAPNGIfPossible();

    hideDuration = parseFloat($('.selection_container').css('transition-duration'))*1000;

    updateTextAndLoadingPosition();

    if(checkIsDefaultFloor()){
        changeFloor($("#door_materials .item .sel"));
    }
    generateCanvas();
    updateCanvasSize();
    sirkaTextovehoPola();
    setMarginOnBackLink();
    setBoldTextDoorDesc();
});

$(window).bind("load", function() {
    farbaZarubneHeight();
 });

//on resize

$(window).resize(function() {
    updateCanvasSize();
    updateTextAndLoadingPosition();
    farbaZarubneHeight();
    sirkaTextovehoPola();
    setMarginOnBackLink()
});