const mongoose=require('mongoose');

const ContactSchema =mongoose.Schema({
    emp_id: {
        type: String
    },
    emp_name:{
        type: String
    },
    emp_con:{
        type: String
    },
    emp_stack:{
        type: String
    },
    emp_band:{
        type: String
    }  ,
    emp_mgr:{
        type: String
    }  ,
    emp_form:{
        type: String
    } ,
    emp_loc:{
        type: String

    }
});

const Contact=module.exports=mongoose.model('WorkForceDetails',ContactSchema);
