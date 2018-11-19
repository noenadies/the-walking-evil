gdjs.Sn1Code = {};
gdjs.Sn1Code.GDsuelofalsoObjects1= [];
gdjs.Sn1Code.GDsuelofalsoObjects2= [];
gdjs.Sn1Code.GDsuelofalsoObjects3= [];
gdjs.Sn1Code.GDArrowButtonsBgObjects1= [];
gdjs.Sn1Code.GDArrowButtonsBgObjects2= [];
gdjs.Sn1Code.GDArrowButtonsBgObjects3= [];
gdjs.Sn1Code.GDLeftButtonObjects1= [];
gdjs.Sn1Code.GDLeftButtonObjects2= [];
gdjs.Sn1Code.GDLeftButtonObjects3= [];
gdjs.Sn1Code.GDRightButtonObjects1= [];
gdjs.Sn1Code.GDRightButtonObjects2= [];
gdjs.Sn1Code.GDRightButtonObjects3= [];
gdjs.Sn1Code.GDJumpButtonObjects1= [];
gdjs.Sn1Code.GDJumpButtonObjects2= [];
gdjs.Sn1Code.GDJumpButtonObjects3= [];
gdjs.Sn1Code.GDCopyOfMiplayerObjects1= [];
gdjs.Sn1Code.GDCopyOfMiplayerObjects2= [];
gdjs.Sn1Code.GDCopyOfMiplayerObjects3= [];
gdjs.Sn1Code.GDMiplayerObjects1= [];
gdjs.Sn1Code.GDMiplayerObjects2= [];
gdjs.Sn1Code.GDMiplayerObjects3= [];
gdjs.Sn1Code.GDNewObjectObjects1= [];
gdjs.Sn1Code.GDNewObjectObjects2= [];
gdjs.Sn1Code.GDNewObjectObjects3= [];
gdjs.Sn1Code.GDlluvia2Objects1= [];
gdjs.Sn1Code.GDlluvia2Objects2= [];
gdjs.Sn1Code.GDlluvia2Objects3= [];

gdjs.Sn1Code.conditionTrue_0 = {val:false};
gdjs.Sn1Code.condition0IsTrue_0 = {val:false};
gdjs.Sn1Code.condition1IsTrue_0 = {val:false};
gdjs.Sn1Code.conditionTrue_1 = {val:false};
gdjs.Sn1Code.condition0IsTrue_1 = {val:false};
gdjs.Sn1Code.condition1IsTrue_1 = {val:false};


gdjs.Sn1Code.eventsList0x681af0 = function(runtimeScene) {

{

gdjs.Sn1Code.GDMiplayerObjects2.createFrom(gdjs.Sn1Code.GDMiplayerObjects1);


gdjs.Sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Sn1Code.GDMiplayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Sn1Code.GDMiplayerObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Sn1Code.condition0IsTrue_0.val = true;
        gdjs.Sn1Code.GDMiplayerObjects2[k] = gdjs.Sn1Code.GDMiplayerObjects2[i];
        ++k;
    }
}
gdjs.Sn1Code.GDMiplayerObjects2.length = k;}if (gdjs.Sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Sn1Code.GDMiplayerObjects2 */
{for(var i = 0, len = gdjs.Sn1Code.GDMiplayerObjects2.length ;i < len;++i) {
    gdjs.Sn1Code.GDMiplayerObjects2[i].setAnimation(2);
}
}}

}


