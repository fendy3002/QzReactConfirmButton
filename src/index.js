import React from 'react';
import ReactDOM from 'react-dom';
import onClickOutside from 'react-onclickoutside';

class Confirm extends React.Component{
    constructor(props) {
        super(props);
        console.log(this.props);
        var content = this.props.children;
        if(!content){
            content = this.props.content;
        }

        this.state = {isConfirming: false, isSubmitted: false, content: content};
        this.onChangeConfirming = this.onChangeConfirming.bind(this);
        this.onSubmitting = this.onSubmitting.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    onChangeConfirming(isConfirming, isSubmitted){

        var newIsSubmitted = isSubmitted == null ? this.state.isSubmitted : isSubmitted;
        var newIsConfirming = isConfirming == null ? this.state.isConfirming : isConfirming;
        this.setState({
            isConfirming: newIsConfirming,
            isSubmitted: newIsSubmitted
        });
    }

    onSubmitting(evt){
        var handleClick = this.props.onClick;
        handleClick(evt);
        this.onChangeConfirming(false, true)
    }

    handleClickOutside(evt) {
        this.onChangeConfirming(false, null);
    }

    render() {
        if(this.state.isConfirming){
            var confirmation = this.props.confirmation || {};
            var className = confirmation.className || this.props.className;
            var style = confirmation.style || this.props.style;
            var content = confirmation.content || "Confirm ?";
            if (typeof content === "function") {
                content = content();
            }
            var onSubmitting = this.onSubmitting;
            return <button type="button" className={this.props.className}
                style={this.props.style} onClick={(k)=> onSubmitting(k)}>
                {content}
                </button>;
        }
        else{
            if(this.state.isSubmitted){
                var willDisable = this.props.willDisable;

                var submitted = this.props.submitted || {};

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
                    var onChangeConfirming = this.onChangeConfirming;
                    return <button type="button" className={this.props.className}
                        style={this.props.style} disabled={willDisable}
                        onClick={() => onChangeConfirming(true, false)}>
                            {content}
                        </button>;
                }
            }
            else{
                var content = this.state.content;
                if(typeof content === "function"){
                    content = content();
                }
                var onChangeConfirming = this.onChangeConfirming;
                return <button type="button" className={this.props.className}
                    style={this.props.style} onClick={() => onChangeConfirming(true, false)}>
                        {content}
                    </button>;
            }
        }
    }
};
var exporting = onClickOutside(Confirm);
export default exporting;
