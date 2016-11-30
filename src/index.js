import React from 'react';
import ReactDOM from 'react-dom';
import onClickOutside from 'react-onclickoutside';

var submitHandler = function(confirmButton){
    var result = {};
    result.isAsync = function(){ return false; }
    result.done = function(){ confirmButton.onChangeMode("submit"); }

    return result;
};

class Confirm extends React.Component{
    constructor(props) {
        super(props);
        var content = this.props.children;
        if(!content){
            content = this.props.content;
        }

        this.state = {mode: "", content: content, delayHandler: null};
        this.onChangeMode = this.onChangeMode.bind(this);
        this.onConfirming = this.onConfirming.bind(this);
        this.onSubmitting = this.onSubmitting.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    onChangeMode(mode){
        if(mode == "confirm" || mode == "confirming" || mode == "confirmation"){
            this.setState({mode: "confirm"});
        }
        else if(mode == "submit" || mode == "submitted"){
            this.setState({mode: "submit"});
        }
        else if(mode == "delay" || mode == "delayed"){
            this.setState({mode: "delay"});
        }
        else{
            if(this.state.mode != "submit"){
                this.setState({mode: ""});
            }
        }
    }

    onSubmitting(evt){
        var handleClick = this.props.onClick;
        var eventHandler = submitHandler(this);

        var result = handleClick(evt, eventHandler);
        if(result !== false){
            this.onChangeMode("submit");
        }
        else{
            this.onChangeMode("delay");
        }
    }

    onConfirming(k){
        var delay = this.props.delay || {};
        var delayTime = delay.time || 0;
        if(delayTime === 0 || delayTime < 50){
            this.onChangeMode("confirm");
        }
        else{
            var onChangeMode = this.onChangeMode;
            onChangeMode("delay");

            var handler = setTimeout(function(){
                onChangeMode("confirm");
            }, delayTime);

            this.setState({delayHandler: handler});
        }
    }

    handleClickOutside(evt) {
        if(this.state.delayHandler){
            clearTimeout(this.state.delayHandler);
        }
        this.onChangeMode("");
    }

    render() {
        if(this.state.mode == "confirm"){
            var confirmation = this.props.confirmation || {};
            var className = confirmation.className || this.props.className;
            var style = confirmation.style || this.props.style;

            var content = confirmation.content || "Confirm ?";
            if (typeof content === "function") {
                content = content();
            }
            var onSubmitting = this.onSubmitting;
            return <button type="button" className={className}
                style={style} onClick={(k)=> onSubmitting(k)}>
                {content}
                </button>;
        }
        else if(this.state.mode == "submit"){
            var submitted = this.props.submitted || {};
            var willDisable = submitted.willDisable || false;

            var className = submitted.className || this.props.className;
            var style = submitted.style || this.props.style;
            var content = submitted.content || this.state.content;

            if (typeof content === "function") {
                content = content();
            }

            if(this.props.submitted && this.props.submitted.content){
                return content;
            }
            else{
                var onConfirming = this.onConfirming;
                return <button type="button" className={this.props.className}
                    style={this.props.style} disabled={willDisable}
                    onClick={k => onConfirming(k)}>
                        {content}
                    </button>;
            }
        }
        else if(this.state.mode == "delay"){
            var delay = this.props.delay || {};
            var delayContent = delay.content;
            var content = delayContent || "Loading...";

            if(typeof content === "function"){
                content = content();
            }

            return <button type="button" className={this.props.className}
                style={this.props.style} disabled>
                    {content}
                </button>;
        }
        else{
            var content = this.state.content;
            if(typeof content === "function"){
                content = content();
            }
            var onConfirming = this.onConfirming;
            return <button type="button" className={this.props.className}
                style={this.props.style} onClick={k => onConfirming(k)}>
                    {content}
                </button>;
        }
    }
};
var exporting = onClickOutside(Confirm);
export default exporting;
