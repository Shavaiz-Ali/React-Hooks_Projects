



const GitHubUsers = ({users}) => {
  return (
    <>
      <div className="h-auto bg-blue-950">
        <div className="main-Heading">
          <h1 className="text-white text-3xl text-center py-5">
            List Of GitHub Users
          </h1>
        </div>
        {/* user Cards  */}
        <div className="container mx-auto py-10">
          <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-4">
            {users.map((value) => {
              const { login, id, avatar_url } = value;
              return (
                <>
                  <div
                    className="card bg-slate-950 flex items-center gap-2 rounded-md py-2 px-3"
                    key={id}
                  >
                    <div className="card-img">
                      <img
                        src={avatar_url}
                        alt=""
                        className="sm:w-[150px] w-[300px]"
                      />
                    </div>
                    <div className="card-content">
                      <div className="name">
                        <h1 className="text-white sm:text-3xl">{login}</h1>
                      </div>
                      <div className="title">
                        <h1 className="text-white">Web Developer</h1>
                      </div>
                      <div className="followers flex items-center justify-center gap-3 bg-slate-800 py-3 px-3 rounded-md">
                        <h1 className="text-white flex flex-col items-center justify-center sm:text-[18px]">
                          Followers
                          <span>10</span>
                        </h1>
                        <h1 className="text-white flex flex-col items-center justify-center sm:text-[18px]">
                          Following
                          <span>10</span>
                        </h1>
                        <h1 className="text-white flex flex-col items-center justify-center sm:text-[18px]">
                          Repos
                          <span>10</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default GitHubUsers;