{

/* Reuse gdjs.Sn1Code.GDMiplayerObjects1 */

gdjs.Sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Sn1Code.GDMiplayerObjects1.length;i<l;++i) {
    if ( gdjs.Sn1Code.GDMiplayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Sn1Code.condition0IsTrue_0.val = true;
        gdjs.Sn1Code.GDMiplayerObjects1[k] = gdjs.Sn1Code.GDMiplayerObjects1[i];
        ++k;
    }
}
gdjs.Sn1Code.GDMiplayerObjects1.length = k;}if (gdjs.Sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Sn1Code.GDMiplayerObjects1 */
{for(var i = 0, len = gdjs.Sn1Code.GDMiplayerObjects1.length ;i < len;++i) {
    gdjs.Sn1Code.GDMiplayerObjects1[i].setAnimation(0);
}
}}

}


}; //End of gdjs.Sn1Code.eventsList0x681af0
gdjs.Sn1Code.mapOfGDgdjs_46Sn1Code_46GDLeftButtonObjects1Objects = Hashtable.newFrom({"LeftButton": gdjs.Sn1Code.GDLeftButtonObjects1});gdjs.Sn1Code.mapOfGDgdjs_46Sn1Code_46GDRightButtonObjects1Objects = Hashtable.newFrom({"RightButton": gdjs.Sn1Code.GDRightButtonObjects1});gdjs.Sn1Code.mapOfGDgdjs_46Sn1Code_46GDJumpButtonObjects1Objects = Hashtable.newFrom({"JumpButton": gdjs.Sn1Code.GDJumpButtonObjects1});gdjs.Sn1Code.eventsList0x6d1be8 = function(runtimeScene) {

{


{
}

}


}; //End of gdjs.Sn1Code.eventsList0x6d1be8
gdjs.Sn1Code.eventsList0xb1208 = function(runtimeScene) {

{


gdjs.Sn1Code.condition0IsTrue_0.val = false;
{
gdjs.Sn1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Sn1Code.condition0IsTrue_0.val) {
gdjs.Sn1Code.GDMiplayerObjects1.createFrom(runtimeScene.getObjects("Miplayer"));
gdjs.Sn1Code.GDsuelofalsoObjects1.createFrom(runtimeScene.getObjects("suelofalso"));
{for(var i = 0, len = gdjs.Sn1Code.GDMiplayerObjects1.length ;i < len;++i) {
    gdjs.Sn1Code.GDMiplayerObjects1[i].setScale(1.2);
}
}{for(var i = 0, len = gdjs.Sn1Code.GDsuelofalsoObjects1.length ;i < len;++i) {
    gdjs.Sn1Code.GDsuelofalsoObjects1[i].hide();
}
}}

}


{


gdjs.Sn1Code.condition0IsTrue_0.val = false;
{
{gdjs.Sn1Code.conditionTrue_1 = gdjs.Sn1Code.condition0IsTrue_0;
gdjs.Sn1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7166460);
}
}if (gdjs.Sn1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "..\\sonidos\\sn1\\rainx.mp3", true, 100, 1);
}}

}


{



}


{

gdjs.Sn1Code.GDMiplayerObjects1.createFrom(runtimeScene.getObjects("Miplayer"));

gdjs.Sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Sn1Code.GDMiplayerObjects1.length;i<l;++i) {
    if ( gdjs.Sn1Code.GDMiplayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Sn1Code.condition0IsTrue_0.val = true;
        gdjs.Sn1Code.GDMiplayerObjects1[k] = gdjs.Sn1Code.GDMiplayerObjects1[i];
        ++k;
    }
}
gdjs.Sn1Code.GDMiplayerObjects1.length = k;}if (gdjs.Sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Sn1Code.GDMiplayerObjects1 */
{for(var i = 0, len = gdjs.Sn1Code.GDMiplayerObjects1.length ;i < len;++i) {
    gdjs.Sn1Code.GDMiplayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.Sn1Code.GDMiplayerObjects1.createFrom(runtimeScene.getObjects("Miplayer"));

gdjs.Sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Sn1Code.GDMiplayerObjects1.length;i<l;++i) {
    if ( gdjs.Sn1Code.GDMiplayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Sn1Code.condition0IsTrue_0.val = true;
        gdjs.Sn1Code.GDMiplayerObjects1[k] = gdjs.Sn1Code.GDMiplayerObjects1[i];
        ++k;
    }
}
gdjs.Sn1Code.GDMiplayerObjects1.length = k;}if (gdjs.Sn1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Sn1Code.GDMiplayerObjects1 */
{for(var i = 0, len = gdjs.Sn1Code.GDMiplayerObjects1.length ;i < len;++i) {
    gdjs.Sn1Code.GDMiplayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.Sn1Code.GDMiplayerObjects1.createFrom(runtimeScene.getObjects("Miplayer"));

gdjs.Sn1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Sn1Code.GDMiplayerObjects1.length;i<l;++i) {
    if ( gdjs.Sn1Code.GDMiplayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Sn1Code.condition0IsTrue_0.val = true;
        gdjs.Sn1Code.GDMiplayerObjects1[k] = gdjs.Sn1Code.GDMiplayerObjects1[i];
        ++k;
    }
}
gdjs.Sn1Code.GDMiplayerObjects1.length = k;}if (gdjs.Sn1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Sn1Code.eventsList0x681af0(runtimeScene);} //End of subevents
}

}


