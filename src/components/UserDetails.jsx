import CardImage from './CardImage'
import List from './List'
function UserDetails({singleData=[]}){
    return(
    <>
     <div className="user_details" id="userDetails">
          <div className="details_card">
              <div className="card">
                <CardImage singleData={singleData} />
                 <List singleData={singleData} />
              </div>
          </div>
          <div className="sayings_card">
              <div className="sayings_title">
                <h3> Sayings</h3>
              </div>
              {
                singleData.sayings ? singleData.sayings.map((say,i)=>{
                  return (
                    <div key={i} className="sayings">{say}</div>
                  )
                }) : ""
              }
              
          </div>
        </div>
    </>
    )
}
export default UserDetails;