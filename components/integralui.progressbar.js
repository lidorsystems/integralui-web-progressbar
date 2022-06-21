/*
  filename: integralui.progressbar.js
  version : 22.2.0
  Copyright © 2016-2022 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/studio/license-agreement.aspx.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
import{c as css,h as html}from"../external/lit-element.js";import{c as classMap}from"../external/class-map.js";import{s as styleMap}from"../external/style-map.js";import IntegralUIBaseValue from"./integralui.base.value.js";import{IntegralUIColorScheme,IntegralUILabelAlignment,IntegralUIOrientation,IntegralUITheme}from"./integralui.enums.js";import{iuiProgressBarDefaultStyle}from"../styles/default/integralui.progressbar.style.js";import{iuiProgressBarOfficeStyle}from"../styles/themes/office/integralui.progressbar.office.js";import{iuiProgressBarDarkStyle}from"../styles/color-schemes/dark/integralui.progressbar.dark.js";import{iuiProgressBarLightStyle}from"../styles/color-schemes/light/integralui.progressbar.light.js";class IntegralUIProgressBar extends IntegralUIBaseValue{m8(){super.m8();this.b1=0;this.t4Value=0;this.c14=0;this.c4={top:0,right:0,bottom:0,left:0};this.c6=IntegralUILabelAlignment.Inline;this.c7=IntegralUIOrientation.Horizontal;this.c3={width:0,height:0};this.c9={width:0,height:0};this.c10=!0;this.c12={top:0,left:0};this.c13={width:0,height:0};this.c15={top:0,left:0};this.c16={width:0,height:0};this.c11=null;this.c17=null;this.c5=iuiProgressBarDefaultStyle;this.a19="iui-progressbar";this.b2Name=this.a19+"-content";this.c2=null;this.c18=null;this.c8=null;this.m7()}connectedCallback(){}disconnectedCallback(){this.q5();this.q6();this.q7()}attributeChangedCallback(t,e,i){super.attributeChangedCallback(t,e,i)}static get properties(){return{labelAlignment:{attribute:"label-alignment",converter:{fromAttribute:t=>{switch((t=t.replace(/"|'/,"").replace(/"|'/,"")).toLowerCase()){case"bottomcenter":return IntegralUILabelAlignment.BottomCenter;case"bottomleft":return IntegralUILabelAlignment.BottomLeft;case"bottomright":return IntegralUILabelAlignment.BottomRight;case"left":return IntegralUILabelAlignment.Left;case"middlecenter":return IntegralUILabelAlignment.MiddleCenter;case"middleleft":return IntegralUILabelAlignment.MiddleLeft;case"middleright":return IntegralUILabelAlignment.MiddleRight;case"right":return IntegralUILabelAlignment.Right;case"topcenter":return IntegralUILabelAlignment.TopCenter;case"topleft":return IntegralUILabelAlignment.TopLeft;case"topright":return IntegralUILabelAlignment.TopRight;default:return IntegralUILabelAlignment.Inline}},toAttribute:t=>{switch(t){case IntegralUILabelAlignment.BottomCenter:return"BottomCenter";case IntegralUILabelAlignment.BottomLeft:return"BottomLeft";case IntegralUILabelAlignment.BottomRight:return"BottomRight";case IntegralUILabelAlignment.Left:return"Left";case IntegralUILabelAlignment.MiddleCenter:return"MiddleCenter";case IntegralUILabelAlignment.MiddleLeft:return"MiddleLeft";case IntegralUILabelAlignment.MiddleRight:return"MiddleRight";case IntegralUILabelAlignment.Right:return"Right";case IntegralUILabelAlignment.TopCenter:return"TopCenter";case IntegralUILabelAlignment.TopLeft:return"TopLeft";case IntegralUILabelAlignment.TopRight:return"TopRight";default:return"Inline"}}},reflect:!0},orientation:{converter:{fromAttribute:t=>"horizontal"===(t=t.replace(/"|'/,"").replace(/"|'/,"")).toLowerCase()?IntegralUIOrientation.Horizontal:IntegralUIOrientation.Vertical,toAttribute:(t,e)=>t===IntegralUIOrientation.Horizontal?"Horizontal":"Vertical"},reflect:!0},showLabel:{type:Boolean,attribute:"show-label",reflect:!0}}}get labelAlignment(){return this.c6}set labelAlignment(t){if(this.c6!==t){const e=this.c6;this.c6=t;this.requestUpdate("labelAlignment",e);this.updateLayout()}}get orientation(){return this.c7}set orientation(t){if(this.c7!==t){const e=this.c7;this.c7=t;this.requestUpdate("orientation",e);this.updateLayout()}}get showLabel(){return this.c10}set showLabel(t){if(this.c10!==t){const e=this.c10;this.c10=t;this.requestUpdate("showLabel",e);this.updateLayout()}}get value(){return this.b1}set value(t){if(this.b1!==t){const e=this.b1;this.c14=this.b1;this.b1=Math.max(0,Math.min(Math.floor(t),100));this.m9("valueChanged",{value:this.b1});this.requestUpdate("value",e);this.updateLayout()}}q8(){let t=this;t.c13=t.c11?{width:t.c11.offsetWidth,height:t.c11.offsetHeight+1}:{width:0,height:0};t.c16=t.c17?{width:t.c17.offsetWidth,height:t.c17.offsetHeight}:{width:0,height:0};switch(t.c6){case IntegralUILabelAlignment.BottomCenter:t.c12.left=Math.max(t.c4.left,(t.c4.left+t.c3.width-t.c13.width)/2);t.c12.top=t.c4.top+t.a6.height-t.c13.height;break;case IntegralUILabelAlignment.BottomRight:t.c12.left=Math.max(t.c4.left,t.c4.left+1+t.c3.width-t.c13.width);t.c12.top=t.c4.top+t.a6.height-t.c13.height;break;case IntegralUILabelAlignment.Left:t.c15.left=t.c4.left+t.c13.width;t.c12.left=t.c4.left;break;case IntegralUILabelAlignment.MiddleLeft:t.c12.left=t.c4.left-1;break;case IntegralUILabelAlignment.MiddleCenter:t.c12.left=Math.max(t.c4.left,(t.c4.left+t.c3.width-t.c13.width)/2);break;case IntegralUILabelAlignment.MiddleRight:t.c12.left=Math.max(t.c4.left,t.c4.left+1+t.c3.width-t.c13.width);break;case IntegralUILabelAlignment.TopCenter:t.c12.left=Math.max(t.c4.left,(t.c4.left+t.c3.width-t.c13.width)/2);break;case IntegralUILabelAlignment.TopRight:t.c12.left=Math.max(t.c4.left,t.c4.left+1+t.c3.width-t.c13.width);break;case IntegralUILabelAlignment.Right:t.c12.left=t.a6.width-t.c4.right-t.c13.width;break;case IntegralUILabelAlignment.Inline:t.c12.left=t.b1>t.c14?t.c4.left+t.c3.width:t.c4.left+t.c9.width;break;default:this.t3Func()}t.update()}q1(){let t=this;if(t.c16.width>0&&t.c16.height>0){let e=0,i=0,a=1,l=3,h=t.b1>=t.c14?1:-1;if(t.c7===IntegralUIOrientation.Horizontal){i=t.b1<100?Math.floor(t.c16.width*t.b1/100):t.c16.width;a=h*(i-t.c3.width)/l}else{i=t.b1<100?Math.floor(t.c16.height*t.b1/100):t.c16.height;a=h*(i-t.c3.height)/l}let c=(t.b1-t.c14)/a;if(t.allowAnimation){t.q5();t.c2=setInterval(function(){if(t.c7===IntegralUIOrientation.Horizontal)if(e<a){t.c3.width+=l*h;t.update();t.q8();e++}else{t.c3.width=i;t.update();t.q8();clearInterval(t.c2)}else if(t.c3.height<i){t.c3.height+=l*h;t.update();t.q8();e++}else{t.c3.height=i;t.update();t.q8();clearInterval(t.c2)}},7);t.q6();let r=0,s=h<0?500:0;t.c18=setTimeout(function(){t.q7();t.c8=setInterval(function(){if(t.c7===IntegralUIOrientation.Horizontal)if(r<a){t.c9.width-=l;if(h>0&&t.t4Value+c<t.b1)t.t4Value+=c;else if(h<0&&t.t4Value+c>t.b1)t.t4Value+=c;t.update();t.q8();r++}else{t.c9.width=i;t.t4Value=t.b1;t.update();t.q8();clearInterval(t.c8)}else if(r<a){t.c9.height-=l;if(h>0&&t.t4Value+c<t.b1)t.t4Value+=c;else if(h<0&&t.t4Value+c>t.b1)t.t4Value+=c;t.update();t.q8();r++}else{t.c9.height=i;t.t4Value=t.b1;t.update();t.q8();clearInterval(t.c8)}},7);clearTimeout(t.c18)},s)}else{if(t.c7===IntegralUIOrientation.Horizontal)t.c3.width=i;else t.c3.height=i;t.t4Value=t.b1;t.update();t.q8()}}}q5(){if(this.c2)clearInterval(this.c2)}q6(){if(this.c18)clearTimeout(this.c18)}q7(){if(this.c8)clearInterval(this.c8)}n5(){let t=this;return new Promise(e=>{t.update();t.c4=t.a2.getPadding(t.a18);let i={top:0,left:0,width:t.c7===IntegralUIOrientation.Horizontal?t.a18.clientWidth:0,height:t.c7===IntegralUIOrientation.Horizontal?0:t.a18.clientHeight};t.a1={width:t.a18.clientWidth-(t.c4.left+t.c4.right),height:t.a18.clientHeight-(t.c4.top+t.c4.bottom)};if(t.c11){t.t4Value=t.b1;t.c12.top=-9999999;t.update();t.t4Value=t.c14}t.c13=t.c11?{width:t.c11.offsetWidth,height:t.c11.offsetHeight+1}:{width:0,height:0};t.c16=t.c17?{width:t.c17.offsetWidth,height:t.c17.offsetHeight}:{width:0,height:0};if(t.c7===IntegralUIOrientation.Horizontal)i.height=Math.max(t.c13.height,t.c16.height);else i.width=Math.max(t.c13.width,t.c16.width);t.c16={width:t.a1.width-t.c13.width,height:t.c16.height};if(t.c6!==IntegralUILabelAlignment.Inline&&t.c6!==IntegralUILabelAlignment.Left&&t.c6!==IntegralUILabelAlignment.Right&&t.c6!==IntegralUILabelAlignment.MiddleCenter&&t.c6!==IntegralUILabelAlignment.MiddleLeft&&t.c6!==IntegralUILabelAlignment.MiddleRight){i.height=t.c13.height+t.c16.height;t.c16.width=t.a1.width}t.a6=i;t.c15={top:Math.max(t.c4.top+(t.c13.height-t.c16.height)/2,t.c4.top),left:t.c4.left};t.c12={top:Math.max(t.c4.top+(t.c16.height-t.c13.height)/2,t.c4.top+1),left:t.c4.left};switch(t.c6){case IntegralUILabelAlignment.BottomLeft:t.c12.left=t.c4.left;t.c12.top=t.c4.top+t.a6.height-t.c13.height;t.c15.top=t.c4.top;break;case IntegralUILabelAlignment.BottomCenter:t.c12.left=Math.max(t.c4.left,(t.c4.left+Math.floor(t.c16.width*t.b1/100)-t.c13.width)/2);t.c12.top=t.c4.top+t.a6.height-t.c13.height;t.c15.top=t.c4.top;break;case IntegralUILabelAlignment.BottomRight:t.c12.left=Math.max(t.c4.left,t.c4.left+1+Math.floor(t.c16.width*t.b1/100)-t.c13.width);t.c12.top=t.c4.top+t.a6.height-t.c13.height;t.c15.top=t.c4.top;break;case IntegralUILabelAlignment.Left:t.c12.left=t.c4.left;t.c15.left=t.c4.left+t.c13.width;break;case IntegralUILabelAlignment.MiddleCenter:t.c12.left=Math.max(t.c4.left,(t.c4.left+Math.floor(t.c16.width*t.b1/100)-t.c13.width)/2);t.c16.width=t.a1.width;break;case IntegralUILabelAlignment.MiddleLeft:t.c12.left=t.c4.left-1;t.c16.width=t.a1.width;break;case IntegralUILabelAlignment.MiddleRight:t.c12.left=Math.max(t.c4.left,t.c4.left+1+Math.floor(t.c16.width*t.b1/100)-t.c13.width);t.c16.width=t.a1.width;break;case IntegralUILabelAlignment.Right:t.c12.left=t.a6.width-t.c4.right-t.c13.width;break;case IntegralUILabelAlignment.TopCenter:t.c12.left=Math.max(t.c4.left,(t.c4.left+Math.floor(t.c16.width*t.b1/100)-t.c13.width)/2);t.c12.top=t.c4.top;t.c15.top=t.c4.top+t.c13.height;break;case IntegralUILabelAlignment.TopLeft:t.c12.left=t.c4.left;t.c12.top=t.c4.top;t.c15.top=t.c4.top+t.c13.height;break;case IntegralUILabelAlignment.TopRight:t.c12.left=Math.max(t.c4.left,t.c4.left+1+Math.floor(t.c16.width*t.b1/100)-t.c13.width);t.c12.top=t.c4.top;t.c15.top=t.c4.top+t.c13.height;break;default:t.c12.left=t.c4.left+Math.floor(t.c16.width*t.b1/100)}t.q1();e()})}m3(){let t={};if(this.c7===IntegralUIOrientation.Horizontal){if(this.a7.width>0)t.width=this.a7.width+"px";if(this.a6.height>0)t.height=this.a6.height+"px"}else{if(this.a6.width>0)t.width=this.a6.width+"px";if(this.a7.height>0)t.height=this.a7.height+"px"}return t}q3(){let t={"z-index":2};if(this.c7===IntegralUIOrientation.Horizontal)t.width=this.c3.width+"px";else{t.position="absolute";t.bottom="-1px";t.height=this.c3.height+"px"}return t}q2(){let t={left:0,opacity:"0.25",position:"absolute",top:0,"z-index":1};if(this.c7===IntegralUIOrientation.Horizontal)t.width=this.c9.width+"px";else{t.top="auto";t.bottom=0;t.height=this.c9.height+"px"}return t}q4(){let t={top:this.c15.top+"px",left:this.c15.left+"px"};if(this.a7.width>0){t.width=this.a7.width-2+"px";if(this.c6===IntegralUILabelAlignment.Left||this.c6===IntegralUILabelAlignment.Right)t.width=this.a7.width-2-this.c13.width+"px"}return t}m11(t){this.a9=css``;switch(t){case IntegralUIColorScheme.Dark:this.a9.cssText=this.a2.replaceAll(iuiProgressBarDarkStyle.cssText,"../../../icons",this.a13);break;case IntegralUIColorScheme.Light:this.a9.cssText=this.a2.replaceAll(iuiProgressBarLightStyle.cssText,"../../../icons",this.a13);break;default:this.a9.cssText=""}}m16(t){this.a15=css``;switch(t){case IntegralUITheme.Office:this.a15.cssText=this.a2.replaceAll(iuiProgressBarOfficeStyle.cssText,"../../../icons",this.a13);break;default:this.a15.cssText=""}}firstUpdated(t){this.m14();this.updateLayout()}render(){return html`             <style>                 ${this.c5}                 ${this.a15}                 ${this.a9}                 ${this.a11}             </style>             <div data-ctrl="progressbar" class=${classMap(this.m2())} style=${styleMap(this.m3())} draggable="true" @dragstart="${t=>this.n4(t)}">                 <div class="iui-progressbar-track" style=${styleMap(this.q4())}>                     <div class="iui-progressbar-track-content" style=${styleMap({width:this.c3.width+"px"})}>                         <div class=${classMap(this.n2())} style=${styleMap(this.q3())}></div>                         ${this.allowAnimation?html`<div class=${classMap(this.n2())} style=${styleMap(this.q2())}></div>`:html``}                     </div>                 </div>                 ${this.c10?html`<div class="iui-progressbar-label" style=${styleMap({top:this.c12.top+"px",left:this.c12.left+"px"})}>${Math.floor(this.t4Value)}%</div>`:html``}             </div>         `}m13(t){this.c5=css``;this.c5.cssText=this.a2.replaceAll(iuiProgressBarDefaultStyle.cssText,"../../icons",t)}m14(){this.a18=this.shadowRoot.querySelector("div[data-ctrl=progressbar]");this.c11=this.shadowRoot.querySelector(".iui-progressbar-label");this.c17=this.shadowRoot.querySelector(".iui-progressbar-track")}}window.customElements.define("iui-progressbar",IntegralUIProgressBar);export default IntegralUIProgressBar;