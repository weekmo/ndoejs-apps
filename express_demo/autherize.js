const autherize = (req,res,next) => {
    const {user} = req.query;
    if(user==='john'){
        req.user = {name: user, id: 3};
        next();
    }else{
        res.status(401).send('Unautherised');;
    }
};

module.exports = autherize;