// import React, { Component } from 'react';
import { useParams } from "react-router-dom";



// class Content extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  };
//     }
//     //生命周期函数
//     componentDidMount(){
//         //打印出整个传值内容为：Object isExact:true params:Object aid:"2"
//         // console.log(this.props)
//         //【03】所以获取aid的值方法为（获取动态路由传值）【02】在News.js里
//         // console.log(this.props.match.params.aid)
//         // const { aid } = useParams();
//         // console.log(aid)
//         console.log(useParams())
//     }
//     render() {
//         return (
//
//             <div>
//
//                 我是新闻详情组件
//             </div>
//         );
//     }
// }
function Content(){
    const { aid } = useParams();
    // console.log(useParams())
    // console.log(aid);
    function getDataList(){
        console.log(aid);
    }
    return (
        <div>
            我是新闻详情页
            <button onClick={getDataList}>按钮</button>
        </div>
    )
}
export default Content;
