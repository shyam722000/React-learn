import Product from "./Product"


function Products_list(){



  let prodcuts=[
    {id:1, name:"jeans",price:"500", url:"https://img.freepik.com/free-photo/jeans_1203-8092.jpg" },
    {id:2, name:"Kurta",price:"600", url:"https://5.imimg.com/data5/SELLER/Default/2022/9/HP/JM/ND/25396958/latest-kurta-designs-for-men-indian-kurta-looks-better-than-a-thousand-business-suits-.jpeg" },
    {id:3, name:"Shirt",price:"700", url:"https://img.freepik.com/free-photo/basic-green-shirt-men-rsquo-s-fashion-apparel-studio-shoot_53876-101197.jpg" }

  ]
    return(
        <div className='products'>

          {
            prodcuts.map((product)=>{
              return(
               <Product name={product.name} price={product.price} url={product.url} key={product.id}/>

              )
            })
          }
      {/* <Product name="Jeans" price="$500" url="https://img.freepik.com/free-photo/jeans_1203-8092.jpg"/>
      <Product name="Kurta" price="$300" url="https://5.imimg.com/data5/SELLER/Default/2022/9/HP/JM/ND/25396958/latest-kurta-designs-for-men-indian-kurta-looks-better-than-a-thousand-business-suits-.jpeg"/>
      <Product name="Shirt" price="$233" url="https://img.freepik.com/free-photo/basic-green-shirt-men-rsquo-s-fashion-apparel-studio-shoot_53876-101197.jpg"/> */}
      </div>
    );
}
export default Products_list;