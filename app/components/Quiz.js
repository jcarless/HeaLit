var React = require('react');
var Router = require('react-router');



var Quiz = React.createClass({

    render: function(){

        return(
            <div className="main-container">

                <div className="row">Question 1</div>

                    <div className="row">
                    <button type="button" className="btn btn-secondary btn-lg btn-block answer">Option1</button>
                    </div>

                    <div className="row">
                    <button type="button" className="btn btn-secondary btn-lg btn-block answer">Option2</button>
                    </div>

                    <div className="row">
                    <button type="button" className="btn btn-secondary btn-lg btn-block answer">Option3</button>
                    </div>

                    <div className="row">
                    <button type="button" className="btn btn-secondary btn-lg btn-block answer">Option4</button>
                    </div>

            </div>
        )
        
    }
});

module.exports = Quiz;