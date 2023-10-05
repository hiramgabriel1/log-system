class controllersData {
    constructor(name){
        this.name = name
    }

    createTask(req, res){
        const { username, years, desc } = req.body
        try {
            const data = {
                username,
                years, 
                desc
            }

            res.json({ message: data })
        } catch (error) {
            throw new Error(error)
        }
    }

    getTasks(req, res){
        try {
            res.json({ message: "hello world" })
        } catch (error) {
            throw new Error(error)            
        }
    }
}

export default controllersData