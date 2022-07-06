//Creating a Stateless Component
const Product = (props) => (
<div className="card" style={{width: '50%', padding: '10px', margin: '10px'}}>
    <div className="row">
        <div className="col-md-4">
            <img src={props.picture} style={{width:'100%', height:'100%'}}/>
        </div>
        <div className="col-md-6">
            <div className="card-body">
                <h3 className="card-title">{props.productName}</h3>
                <p className="card-text">{props.price}</p>
                <p className="card-text">{props.quantity}</p>
            </div>
        </div>
    </div>
</div>
);

export default Product