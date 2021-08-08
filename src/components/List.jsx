function List({singleData=[]} ){
    return (<>
<div className="user_detail">
                        <ul>
                          <li >
                            <div className="details_wrap">
                              <span>Name</span>
                              <span>{singleData.name ? `${singleData.name.first} ${singleData.name.middle} ${singleData.name.last}` : "" }</span>
                            </div>
                          </li>
                          <li>
                          <div  className="details_wrap">
                              <span>Age</span>
                              <span>{singleData.age}</span>
                            </div>
                          </li>
                          <li>
                          <div  className="details_wrap">
                              <span>Gender</span>
                              <span>{singleData.gender}</span>
                            </div>
                          </li>
                          <li>
                          <div  className="details_wrap">
                              <span>Occupation</span>
                              <span>{singleData.occupation}</span>
                            </div>
                          </li>
                          <li>
                          <div  className="details_wrap">
                              <span>Species</span>
                              <span>{singleData.species}</span>
                            </div>
                          </li>
                          <li>
                          <div  className="details_wrap">
                              <span>Home Planet</span>
                              <span>{singleData.homePlanet}</span>
                            </div>
                          </li>
                        </ul>
                      </div>
        
    </>)
}
export default List;