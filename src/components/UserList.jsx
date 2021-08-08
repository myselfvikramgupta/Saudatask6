function UserList({dataList=[],setSingleData}){

  

        return(
        <>
        <div className="user_info">
          <ul className="user_list">
            {dataList.length ? dataList.map((list) => {
              return (
                <li key={list.id} className="list" onClick={()=>setSingleData(list)}>
                  <div className="profile_img">
                 <div className="image">
                    <img src={list.images ? list.images.main : "https://picsum.photos/200"} alt="Profile Image" />
                  </div>
                  </div>
                  <div className="profile_info">
                    <p>{list.name ? `${list.name.first} ${list.name.middle} ${list.name.last} ` : "N/A"}</p>
                    <span>{list.occupation}</span>
                  </div>
                </li>
              )
            }) : "Loding.."}
          </ul>
        </div>
        </>
        )
}
export default UserList;