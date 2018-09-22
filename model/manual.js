const mongoose=require('mongoose');
const ManualSchema =mongoose.Schema;
var Manual= new ManualSchema({
    tname: {
        type: String,
    },
    tstatus:{
        type: String,

    },
    tdate:{
      type: String,
    },
    appRef:{ type: ManualSchema.Types.ObjectId,ref:'workforcedetails'}
});
module.exports=mongoose.model('Trainings',Manual);
