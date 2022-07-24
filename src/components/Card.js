export default function Card() {
  return (
    <div className="card">
      <button className="button">
        <img width={20} height={20} src="img/heart-unliked.png" alt="unliked" />
      </button>
      <img width={135} height={115} src="/img/sneakers/1.png" alt="sneakers" />
      <h5>Nike 1</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price: </span>
          <b>159 $</b>
        </div>
        <button className="button">
          <img width={20} height={20} src="img/plus.png" alt="plus" />
        </button>
      </div>
    </div>
  );
}
