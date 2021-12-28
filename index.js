console.log("This is news website");
// fcf27482f4e04f59b533377f9ae8729a

let accordionNews = document.getElementById('accordionNews');
function getData(){
    //console.log("I am deepak");
   url='https://gnews.io/api/v4/search?q=example&token=7d85cdfc84b149d527b5db040dbe3d8b'
    //9d4ecf81b94760422d2e26055264cf83
    //url='https://library.acharyaprashant.org/api/articles/list?limit=50&offset=0&onlyFree=true&category=shastra-vedant&language=english'
    fetch(url).then((response)=>{
        return response.json();
    }).then((data)=>{
        //console.log(data.articles);
        articles=data.articles;
        let newsHtml = "";
        let elem='';
        articles.forEach(function(element,index){
            if(index%2 == 0){
                elem='accordion-button bg-secondary';
                console.log(elem);
            }
            else{
                elem='accordion-button';
                console.log(elem);

            }
            let news = `<div class="accordion-item ">
                            <h2 class="accordion-header" id="headingOne">
                                <button
                                class="${elem}"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapse${index}"
                                aria-expanded="true"
                                aria-controls="collapse${index}"
                                id="btn">
                                <img src="${element["image"]} " class="img-thumbnail mx-3" alt="..." width="100" height="100">
                                <div>
                                ${element["title"]}
                                <h6><span class="badge bg-success my-3">PUBLISHED AT: ${element["publishedAt"]}</span><h6>
                                </div>
                                </button>
                            </h2>
                            <div
                                id="collapse${index}"
                                class="accordion-collapse collapse "
                                aria-labelledby="headingOne"
                                data-bs-parent="#accordionNews"
                            >
                                <div class="accordion-body ">
                                ${element["content"]}  <a href="${element["url"]}" target="_blank">Read More..</a>
                                </div>
                            </div>
                         </div>
                         `;
            

            newsHtml+= news;
                
        });
        accordionNews.innerHTML = newsHtml;
    })
}
// getData();





// let accordionNews = document.getElementById('accordionNews');


// const xhr = new XMLHttpRequest();
// xhr.open('GET','https://gnews.io/api/v4/search?q=example&token=67dc862f772d7f28611c3633efbb6b79',true)

// xhr.onload = function(){
//     if(this.status===200){
//         let json = JSON.parse(this.responseText);
//         let articles = json.articles;
//         //console.log(articles);
//         let newsHtml = "";
//         articles.forEach(function(element,index){
//             //console.log(element["title"]);
//             let news = `<div class="accordion-item">
//                             <h2 class="accordion-header" id="headingOne">
//                                 <button
//                                 class="accordion-button"
//                                 type="button"
//                                 data-bs-toggle="collapse"
//                                 data-bs-target="#collapse${index}"
//                                 aria-expanded="true"
//                                 aria-controls="collapse${index}"
//                                 >
//                                 <img src="${element["image"]} " class="img-thumbnail mx-3" alt="..." width="100" height="100">${element["title"]}
//                                 </button>
//                             </h2>
//                             <div
//                                 id="collapse${index}"
//                                 class="accordion-collapse collapse "
//                                 aria-labelledby="headingOne"
//                                 data-bs-parent="#accordionNews"
//                             >
//                                 <div class="accordion-body">
//                                 ${element["content"]}  <a href="${element["url"]}" target="_blank">Read More..</a>
//                                 </div>
//                             </div>
//                          </div>
//                          `;
            
//             newsHtml+= news;
                
//         });
//         accordionNews.innerHTML = newsHtml;

//     }
//     else{
//         console.log("Some error has occured")
//     }
// }

// xhr.send()



function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }