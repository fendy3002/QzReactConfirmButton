import React from 'react';
import ReactDOM from 'react-dom';
import ConfirmButton from '../../../index.js';

class App extends React.Component{
    render(){
        var content1 = ()=> <span>Submit</span>;
        var confirmation1 = {
            content : () => <span style={{ fontWeight: "bold" }}>Are you sure to continue?</span>
        };
        return <div>
            <div>
                Content as function: <ConfirmButton onClick={()=> console.log("SUBMITTED!") }
                    content={content1}></ConfirmButton>
            </div>
            <div>
                Confirm content: <ConfirmButton onClick={()=> console.log("SUBMITTED!") }
                    confirmation={confirmation1}>Submit</ConfirmButton>
            </div>
            <div>
                Will disable: <ConfirmButton onClick={()=> console.log("SUBMITTED!") } willDisable={true}>Submit</ConfirmButton>
            </div>
        </div>;
    }
};

ReactDOM.render(
    <App />,
    document.getElementById('content')
);
