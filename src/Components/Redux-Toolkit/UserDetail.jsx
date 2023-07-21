
import DeleteAllUsers from "./DeleteAllUsers"

function UserDetail() {
    return(
        <>
            <div className="container mx-auto py-6 text-center lg:w-[50%] w-full">
                 <div className="flex justify-between items-center ">
                    <div className="text-3xl text-semibold">List of Users Detail</div>
                    <button className="py-3 lg:px-6 px-3 rounded-[5px] text-xl bg-blue-600 text-white">Add New Users</button>
                 </div>
                 <ul>
                    <li>Hi</li>
                    <li>HiII</li>
                 </ul>
                 <hr />
                 <DeleteAllUsers />
            </div>
        </>
    )
}
export default UserDetail