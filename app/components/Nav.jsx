var React = require('react');
var {Link} = require('react-router');

var Nav = () =>{
return (
        <div>
            <h2>Nav Component</h2>
            <Link to="/" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Get Weather</Link> &nbsp; | &nbsp;
            <Link to="/about" activeClassName="active" activeStyle={{fontWeight:'bold'}}>About</Link> &nbsp; | &nbsp;
            <Link to="/examples" activeClassName="active" activeStyle={{fontWeight:'bold'}}>Examples</Link>
        </div>
    );
};

module.exports = Nav;