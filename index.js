
let appendHtml = document.querySelector(".continer")

async function connect() {
    let output = await fetch('https://fakestoreapi.com/products/category/jewelery')
    let result = await output.json() //convert into js object
    console.log(result)
    result.map((i) => {
        // console.log(i.image)
        // console.log(i.price)
        // console.log(i. description)
        const myImage = document.createElement("img")
        myImage.src = i.image
        
        const mydescrption = document.createElement("h2")
        mydescrption.textContent = i.description


        const myPrice = document.createElement("p")
        myPrice.textContent =  `$. ${Math.floor(i.price)}`

        appendHtml.append(myImage)
        appendHtml.append(myPrice)
        appendHtml.append(mydescrption)
        appendHtml.append(mydescrption)
    });
}
connect()