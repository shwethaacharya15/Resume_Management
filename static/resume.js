function populateSelectOptions(selectId, optionsArray){
    var selectElement=document.getElementById(selectId)
    optionsArray.forEach(function(option){
        var optionElement=document.createElement("option")
        optionElement.value=option
        optionElement.textContent=option;
        selectElement.appendChild(optionElement)
    })
}
populateSelectOptions("tag",config.upload_resume.select_role)

