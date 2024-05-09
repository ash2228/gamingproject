let trend = document.getElementsByClassName("trend")[0];
let content;
axios.get ('https://iitmgamingproject.000webhostapp.com/fetchData.php')
    .then(response=>{
        content=response.data;
        for (let index = 0; index < 5; index++) {
            trend.innerHTML += `<div><img src="${content[index].image}" style="height:100px;"></img><br><span style="white-space:nowrap">${content[index].games}</span></br><span>₹${content[index].cost}</span></div>`;
        }
    })
    .catch(err=>{
        console.log(err);
    })

const redi = ()=>{
    window.location.href = "pages/store.html"
}