import PropTypes from 'prop-types';
const Cart = ({ actor }) => {
    const { image, role, name, salary } = actor;
    return (
        <div className=''>
            <div className="chat chat-start flex gap-2 items-center mt-4">
                <div className="chat-image avatar">
                    <div >
                        <img className="rounded-full w-12" src={image} />
                    </div>
                </div>
                <div className='flex gap-3 items-center bg-fuchsia-600 p-2 rounded-2xl'>
                    <p className="chat-bubble font-extrabold text-center text-white">{name}</p>
                    <p className='font-extrabold text-center text-white bg-green-600 rounded-xl p-1'>{role}</p>
                </div>
                <p className='text-white font-bold text-sm bg-sky-400 p-1 rounded-md'>${salary}</p>
            </div>

        </div>
    );
};
Cart.propTypes = {
    actor: PropTypes.object.isRequired
}

export default Cart;