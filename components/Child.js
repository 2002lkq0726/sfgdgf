import React from 'react';
import PropTypes from 'prop-types';
class Child extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            msg:"我是子组件"
        }
    }
    handleFn = ()=>{
        console.log('eeeeeeeeeeeeeeeeeeee')
    }
    componentDidMount() {
        this.props.onRef(this);
    }
    render() {
        return (
            <div>
                <h1>11111111111111111111</h1>
            </div>
        )
    }
}
/*Child.defaultProps = {
    ss:'子组件'
}
Child.propTypes = {
    ss:PropTypes.string
}*/
export default Child;
