function CardImage({singleData=[]}){
    return (
        <>
             <div className="card_image">
                      <div className="user_image">
                          <img src={singleData.images ? singleData.images.main : "https://picsum.photos/200"} />
                      </div>
                 </div>
        </>
    )
}
export default CardImage