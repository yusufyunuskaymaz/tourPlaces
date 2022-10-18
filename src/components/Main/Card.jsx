const Card = (data) => {

  const {title, image, desc} = data
  return (
    <div className="cards">
      <h1 className="title" >{title}</h1>
      <img src={image} alt="" />
      <div className="card-over">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
