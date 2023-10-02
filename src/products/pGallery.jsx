import "./pGallery.css"
import images from "../../src/assets/cart.png";
import a from "../../src/assets/broccoli.webp";
import a1 from "../../src/assets/cabbage.webp";
import a2 from "../../src/assets/carrots.webp";
import a3 from "../../src/assets/cucumber.webp";
import a4 from "../../src/assets/onion.webp";
import a5 from "../../src/assets/peas.webp";
import Header from "../header/Header";




function Gallery(props){

    const Product_Info = [
        {id: 1, title: "name 1",  amount: "KES 0.00", image: a},
        {id: 2, title: "name 2",  amount: "KES 0.00", image: a1},
        {id: 3, title: "name 3",  amount: "KES 0.00", image: a2},
        {id: 4, title: "name 4",  amount: "KES 0.00", image: a3},
        {id: 5, title: "name 5",  amount: "KES 0.00", image: a4},
        {id: 6, title: "name 6",  amount: "KES 0.00", image: a5},
        {id: 7, title: "name 7",  amount: "KES 0.00", },
        {id: 8,},
        {id: 9,},
        {id: 10,},
        {id: 11,},
        {id: 12,},
        {id: 13,},
        {id: 14,},
        {id: 15,},
        {id: 16,},
        {id: 17,},
        {id: 18,},
        {id: 19,}
      ]
    //   const filteredItems = Product_Info.filter(item=>{
    //     item.title.toLowerCase().includes(query.toLowerCase())
    //   })
      
    //   const [search, setSearch] = useState("");
      

    return(
        <>
        <Header/>
        <div className="products">
        {Product_Info.map( info =>
        <div className="box" key={info.id}>
            <div className="img_container">
            <img className="p_Img" src={info.image} alt = "..."/>
            </div>
            <div className="box_bottom">
            <div className="attributes">
            <p>{info.title}</p>
            <h5>{info.amount}</h5>
            </div>
            <img className="p_cart" src={images} alt = "addCart"/>
            </div>
        </div>
       
        )}
       </div>
       </>
    )
}

export default Gallery