gdjs.BaseCode = {};
gdjs.BaseCode.GDsuelofalsoObjects1= [];
gdjs.BaseCode.GDsuelofalsoObjects2= [];
gdjs.BaseCode.GDsuelofalsoObjects3= [];
gdjs.BaseCode.GDLeftButtonObjects1= [];
gdjs.BaseCode.GDLeftButtonObjects2= [];
gdjs.BaseCode.GDLeftButtonObjects3= [];
gdjs.BaseCode.GDRightButtonObjects1= [];
gdjs.BaseCode.GDRightButtonObjects2= [];
gdjs.BaseCode.GDRightButtonObjects3= [];
gdjs.BaseCode.GDJumpButtonObjects1= [];
gdjs.BaseCode.GDJumpButtonObjects2= [];
gdjs.BaseCode.GDJumpButtonObjects3= [];
gdjs.BaseCode.GDArrowButtonsBgObjects1= [];
gdjs.BaseCode.GDArrowButtonsBgObjects2= [];
gdjs.BaseCode.GDArrowButtonsBgObjects3= [];
gdjs.BaseCode.GDMiplayerObjects1= [];
gdjs.BaseCode.GDMiplayerObjects2= [];
gdjs.BaseCode.GDMiplayerObjects3= [];

gdjs.BaseCode.conditionTrue_0 = {val:false};
gdjs.BaseCode.condition0IsTrue_0 = {val:false};
gdjs.BaseCode.condition1IsTrue_0 = {val:false};


gdjs.BaseCode.eventsList0x6d8548 = function(runtimeScene) {

{

gdjs.BaseCode.GDMiplayerObjects2.createFrom(gdjs.BaseCode.GDMiplayerObjects1);


gdjs.BaseCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BaseCode.GDMiplayerObjects2.length;i<l;++i) {
    if ( !(gdjs.BaseCode.GDMiplayerObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.BaseCode.condition0IsTrue_0.val = true;
        gdjs.BaseCode.GDMiplayerObjects2[k] = gdjs.BaseCode.GDMiplayerObjects2[i];
        ++k;
    }
}
gdjs.BaseCode.GDMiplayerObjects2.length = k;}if (gdjs.BaseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BaseCode.GDMiplayerObjects2 */
{for(var i = 0, len = gdjs.BaseCode.GDMiplayerObjects2.length ;i < len;++i) {
    gdjs.BaseCode.GDMiplayerObjects2[i].setAnimation(2);
}
}}

}


