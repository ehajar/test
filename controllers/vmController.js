const VM = require("../models/Vm")

getAll = (request, response) => {
    VM.find().then(vmList => {
        response.status(200).send({data: vmList});
    })
}

updateVM = (request, response) => {
    const vmId = request.params.id;
    const bodyData = request.body;
    VM.updateOne({_id: vmId},bodyData).then(vm => {
        console.log("updated",vm);
        response.status(200).send({data: true});
    })
}
deleteVM = (request, response) => {
    const vmId = request.params.id;
    VM.findOne({_id: vmId}).then(vm => {
        vm.remove();
        response.status(200).send({data: true});
    })
}
createVM = (request, response) => {
    const bodyData = request.body;
    const data = {
        nom : bodyData.nom,
        IP : bodyData.IP,
        sysExploitation : bodyData.sysExploitation
    }
    new VM(data).save();
    response.status(200).send({data: true});
}

changeVMStatus = (request,response)=>{
    const vmId = request.params.id;
    console.log("change status of vmId");
    VM.findOne({_id: vmId}).then(vm => {
        vm.etat = 1 - vm.etat;
        vm.save();
        response.status(200).send({data: true});
    })
}

module.exports = {getAll, updateVM, deleteVM, createVM,changeVMStatus};
