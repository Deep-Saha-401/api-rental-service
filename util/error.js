export const createError =(status1,message1)=>{
    const err= new Error();
    err.status = status1;
    err.message =message1;
    return err;
}