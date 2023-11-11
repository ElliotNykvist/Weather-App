(()=>{!function(){const e=document.querySelector(".wrapper");e.appendChild(function(){const e=document.createElement("div");e.classList.add("header");const t=document.createElement("div");t.classList.add("location1");const n=document.createElement("div");n.classList.add("logo"),n.textContent="Weather-App";const d=document.createElement("div");d.classList.add("input");const a=document.createElement("input");a.id="location-value",a.type="text",a.placeholder="Search location...",a.maxLength="85";const i=document.createElement("button");i.classList.add("search-btn");const c=document.createElement("i");c.classList.add("fa-solid","fa-magnifying-glass"),c.style.color="#ffffff",i.appendChild(c),d.appendChild(a),d.appendChild(i);const o=document.createElement("label");o.classList.add("switch");const s=document.createElement("input");s.type="checkbox",s.id="switch";const r=document.createElement("span");return r.classList.add("slider"),r.innerHTML="C&emsp;&ensp;F",o.appendChild(s),o.appendChild(r),t.appendChild(n),t.appendChild(d),e.appendChild(t),e.appendChild(o),e}()),e.appendChild(function(){const e=document.createElement("div");e.classList.add("container");const t=document.createElement("div");t.classList.add("left-container");const n=document.createElement("div");n.classList.add("title");const d=document.createElement("h2");d.classList.add("location"),d.textContent="London";const a=document.createElement("h3");a.classList.add("weather-type"),a.textContent="Sunny",n.appendChild(d),n.appendChild(a);const i=document.createElement("div");i.classList.add("weather-div");const c=document.createElement("div");c.classList.add("temp-div");const o=document.createElement("h1");o.classList.add("weather-temp"),o.textContent="26";const s=document.createElement("h4");s.classList.add("weather-temp-type"),s.textContent="°C",c.appendChild(o),c.appendChild(s);const r=document.createElement("div");r.classList.add("info-div");const m=document.createElement("p");m.classList.add("feels-like"),m.textContent="Feels Like: 28 °C";const l=document.createElement("p");l.classList.add("wind"),l.textContent="Wind: 1 m/s";const p=document.createElement("p");p.classList.add("humidity"),p.textContent="Humidity: 75 %";const u=document.createElement("p");u.classList.add("rain"),u.textContent="Rain: 0 mm",r.appendChild(m),r.appendChild(l),r.appendChild(p),r.appendChild(u),i.appendChild(c),i.appendChild(r);const h=document.createElement("div");h.classList.add("right-container");const y=document.createElement("div");y.classList.add("animation");const C=document.createElement("img");return C.classList.add("img"),C.setAttribute("src","./images/animated/1000.svg"),y.appendChild(C),t.appendChild(n),t.appendChild(i),h.appendChild(y),e.appendChild(t),e.appendChild(h),e}()),e.appendChild(function(){const e=document.createElement("div");return e.classList.add("hours"),["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"].forEach((t=>{const n=document.createElement("div");n.classList.add("temp-div-mini");const d=document.createElement("h4");d.classList.add("time"),d.textContent=t;const a=document.createElement("div");a.classList.add("weather-temp-div-mini");const i=document.createElement("h5");i.classList.add("weather-temp-mini"),i.textContent="26";const c=document.createElement("h6");c.classList.add("weather-temp-type-mini"),c.textContent="°C",a.appendChild(i),a.appendChild(c);const o=document.createElement("img");o.classList.add("img-mini"),o.setAttribute("src","./images/animated/1003.svg"),n.appendChild(d),n.appendChild(a),n.appendChild(o),e.appendChild(n)})),e}()),e.appendChild(function(){const e=document.createElement("div");return e.classList.add("days"),[{date:"Today",weatherIcon:"./images/animated/sun.svg",temperature:"26",weatherType:"°C",wind:"Wind: 1 m/s",humidity:"Humidity: 75 %",rain:"Rain: 0 %"},{date:"Today",weatherIcon:"./images/animated/day.svg",temperature:"26",weatherType:"°C",wind:"Wind: 1 m/s",humidity:"Humidity: 75 %",rain:"Rain: 0 %"},{date:"Today",weatherIcon:"./images/animated/day.svg",temperature:"26",weatherType:"°C",wind:"Wind: 1 m/s",humidity:"Humidity: 75 %",rain:"Rain: 0 %"}].forEach((t=>{const n=document.createElement("div");n.classList.add("day");const d=document.createElement("div");d.classList.add("mini-title");const a=document.createElement("h4");a.classList.add("date"),a.textContent=t.date;const i=document.createElement("img");i.classList.add("img-day"),i.setAttribute("src",t.weatherIcon),d.appendChild(a),d.appendChild(i);const c=document.createElement("div");c.classList.add("weather-temp-div-mini");const o=document.createElement("div");o.classList.add("temp-day-div-mini");const s=document.createElement("h5");s.classList.add("weather-temp-day"),s.textContent=t.temperature;const r=document.createElement("h6");r.classList.add("weather-temp-type-mini"),r.textContent=t.weatherType,o.appendChild(s),o.appendChild(r);const m=document.createElement("div");m.classList.add("info-mini");const l=document.createElement("p");l.classList.add("wind-day"),l.textContent=t.wind;const p=document.createElement("p");p.classList.add("humidity-day"),p.textContent=t.humidity;const u=document.createElement("p");u.classList.add("rain-day"),u.textContent=t.rain,m.appendChild(l),m.appendChild(p),m.appendChild(u),n.appendChild(d),c.appendChild(o),c.appendChild(m),n.appendChild(c),e.appendChild(n)})),e}()),e.appendChild(function(){const e=document.createElement("footer"),t=document.createElement("span");return t.textContent="@ Copyright Elliot Nykvist",e.appendChild(t),e}())}();const e="984f37a3d7f842c6ad8131427233110",t=document.getElementById("location-value"),n=document.querySelector(".search-btn"),d=document.querySelectorAll(".weather-temp-mini"),a=document.querySelectorAll(".img-mini"),i=document.querySelectorAll(".img-day"),c=document.querySelectorAll(".info-mini"),o=document.querySelectorAll(".date"),s=document.querySelectorAll(".weather-temp-day"),r=document.querySelectorAll(".weather-temp-type-mini"),m=document.getElementById("switch"),l=document.querySelector(".location");let p=l.textContent;async function u(t){let n;try{const d=await fetch(`https://api.weatherapi.com/v1/current.json?key=${e}&q=${t}`,{mode:"cors"});n=await d.json()}catch(e){console.log(e)}const d=n.location.name,a=n.current.condition.text;if(document.querySelector(".weather-type").innerHTML=a,l.innerHTML=d,!0===m.checked){const e=Math.round(n.current.temp_f);document.querySelector(".weather-temp").innerHTML=e,document.querySelector(".weather-temp-type").innerHTML="°F";const t=n.current.feelslike_f,d=n.current.wind_mph,a=n.current.precip_in;document.querySelector(".feels-like").innerHTML=`Feels Like: ${t} °F`,document.querySelector(".wind").innerHTML=`Wind: ${d} mph`,document.querySelector(".rain").innerHTML=`Rain: ${a} in`}else{const e=n.current.temp_c;document.querySelector(".weather-temp").innerHTML=e,document.querySelector(".weather-temp-type").innerHTML="°C";const t=n.current.feelslike_c,d=Math.round(n.current.wind_kph/3.6),a=n.current.precip_mm;document.querySelector(".feels-like").innerHTML=`Feels Like: ${t} °C`,document.querySelector(".wind").innerHTML=`Wind: ${d} m/s`,document.querySelector(".rain").innerHTML=`Rain: ${a} mm`}const i=n.current.humidity;document.querySelector(".humidity").innerHTML=`Humidity: ${i} %`;const c=n.current.condition.code;document.querySelector(".img").src=`./images/animated/${c}.svg`}async function h(t){let n;try{const d=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${e}&q=${t}&days=3`,{mode:"cors"});n=await d.json()}catch(e){console.log(e)}const d=n.forecast.forecastday;!0===m.checked?(c.forEach(((e,t)=>{const n=d[t].day.avgvis_miles,a=d[t].day.avghumidity,i=d[t].day.totalprecip_in,c=e.querySelector(".info-mini .wind-day"),o=e.querySelector(".info-mini .humidity-day"),s=e.querySelector(".info-mini .rain-day");c.innerHTML=`Wind: ${n} mph`,o.innerHTML=`Humidity: ${a} %`,s.innerHTML=`Rain: ${i} in`})),s.forEach(((e,t)=>{const n=Math.round(d[t].day.avgtemp_f);e.innerHTML=n})),r.forEach((e=>{e.innerHTML="°F"}))):(c.forEach(((e,t)=>{const n=Math.round(d[t].day.avgvis_km/3.6),a=d[t].day.avghumidity,i=d[t].day.totalprecip_mm,c=e.querySelector(".info-mini .wind-day"),o=e.querySelector(".info-mini .humidity-day"),s=e.querySelector(".info-mini .rain-day");c.innerHTML=`Wind: ${n} m/s`,o.innerHTML=`Humidity: ${a} %`,s.innerHTML=`Rain: ${i} mm`})),s.forEach(((e,t)=>{const n=Math.round(d[t].day.avgtemp_c);e.innerHTML=n})),r.forEach((e=>{e.innerHTML="°C"}))),i.forEach(((e,t)=>{e.src=d[t].day.condition.icon})),o.forEach(((e,t)=>{e.innerHTML=d[t].date}))}async function y(t){let n;try{const d=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${e}&q=${t}`,{mode:"cors"});n=await d.json()}catch(e){console.log(e)}const i=n.forecast.forecastday[0].hour;console.log(i),a.forEach(((e,t)=>{e.src=i[t].condition.icon})),!0===m.checked?d.forEach(((e,t)=>{e.innerHTML=Math.round(i[t].temp_f)})):d.forEach(((e,t)=>{e.innerHTML=Math.round(i[t].temp_c)}))}m.addEventListener("change",(()=>{m.checked,u(p),h(p),y(p)})),u(p),h(p),y(p),n.addEventListener("click",(()=>{p=t.value,u(p),h(p),y(p),t.value=""}))})();