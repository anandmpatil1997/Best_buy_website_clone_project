var allslideData = [{
    imgURL: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80",
},
{
    imgURL: "https://images.unsplash.com/photo-1520520731457-9283dd14aa66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
},
{
    imgURL: "https://images.unsplash.com/photo-1643712662909-29fe8f02b613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
},
{
    imgURL: "https://images.unsplash.com/photo-1560543332-e8e4ed182865?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
},
{
    imgURL: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
},
{
    imgURL: "https://images.unsplash.com/photo-1456846602846-65c937210b50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80",
}];

slider()
function slider(){
    let sliderDiv = document.getElementById("slideshow");
    sliderDiv .textContent = " ";
      let image = document.createElement("img");
      let i = 1;
      setInterval(() => {
          if(i == allslideData.length ){
              i =0;
          }
        image.src = allslideData[i].imgURL;
        sliderDiv.append(image);
        i++;
      }, 2000);
    }