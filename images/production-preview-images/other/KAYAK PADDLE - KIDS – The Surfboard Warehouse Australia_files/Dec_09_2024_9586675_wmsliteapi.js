function WMSSessionConfig(){}WMSSessionConfig.CHAT=1,WMSSessionConfig.CHAT_PRESENCE=2,WMSSessionConfig.PRESENCE_PERSONAL=4,WMSSessionConfig.PRESENCE_ORG=8,WMSSessionConfig.LOADBALANCED=16,WMSSessionConfig.MP=32,WMSSessionConfig.CROSS_PRD=64,WMSSessionConfig.MULTI_DISPATCH=128,WMSSessionConfig.REUSE_SESSION=256,WMSSessionConfig.TRANSIENT_PEX=512,WMSSessionConfig.APPNOTIFY=1024;var _WMSAUTHTOKEN,_WMSAUTHSCOPE,_WMSZAID,_WMSPOTYPE,_WMSOAUTHTOKEN,_WMSOAUTHORGSCOPE,_WMSOAUTHUSERSCOPE,_WMSOAUTHOPRSCOPE,_WMSRTCATOKEN,wmsCountDownTimer,WM_TICKET="IAMAGENTTICKET",WM_D="zoho.com",WM_SAMED=!1,WM_FD=!1,WM_C="15",_WMSCONT="wms",wms_op=-1!=navigator.userAgent.indexOf("Opera"),wms_sf=-1!=navigator.userAgent.indexOf("Safari"),wms_ie=!wms_op&&/msie/i.test(navigator.userAgent),lfromstatic=!1,wmsjsversion="v60",_WMS_NODOMAINCHANGE=!1,_WMSSST=!1,_RETRYREGINTERVAL=1e4,iswmsframemonitorrunning=!1,iswmsframeloaded=!1,retryregistertimer=null,wmsdebuginfo=[],_WMS_RETRY_COUNT=0,wmsUserConfig={},_WMS_LP="false",_NEWCLIENTPORTAL_AUTHENTICATION=!1;function push(e){WmsLite.push(e),setTimeout((function(){WmsLite.updateClientDebugStore(e)}),1)}function getPrd(){return WmsLite.prd}function getWmsConfig(){return WM_C}function getUserName(){return WmsLite.uname}function getNickName(){return WmsLite.nname}function getZuid(){return WmsLite.zuid}function getUserId(){return WmsLite.uid}function getSid(){return WmsLite.sid}function getRawSid(){return WmsLite.rsid}function isReconnecting(){return WmsLite.reconnecting}function disablewms(){WmsLite.disable()}function isdisablewms(){return WmsLite.disablewms}function goOffline(){}function getWmsContacts(){return{}}function updateWmsContacts(){}function getWmsXA(){return WmsLite.XA}function WmsLite(){}function getWMSOAuthCredentials(){return{token:_WMSOAUTHTOKEN,orgscope:_WMSOAUTHORGSCOPE,userscope:_WMSOAUTHUSERSCOPE,oprscope:_WMSOAUTHOPRSCOPE}}function getWMSRTCAccessToken(){return _WMSRTCATOKEN}function getNewClientPortalAuthentication(){return _NEWCLIENTPORTAL_AUTHENTICATION}function populateSpecialWMSAnnouncement(e){WmsLite.populateSpecialWMSAnnouncement(e)}function isLongPollingForced(){return _WMS_LP}function _getAuthType(){return WmsLite.authtype}function getAuthToken(){return _WMSAUTHTOKEN}function getAuthScope(){return _WMSAUTHSCOPE}function getZAID(){return _WMSZAID}function nocachefix(){return"&nocache="+(new Date).getTime()}function WmsLiteUtil(){}!function(){var e=[];function t(e){e&&e.linkdetails&&(e.linkdetails.cliq_message&&e.linkdetails.cliq_message.msg&&(e.linkdetails.description=e.linkdetails.cliq_message.msg="**********",e.linkdetails.cliq_message.meta&&e.linkdetails.cliq_message.meta.opr_replydetails&&i(e.linkdetails.cliq_message.meta)),"rich"==e.linkdetails.linktype&&(e.linkdetails.description="**********"))}function i(e){if(e&&e.opr_replydetails){var t=e.opr_replydetails;"20"==t.mtype&&t.addinfo&&t.addinfo.comment?t.addinfo.comment="**********":t.msg&&(t.msg="**********")}}function s(e){"string"==typeof e.msg&&(e.msg="**********"),e.notification_text&&(e.notification_text="**********"),e.meta&&(t(e.meta),i(e.meta))}WmsLite.updateClientDebugStore=function(n){var o=JSON.parse(JSON.stringify(n));if(e.length>=1e3&&e.shift(),o.timestamp=(new Date).getTime(),o.mtype){if("12"===o.mtype){if(o.msg&&(o.msg.msg="**********",o.msg.notification_text&&(o.msg.notification_text="**********"),o.msg.msglist))for(var r in o.msg.msglist)s(o.msg.msglist[r])}else if("20"===o.mtype)o.msg&&(o.msg.comment="**********",o.msg.msg&&(o.msg.msg.comment="**********"));else if("66"===o.mtype||"64"===o.mtype){if(o.msg&&o.msg.msg){for(var r in o.msg.msg){var m=o.msg.msg[r];m.msg&&s(m.msg)}"string"==typeof o.msg.msg&&(o.msg.msg="**********"),o.msg.notification_text&&(o.msg.notification_text="**********")}}else if("50"==o.mtype){var a=o.msg.uc||o.msg.ac;for(var u in a){var c=a[u].lmhash;"20"==(c=JSON.parse(c)).mtype||"64"==c.mtype&&"att"==c.__module?c.msg&&c.msg.comment&&(c.msg.comment="**********"):"12"!=c.mtype&&"66"!=c.mtype&&"64"!=c.mtype||(c.msg="**********"),c.meta&&(t(c.meta),i(c.meta)),c=JSON.stringify(c),a[u].lmhash=c}}else"23"==o.mtype&&o.msg&&o.msg.s&&(o.msg.s=o.msg.s.replace(/([a-z0-9]([a-z0-9_\-.+]*)@([a-z0-9_\-.]*)(\.[a-z]{2,30}(\.[a-z]{2}){0,2}))/g,"**********"));o.msg&&o.msg.meta&&(t(o.msg.meta),i(o.msg.meta))}e.push(o)},WmsLite.getClientDebugStore=function(){return e}}(),WmsLite.jsstaticdomain="",function(){var e;document.currentScript?e=document.currentScript:void 0!==document.querySelector&&(e=document.querySelector('script[src*="ichat"][src*="wmslite"]')),e&&(WmsLite.jsstaticdomain=e.src.split("/")[2])}(),WmsLite.bsettings={},WmsLite.network_info={},WmsLite.banner_msg_cache=[],WmsLite.clientportal_info={},WmsLite.getDebugInfo=function(){return wmsdebuginfo},WmsLite.updateDebugInfo=function(e){"string"==typeof e?(e+=";;"+(new Date).getTime(),wmsdebuginfo.length>=300&&wmsdebuginfo.splice(0,1),wmsdebuginfo.push(e)):wmsdebuginfo=e},WmsLite.setOAuthCredentials=function(e,t,i,s){_WMSOAUTHTOKEN=e,_WMSOAUTHORGSCOPE=t||_WMSOAUTHORGSCOPE,_WMSOAUTHUSERSCOPE=i||_WMSOAUTHUSERSCOPE,_WMSOAUTHOPRSCOPE=s||_WMSOAUTHOPRSCOPE,"function"==typeof WmsLite.updateOAuthCredInBridge&&WmsLite.updateOAuthCredInBridge()},WmsLite.init=function(){function e(e){var t;try{t=JSON.parse(e.data)}catch(e){return}var i=t.opr,s=t.params;if("push"===i)push.apply(null,s);else if("serverup"===i)WmsLite.serverup.apply(null,s);else if("serverdown"===i)WmsLite.serverdown.apply(null,s);else if("updateDebugInfo"===i)WmsLite.updateDebugInfo.apply(null,s);else if("disablewms"===i)disablewms();else if("getClientSRIValues"===i){var n={opr:"clientSRIValues",params:{bridgesrihash:WmsLite.getClientSRIValues(s)}};WmsLite.pconnectframe.contentWindow.postMessage(JSON.stringify(n),"*")}}return function(){_WMS_NODOMAINCHANGE||wms_op||WM_SAMED||!(!wms_ie||wms_ie&&WM_FD)||(document.domain=WM_D),this.lastconnect=-1,this.disablewms=!1,WmsLite.offline=!1,WmsLite.initcountdown=!0,WmsLite.isCrossOriginAllowed()&&(WmsLite.triggerbind=function(){var e={opr:"triggerbind",params:{zuid:WmsLite.zuid,rawsid:WmsLite.rsid,sid:WmsLite.sid}};WmsLite.pconnectframe.contentWindow.postMessage(JSON.stringify(e),"*")},window.removeEventListener("message",e),window.addEventListener("message",e))}}(),WmsLite.isCrossOriginAllowed=function(){if(WmsLite.crossoriginallowed&&("$"===this.zuid.charAt(0)||0===this.zuid.indexOf("RT_2")))return!0},WmsLite.allowCrossOrigin=function(e){WmsLite.crossoriginallowed=!0,WmsLite.hosturl=e},WmsLite.reconnect=function(e,t,i){null!=i&&1==i&&(this.reconnecting=!1),1!=this.reconnecting&&(this.reconnecting=!0,null==this.retry&&(this.retry=0),this.retry++,setTimeout((function(){WmsLite.registerWms(WmsLite.prd,WmsLite.zuid,WmsLite.uname,null,!0,!0)}),e),this.serverdown())},WmsLite.registerZuid=function(e,t,i,s){this.registerWms(e,t,i,null,s)},WmsLite.setIamTicketName=function(e){WM_TICKET=e},WmsLite.setConfig=function(e){WM_C=e},WmsLite.setDomain=function(e){WM_D=e},WmsLite.useSameDomain=WmsLite.enableCustomDomain=function(){WM_SAMED=!0},WmsLite.forceDomainChange=function(){WM_FD=!0},WmsLite.setNoDomainChange=function(){_WMS_NODOMAINCHANGE=!0},WmsLite.setNickName=function(e){WmsLite.nname=e},WmsLite.setNewClientPortalAuthentication=function(){_NEWCLIENTPORTAL_AUTHENTICATION=!0},WmsLite.setRTCAccessToken=function(e){_WMSRTCATOKEN=e},WmsLite.registerAnnon=function(e,t,i,s){WmsLite.authtype=4,WmsLite.registerannonuser=!0,WmsLite.register(e,t,i,s)},WmsLite.register=function(e,t,i,s,n,o,r,m,a,u){if("undefined"==typeof JSON){var c=document.createElement("script"),l=window.location.protocol,f="https:"===l?wmsjsversion+"_https":wmsjsversion;c.type="text/javascript",c.src=l+"//"+this.jsstaticdomain+"/ichat/"+f+"/js/8b9999fd_json2.min.js",document.body.appendChild(c),WmsLite.attachonload.call(c,W)}else W();function W(){_WMSAUTHSCOPE=o,_WMSZAID=r,_WMSPOTYPE=m,(_WMSAUTHTOKEN=n)&&_WMSAUTHSCOPE&&(WmsLite.authtype=1),_WMSAUTHTOKEN&&_WMSZAID&&(WmsLite.authtype=8),_WMSZAID&&WmsLite.tokenpairauth&&(WmsLite.authtype=10),_WMSOAUTHTOKEN&&(WmsLite.authtype=9),_WMSRTCATOKEN&&(WmsLite.authtype=13),WmsLite.registerWms(e,t,null,i,s,null,a,u)}},WmsLite.attachonload=function(e){void 0!==this.readyState?this.onreadystatechange=function(){"loaded"!=this.readyState&&"complete"!=this.readyState||e.call(this)}:this.onload=function(){e.call(this)}},WmsLite.enablePreconnectToWMS=function(e){WmsLite.preconnect_wms_domain=e},WmsLite.setNetworkDetails=function(e){return WmsLite.network_info.id=e.id,WmsLite.network_info.user_id="o-"+WmsLite.prd+"-"+e.id+"-"+WmsLite.zuid,WmsLite.network_info.url=e.url,WmsLite.network_info.details=e.details,WmsLite.network_info.user_id},WmsLite.setClientPortalDetails=function(e){return WmsLite.clientportal_info.id=e.id,WmsLite.clientportal_info.user_id="o-"+WmsLite.prd+"-"+e.parent_network_id+"~"+e.id+"-"+WmsLite.zuid,WmsLite.clientportal_info.url=e.url,WmsLite.clientportal_info.details=e.details,WmsLite.clientportal_info.user_id},WmsLite.enableCrossOriginIsolation=function(){WmsLite.crossoriginisolation=!0},WmsLite.registerWms=function(e,t,i,s,n,o,r,m){if(WmsLite.preconnect_wms_domain){var a=document.createElement("link");a.href="https://"+WmsLite.preconnect_wms_domain,a.rel="preconnect",document.head.appendChild(a)}if(WmsLite.prefetchWmsBridgeJS(),this.prd=e,this.uname=null!=i&&null!=i?i:"",this.zuid=null!=t&&null!=t?t:"",this.zuid=this.zuid&&r?this.setNetworkDetails(r):this.zuid,this.zuid=this.zuid&&m?this.setClientPortalDetails(m):this.zuid,_WMS_RETRY_COUNT++,WmsLite.updateDebugInfo("onRegister. Tab ID: "+window.getWmsTabId()+" count: "+_WMS_RETRY_COUNT),void 0===WmsLite.authtype&&WmsLite.enableTokenPairAuth(),void 0===this.nname&&(this.nname=null!=s&&null!=s?s:""),null==o&&this.init(null!=n&&n),"undefined"!=typeof CrmPlusImpl&&"function"==typeof CrmPlusImpl.isLoadedInCrmplus&&CrmPlusImpl.isLoadedInCrmplus()&&"CT"!=WmsLite.prd&&"LD"!=WmsLite.prd&&(WM_C&=~WMSSessionConfig.PRESENCE_PERSONAL),this.pconnectframe=document.getElementById("pconnect"),!this.pconnectframe){var u=document.createElement("iframe");u.name="wmspconnect",u.id="pconnect",u.style.display="none",document.body.appendChild(u),this.pconnectframe=document.getElementById("pconnect")}var c=""!=this.zuid?this.zuid:this.uname,l="";WmsLite.network_info.url&&(l="/"+(l="/"===WmsLite.network_info.url[0]?WmsLite.network_info.url.slice(1):WmsLite.network_info.url)),WmsLite.clientportal_info.url&&(l="/"+(l="/"===WmsLite.clientportal_info.url[0]?WmsLite.clientportal_info.url.slice(1):WmsLite.clientportal_info.url));var f="/"+_WMSCONT+l+"/pconnect.sas?settings=true&prd="+this.prd+"&uname="+c+"&samedomain="+WM_SAMED+nocachefix()+"&config="+WM_C+"&wmscont="+_WMSCONT+"&nodomainchange="+_WMS_NODOMAINCHANGE+"&retrycount="+_WMS_RETRY_COUNT+"&tabid="+window.getWmsTabId();if(lfromstatic&&(f+="&staticdomain="+WmsLite.jsstaticdomain+"&staticversion="+wmsjsversion),_WMSSST&&(f+="&sst=true"),WmsLite.tokenpairauth&&(f+="&tokenpair=true"),WmsLite.crossoriginallowed&&(f+="&crossorigin=true"),WmsLite.hosturl&&(f=WmsLite.hosturl+f),WmsLite.frameorigin)f+="&frameorigin="+WmsLite.frameorigin;else{var W=window.location.protocol+"//"+window.location.host;if(window!==window.top){if("about:"==window.location.protocol){for(var d=window;"about:"==d.location.protocol&&d.parent;)d=d.parent;W=d.location.protocol+"//"+d.location.host}if(void 0!==location.ancestorOrigins)for(var p=0;p<window.location.ancestorOrigins.length;p++)-1===W.indexOf(window.location.ancestorOrigins[p])&&(W.length&&(W+=","),W+=window.location.ancestorOrigins[p]);else if(window.location.search){var g=new URLSearchParams(window.location.search).get("frameorigin");g&&(W.length&&(W+=","),W+=g)}else document.referrer&&(W.length&&(W+=","),W+=new URL(document.referrer).origin)}f+="&frameorigin="+encodeURIComponent(W)}WmsLite.fp_hash&&(f+="&hash="+WmsLite.fp_hash["wmsbridge.js"].split("_")[0]),_WMSZAID&&(f+="&zaid="+_WMSZAID),_WMSPOTYPE&&(f+="&potype="+_WMSPOTYPE),WmsLite.crossoriginisolation&&(f+="&coi=true"),this.pconnectframe.src=f,iswmsframeloaded=!1,WmsLite.scheduleWMSFrameMonitor()},WmsLite.scheduleWMSFrameMonitor=function(){iswmsframemonitorrunning||(iswmsframemonitorrunning=!0,WmsLite.updateDebugInfo("Started frame monitor"),clearTimeout(retryregistertimer),retryregistertimer=setTimeout((function(){WmsLite.registerMonitor()}),6*_RETRYREGINTERVAL))},WmsLite.registerMonitor=function(){WmsLite.offline=!0,WmsLite.updateDebugInfo("Retry triggered from frame monitor"),WmsLite.isReuseSession()?WmsLite.retryRegister():WmsLite.initReconnect()},WmsLite.retryRegister=function(){WmsLite.isReuseSession()&&!op&&top.WmsLite.offline||WmsLite.reconnect(0,"Retry Register",!0),clearTimeout(retryregistertimer),retryregistertimer=setTimeout((function(){WmsLite.registerMonitor()}),_RETRYREGINTERVAL)},WmsLite.initReconnect=function(e,t){WmsLite.offline=!0;var i=!!WmsLite.initcountdown;WmsLite.initcountdown=!1,!1===iswmsframeloaded?WmsLite.reconnectTimer(i,WmsLite.retryRegister,e,t):WmsLite.reconnectTimer(i,WmsLite.triggerbind,e,t)},WmsLite.retryConnection=function(){iswmsframemonitorrunning?WmsLite.forceRegister():WmsLite.forceReconnect()},WmsLite.forceRegister=function(){WmsLite.initcountdown=!0,WmsLite.retryRegister()},WmsLite.forceReconnect=function(){WmsLite.initcountdown=!0,WmsLite.triggerbind()},WmsLite.reconnectTimer=function(){var e=[30,60,90,120],t=0;function i(e,t){return e=+e,t=+t,Math.floor(Math.random()*(t-e+1)+e)}return window.addEventListener("online",(function(){t=-1})),function(s,n,o,r){s?(t=0,e[0]=i(5,30)):t<e.length-1&&t++;var m=e[t];o&&(m=i(o,r=r||o)),WmsLite.countDown(m,n)}}(),WmsLite.countDown=function(e,t){clearTimeout(wmsCountDownTimer),function i(){if(setTimeout((function(){"function"==typeof WmsliteImpl.reconnectionCountDown&&WmsliteImpl.reconnectionCountDown(e)}),1),0===e)return clearTimeout(wmsCountDownTimer),void t();e--,wmsCountDownTimer=setTimeout(i,1e3)}()},WmsLite.isReuseSession=function(){return(WM_C&WMSSessionConfig.REUSE_SESSION)==WMSSessionConfig.REUSE_SESSION},WmsLite.clearWMSFrameMonitor=function(e){iswmsframemonitorrunning&&WmsLite.updateDebugInfo("Stopped frame monitor"),clearTimeout(retryregistertimer),WmsLite.initcountdown=!0,iswmsframemonitorrunning=!1,e&&(WmsLite.offline=!1)},WmsLite.setWmsContext=function(e){_WMSCONT=e},WmsLite.disable=function(){this.disablewms=!0,this.abortBind(),this.clearWMSFrameMonitor()},WmsLite.push=function(e){if(0==e.mtype){var t=e.msg;this.uid=t.uid,this.nname=t.nname,this.sid=t.sid,this.rsid=t.rsid,this.zuid=t.zuid,this.XA=t.xa,this.retry=0,this.reconnecting=!1,WmsLite.clearWMSFrameMonitor(!0),iswmsframeloaded=!0,this.serverup(e.msg)}else if(-1==e.mtype){var i,s=e.msg||{};if(s&&s.instruction)i=s.instruction.split("-")[0];void 0===i&&this.reconnect(10,"psdown",!0)}else if(-2==e.mtype){this.disable(),s=e.msg;try{WmsliteImpl.handleLogout(s.reason)}catch(e){}}else if(-7==e.mtype)try{WmsliteImpl.handleServiceMessage(e.msg)}catch(e){}else if(-5==e.mtype){s=e.msg,this.disable();try{WmsliteImpl.handleAccountDisabled(s.reason),WmsliteImpl.handleAuthFailure(e.mtype)}catch(e){}}else if(-4==e.mtype){t="string"==typeof e.msg?JSON.parse(e.msg):{};try{WmsliteImpl.connectionup(t.t)}catch(e){}}else if(-16==e.mtype)iswmsframeloaded=!0,WmsLite.clearWMSFrameMonitor();else if(-12==e.mtype||-17==e.mtype){iswmsframeloaded=!1,WmsLite.scheduleWMSFrameMonitor();try{WmsliteImpl.handleAuthFailure(e.mtype)}catch(e){}}else if(-10==e.mtype){wmsUserConfig.infomsgid=e.msg.id,wmsUserConfig.infomsgprd=e.prd;try{""!==e.msg.msg?WmsliteImpl.showAnnouncement(e.msg.msg,e.msg.type,e.msg.id,e.prd):e.msg.msg_spl?(wmsUserConfig.infomsg=e.msg.msg_spl,wmsUserConfig.infomsgtype=e.msg.type,WmsLite.processSpecialAnnouncement(JSON.parse(wmsUserConfig.infomsg))):WmsliteImpl.hideAnnouncement()}catch(e){}}else if(38==e.mtype)if(e.msg&&"updatewmssettings"===e.msg.module&&e.msg.data&&e.msg.data.disann){if(WmsLite.bsettings.disann=e.msg.data.disann,wmsUserConfig.infomsg&&!0===WmsLite.isAnnBlocked())try{WmsliteImpl.hideAnnouncement()}catch(e){}}else if(e.msg&&"presence_key_crc_update"===e.msg.module){var n=e.msg.data.topic;WmsLite.bsettings.adminsettings.presence_keys.forEach((function(t){t.topic==n&&(t.header=e.msg.data.header)})),WmsLite.updatePresenceKeys(WmsLite.bsettings.adminsettings.presence_keys)}else try{WmsliteImpl.handleMessage(e.mtype,e.msg,null,e.prd,e.retry)}catch(e){setTimeout((function(){throw e}),1)}else if(800==e.mtype){var o=e.msg,r=o.opr;"pubsub.ulist"==r?(PubSubApi.addUsers(o.pskey,o.psid,o.ulist),PubSubImpl.handleUserList(o.pskey,o.ulist)):"pubsub.usersubscribed"==r?(PubSubApi.addUsers(o.pskey,o.psid,o.ulist),PubSubImpl.handleUserIn(o.pskey,o.ulist)):"pubsub.userunsubscribed"==r?(PubSubApi.removeUsers(o.pskey,o.psid,o.ulist),PubSubImpl.handleUserOut(o.pskey,o.ulist)):"pubsub.message"==r&&PubSubImpl.handleMessage(o.pskey,o.msg)}else if(43==e.mtype){var m=e.msg;"undefined"!=typeof AcsApi&&AcsApi.handlePush(m.type,m.data)}else if("_"===e)WmsLite.RTT_callback(Date.now()-WmsLite.RTT_senttime);else if(351==e.mtype)WmsLite.banner_callback_subscribed||WmsLite.banner_msg_cache.push(e.msg),WmsLiteUtil.pubsub.publish("/wmsevents/bannermessage",e.msg);else{4==e.mtype&&WmsLiteUtil.pubsub.publish("/wmsevents/crossproduct",e.prd,e.msg);try{WmsliteImpl.handleMessage(e.mtype,e.msg,e.meta,e.prd,e.retry)}catch(e){setTimeout((function(){throw e}),1)}-3==e.mtype&&("undefined"!=typeof AcsApi&&AcsApi.handleServerUP(),_WMS_RETRY_COUNT=0)}},WmsLite.serverup=function(e){WmsLite.initcountdown=!0,_WMS_RETRY_COUNT=0,clearTimeout(wmsCountDownTimer),setTimeout((function(){try{WmsLite.updateDebugInfo("Called serverup"),WmsliteImpl.serverup(e),WmsLiteUtil.pubsub.publish("/wmsevents/serverup",e),"undefined"!=typeof AcsApi&&AcsApi.handleServerUP()}catch(e){}}),100)},WmsLite.serverdown=function(e,t){e?(clearTimeout(retryregistertimer),WmsLite.initReconnect(e,t)):iswmsframemonitorrunning||WmsLite.initReconnect(),setTimeout((function(){try{WmsLite.updateDebugInfo("Called serverdown"),WmsliteImpl.serverdown(),WmsLiteUtil.pubsub.publish("/wmsevents/serverdown")}catch(e){}}),100)},WmsLite.setJSStaticDomain=function(){},WmsLite.enableSST=function(){},WmsLite.enableTokenPairAuth=function(){this.tokenpairauth=!0,this.authtype=10},WmsLite.setAuthType=function(e){this.authtype=e},WmsLite.setUserConfig=function(e){wmsUserConfig=e},WmsLite.isAnnBlocked=function(){var e=WmsLite.bsettings.disann,t=wmsUserConfig.infomsgid;return!(!e||!e[WmsLite.prd]&&!e.All||!t)&&(e[WmsLite.prd]===t||e.All===t)},WmsLite.setBarSettingsValue=function(e){if(WmsLite.bsettings=e,wmsUserConfig.infomsg&&!1===WmsLite.isAnnBlocked())try{if(void 0!==WmsliteImpl&&WmsliteImpl.showAnnouncement)try{var t=JSON.parse(wmsUserConfig.infomsg);"true"==t.splann?window.frameElement&&"undefined"!=typeof CrmPlusLib&&CrmPlusLib.isLoadedInCrmplusFrame||WmsLite.processSpecialAnnouncement(t):WmsliteImpl.showAnnouncement(wmsUserConfig.infomsg,wmsUserConfig.infomsgtype,wmsUserConfig.infomsgid,wmsUserConfig.infomsgprd)}catch(e){WmsliteImpl.showAnnouncement(wmsUserConfig.infomsg,wmsUserConfig.infomsgtype,wmsUserConfig.infomsgid,wmsUserConfig.infomsgprd)}}catch(e){}WmsLite.registerAnnonUser||setTimeout((function(){WmsLite.appendSMSBridge()}),1)},WmsLite.setChatCSRFParamName=function(e){WmsLite._CHATCSRFPARAMNAME=e},WmsLite.setChatCSRFCookieName=function(e){WmsLite._CHATCSRFCOOKIENAME=e},WmsLite.clearAnnouncement=function(e){var t,i,s,n="property=bchatsettings&key=disann&value="+wmsUserConfig.infomsgid+"&prd="+wmsUserConfig.infomsgprd;n+="&"+WmsLite._CHATCSRFPARAMNAME+"="+(t=document.cookie,i=t.indexOf(WmsLite._CHATCSRFCOOKIENAME),s=t.indexOf("=",i)+1,t.substring(s,t.indexOf("; ",s)))+nocachefix();var o=new XMLHttpRequest;o.onreadystatechange=e,o.open("POST","/_chat/updwmssettings.do"),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8"),o.send(n)},WmsLite.setFrameOrigin=function(e){WmsLite.frameorigin=e||window.location.origin},WmsLite.useLongPolling=function(){_WMS_LP="true"},WmsLite.getWMSRTT=function(e){WmsLite.RTT_callback=e,WmsLite.RTT_senttime=Date.now(),WmsLite.triggerRTTPing()},WmsLite.getIAMServiceName=function(e){return WmsLite.servicelist[e]},WmsLite.populateSpecialWMSAnnouncement=function(e){if("success"==e.result){var t=e.response,i=JSON.parse(wmsUserConfig.infomsg);if(0==t.banner_status)return;WmsliteImpl.showAnnouncement(i[t.banner_status],wmsUserConfig.infomsgtype)}},WmsLite.processSpecialAnnouncement=function(e){if(e.apiurl){var t=e.apiurl+"?zuid="+WmsLite.zuid+"&iam_service="+WmsLite.getIAMServiceName(WmsLite.prd)+"&callback=populateSpecialWMSAnnouncement",i=document.createElement("script");i.src=t,document.body.appendChild(i)}},WmsLite.enableSMSBridge=function(e){WmsLite.smsbridgeenabled=!0,WmsLite.smsbridgeconfig=e},WmsLite.getSMSBridgeConfig=function(){return WmsLite.smsbridgeconfig},WmsLite.appendSMSBridge=function(){var e=WmsLite.smsbridgeconfig;if(e){var t={};t.parts=location.hostname.split("."),t.subdomain=t.parts.shift(),t.uplvldom=t.parts.join("."),t.server="https://phonebridge."+t.uplvldom,null!=e.smsDomain&&""!=e.smsDomain&&(t.server=e.smsDomain);var i=document.createElement("script");xhr=new XMLHttpRequest,xhr.open("GET",t.server+"/smsbridge/v3/notificationsms/sdk_meta",!0),xhr.withCredentials=!0,xhr.onreadystatechange=function(){if(4===xhr.readyState){var t=JSON.parse(xhr.response);i.src="https:"+t.sdk_url,i.onload=function(){SMS.init(e)},document.head.appendChild(i)}},xhr.send(null)}},WmsLite.subscribeToCrossProductMessages=function(e){"function"==typeof e&&WmsLiteUtil.pubsub.subscribe("/wmsevents/crossproduct",(function(t,i,s){e(i,s)}))},WmsLite.subscribeToServerUp=function(e){"function"==typeof e&&WmsLiteUtil.pubsub.subscribe("/wmsevents/serverup",(function(t,i){e(i)}))},WmsLite.subscribeToServerDown=function(e){"function"==typeof e&&WmsLiteUtil.pubsub.subscribe("/wmsevents/serverdown",(function(){e()}))},WmsLite.subscribeToBannerMessages=function(e){if("function"==typeof e){WmsLite.banner_callback_subscribed=!0;var t=WmsLiteUtil.pubsub.subscribe("/wmsevents/bannermessage",(function(t,i){e(i)}));return WmsLite.banner_msg_cache.length&&(WmsLite.banner_msg_cache.forEach((function(e){WmsLiteUtil.pubsub.publish("/wmsevents/bannermessage",e)})),WmsLite.banner_msg_cache=[]),function(){WmsLiteUtil.pubsub.unsubscribe(t),t=null}}},WmsLite.setClientSRIValues=function(e){"string"==typeof e?WmsLite.SRIvalues=JSON.parse(e):e&&(WmsLite.SRIvalues=e)},WmsLite.getClientSRIValues=function(e){return WmsLite.SRIvalues?e?WmsLite.SRIvalues[e]||"":WmsLite.SRIvalues:""},function(){var e=(new Date).getTime()+"_"+Math.floor(1e4*Math.random());window.getWmsTabId=function(){return WmsLite.zuid+"_"+WmsLite.prd+"_"+e}}(),WmsLite.servicelist={ZI:"ZohoShowtime",ZP:"ZohoPayments",ZH:"ZohoHome",CC:"ZohoCommandCenter",PY:"PayRoll",ZG:"Zoho Bigin",ZK:"ZohoInk",OF:"ZohoOffice",TI:"TeamInbox",ZX:"ZohoShowtimeAPI",RA:"ZohoRemoteAccess",VO:"Zoho Mail",ZM:"Zoho Mobile",SL:"DataPrep",WE:"ZohoWebinar",SZ:"ZohoSites",CT:"ZohoCliq",ZS:"ZohoSupport",ML:"MTACENTRAL",BT:"ZohoBugtracker",WR:"ZohoWriter",ST:"ZohoSheet",NB:"Notebook",RE:"Remotely",SW:"ZohoShow",ZO:"Business",OZ:"ZohoChat",PD:"ZOHOPAD",FO:"ZohoForms",ZE:"ZohoExpense",CP:"CRMPlus",IV:"ZohoInventory",WH:"Startwith",MC:"ZohoMCreator",ZB:"ZohoBooks",ZV:"ZohoInvoice",SB:"ZohoSubscriptions",CI:"ZohoCode",AL:"alarmsone",ZA:"ZohoRecruit",EX:"Zoho Docs",TD:"TeamDrive",PZ:"ZIAPlatform",AU:"Temp Staffing",BP:"Orchestly",CO:"ZohoContacts",CR:"ZohoCRM",CE:"ZohoCreator",PR:"ZohoProjects",WK:"ZohoWiki",CA:"ZohoCampaigns",MI:"MICS",VA:"ZohoVault",PB:"PhoneBridge",FS:"ZohoFSM",PT:"ZohoPilot",MP:"ZohoProjectsMarketPlace",SC:"Screenplay",PE:"Peopleplus",GC:"ZohoGC",PI:"ZIAPipelines",RS:"Solopreneur",IM:"ZohoIM",RY:"ZohoRepository",SD:"Service Desk Plus",MT:"ZohoMeeting",TL:"Trainercentral",WB:"Whiteboard",MU:"Murphy",IG:"Insights",MD:"MDMOnDemand",LE:"ZohoLens",FM:"ZohoDiscussions",AC:"AaaServer",CL:"ZohoCalendar",RM:"Remote Agent",SG:"ZohoSign",TC:"Tele Adapter - CRM",TS:"Tele Adapter - Support",SI:"Site 24 x 7",SR:"Zoho Store",ZC:"ZohoGadgets",IS:"Zoho Issue Tracker",HR:"zohopeople",VI:"ZohoVideo",ZF:"ZohoFlow",SE:"ZohoSearch",JS:"Jabber Server",CM:"Contacts Manager",MB:"Zoho Mobile Sync",SV:"ZohoSurvey",MO:"zohomotivator",AT:"ZohoAssist",ZQ:"QUOTES",ES:"ZohoReports",PG:"ZohoPlugin",SP:"ZohoSprints",BS:"zohobackstage",BI:"ZohoBills",IO:"ZohoIOT",ZD:"ZohoDirectory",ZN:"ZohoDirectory",PM:"PATCHMANAGER",BL:"BLOGS",RC:"RECEIPTS",XS:"Zoho Showtime",SH:"ZohoShowtime-local",ZT:"ZohoTax",AD:"DirectoryAdmin",CH:"CHECKOUT",VE:"ZohoVoice",MH:"ZohoMarketingHub",ZW:"ZohoWorkerly",IN:"ZohoPulse",DC:"DesktopCentralCloud",DE:"DesktopCentralMSPCloud",VH:"ZohoChatVijay",CS:"CRM SalesInbox",LC:"Logs360Cloud",CY:"ZohoCatalyst",ZL:"ZohoTables",CZ:"contracts",PC:"ZohoCreatorPlus",RP:"RemoteAccessPlusCloud",OA:"OfficeAPI",LZ:"ZohoLearn",SU:"shortenurl",NS:"ZohoBetaLens",TZ:"Slate",CU:"Cirrus",AS:"Activity Collation Server",ZR:"ZohoSocial",WP:"Workplace",WA:"WebAnalytics",WS:"WebStats",LD:"Zoho SalesIQ",SF:"ZohoShifts",HS:"HackSaw"},WmsLite.prefetchWmsBridgeJS=function(){var e,t=document.createElement("link"),i=WmsLite.fp_hash?WmsLite.fp_hash["wmsbridge.js"]:"wmsbridge.js";e=WmsLite.fp_hash?"https://"+WmsLite.jsstaticdomain+"/ichat/js/"+i:"https://"+WmsLite.jsstaticdomain+"/ichat/"+wmsjsversion+"_https/js/"+i,t.href=e,t.rel="prefetch",WmsLite.getClientSRIValues("wmsbridge.js")&&(t.integrity=WmsLite.getClientSRIValues("wmsbridge.js"),t.crossOrigin="anonymous"),document.head.appendChild(t)},WmsLiteUtil.pubsub={},function(e){let t={},i=-1;e.subscribe=function(e,s){t[e]||(t[e]=[]);let n=(++i).toString();return t[e].push({token:n,func:s}),n},e.publish=function(){let e=arguments,i=e[0];return!!t[i]&&(setTimeout((function(){let s=t[i],n=s?s.length:0;for(;n--;)s[n].func.apply(null,e)}),0),!0)},e.unsubscribe=function(e){for(let i in t)if(t[i])for(let s=0,n=t[i].length;s<n;s++)if(t[i][s].token===e)return t[i].splice(s,1),e;return!1}}(WmsLiteUtil.pubsub);wmsjsversion="Dec_09_2024_9586675";function WmsliteImpl(){}WmsliteImpl.serverdown=function(){},WmsliteImpl.serverup=function(){},WmsliteImpl.handleLogout=function(e){},WmsliteImpl.handleMessage=function(e,t){},WmsliteImpl.handleAccountDisabled=function(e){},WmsliteImpl.handleServiceMessage=function(e){},WmsliteImpl.reconnectionCountDown=function(e){},WmsliteImpl.showAnnouncement=function(e,t,i){},WmsliteImpl.hideAnnouncement=function(){},WmsliteImpl.handleAuthFailure=function(){};var lfromstatic=!0;
WmsLite.fp_hash={"wmsbridge.js":"e0b01191_wmsbridge.js"}