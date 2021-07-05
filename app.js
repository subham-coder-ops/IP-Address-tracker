const lookupBtn = document.querySelector(".lookup-btn");
const ipDisplay =  document.querySelector(".ip-display");
const locationDisplay =  document.querySelector(".location-display");
const timeDisplay =  document.querySelector(".time-display");
const ispDisplay =  document.querySelector(".isp-display");

lookupBtn.addEventListener("click",() => {

  axios.get("https://ipapi.co/json").then(response =>{
    ipDisplay.textContent=`Ip:${response.data.ip}`;
    locationDisplay.textContent=`Location:${response.data.city},${response.data.region}, ${response.data.country_name}`;
    timeDisplay.textContent=`Timezone:${response.data.timezone}`;
    ispDisplay.textContent=`ISP:${response.data.org}`;
  });

});
