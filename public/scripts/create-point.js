function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )   //funcao anonima que ta retornando um valor 
    .then( states => {

        for( const state of states ) {
        ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`  //+= pegar voce mesmo e somar ao resultado concatenar
        } 
    })
}

populateUFs()


function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex   //para mudar o valor da url 
    stateInput.value = event.target.options[indexOfSelectedState].text
    
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a cidade </option>"
    citySelect.disable = true 

     fetch(url)
       .then( res => res.json() )   //funcao anonima que ta retornando um valor 
       .then( cities => {
           

       
        for( const city of cities ) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`  //+= pegar voce mesmo e somar ao resultado concatenar
        } 

        citySelect.disabled = false
    })
}






document

        .querySelector("select[name=uf]")     //seletor de ambiente da pagina 
        .addEventListener("change", getCities)
            
         
//itens de coleta 
//pegar todos os li's

const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollect) {
    item.addEventListener("click",handleSelectItem)   
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

    function handleSelectItem(event) {
        const itemLi = event.target 
        
        //adicionar ou remover um classe lugares e opcoes com java script 
        itemLi.classList.toggle("selected")
        
        const itemId = itemLi.dataset.id

     //   console.log('ITEM ID: ', itemId)

        

        // verificar se existem items selecionados,se sim 
        // pegar os items selecionados

        const alreadySelected = selectedItems.findIndex( item => {
           const itemFound = item == itemId   //isso sera true ou false
           return  itemFound 

        })

        // se ja estiver selecionado,
        if ( alreadySelected >= 0 ) { 
             //tirar da selecao
             const filteredItems = selectedItems.filter( item => {
                const itemIsDifferent = item != itemId
                return itemIsDifferent  
             })

             selectedItems = filteredItems
           
            } else {
                // se nao estiver selecionado,
                // adicionar a selecao 
                selectedItems.push(itemId)   //coloca elemento dentro de uma array

            }

        
        //   console.log('selectedItems: ',selectedItems)
       //atualizar o campo escondido com os items selecionados 
       collectedItems.value = selectedItems
   
   

}