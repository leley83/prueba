gx.evt.autoSkip=!1;gx.define("wwcaja",!1,function(){var n,t;this.ServerClass="wwcaja";this.PackageName="com.odontologia";this.setObjectType("web");this.anyGridBaseTable=!0;this.hasEnterEvent=!1;this.skipOnEnter=!1;this.autoRefresh=!0;this.fullAjax=!0;this.supportAjaxEvents=!0;this.ajaxSecurityToken=!0;this.SetStandaloneVars=function(){};this.Validv_Cajafecha=function(){return this.validCliEvt("Validv_Cajafecha",0,function(){try{var n=gx.util.balloon.getNew("vCAJAFECHA");if(this.AnyError=0,!(new gx.date.gxdate("").compare(this.AV11Cajafecha)===0||new gx.date.gxdate(this.AV11Cajafecha).compare(gx.date.ymdtod(1753,1,1))>=0))try{n.setError("Campo Cajafecha fuera de rango");this.AnyError=gx.num.trunc(1,0)}catch(t){}}catch(t){}try{return n==null?!0:n.show()}catch(t){}return!0})};this.e112d2_client=function(){return this.executeServerEvent("'DOINSERT'",!1,null,!1,!1)};this.e152d2_client=function(){return this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e162d2_client=function(){return this.executeServerEvent("CANCEL",!0,arguments[0],!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20,21,22,24,25,26,27,28,29,30,31];this.GXLastCtrlId=31;this.GridContainer=new gx.grid.grid(this,2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"wwcaja",[],!1,1,!1,!0,0,!0,!1,!1,"",0,"px",0,"px","Nueva fila",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1],!1,0,!0,!1);t=this.GridContainer;t.addSingleLineEdit(39,24,"CAJAID","ID","","Cajaid","int",0,"px",4,4,"right",null,[],39,"Cajaid",!0,0,!1,!1,"Attribute",1,"WWColumn WWOptionalColumn");t.addSingleLineEdit(40,25,"CAJAFECHA","Cajafecha","","Cajafecha","date",0,"px",8,8,"right",null,[],40,"Cajafecha",!0,0,!1,!1,"DescriptionAttribute",1,"WWColumn");t.addSingleLineEdit(41,26,"CAJACONCEPTO","Cajaconcepto","","Cajaconcepto","char",0,"px",20,20,"left",null,[],41,"Cajaconcepto",!0,0,!1,!1,"Attribute",1,"WWColumn WWOptionalColumn");t.addSingleLineEdit(42,27,"CAJAINGRESO","Cajaingreso","","Cajaingreso","decimal",0,"px",8,8,"right",null,[],42,"Cajaingreso",!0,2,!1,!1,"Attribute",1,"WWColumn WWOptionalColumn");t.addSingleLineEdit(43,28,"CAJAEGRESO","Cajaegreso","","Cajaegreso","decimal",0,"px",8,8,"right",null,[],43,"Cajaegreso",!0,2,!1,!1,"Attribute",1,"WWColumn WWOptionalColumn");t.addSingleLineEdit(44,29,"CAJAARQUEO","Cajaarqueo","","Cajaarqueo","decimal",0,"px",8,8,"right",null,[],44,"Cajaarqueo",!0,2,!1,!1,"Attribute",1,"WWColumn WWOptionalColumn");t.addSingleLineEdit("Update",30,"vUPDATE","","","Update","char",0,"px",20,20,"left",null,[],"Update","Update",!0,0,!1,!1,"TextActionAttribute",1,"WWTextActionColumn");t.addSingleLineEdit("Delete",31,"vDELETE","","","Delete","char",0,"px",20,20,"left",null,[],"Delete","Delete",!0,0,!1,!1,"TextActionAttribute",1,"WWTextActionColumn");this.GridContainer.emptyText="";this.setGrid(t);n[2]={id:2,fld:"",grid:0};n[3]={id:3,fld:"MAIN",grid:0};n[4]={id:4,fld:"",grid:0};n[5]={id:5,fld:"",grid:0};n[6]={id:6,fld:"GRIDTABLE",grid:0};n[7]={id:7,fld:"",grid:0};n[8]={id:8,fld:"",grid:0};n[10]={id:10,fld:"",grid:0};n[11]={id:11,fld:"",grid:0};n[12]={id:12,fld:"TITLETEXT",format:0,grid:0,ctrltype:"textblock"};n[13]={id:13,fld:"",grid:0};n[14]={id:14,fld:"",grid:0};n[15]={id:15,fld:"",grid:0};n[16]={id:16,fld:"BTNINSERT",grid:0,evt:"e112d2_client"};n[17]={id:17,fld:"",grid:0};n[18]={id:18,fld:"",grid:0};n[19]={id:19,fld:"",grid:0};n[20]={id:20,lvl:0,type:"date",len:8,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cajafecha,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[this.GridContainer],fld:"vCAJAFECHA",gxz:"ZV11Cajafecha",gxold:"OV11Cajafecha",gxvar:"AV11Cajafecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/99",dec:0},ucs:[],op:[20],ip:[20],nacdep:[],ctrltype:"edit",v2v:function(n){n!==undefined&&(gx.O.AV11Cajafecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.ZV11Cajafecha=gx.fn.toDatetimeValue(n))},v2c:function(){gx.fn.setControlValue("vCAJAFECHA",gx.O.AV11Cajafecha,0)},c2v:function(){this.val()!==undefined&&(gx.O.AV11Cajafecha=gx.fn.toDatetimeValue(this.val()))},val:function(){return gx.fn.getControlValue("vCAJAFECHA")},nac:gx.falseFn};n[21]={id:21,fld:"",grid:0};n[22]={id:22,fld:"",grid:0};n[24]={id:24,lvl:2,type:"int",len:4,dec:0,sign:!1,pic:"ZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAID",gxz:"Z39Cajaid",gxold:"O39Cajaid",gxvar:"A39Cajaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"number",v2v:function(n){n!==undefined&&(gx.O.A39Cajaid=gx.num.intval(n))},v2z:function(n){n!==undefined&&(gx.O.Z39Cajaid=gx.num.intval(n))},v2c:function(n){gx.fn.setGridControlValue("CAJAID",n||gx.fn.currentGridRowImpl(23),gx.O.A39Cajaid,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A39Cajaid=gx.num.intval(this.val(n)))},val:function(n){return gx.fn.getGridIntegerValue("CAJAID",n||gx.fn.currentGridRowImpl(23),".")},nac:gx.falseFn};n[25]={id:25,lvl:2,type:"date",len:8,dec:0,sign:!1,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAFECHA",gxz:"Z40Cajafecha",gxold:"O40Cajafecha",gxvar:"A40Cajafecha",dp:{f:0,st:!1,wn:!1,mf:!1,pic:"99/99/99",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A40Cajafecha=gx.fn.toDatetimeValue(n))},v2z:function(n){n!==undefined&&(gx.O.Z40Cajafecha=gx.fn.toDatetimeValue(n))},v2c:function(n){gx.fn.setGridControlValue("CAJAFECHA",n||gx.fn.currentGridRowImpl(23),gx.O.A40Cajafecha,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A40Cajafecha=gx.fn.toDatetimeValue(this.val(n)))},val:function(n){return gx.fn.getGridDateTimeValue("CAJAFECHA",n||gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};n[26]={id:26,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJACONCEPTO",gxz:"Z41Cajaconcepto",gxold:"O41Cajaconcepto",gxvar:"A41Cajaconcepto",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.A41Cajaconcepto=n)},v2z:function(n){n!==undefined&&(gx.O.Z41Cajaconcepto=n)},v2c:function(n){gx.fn.setGridControlValue("CAJACONCEPTO",n||gx.fn.currentGridRowImpl(23),gx.O.A41Cajaconcepto,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A41Cajaconcepto=this.val(n))},val:function(n){return gx.fn.getGridControlValue("CAJACONCEPTO",n||gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};n[27]={id:27,lvl:2,type:"decimal",len:8,dec:2,sign:!1,pic:"ZZZZ9.99",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAINGRESO",gxz:"Z42Cajaingreso",gxold:"O42Cajaingreso",gxvar:"A42Cajaingreso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A42Cajaingreso=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z42Cajaingreso=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("CAJAINGRESO",n||gx.fn.currentGridRowImpl(23),gx.O.A42Cajaingreso,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A42Cajaingreso=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("CAJAINGRESO",n||gx.fn.currentGridRowImpl(23),".",",")},nac:gx.falseFn};n[28]={id:28,lvl:2,type:"decimal",len:8,dec:2,sign:!1,pic:"ZZZZ9.99",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAEGRESO",gxz:"Z43Cajaegreso",gxold:"O43Cajaegreso",gxvar:"A43Cajaegreso",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A43Cajaegreso=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z43Cajaegreso=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("CAJAEGRESO",n||gx.fn.currentGridRowImpl(23),gx.O.A43Cajaegreso,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A43Cajaegreso=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("CAJAEGRESO",n||gx.fn.currentGridRowImpl(23),".",",")},nac:gx.falseFn};n[29]={id:29,lvl:2,type:"decimal",len:8,dec:2,sign:!1,pic:"ZZZZ9.99",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"CAJAARQUEO",gxz:"Z44Cajaarqueo",gxold:"O44Cajaarqueo",gxvar:"A44Cajaarqueo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){n!==undefined&&(gx.O.A44Cajaarqueo=gx.fn.toDecimalValue(n,",","."))},v2z:function(n){n!==undefined&&(gx.O.Z44Cajaarqueo=gx.fn.toDecimalValue(n,".",","))},v2c:function(n){gx.fn.setGridDecimalValue("CAJAARQUEO",n||gx.fn.currentGridRowImpl(23),gx.O.A44Cajaarqueo,2,",");typeof this.dom_hdl=="function"&&this.dom_hdl.call(gx.O)},c2v:function(n){this.val(n)!==undefined&&(gx.O.A44Cajaarqueo=this.val(n))},val:function(n){return gx.fn.getGridDecimalValue("CAJAARQUEO",n||gx.fn.currentGridRowImpl(23),".",",")},nac:gx.falseFn};n[30]={id:30,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vUPDATE",gxz:"ZV12Update",gxold:"OV12Update",gxvar:"AV12Update",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV12Update=n)},v2z:function(n){n!==undefined&&(gx.O.ZV12Update=n)},v2c:function(n){gx.fn.setGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(23),gx.O.AV12Update,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV12Update=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vUPDATE",n||gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};n[31]={id:31,lvl:2,type:"char",len:20,dec:0,sign:!1,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,evt_cvc:null,evt_cvcing:null,rgrid:[],fld:"vDELETE",gxz:"ZV13Delete",gxold:"OV13Delete",gxvar:"AV13Delete",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){n!==undefined&&(gx.O.AV13Delete=n)},v2z:function(n){n!==undefined&&(gx.O.ZV13Delete=n)},v2c:function(n){gx.fn.setGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(23),gx.O.AV13Delete,0)},c2v:function(n){this.val(n)!==undefined&&(gx.O.AV13Delete=this.val(n))},val:function(n){return gx.fn.getGridControlValue("vDELETE",n||gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};this.AV11Cajafecha=gx.date.nullDate();this.ZV11Cajafecha=gx.date.nullDate();this.OV11Cajafecha=gx.date.nullDate();this.Z39Cajaid=0;this.O39Cajaid=0;this.Z40Cajafecha=gx.date.nullDate();this.O40Cajafecha=gx.date.nullDate();this.Z41Cajaconcepto="";this.O41Cajaconcepto="";this.Z42Cajaingreso=0;this.O42Cajaingreso=0;this.Z43Cajaegreso=0;this.O43Cajaegreso=0;this.Z44Cajaarqueo=0;this.O44Cajaarqueo=0;this.ZV12Update="";this.OV12Update="";this.ZV13Delete="";this.OV13Delete="";this.AV11Cajafecha=gx.date.nullDate();this.A39Cajaid=0;this.A40Cajafecha=gx.date.nullDate();this.A41Cajaconcepto="";this.A42Cajaingreso=0;this.A43Cajaegreso=0;this.A44Cajaarqueo=0;this.AV12Update="";this.AV13Delete="";this.Events={e112d2_client:["'DOINSERT'",!0],e152d2_client:["ENTER",!0],e162d2_client:["CANCEL",!0]};this.EvtParms.REFRESH=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV11Cajafecha",fld:"vCAJAFECHA",pic:""},{av:"AV12Update",fld:"vUPDATE",pic:""},{av:"AV13Delete",fld:"vDELETE",pic:""}],[]];this.EvtParms.START=[[{av:"AV17Pgmname",fld:"vPGMNAME",pic:""}],[{ctrl:"GRID",prop:"Rows"},{av:"AV12Update",fld:"vUPDATE",pic:""},{av:"AV13Delete",fld:"vDELETE",pic:""},{ctrl:"FORM",prop:"Caption"}]];this.EvtParms["GRID.LOAD"]=[[{av:"A39Cajaid",fld:"CAJAID",pic:"ZZZ9",hsh:!0}],[{av:'gx.fn.getCtrlProperty("vUPDATE","Link")',ctrl:"vUPDATE",prop:"Link"},{av:'gx.fn.getCtrlProperty("vDELETE","Link")',ctrl:"vDELETE",prop:"Link"},{av:'gx.fn.getCtrlProperty("CAJAFECHA","Link")',ctrl:"CAJAFECHA",prop:"Link"}]];this.EvtParms["'DOINSERT'"]=[[{av:"A39Cajaid",fld:"CAJAID",pic:"ZZZ9",hsh:!0}],[]];this.EvtParms.GRID_FIRSTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV11Cajafecha",fld:"vCAJAFECHA",pic:""},{av:"AV12Update",fld:"vUPDATE",pic:""},{av:"AV13Delete",fld:"vDELETE",pic:""}],[]];this.EvtParms.GRID_PREVPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV11Cajafecha",fld:"vCAJAFECHA",pic:""},{av:"AV12Update",fld:"vUPDATE",pic:""},{av:"AV13Delete",fld:"vDELETE",pic:""}],[]];this.EvtParms.GRID_NEXTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV11Cajafecha",fld:"vCAJAFECHA",pic:""},{av:"AV12Update",fld:"vUPDATE",pic:""},{av:"AV13Delete",fld:"vDELETE",pic:""}],[]];this.EvtParms.GRID_LASTPAGE=[[{av:"GRID_nFirstRecordOnPage"},{av:"GRID_nEOF"},{ctrl:"GRID",prop:"Rows"},{av:"AV11Cajafecha",fld:"vCAJAFECHA",pic:""},{av:"AV12Update",fld:"vUPDATE",pic:""},{av:"AV13Delete",fld:"vDELETE",pic:""}],[]];this.EvtParms.VALIDV_CAJAFECHA=[[],[]];t.addRefreshingParm({rfrProp:"Rows",gxGrid:"Grid"});t.addRefreshingVar(this.GXValidFnc[20]);t.addRefreshingVar({rfrVar:"AV12Update",rfrProp:"Value",gxAttId:"Update"});t.addRefreshingVar({rfrVar:"AV13Delete",rfrProp:"Value",gxAttId:"Delete"});t.addRefreshingParm(this.GXValidFnc[20]);t.addRefreshingParm({rfrVar:"AV12Update",rfrProp:"Value",gxAttId:"Update"});t.addRefreshingParm({rfrVar:"AV13Delete",rfrProp:"Value",gxAttId:"Delete"});this.Initialize()});gx.wi(function(){gx.createParentObj(wwcaja)})