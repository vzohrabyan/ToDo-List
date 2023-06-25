const handler =  async (err, req, res, next) => {
    if (!err) {
        await next();
        return;
    }
     console.log("error has ben thrown : " , err);

    res.status(500).send(JSON.stringify({ error : err}))
}

export default handler;