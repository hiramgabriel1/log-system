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
            searchByTitleInDatabase != null
                    ? res.status(200).json({ message: "deleted!", data: searchByTitleInDatabase })
                    : res.status(500).json({ message: "internal error", data: searchByTitleInDatabase })
            
            console.log(searchByTitleInDatabase)
        
        } catch (error) {
            throw new Error(error)
        }
    }

    // TODO: search task by title
    async searchByTitleTask(req, res){
        try {
            const title = req.params.title

            // ? @search by id in database
            const search = await taskModel.findOne(title)

            // ? @get response
            search != null 
                    ? res.status(200).json({ message: "find", data: search })
                    : res.status(404).json({ message: "its dont exists!", data: search })
                
            // ? @render response in console
            console.log(`data: ${search}`)
        } catch (error) {
            throw new Error(error)
        }
    }

    // TODO: search task by id
    async searchTaskById(req, res){
        try {
            const taskId = req.params.taskId

            // ? @search task by id
            const searchById = await taskModel.findById(taskId)
            
            // ? @get response
            searchById != null 
                    ? res.status(200).json({ message: "find!", data: searchById })
                    : res.status(404).json({ message: "its dont find", data: searchById })
            
            // ? @render response in console
            console.log(`data: ${searchById}`)
        } catch (error) {
            new Error(error)
        }
    }

    // TODO: update a task by id
    async updateTask(req, res){
        try {
            const idTask = req.params.idTask

            // ? @find and update task by id
            const responseUpdate = await taskModel.findOneAndUpdate(idTask)

            // ? @show response to data update
            responseUpdate != null
                    ? res.status(200).json({ message: "update successfully!", data: responseUpdate })
                    : res.status(500).json({ message: "internal error", data: responseUpdate })
            
            // ? render response in console [LOG]
            console.log(`data: ${responseUpdate}`)
        } catch (error) {
            throw new Error(error)
        }        
    }

    // TODO: order by urgency
    async orderByUrgency(req, res){
        try {
            // ? validate if is urgency or not
            const response = await taskModel.find()

            console.log(response)

            // ? @search in database and order 
            // const response = await taskModel.find(order)

        } catch (error) {
            throw new Error(error)
        }
    }
}

export default controllersData