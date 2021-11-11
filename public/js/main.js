
    const submit_btn = document.querySelector('#submitBtn');
            
            const cityName = document.querySelector('#city-name');

            const inputField = document.querySelector('#cityName');
            
            const temp = document.querySelector('#temp-span');
            
            const tempStatus = document.querySelector('#temp-status');

            const curDay = document.querySelector('#day');

            const curDate = document.querySelector('#date');


            const hide = document.querySelector('.temp-result');
                const getInfo = async (e)=>{
                    const inputVal = inputField.value;

                    e.preventDefault();
            
                
                if(inputVal === ""){
                    cityName.innerText = "Enter City Name First before Search";
                    hide.classList.add('temp_status');
                }else{
                    try{

                        let url= `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=metric&appid=739f32968e64a5fe251969df99bdb912`
                        const response = await fetch(url);
                          const data = await response.json();  
                          const arrData = [data];
                          cityName.innerText = `${arrData[0].name},${arrData[0].sys.country} `;
                          temp.innerText = arrData[0].main.temp;
                          const tempMood =arrData[0].weather[0].main;
                          tempStatus.innerText = tempMood;
                        const dt = arrData[0].dt;
                        
                        var time = new Date();
                       const day = time.toDateString();
                       const splitData =  day.split(" ");
                       curDay.innerText = splitData[0];
                       curDate.innerText = `${splitData[2]} ${splitData[1]} `;

                         //Consition to check tempurature status is sunny or cloudy

                         if(tempMood == "Clear"){
                            tempStatus.innerHTML = "<i class='fas fa-sun' style='color:#eccc68;'></i>";
                         } else if(tempMood == "Clouds"){
                            tempStatus.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
                         } else if(tempMood == "Rain"){
                         tempStatus.innerHTML = "<i class='fas fa-rain' style='color:#a4b0be;'></i>";
                      }else{
                        tempStatus.innerHTML = "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>";
                      }

                      hide.classList.remove('temp_status');
                    }catch{
                        cityName.innerText = "plz enter the city name properly";
                        hide.classList.add('temp_status');    
                    }
                    
                }

}
            submit_btn.addEventListener('click' , getInfo)