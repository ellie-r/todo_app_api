# To Do App


**/task**

GET
- Get all tasks or all completed tasks, 
- No request data
- Optional Query Parameter: **completed=1**
- Success response - returns json with an array of objects in data parameter
    - **{ success: true, message: 'got tasks from db', data: [{'_id': 3048308584, 'name': 'task'}]**



POST
- Create new task
- Request data **{ taskName : 'task' }**
- Success response
    - **{"success": true, "message": "new task added to db", "data": []}**
- Error Response
    - **{"success": false, "message": "error, couldn't add task to db", "data": []}**
    - **{"success": false, "message": "error, couldn't find new task name", "data": []}**


**/task/{id}**

PUT
- Update complete field of task
- Required: { id }
- Success response
    - **{"success": true, "message": "task marked as complete", "data": []}**
- Error Responses
    - **{"success": false, "message": "error, couldn't mark task as complete", "data": []}**
    - **{"success": false, "message": "error, incorrect task id given", "data": []}**

DELETE
- Update delete field of task
- Required: { id }
- Success response
    - **{"success": true, "message": "task marked as deleted", "data": []}**
- Error Response
   - **{"success": false, "message": "error, couldn't mark task as deleted", "data": []}**
   - **{"success": false, "message": "error, incorrect task id given", "data": []}**
   