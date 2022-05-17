import React from "react";
import { createRoot } from 'react-dom/client';
import Message from "./components/Message";

const message = {
    dom: null,
    success({content, duration}) {
        // // 创建一个dom
        // this.dom = document.createElement('div');
        // // 定义组件， 
        // const JSXdom = (<Message content={content} duration={duration} type='success'></Message>);
        // // 渲染DOM
        // ReactDOM.render(JSXdom,this.dom);
        // // 置入到body节点下
        // document.body.appendChild(this.dom);

        this.dom = document.createElement('div',{id:'message'});
        const JSXdom = createRoot(this.dom);
        JSXdom.render(<Message content={content} duration={duration} type='success'></Message>);
        document.body.appendChild(this.dom);
    },
    error({content, duration}) {
        // this.dom = document.createElement('div');
        // const JSXdom = (<Message content={content} duration={duration} type='error'></Message>);
        // ReactDOM.render(JSXdom,this.dom)
        // document.body.appendChild(this.dom);

        this.dom = document.createElement('div',{id:'message'});
        const JSXdom = createRoot(this.dom);
        JSXdom.render(<Message content={content} duration={duration} type='error'></Message>);
        document.body.appendChild(this.dom);
    },
    warning({content, duration}) {
        // this.dom = document.createElement('div');
        // const JSXdom = (<Message content={content} duration={duration} type='warning'></Message>);
        // ReactDOM.render(JSXdom,this.dom)
        // document.body.appendChild(this.dom);

        this.dom = document.createElement('div',{id:'message'});
        const JSXdom = createRoot(this.dom);
        JSXdom.render(<Message content={content} duration={duration} type='warning'></Message>);
        document.body.appendChild(this.dom);
    },
    info({content, duration}) {
        // this.dom = document.createElement('div');
        // const JSXdom = (<Message content={content} duration={duration} type='warning'></Message>);
        // ReactDOM.render(JSXdom,this.dom)
        // document.body.appendChild(this.dom);
        
        this.dom = document.createElement('div',{id:'message'});
        const JSXdom = createRoot(this.dom);
        JSXdom.render(<Message content={content} duration={duration} type='info'></Message>);
        document.body.appendChild(this.dom);
    }
};


export default message;