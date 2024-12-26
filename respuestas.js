exports.success=function(req, res, mensaje,status){
    const statusCode=status || 200;
    const mensajeOk=mensaje || '';
    res.status(statusCode).send({
       erro:false,
       status:statusCode,
       body:mensajeOk
    });
}

exports.error=function(req, res, mensaje,status){
    const statusCode=status || 500;
    const mensajeError=mensaje || '';
    res.status(statusCode).send({
       erro:true,
       status:statusCode,
       body:mensajeError
    });
}