{


gdjs.Sn1Code.condition0IsTrue_0.val = false;
{
gdjs.Sn1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Sn1Code.condition0IsTrue_0.val) {
gdjs.Sn1Code.GDMiplayerObjects1.createFrom(runtimeScene.getObjects("Miplayer"));
{for(var i = 0, len = gdjs.Sn1Code.GDMiplayerObjects1.length ;i < len;++i) {
    gdjs.Sn1Code.GDMiplayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.Sn1Code.condition0IsTrue_0.val = false;
{
gdjs.Sn1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Sn1Code.condition0IsTrue_0.val) {
gdjs.Sn1Code.GDMiplayerObjects1.createFrom(runtimeScene.getObjects("Miplayer"));
{for(var i = 0, len = gdjs.Sn1Code.GDMiplayerObjects1.length ;i < len;++i) {
    gdjs.Sn1Code.GDMiplayerObjects1[i].flipX(false);
}
}}

}


{



}


{


{
gdjs.Sn1Code.GDMiplayerObjects1.createFrom(runtimeScene.getObjects("Miplayer"));
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.Sn1Code.GDMiplayerObjects1.length === 0 ) ? 0 :gdjs.Sn1Code.GDMiplayerObjects1[0].getPointX(""))+100, "", 0);
}}

}


{



}


{


gdjs.Sn1Code.condition0IsTrue_0.val = false;
{
gdjs.Sn1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Sn1Code.condition0IsTrue_0.val) {
}

}


{


{
}

}


{


{
}

}


{



}


{



}


{


{
}

}


{



}


{



}


{



}


{



}


{


{
}

}


{


{
}

}


{



}


{



}


{


{
}

}


{



}


{


gdjs.Sn1Code.condition0IsTrue_0.val = false;
{
gdjs.Sn1Code.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.Sn1Code.condition0IsTrue_0.val) {
gdjs.Sn1Code.GDArrowButtonsBgObjects1.createFrom(runtimeScene.getObjects("ArrowButtonsBg"));
gdjs.Sn1Code.GDJumpButtonObjects1.createFrom(runtimeScene.getObjects("JumpButton"));
gdjs.Sn1Code.GDLeftButtonObjects1.createFrom(runtimeScene.getObjects("LeftButton"));
gdjs.Sn1Code.GDRightButtonObjects1.createFrom(runtimeScene.getObjects("RightButton"));
{for(var i = 0, len = gdjs.Sn1Code.GDLeftButtonObjects1.length ;i < len;++i) {
    gdjs.Sn1Code.GDLeftButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.Sn1Code.GDRightButtonObjects1.length ;i < len;++i) {
    gdjs.Sn1Code.GDRightButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.Sn1Code.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.Sn1Code.GDJumpButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.Sn1Code.GDArrowButtonsBgObjects1.length ;i < len;++i) {
    gdjs.Sn1Code.GDArrowButtonsBgObjects1[i].hide();
}
}}

}


{


gdjs.Sn1Code.condition0IsTrue_0.val = false;
{
gdjs.Sn1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Sn1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}}

}


{

gdjs.Sn1Code.GDLeftButtonObjects1.createFrom(runtimeScene.getObjects("LeftButton"));

gdjs.Sn1Code.condition0IsTrue_0.val = false;
{
gdjs.Sn1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Sn1Code.mapOfGDgdjs_46Sn1Code_46GDLeftButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Sn1Code.condition0IsTrue_0.val) {
gdjs.Sn1Code.GDMiplayerObjects1.createFrom(runtimeScene.getObjects("Miplayer"));
{for(var i = 0, len = gdjs.Sn1Code.GDMiplayerObjects1.length ;i < len;++i) {
    gdjs.Sn1Code.GDMiplayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Sn1Code.GDMiplayerObjects1.length ;i < len;++i) {
    gdjs.Sn1Code.GDMiplayerObjects1[i].flipX(true);
}
}}

}


