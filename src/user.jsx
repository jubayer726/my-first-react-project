export default function User ({Nuser}) {
    const {name, username, phone, email} = Nuser;

    return (
        <div className="cards">
            <h3>User: {name}</h3>
            <h5>User Name: {username}</h5>
            <h5>User Name: {phone}</h5>
            <h5>Email: {email}</h5>
        </div>
    )
}