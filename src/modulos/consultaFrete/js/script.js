function calculaFrete () {
    $('#formFrete').submit(function(e) {
        e.preventDefault()
        let idProd = $('#___rc-p-dv-id').attr('value') //Id do produto
        let country = 'BRA'
        let postalCode = $(this).find('.cep').val().replace('-', '')
        let objER = new RegExp(/^[0-9]{8}$/)
        let items = [{
            id: idProd,
            quantity: 1,
            seller: '1'
        }]
        if(!objER.test(postalCode)){
            $('.calc-frete .erro-cep').fadeIn()
            $('.calc-frete .listaFrete').fadeOut()
        } else {
            $('.calc-frete .erro-cep').fadeOut()
            vtexjs.checkout.simulateShipping(items, postalCode, country).done(function(result) {
                $('.calc-frete .listaFrete').fadeIn()
                console.log(result.logisticsInfo[0].slas)
                $('.listaFrete tbody .item-frete').remove()
                $(result.logisticsInfo[0].slas).each(function(i){
                    let servico = result.logisticsInfo[0].slas[i].name
                    let prazo = result.logisticsInfo[0].slas[i].shippingEstimate.replace('bd', ' dia(s)')
                    let preco = formatReal(result.logisticsInfo[0].slas[i].price)
                    $('.listaFrete tbody').append('<tr class="item-frete">'+
                        '<td>'+servico+'</td>'+
                        '<td>'+prazo+'</td>'+
                        '<td> R$'+preco+'</td>'+
                    '</tr>')

                })
            })
        }
    })
}

calculaFrete ()