{

gdjs.Sn1Code.GDRightButtonObjects1.createFrom(runtimeScene.getObjects("RightButton"));

gdjs.Sn1Code.condition0IsTrue_0.val = false;
{
gdjs.Sn1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Sn1Code.mapOfGDgdjs_46Sn1Code_46GDRightButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Sn1Code.condition0IsTrue_0.val) {
gdjs.Sn1Code.GDMiplayerObjects1.createFrom(runtimeScene.getObjects("Miplayer"));
{for(var i = 0, len = gdjs.Sn1Code.GDMiplayerObjects1.length ;i < len;++i) {
    gdjs.Sn1Code.GDMiplayerObjects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.Sn1Code.GDMiplayerObjects1.length ;i < len;++i) {
    gdjs.Sn1Code.GDMiplayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.Sn1Code.GDJumpButtonObjects1.createFrom(runtimeScene.getObjects("JumpButton"));

gdjs.Sn1Code.condition0IsTrue_0.val = false;
{
gdjs.Sn1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Sn1Code.mapOfGDgdjs_46Sn1Code_46GDJumpButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Sn1Code.condition0IsTrue_0.val) {
gdjs.Sn1Code.GDMiplayerObjects1.createFrom(runtimeScene.getObjects("Miplayer"));
{for(var i = 0, len = gdjs.Sn1Code.GDMiplayerObjects1.length ;i < len;++i) {
    gdjs.Sn1Code.GDMiplayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


{

{ //Subevents
gdjs.Sn1Code.eventsList0x6d1be8(runtimeScene);} //End of subevents
}

}


{



}


{


{
}

}


}; //End of gdjs.Sn1Code.eventsList0xb1208


gdjs.Sn1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Sn1Code.GDsuelofalsoObjects1.length = 0;
gdjs.Sn1Code.GDsuelofalsoObjects2.length = 0;
gdjs.Sn1Code.GDsuelofalsoObjects3.length = 0;
gdjs.Sn1Code.GDArrowButtonsBgObjects1.length = 0;
gdjs.Sn1Code.GDArrowButtonsBgObjects2.length = 0;
gdjs.Sn1Code.GDArrowButtonsBgObjects3.length = 0;
gdjs.Sn1Code.GDLeftButtonObjects1.length = 0;
gdjs.Sn1Code.GDLeftButtonObjects2.length = 0;
gdjs.Sn1Code.GDLeftButtonObjects3.length = 0;
gdjs.Sn1Code.GDRightButtonObjects1.length = 0;
gdjs.Sn1Code.GDRightButtonObjects2.length = 0;
gdjs.Sn1Code.GDRightButtonObjects3.length = 0;
gdjs.Sn1Code.GDJumpButtonObjects1.length = 0;
gdjs.Sn1Code.GDJumpButtonObjects2.length = 0;
gdjs.Sn1Code.GDJumpButtonObjects3.length = 0;
gdjs.Sn1Code.GDCopyOfMiplayerObjects1.length = 0;
gdjs.Sn1Code.GDCopyOfMiplayerObjects2.length = 0;
gdjs.Sn1Code.GDCopyOfMiplayerObjects3.length = 0;
gdjs.Sn1Code.GDMiplayerObjects1.length = 0;
gdjs.Sn1Code.GDMiplayerObjects2.length = 0;
gdjs.Sn1Code.GDMiplayerObjects3.length = 0;
gdjs.Sn1Code.GDNewObjectObjects1.length = 0;
gdjs.Sn1Code.GDNewObjectObjects2.length = 0;
gdjs.Sn1Code.GDNewObjectObjects3.length = 0;
gdjs.Sn1Code.GDlluvia2Objects1.length = 0;
gdjs.Sn1Code.GDlluvia2Objects2.length = 0;
gdjs.Sn1Code.GDlluvia2Objects3.length = 0;

gdjs.Sn1Code.eventsList0xb1208(runtimeScene);
return;
}
gdjs['Sn1Code'] = gdjs.Sn1Code;
