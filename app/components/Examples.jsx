var React = require('react');
var {Link} = require('react-router');
// Refactored using stateless React component
var Examples = (props) =>{
    return (
        <div>
        <h1 className="text-center">Examples </h1>
            <p>Here a few example locations to try out.</p>
            <ol>
                <li>
                    <Link to='/?location=Auburn Hills'>Auburn Hills, MI   </Link>

                </li>
                <li>
                    <Link to='/?location=Rio'>Rio, Brazil</Link>
                </li>
            </ol>
        </div>
    )
};
module.exports = Examples;
