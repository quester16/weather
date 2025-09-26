import "./style.css";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div id='wrapper'>
    <div class='container'>
      <ul class='weathers_container'>
        <li class="weather_item" data-weather='rainy'>
          <img src="./assets/rainy-bg.jpg" class="img"/>
          <div class='icon'>
            <img src="./assets/icons/cloud-rain.svg" class="img"/>          
          </div>
        </li>
        <li class="weather_item" data-weather='summer'> 
          <img src="./assets/summer-bg.jpg" class="img"/>
          <div class='icon'>
            <img src="./assets/icons/sun.svg" class="img"/>          
          </div>
        </li>
        <li class="weather_item" data-weather='winter'> 
          <img src="./assets/winter-bg.jpg" class="img"/>
          <div class='icon'>
            <img src="./assets/icons/cloud-snow.svg" class="img"/>          
          </div>
        </li>
        </ul>
        <div class="volume_range">
        <input type="range" id="slider"/>
        </div>
    </div>    
  </div>
`;
