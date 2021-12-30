import PropTypes from "prop-types";


function User({firstname,lastname,age,gender}){
return(
    <>
    <p>firstname-{firstname}</p>
    <p>lastname-{lastname}</p>
    <p>age-{age}</p>
    <p>gender-{gender}</p>
    </>
)
}

User.propTypes={
    firstname:PropTypes.string.isRequired,
    lastname:PropTypes.string.isRequired,
    age:PropTypes.number.isRequired,
    gender:PropTypes.oneOf(["male","female","other"]).isRequired,
};

export default User;