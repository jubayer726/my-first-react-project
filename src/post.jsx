import { use } from "react"

export default function Posts ({fetchPromis}){

    const newPost = use(fetchPromis)
    console.log(newPost);

    return(
        <div className="cards">
            <h2>All Post are comming soon :{newPost.length}</h2>

        </div>
    )
}