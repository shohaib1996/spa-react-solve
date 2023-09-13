import PropTypes from 'prop-types';
const Card = ({ actor, handleSelect }) => {
    const { image, name, salary, role } = actor
    // console.log(actor)
    return (
        <div>
            <div className="card border-2 bg-base-100 shadow-xl rounded-xl ">
                <figure><img className='w-[280px] rounded-xl' src={image} alt="Shoes" /></figure>
                <div className="card-body text-white font-semibold space-y-5 text-center">
                    <h2 className="card-title bg-fuchsia-500 w-[150px] mx-auto mt-5 rounded-xl">{name}</h2>
                    <p><span>Salary: {salary}</span><span className='ml-2'>Role: {role}</span></p>
                    <div className="card-actions justify-center text-center">
                        <button onClick={()=> handleSelect(actor)} className="btn btn-primary bg-green-600 px-3 py-2 rounded-xl mb-2">Select</button>
                    </div>
                </div>
            </div>

        </div >
    );
};
Card.propTypes = {
    actor: PropTypes.object.isRequired,
    handleSelect: PropTypes.func.isRequired
}

export default Card;