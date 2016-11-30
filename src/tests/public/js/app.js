import React from 'react';
import ReactDOM from 'react-dom';
import ConfirmButton from '../../../index.js';

class App extends React.Component{
    render(){
        var content1 = ()=> <span style={{ fontStyle: "italic" }}>Submit</span>;
        var confirmation1 = {
            content : () => <span style={{ fontWeight: "bold" }}>Are you sure to continue?</span>,
        };
        var confirmation2 = {
            style: { backgroundColor: "yellow" }
        };

        var delay1 = {
            time: 1000
        };
        var delay2 = {
            time: 1000,
            content: () => <span style={{ fontWeight: "bold" }}>...</span>
        };

        var submitted1 = {
            willDisable: true
        };
        var submitted2 = {
            content: () => <span style={{ fontWeight: "bold" }}>Success</span>
        };

        var async1 = (evt, handler) => {
            setTimeout(function(){
                console.log("ASYNC SUBMITTED");
                handler.done();
            }, 1000);
            return handler.isAsync(); // equals return false
        };
        return <div>
            <div>
                <h3>Normal</h3>
                <div>
                    Normal:
                    <ConfirmButton onClick={()=> console.log("SUBMITTED!") }>
                        Submit
                    </ConfirmButton>
                </div>
                <div>
                    Function as content:
                    <ConfirmButton onClick={()=> console.log("SUBMITTED!") }
                        content={content1}>
                    </ConfirmButton>
                </div>
            </div>
            <div>
                <h3>Confirmation</h3>
                <div>
                    Confirm content:
                    <ConfirmButton onClick={()=> console.log("SUBMITTED!") }
                        confirmation={confirmation1}>
                        Submit
                    </ConfirmButton>
                </div>
                <div>
                    Confirm button style:
                    <ConfirmButton onClick={()=> console.log("SUBMITTED!") }
                        confirmation={confirmation2}>
                        Submit
                    </ConfirmButton>
                </div>
            </div>
            <div>
                <h3>Delay Confirmation</h3>
                <div>
                    Delayed:
                    <ConfirmButton onClick={()=> console.log("SUBMITTED!") } delay={delay1}>
                        Submit
                    </ConfirmButton>
                </div>
                <div>
                    Delayed with custom content:
                    <ConfirmButton onClick={()=> console.log("SUBMITTED!") }
                        delay={delay2}>
                        Submit
                    </ConfirmButton>
                </div>
            </div>
            <div>
                <h3>Submitted</h3>
                <div>
                    Will disable:
                    <ConfirmButton onClick={()=> console.log("SUBMITTED!") }
                        submitted={submitted1}>
                        Submit
                    </ConfirmButton>
                </div>
                <div>
                    Custom content:
                    <ConfirmButton onClick={()=> console.log("SUBMITTED!") }
                        submitted={submitted2}>
                        Submit
                    </ConfirmButton>
                </div>
            </div>

            <div>
                <h3>Async</h3>
                <div>
                    Async:
                    <ConfirmButton onClick={async1}>
                        Submit
                    </ConfirmButton>
                </div>
            </div>
        </div>;
    }
};

ReactDOM.render(
    <App />,
    document.getElementById('content')
);
