import BlogComp from "../components/BlogComp";

export default function Blog(){
    return(
        <div style={{display:'flex',flexDirection:'column',padding:'20px',alignItems:'center'}}>
            <BlogComp/>
            <BlogComp/>
            <BlogComp/>
            <BlogComp/>
        </div>
    )
}