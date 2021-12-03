const mongoose = require("mongoose");

const schemaVM = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Types.ObjectId,
            default: mongoose.Types.ObjectId
        },
        nom: String,
        IP: String,
        sysExploitation: String,
        etat: {type:Number,default:0},
    }
)

const modelVM = mongoose.model('MachineVirtuelle', schemaVM);

module.exports = modelVM;
