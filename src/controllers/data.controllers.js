import taskModel from "../models/taskModel.js"

class controllersData {
    constructor(name){
        this.name = name
    }

    // TODO: create a new task and save in database!
    async createTask(req, res){
        const { title, desc, required } = req.body
        try {
            const data = {
                title: title,
                desc: desc,
                required: required
            }

            // ? save in database
            const isSubmitData = await taskModel.create(data)
            
            // ? validate if submit data is true
            console.log(isSubmitData)
            isSubmitData != null 
                ? res.status(200).json({ message: "all okay!" }) 
                : res.status(500).json({ message: "internal error" })

        } catch (error) {
            throw new Error(error)
        }
    }

    // TODO: get all tasks!
    async getTasks(req, res){
        try {
            // ? try all render data
            const dataAPI = await taskModel.find()
            
            dataAPI != null
                ? res.status(200).json({ message: "find!", data: dataAPI })
                : res.status(500).json({ message: "internal error" })
                
        } catch (error) {
            throw new Error(error)            
        }
    }

    // TODO: delete a task by ID
    async deleteTask(req, res){
        try {
            const id = req.params.id

            // ? @search title in database
            const searchByTitleInDatabase = await taskModel.findByIdAndRemove(id)
            
            // ? @search by id and delete
            searchByTitleInDatabase 
                    ? res.status(200).json({ message: "deleted!", data: searchByTitleInDatabase })
                    : res.status(500).json({ message: "internal error", data: searchByTitleInDatabase })
        } catch (error) {
            throw new Error(error)
        }
    }

    // TODO: search task by title
    async searchByTitleTask(req, res){
        try {
            
        } catch (error) {
            throw new Error(error)
        }
    }

    // TODO: update a task by id
    async updateTask(req, res){
        try {
            
        } catch (error) {
            throw new Error(error)
        }        
    }
}

export default controllersData