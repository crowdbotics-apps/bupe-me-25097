(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"2a1a":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"window-height window-width row justify-center items-center"},[n("div",{},[n("q-card",{staticClass:"q-pa-md q-ma-none no-shadow bg-white main-card-bg",staticStyle:{width:"420px"}},[n("q-card-section",{staticClass:"q-mt-md q-mb-sm"},[n("div",{staticClass:"row justify-center items-center"},[n("img",{attrs:{alt:"App logo",width:"130px",src:a("81e4")}}),n("div",{staticClass:"col-12 q-mt-lg"},[n("span",{staticClass:"auth-title"},[e._v("Sign Up")])])])]),0==e.screen?n("q-card-section",{staticClass:"text-grey-8"},[n("q-form",{staticClass:"q-gutter-md"},[n("q-input",{staticClass:"main-input-bg",attrs:{autocomplete:"off",square:"",filled:"",type:"text",label:"First Name"},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"img:statics/icons/user.png",color:"gray"}})]},proxy:!0}],null,!1,2087087366),model:{value:e.firstName,callback:function(t){e.firstName=t},expression:"firstName"}}),n("q-input",{staticClass:"main-input-bg",attrs:{autocomplete:"off",square:"",filled:"",type:"text",label:"Middle Name (Optional)"},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"img:statics/icons/user.png",color:"gray"}})]},proxy:!0}],null,!1,2087087366),model:{value:e.middleName,callback:function(t){e.middleName=t},expression:"middleName"}}),n("q-input",{staticClass:"main-input-bg",attrs:{autocomplete:"off",square:"",filled:"",type:"text",label:"Last Name"},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"img:statics/icons/user.png",color:"gray"}})]},proxy:!0}],null,!1,2087087366),model:{value:e.lastName,callback:function(t){e.lastName=t},expression:"lastName"}}),n("q-input",{staticClass:"main-input-bg",attrs:{autocomplete:"off",square:"",filled:"",type:"email",label:"Enter email address"},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"email",color:"gray"}})]},proxy:!0}],null,!1,2932595878),model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("q-input",{staticClass:"main-input-bg",attrs:{square:"",filled:"",mask:"####-##-##",label:"Date of birth"},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"img:statics/icons/calendar.png",color:"gray"}},[n("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[n("q-date",{attrs:{mask:"YYYY-MM-DD"},model:{value:e.dob,callback:function(t){e.dob=t},expression:"dob"}},[n("div",{staticClass:"row items-center justify-end"},[n("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Close",color:"primary",flat:""}})],1)])],1)],1)]},proxy:!0}],null,!1,2400905761),model:{value:e.dob,callback:function(t){e.dob=t},expression:"dob"}}),n("q-input",{staticClass:"main-input-bg",attrs:{autocomplete:"off",square:"",filled:"",type:"text",label:"Cellphone number"},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"img:statics/icons/phone.png",color:"gray"}})]},proxy:!0}],null,!1,26508651),model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1)],1):e._e(),1==e.screen?n("q-card-section",{staticClass:"text-grey-8"},[n("q-form",{staticClass:"q-gutter-md"},[n("q-input",{staticClass:"main-input-bg",attrs:{autocomplete:"off",square:"",filled:"",type:"text",label:"Street address 1"},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"img:statics/icons/address.png",color:"gray"}})]},proxy:!0}],null,!1,3102614977),model:{value:e.street1,callback:function(t){e.street1=t},expression:"street1"}}),n("q-input",{staticClass:"main-input-bg",attrs:{autocomplete:"off",square:"",filled:"",type:"text",label:"Street address 2"},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"img:statics/icons/address.png",color:"gray"}})]},proxy:!0}],null,!1,3102614977),model:{value:e.street2,callback:function(t){e.street2=t},expression:"street2"}}),n("q-select",{staticClass:"main-select-bg",attrs:{square:"",filled:"","input-debounce":"0","use-input":"",options:e.cityOptions},on:{filter:e.filterFn},scopedSlots:e._u([{key:"selected",fn:function(){return[e.city?[n("span",{staticStyle:{"font-family":"Roboto","font-size":"16px","font-style":"normal",color:"rgba(0, 0, 0, 0.87)","padding-left":"10px"}},[e._v(e._s(e.city))])]:[n("span",{staticStyle:{"font-family":"Roboto","font-size":"16px","font-style":"normal",color:"rgba(0, 0, 0, 0.6)","padding-left":"10px"}},[e._v("City")])]]},proxy:!0}],null,!1,4183721835),model:{value:e.city,callback:function(t){e.city=t},expression:"city"}}),n("q-input",{staticClass:"main-input-bg",attrs:{autocomplete:"off",square:"",filled:"",type:"text",label:"Zip code"},scopedSlots:e._u([{key:"prepend",fn:function(){},proxy:!0}],null,!1,1321973649),model:{value:e.zip,callback:function(t){e.zip=t},expression:"zip"}}),n("q-input",{staticClass:"main-input-bg",attrs:{autocomplete:"off",square:"",filled:"",type:e.isPwd?"password":"text",label:"Enter password"},scopedSlots:e._u([{key:"append",fn:function(){return[n("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0},{key:"prepend",fn:function(){return[n("q-icon",{attrs:{name:"img:statics/icons/pass.png",color:"gray"}})]},proxy:!0}],null,!1,1316399857),model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1):e._e(),2==e.screen?n("q-card-section",{staticClass:"text-grey-8"},[n("q-form",{staticClass:"q-gutter-md"},[n("div",[n("span",{staticStyle:{display:"block","text-align":"justify"}},[e._v('\n              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n            ')])])])],1):e._e(),n("q-card-actions",[n("div",{staticClass:"row full-width items-center"},[n("div",{staticClass:"col-12 text-center q-mb-xl"},[e.screen<2?n("q-btn",{staticClass:" main-button-bg full-width",attrs:{size:"md",label:"Next","text-color":"white",loading:e.loading},on:{click:function(t){e.screen++}}}):e._e(),2===e.screen?n("q-btn",{staticClass:" main-button-bg full-width",attrs:{size:"md",label:"Accept and Sign up","text-color":"white",loading:e.loading},on:{click:e.registration}}):e._e(),e.screen>0?n("q-btn",{staticClass:"secondary-button-bg full-width q-mt-sm",attrs:{size:"md",label:"Back","text-color":"white",loading:e.loading},on:{click:function(t){e.screen--}}}):e._e()],1),n("div",{staticClass:"col-12"},[n("p",{staticClass:"text-center nolink-text"},[e._v("Already have an account?\n              "),n("a",{staticClass:"cursor-pointer",staticStyle:{color:"#2F5597","text-transform":"none !important"},on:{click:function(t){return e.$router.push("/login")}}},[e._v("Sign in")])])])])])],1)],1)])},o=[],i=(a("d25f"),a("ffc1"),["Aberdeen","Abilene","Akron","Albany","Albuquerque","Alexandria","Allentown","Amarillo","Anaheim","Anchorage","Ann Arbor","Antioch","Apple Valley","Appleton","Arlington","Arvada","Asheville","Athens","Atlanta","Atlantic City","Augusta","Aurora","Austin","Bakersfield","Baltimore","Barnstable","Baton Rouge","Beaumont","Bel Air","Bellevue","Berkeley","Bethlehem","Billings","Birmingham","Bloomington","Boise","Boise City","Bonita Springs","Boston","Boulder","Bradenton","Bremerton","Bridgeport","Brighton","Brownsville","Bryan","Buffalo","Burbank","Burlington","Cambridge","Canton","Cape Coral","Carrollton","Cary","Cathedral City","Cedar Rapids","Champaign","Chandler","Charleston","Charlotte","Chattanooga","Chesapeake","Chicago","Chula Vista","Cincinnati","Clarke County","Clarksville","Clearwater","Cleveland","College Station","Colorado Springs","Columbia","Columbus","Concord","Coral Springs","Corona","Corpus Christi","Costa Mesa","Dallas","Daly City","Danbury","Davenport","Davidson County","Dayton","Daytona Beach","Deltona","Denton","Denver","Des Moines","Detroit","Downey","Duluth","Durham","El Monte","El Paso","Elizabeth","Elk Grove","Elkhart","Erie","Escondido","Eugene","Evansville","Fairfield","Fargo","Fayetteville","Fitchburg","Flint","Fontana","Fort Collins","Fort Lauderdale","Fort Smith","Fort Walton Beach","Fort Wayne","Fort Worth","Frederick","Fremont","Fresno","Fullerton","Gainesville","Garden Grove","Garland","Gastonia","Gilbert","Glendale","Grand Prairie","Grand Rapids","Grayslake","Green Bay","GreenBay","Greensboro","Greenville","Gulfport-Biloxi","Hagerstown","Hampton","Harlingen","Harrisburg","Hartford","Havre de Grace","Hayward","Hemet","Henderson","Hesperia","Hialeah","Hickory","High Point","Hollywood","Honolulu","Houma","Houston","Howell","Huntington","Huntington Beach","Huntsville","Independence","Indianapolis","Inglewood","Irvine","Irving","Jackson","Jacksonville","Jefferson","Jersey City","Johnson City","Joliet","Kailua","Kalamazoo","Kaneohe","Kansas City","Kennewick","Kenosha","Killeen","Kissimmee","Knoxville","Lacey","Lafayette","Lake Charles","Lakeland","Lakewood","Lancaster","Lansing","Laredo","Las Cruces","Las Vegas","Layton","Leominster","Lewisville","Lexington","Lincoln","Little Rock","Long Beach","Lorain","Los Angeles","Louisville","Lowell","Lubbock","Macon","Madison","Manchester","Marina","Marysville","McAllen","McHenry","Medford","Melbourne","Memphis","Merced","Mesa","Mesquite","Miami","Milwaukee","Minneapolis","Miramar","Mission Viejo","Mobile","Modesto","Monroe","Monterey","Montgomery","Moreno Valley","Murfreesboro","Murrieta","Muskegon","Myrtle Beach","Naperville","Naples","Nashua","Nashville","New Bedford","New Haven","New London","New Orleans","New York","New York City","Newark","Newburgh","Newport News","Norfolk","Normal","Norman","North Charleston","North Las Vegas","North Port","Norwalk","Norwich","Oakland","Ocala","Oceanside","Odessa","Ogden","Oklahoma City","Olathe","Olympia","Omaha","Ontario","Orange","Orem","Orlando","Overland Park","Oxnard","Palm Bay","Palm Springs","Palmdale","Panama City","Pasadena","Paterson","Pembroke Pines","Pensacola","Peoria","Philadelphia","Phoenix","Pittsburgh","Plano","Pomona","Pompano Beach","Port Arthur","Port Orange","Port Saint Lucie","Port St. Lucie","Portland","Portsmouth","Poughkeepsie","Providence","Provo","Pueblo","Punta Gorda","Racine","Raleigh","Rancho Cucamonga","Reading","Redding","Reno","Richland","Richmond","Richmond County","Riverside","Roanoke","Rochester","Rockford","Roseville","Round Lake Beach","Sacramento","Saginaw","Saint Louis","Saint Paul","Saint Petersburg","Salem","Salinas","Salt Lake City","San Antonio","San Bernardino","San Buenaventura","San Diego","San Francisco","San Jose","Santa Ana","Santa Barbara","Santa Clara","Santa Clarita","Santa Cruz","Santa Maria","Santa Rosa","Sarasota","Savannah","Scottsdale","Scranton","Seaside","Seattle","Sebastian","Shreveport","Simi Valley","Sioux City","Sioux Falls","South Bend","South Lyon","Spartanburg","Spokane","Springdale","Springfield","St. Louis","St. Paul","St. Petersburg","Stamford","Sterling Heights","Stockton","Sunnyvale","Syracuse","Tacoma","Tallahassee","Tampa","Temecula","Tempe","Thornton","Thousand Oaks","Toledo","Topeka","Torrance","Trenton","Tucson","Tulsa","Tuscaloosa","Tyler","Utica","Vallejo","Vancouver","Vero Beach","Victorville","Virginia Beach","Visalia","Waco","Warren","Washington","Waterbury","Waterloo","West Covina","West Valley City","Westminster","Wichita","Wilmington","Winston","Winter Haven","Worcester","Yakima","Yonkers","York","Youngstown"]),s={name:"Login",data:function(){return{isPwd:!0,screen:0,firstName:"",middleName:"",lastName:"",email:"",dob:"",phone:"",street1:"",street2:"",cityOptions:[],city:"",zip:"",password:"",loading:!1}},methods:{filterFn:function(e,t){var a=this;t(""!==e?function(){var t=e.toLowerCase();a.cityOptions=i.filter((function(e){return e.toLowerCase().indexOf(t)>-1}))}:function(){a.cityOptions=i})},registration:function(){var e=this;if(""===this.email||""===this.firstName||""===this.lastName||""===this.dob||""===this.phone||""===this.city||""===this.zip||""===this.password)return this.$q.notify({type:"negative",message:"Please fill all fields."}),!1;this.loading=!0;var t={email:this.email,first_name:this.firstName,middle_name:this.middleName,last_name:this.lastName,dob:this.dob,phone:this.phone,street1:this.street1,street2:this.street2,city:this.city,zip:this.zip,password:this.password,password1:this.password};this.$axios.post("/rest-auth/registration/",t).then((function(t){console.log(t.data),localStorage.setItem("token",t.data.key),e.$router.push("/"),e.loading=!1})).catch((function(t){console.log(t),e.loading=!1;for(var a=0,n=Object.entries(t.response.data);a<n.length;a++){var o=n[a];e.$q.notify({type:"negative",message:"dob"!==o[0]?o[0]+" : "+o[1]:o[1]})}console.log(t.response)}))}}},r=s,l=a("2877"),c=a("9989"),u=a("f09f"),d=a("a370"),p=a("0378"),m=a("27f9"),f=a("0016"),g=a("7cbe"),h=a("52ee"),y=a("9c40"),b=a("ddd8"),C=a("4b7e"),v=a("7f67"),k=a("eebe"),S=a.n(k),w=Object(l["a"])(r,n,o,!1,null,null,null);t["default"]=w.exports;S()(w,"components",{QPage:c["a"],QCard:u["a"],QCardSection:d["a"],QForm:p["a"],QInput:m["a"],QIcon:f["a"],QPopupProxy:g["a"],QDate:h["a"],QBtn:y["a"],QSelect:b["a"],QCardActions:C["a"]}),S()(w,"directives",{ClosePopup:v["a"]})},"81e4":function(e,t,a){e.exports=a.p+"img/LOGO.a6e67be2.png"}}]);