



const pedido=(function(){
   const _ped_Arr=[];

    function getPedido() {
        return _ped_Arr;
    }
    function setPedido(data) {
        // _ped_Arr.push(data)
        _ped_Arr.splice(0,1,data)
    }

    return {
        
        getPedido:getPedido,
        setPedido:setPedido
    }
}());

export {
    pedido
}