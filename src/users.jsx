import { use } from "react"
import User from "./user";

export default function Users ({fetchUsers}) {

    const Users = use (fetchUsers);
    console.log(Users);

    return(
        <div className="cards">
            <h2>Users: {Users.length}</h2>
            {
                Users.map(Nuser => <User key={Nuser.id} Nuser={Nuser}></User>)
            }
        </div>
    )
}