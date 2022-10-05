const Card = (props) => {
const{name,email,id} = props;
// the above can still be destructured into the (props) to make it
// ({name,email,id}) but were not doing that yet
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' >
            <img src= {`https://robohash.org/${id}?200x200`} alt='robots'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;