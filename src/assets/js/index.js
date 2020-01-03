

// import 'bootstrap/js/dist/collapse.js';



import '../scss/main_index.scss';

import {pedido} from './pedido';

const containter=document.querySelector(".c_containerP");

containter.addEventListener("click",(e)=>{
    if(e.target!==e.currentTarget&&e.target.classList.contains("c_oferta__ContentBtn")) {
        // console.log(e.target.dataset.oferta);



        let pedidoAct=e.target.dataset.oferta;

        pedido.setPedido(pedidoAct);
        console.log(pedido.getPedido())

    }
    e.preventDefault();
    setTimeout(()=>{

        location.href="./funnel.html";
    },1000)
})