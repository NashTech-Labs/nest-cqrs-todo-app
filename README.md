## NestJS CQRS TODO Application
This is a simple TODO application in NestJS that follows the Command Query Responsibility Segregation (CQRS) architecture pattern. The application manages a list of tasks with commands for adding and completing tasks, as well as a query for retrieving tasks.

# Getting Started
# Prerequisites
  Before you begin, make sure you have Node.js and npm installed on your machine.

# Installing Dependencies
 1. Clone the repository:
 ```git@github.com:NashTech-Labs/nest-cqrs-todo-app.git```

 2. Install the dependencies:
    ```npm install```
    
# Running Application
  Running application in development mode

  ```npm run start:dev```

  The application will be accessible at http://localhost:3000. You can test the API endpoints using tools like curl, Postman, or any preferred API testing   tool.

## API Endpoints
1. Add Tasks:
   Endpoint: POST /tasks
   Request Body:
   ```{
      "title": "Task Title"
    }```
   
2. Complete Task
   Endpoint: POST /tasks/:id/complete
   Request Body:
   ```{
        "id": "taskId"
      }```
3. Get Tasks
   Endpoint: GET /tasks
 
