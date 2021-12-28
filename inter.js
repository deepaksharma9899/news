function calculateDistance(lat1, long1, lat2, long2)
  {    

      //radians
      lat1 = (lat1 * 2.0 * Math.PI) / 60.0 / 360.0;      
      long1 = (long1 * 2.0 * Math.PI) / 60.0 / 360.0;    
      lat2 = (lat2 * 2.0 * Math.PI) / 60.0 / 360.0;   
      long2 = (long2 * 2.0 * Math.PI) / 60.0 / 360.0;       


      // use to different earth axis length    
      var a = 6378137.0;        // Earth Major Axis (WGS84)    
      var b = 6356752.3142;     // Minor Axis    
      var f = (a-b) / a;        // "Flattening"    
      var e = 2.0*f - f*f;      // "Eccentricity"      

      var beta = (a / Math.sqrt( 1.0 - e * Math.sin( lat1 ) * Math.sin( lat1 )));    
      var cos = Math.cos( lat1 );    
      var x = beta * cos * Math.cos( long1 );    
      var y = beta * cos * Math.sin( long1 );    
      var z = beta * ( 1 - e ) * Math.sin( lat1 );      

      beta = ( a / Math.sqrt( 1.0 -  e * Math.sin( lat2 ) * Math.sin( lat2 )));    
      cos = Math.cos( lat2 );   
      x -= (beta * cos * Math.cos( long2 ));    
      y -= (beta * cos * Math.sin( long2 ));    
      z -= (beta * (1 - e) * Math.sin( lat2 ));       

      return (Math.sqrt( (x*x) + (y*y) + (z*z) )/1000);  
    }
function getData(){
    //console.log("I am deepak");
   url='https://cdn.jsdelivr.net/gh/apilayer/restcountries@3dc0fb110cd97bce9ddf27b3e8e1f7fbe115dc3c/src/main/resources/countriesV2.json'
    //9d4ecf81b94760422d2e26055264cf83
    //url='https://library.acharyaprashant.org/api/articles/list?limit=50&offset=0&onlyFree=true&category=shastra-vedant&language=english'
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        //console.log(data.articles);
        //articles=data.articles;
        let n=0;
        var arr=[];
        data.forEach(function(element,index){
            
                
                if(element.population>=31028700){
                    n++;
                    arr.push(element.latlng)
                
                }    
        });
        let i=0;
        let j=0;
        let sum=0;
        for(i=0;i<20;i++){
            // console.log(arr[i])
            for(j=i+1;j<20;j++){
                
                sum+=calculateDistance(arr[i][0], arr[i][1], arr[j][0],arr[j][1]);

            }

        }

        console.log(sum);
       
    })
}
getData();