module.exports = (...profiles) => {
    return (req, res, next) => {
        const userProfile = req.user.user.profile;
        // admin have full access.
        const authorized = profiles.some(profile => profile === userProfile); 
        if(authorized){
            next();
        }else{
            return res.status(401)
            .json({
                sucesso: false,
                menssagem: 'You are not allowed to access this feature.'
            });
        }
        // next();
    }
}