{

/* Reuse gdjs.BaseCode.GDMiplayerObjects1 */

gdjs.BaseCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BaseCode.GDMiplayerObjects1.length;i<l;++i) {
    if ( gdjs.BaseCode.GDMiplayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.BaseCode.condition0IsTrue_0.val = true;
        gdjs.BaseCode.GDMiplayerObjects1[k] = gdjs.BaseCode.GDMiplayerObjects1[i];
        ++k;
    }
}
gdjs.BaseCode.GDMiplayerObjects1.length = k;}if (gdjs.BaseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BaseCode.GDMiplayerObjects1 */
{for(var i = 0, len = gdjs.BaseCode.GDMiplayerObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDMiplayerObjects1[i].setAnimation(0);
}
}}

}


}; //End of gdjs.BaseCode.eventsList0x6d8548
gdjs.BaseCode.mapOfGDgdjs_46BaseCode_46GDLeftButtonObjects1Objects = Hashtable.newFrom({"LeftButton": gdjs.BaseCode.GDLeftButtonObjects1});gdjs.BaseCode.mapOfGDgdjs_46BaseCode_46GDRightButtonObjects1Objects = Hashtable.newFrom({"RightButton": gdjs.BaseCode.GDRightButtonObjects1});gdjs.BaseCode.mapOfGDgdjs_46BaseCode_46GDJumpButtonObjects1Objects = Hashtable.newFrom({"JumpButton": gdjs.BaseCode.GDJumpButtonObjects1});gdjs.BaseCode.eventsList0xb1208 = function(runtimeScene) {

{


gdjs.BaseCode.condition0IsTrue_0.val = false;
{
gdjs.BaseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.BaseCode.condition0IsTrue_0.val) {
gdjs.BaseCode.GDsuelofalsoObjects1.createFrom(runtimeScene.getObjects("suelofalso"));
{for(var i = 0, len = gdjs.BaseCode.GDsuelofalsoObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDsuelofalsoObjects1[i].hide();
}
}}

}


{


{
}

}


{



}


{

gdjs.BaseCode.GDMiplayerObjects1.createFrom(runtimeScene.getObjects("Miplayer"));

gdjs.BaseCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BaseCode.GDMiplayerObjects1.length;i<l;++i) {
    if ( gdjs.BaseCode.GDMiplayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.BaseCode.condition0IsTrue_0.val = true;
        gdjs.BaseCode.GDMiplayerObjects1[k] = gdjs.BaseCode.GDMiplayerObjects1[i];
        ++k;
    }
}
gdjs.BaseCode.GDMiplayerObjects1.length = k;}if (gdjs.BaseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BaseCode.GDMiplayerObjects1 */
{for(var i = 0, len = gdjs.BaseCode.GDMiplayerObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDMiplayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.BaseCode.GDMiplayerObjects1.createFrom(runtimeScene.getObjects("Miplayer"));

gdjs.BaseCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BaseCode.GDMiplayerObjects1.length;i<l;++i) {
    if ( gdjs.BaseCode.GDMiplayerObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.BaseCode.condition0IsTrue_0.val = true;
        gdjs.BaseCode.GDMiplayerObjects1[k] = gdjs.BaseCode.GDMiplayerObjects1[i];
        ++k;
    }
}
gdjs.BaseCode.GDMiplayerObjects1.length = k;}if (gdjs.BaseCode.condition0IsTrue_0.val) {
/* Reuse gdjs.BaseCode.GDMiplayerObjects1 */
{for(var i = 0, len = gdjs.BaseCode.GDMiplayerObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDMiplayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.BaseCode.GDMiplayerObjects1.createFrom(runtimeScene.getObjects("Miplayer"));

gdjs.BaseCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.BaseCode.GDMiplayerObjects1.length;i<l;++i) {
    if ( gdjs.BaseCode.GDMiplayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.BaseCode.condition0IsTrue_0.val = true;
        gdjs.BaseCode.GDMiplayerObjects1[k] = gdjs.BaseCode.GDMiplayerObjects1[i];
        ++k;
    }
}
gdjs.BaseCode.GDMiplayerObjects1.length = k;}if (gdjs.BaseCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.BaseCode.eventsList0x6d8548(runtimeScene);} //End of subevents
}

}


{


gdjs.BaseCode.condition0IsTrue_0.val = false;
{
gdjs.BaseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.BaseCode.condition0IsTrue_0.val) {
gdjs.BaseCode.GDMiplayerObjects1.createFrom(runtimeScene.getObjects("Miplayer"));
{for(var i = 0, len = gdjs.BaseCode.GDMiplayerObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDMiplayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.BaseCode.condition0IsTrue_0.val = false;
{
gdjs.BaseCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.BaseCode.condition0IsTrue_0.val) {
gdjs.BaseCode.GDMiplayerObjects1.createFrom(runtimeScene.getObjects("Miplayer"));
{for(var i = 0, len = gdjs.BaseCode.GDMiplayerObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDMiplayerObjects1[i].flipX(false);
}
}}

}


{



}


{


{
gdjs.BaseCode.GDMiplayerObjects1.createFrom(runtimeScene.getObjects("Miplayer"));
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.BaseCode.GDMiplayerObjects1.length === 0 ) ? 0 :gdjs.BaseCode.GDMiplayerObjects1[0].getPointX(""))+100, "", 0);
}}

}


{



}


