(this.webpackJsonpdevschool=this.webpackJsonpdevschool||[]).push([[0],{17:function(e,a,t){e.exports=t(41)},22:function(e,a,t){},23:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(12),i=t.n(r),l=(t(22),t(13)),c=t(14),o=t(15),m=t(16),d=(t(23),t(2)),u=t.n(d),h=function(e){return s.a.createElement("div",{className:"col-md-4"},s.a.createElement("div",{className:"card text-center mb-2 card-kasus"},s.a.createElement("div",{className:"card-header text-white bg-warning"},s.a.createElement("h5",null,"Positif")),s.a.createElement("div",{className:"card-body"},s.a.createElement("h5",null,e.positif),null==e.positifToday?s.a.createElement("div",null):s.a.createElement("p",null,"Hari ini : ",e.positifToday))))},E=function(e){return s.a.createElement("div",{className:"col-md-4"},s.a.createElement("div",{className:"card text-center mb-2 card-kasus"},s.a.createElement("div",{className:"card-header text-white bg-success "},s.a.createElement("h5",null,"Sembuh")),s.a.createElement("div",{className:"card-body"},s.a.createElement("h5",null,e.sembuh))))},v=function(e){return s.a.createElement("div",{className:"col-md-4 mb-2"},s.a.createElement("div",{className:"card text-center card-kasus"},s.a.createElement("div",{className:"card-header text-white bg-danger"},s.a.createElement("h5",null,"Meninggal")),s.a.createElement("div",{className:"card-body"},s.a.createElement("h5",null,e.kematian),null==e.todayKematian?s.a.createElement("div",null):s.a.createElement("p",null,"Hari ini : ",e.todayKematian))))},b=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).onChangeHandler=function(e){return n.setState({nama_Provi:e.target.value})},n.state={positif:"",sembuh:"",meninggal:"",positifIndo:"",positfToday:"",sembIndo:"",sembToday:"",meniIndo:"",meniToday:"",arrHari:["Ahad","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"],hari:(new Date).getDay(),arrBulan:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],bulan:(new Date).getMonth(),tanggal:(new Date).getDate(),tahun:(new Date).getFullYear()},n}return Object(c.a)(t,[{key:"getGlobal",value:function(){var e=this;u.a.get("http://coronavirus-19-api.herokuapp.com/all").then((function(a){e.setState({positif:a.data.cases,sembuh:a.data.deaths,meninggal:a.data.recovered})})).catch((function(e){return console.log(e)}))}},{key:"getIndonesia",value:function(){var e=this;u.a.get("http://coronavirus-19-api.herokuapp.com/countries/indonesia").then((function(a){console.log(a.data),e.setState({positifIndo:a.data.cases,positfToday:a.data.todayCases,sembIndo:a.data.recovered,meniIndo:a.data.deaths,meniToday:a.data.todayDeaths})})).catch((function(e){return console.log(e)}))}},{key:"componentDidMount",value:function(){this.getGlobal(),this.getIndonesia()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row justify-content-center"},s.a.createElement("div",{className:"col-md-10"},s.a.createElement("div",{className:"card mt-3 mb-3"},s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"card p-2 mt-5 mb-5"},s.a.createElement("h4",{className:"text-center"},"Covid-19 Real Times Global")),s.a.createElement("div",{className:"row mt-3"},s.a.createElement(h,{positif:this.state.positif}),s.a.createElement(E,{sembuh:this.state.sembuh}),s.a.createElement(v,{kematian:this.state.meninggal})),s.a.createElement("div",{className:"card p-2 mt-5 mb-5"},s.a.createElement("h4",{className:"text-center"},"Covid-19 Real Times Indonesia")),s.a.createElement("div",{className:"row mt-3"},s.a.createElement(h,{positif:this.state.positifIndo,positifToday:this.state.positfToday}),s.a.createElement(E,{sembuh:this.state.sembIndo}),s.a.createElement(v,{kematian:this.state.meniIndo,todayKematian:this.state.meniToday})),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("p",{className:"text-center",style:{marginTop:"300px"}},(new Date).getHours(),":",(new Date).getMinutes()," ",s.a.createElement("br",null),this.state.arrHari[this.state.hari],", ",this.state.tanggal," ",this.state.arrBulan[this.state.bulan]," ",this.state.tahun,s.a.createElement("br",null)," #DirumahAja. By ",s.a.createElement("span",{className:"text-danger"},"\u2764")," Muhammad Dzulfikri ",s.a.createElement("br",null),"Data from API @herokuapp")))))))))}}]),t}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.b3d08c5c.chunk.js.map