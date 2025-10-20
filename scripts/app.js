function dados() {
    let ds = [
                {id:1, login:"ringo", password:"1234@", nome:"Ringo Star", email:"ringo@gmail.com"},//00
                {id:2, login:"paul", password:"12345", nome:"Paul McCartney", email:"paul@gmail.com"},//01
                {id:3, login:"john", password:"123", nome:"John Lennon", email:"john@gmail.com"}//02
             ]
 
    return ds    
}

//seleção - (select do banco de bados)

function selecaoID() {
    const ds = dados()

    let ids = perseInt(document.querySelector("#id").value)

    for(let i=0;i<ds.length;i++){
        if(ids == ds[i]) {

            document.querySelector("#nome").value = ds[i.nome]


            alert("encontrou o id" + ids)
            console.log("encontrou o id: " + ids)
    }
}
}