
export default function Validate(values){

    let error={};

    if(!values.username.trim()){
        error.username="username required"
    }if(!values.email.trim()){
        error.email="email required"
    }else if(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
        error.email="email address is invaild"
    }

    if(!values.password.trim()){
        error.password="password required"
    }else if(values.password.length>8){
        error.password="password needs to be 8 characters or more"
    }

    if (!values.password2.trim()){
        error.password2="password required"
    }else if(values.password2!==values.password){
        error.password2="password do not match"
    }

    return error;
}