{


gdjs.BaseCode.condition0IsTrue_0.val = false;
{
gdjs.BaseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.BaseCode.condition0IsTrue_0.val) {
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


gdjs.BaseCode.condition0IsTrue_0.val = false;
{
gdjs.BaseCode.condition0IsTrue_0.val = !(gdjs.evtTools.systemInfo.isMobile());
}if (gdjs.BaseCode.condition0IsTrue_0.val) {
gdjs.BaseCode.GDArrowButtonsBgObjects1.createFrom(runtimeScene.getObjects("ArrowButtonsBg"));
gdjs.BaseCode.GDJumpButtonObjects1.createFrom(runtimeScene.getObjects("JumpButton"));
gdjs.BaseCode.GDLeftButtonObjects1.createFrom(runtimeScene.getObjects("LeftButton"));
gdjs.BaseCode.GDRightButtonObjects1.createFrom(runtimeScene.getObjects("RightButton"));
{for(var i = 0, len = gdjs.BaseCode.GDLeftButtonObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDLeftButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.BaseCode.GDRightButtonObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDRightButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.BaseCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDJumpButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.BaseCode.GDArrowButtonsBgObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDArrowButtonsBgObjects1[i].hide();
}
}}

}


{


gdjs.BaseCode.condition0IsTrue_0.val = false;
{
gdjs.BaseCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.BaseCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}}

}


{

gdjs.BaseCode.GDLeftButtonObjects1.createFrom(runtimeScene.getObjects("LeftButton"));

gdjs.BaseCode.condition0IsTrue_0.val = false;
{
gdjs.BaseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.BaseCode.mapOfGDgdjs_46BaseCode_46GDLeftButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.BaseCode.condition0IsTrue_0.val) {
gdjs.BaseCode.GDMiplayerObjects1.createFrom(runtimeScene.getObjects("Miplayer"));
{for(var i = 0, len = gdjs.BaseCode.GDMiplayerObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDMiplayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.BaseCode.GDMiplayerObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDMiplayerObjects1[i].flipX(true);
}
}}

}


{

gdjs.BaseCode.GDRightButtonObjects1.createFrom(runtimeScene.getObjects("RightButton"));

gdjs.BaseCode.condition0IsTrue_0.val = false;
{
gdjs.BaseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.BaseCode.mapOfGDgdjs_46BaseCode_46GDRightButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.BaseCode.condition0IsTrue_0.val) {
gdjs.BaseCode.GDMiplayerObjects1.createFrom(runtimeScene.getObjects("Miplayer"));
{for(var i = 0, len = gdjs.BaseCode.GDMiplayerObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDMiplayerObjects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.BaseCode.GDMiplayerObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDMiplayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.BaseCode.GDJumpButtonObjects1.createFrom(runtimeScene.getObjects("JumpButton"));

gdjs.BaseCode.condition0IsTrue_0.val = false;
{
gdjs.BaseCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.BaseCode.mapOfGDgdjs_46BaseCode_46GDJumpButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.BaseCode.condition0IsTrue_0.val) {
gdjs.BaseCode.GDMiplayerObjects1.createFrom(runtimeScene.getObjects("Miplayer"));
{for(var i = 0, len = gdjs.BaseCode.GDMiplayerObjects1.length ;i < len;++i) {
    gdjs.BaseCode.GDMiplayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


}; //End of gdjs.BaseCode.eventsList0xb1208


gdjs.BaseCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.BaseCode.GDsuelofalsoObjects1.length = 0;
gdjs.BaseCode.GDsuelofalsoObjects2.length = 0;
gdjs.BaseCode.GDsuelofalsoObjects3.length = 0;
gdjs.BaseCode.GDLeftButtonObjects1.length = 0;
gdjs.BaseCode.GDLeftButtonObjects2.length = 0;
gdjs.BaseCode.GDLeftButtonObjects3.length = 0;
gdjs.BaseCode.GDRightButtonObjects1.length = 0;
gdjs.BaseCode.GDRightButtonObjects2.length = 0;
gdjs.BaseCode.GDRightButtonObjects3.length = 0;
gdjs.BaseCode.GDJumpButtonObjects1.length = 0;
gdjs.BaseCode.GDJumpButtonObjects2.length = 0;
gdjs.BaseCode.GDJumpButtonObjects3.length = 0;
gdjs.BaseCode.GDArrowButtonsBgObjects1.length = 0;
gdjs.BaseCode.GDArrowButtonsBgObjects2.length = 0;
gdjs.BaseCode.GDArrowButtonsBgObjects3.length = 0;
gdjs.BaseCode.GDMiplayerObjects1.length = 0;
gdjs.BaseCode.GDMiplayerObjects2.length = 0;
gdjs.BaseCode.GDMiplayerObjects3.length = 0;

gdjs.BaseCode.eventsList0xb1208(runtimeScene);
return;
}
gdjs['BaseCode'] = gdjs.BaseCode;
