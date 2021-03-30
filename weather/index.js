async function weather() {
    const response = await fetch("https://api.weatherapi.com/v1/current.json?key=c8f3b7097046493a948214424212903&q=IM2 7AR&aqi=no")
    .then(response => response.json());
    json = response
    console.log(json.current.temp_c);
} 