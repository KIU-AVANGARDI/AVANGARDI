import "../styles/BlogComp.css"
import image from "../assets/images/2.png"
import {useState} from "react";

export default function BlogComp(){
    const[shortActive,setShortActive] = useState(true)

    function toggle(){
        setShortActive(!shortActive)
    }
    return(
        <div className="blog-container">
            <div className="blog-title">
                title
            </div>
            <div className="blog-main">
                <div className="blog-image">
                    <img src={image}/>
                </div>
                <div className="blog-text">
                    <div className="blog-short" style={shortActive?{display:"block"}:{display:"none"}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dicta ducimus eos explicabo illum suscipit? A deleniti deserunt, ea facilis hic itaque laboriosam possimus praesentium quas. Enim magnam mollitia officiis voluptas. Ad aspernatur beatae dignissimos earum ipsam iste iure perferendis quae repellendus veniam! Alias distinctio illum molestias nemo nostrum. Ad architecto consectetur doloribus, dolorum nemo nesciunt qui sapiente soluta tempore voluptatem. Ad autem culpa delectus, dignissimos est exercitationem explicabo facere fugiat fugit id iste itaque minima nostrum nulla odio officiis placeat possimus quisquam quo repudiandae sapiente soluta, temporibus tenetur totam vero vitae voluptas voluptate. Dolorum facilis laboriosam maiores quisquam? Accusamus accusantium aliquam animi assumenda, atque aut culpa delectus ducimus eius eveniet ex fugiat illum laboriosam laudantium magni molestiae molestias nam natus nobis officiis omnis quaerat qui quibusdam quisquam rem repellat repellendus reprehenderit tempore ullam unde. Corporis nam odio similique sit voluptate. A aliquam deleniti minima natus qui repudiandae soluta? Ad!
                    </div>
                    <div className="blog-long" style={shortActive?{display:"none"}:{display:"block"}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium amet assumenda at atque autem commodi dignissimos distinctio dolor ducimus eius enim est harum hic illo laudantium maxime neque nihil, nobis nulla odio odit porro possimus provident quam quia quisquam rem repellat soluta veritatis! Ab, deleniti dolorem doloribus error itaque, laudantium minima modi natus odio quisquam rerum temporibus? Architecto aspernatur deleniti earum nulla quia. Aperiam, asperiores assumenda beatae cupiditate exercitationem facere fugit molestiae mollitia nulla optio similique, tempora, ut voluptate. Asperiores blanditiis corporis culpa cumque ea eaque excepturi, fugit illum impedit ipsum iusto laudantium magni maxime molestias nam neque, nisi perferendis quia quo tempora tenetur vel voluptas voluptates! Assumenda blanditiis distinctio laborum magnam nobis tempore voluptatibus voluptatum. Aut, cumque dolor dolore est ex expedita explicabo magnam maiores natus nemo officia optio quibusdam quidem ratione similique veniam voluptatem. Accusantium dolorem, dolorum eius facere hic labore, magni numquam provident quia, quos recusandae?
                    </div>
                </div>
            </div>
            <div className="blog-button">
                <button onClick={toggle}>{shortActive?"show more":"show less"}</button>
            </div>
        </div>
    )
}