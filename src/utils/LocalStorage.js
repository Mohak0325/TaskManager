const employees = [
      {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "name" : "Aakash" ,
        "taskCount" : {
            "active": 2,
            "newTask": 0,
            "failed": 0,
            "completed": 1,
        } ,
        "tasks": [
          {
            "active": true,
            "newTask": false,
            "failed": false,
            "completed": false,
            "title": "Complete monthly report",
            "description": "Prepare and submit the monthly performance report.",
            "date": "2025-01-15",
            "category": "Reporting"
          },
          {
            "active": false,
            "newTask": false,
            "failed": false,
            "completed": true,
            "title": "Update client database",
            "description": "Add new client details to the CRM system.",
            "date": "2025-01-16",
            "category": "Data Management"
          },
          {
            "active": true,
            "newTask": false,
            "failed": true,
            "completed": false,
            "title": "Fix bug in module X",
            "description": "Resolve the issue reported in module X of the application.",
            "date": "2025-01-14",
            "category": "Development"
          }
        ]
      },
      {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "name" : "Abhay" ,
        "taskCount" : {
            "active": 1,
            "newTask": 0,
            "failed": 1,
            "completed": 1,
        } ,
        "tasks": [
          {
            "active": true,
            "newTask": false,
            "failed": false,
            "completed": false,
            "title": "Prepare presentation slides",
            "description": "Create slides for the upcoming client meeting.",
            "date": "2025-01-15",
            "category": "Presentation"
          },
          {
            "active": false,
            "newTask": false,
            "failed": false,
            "completed": true,
            "title": "Conduct code review",
            "description": "Review the code submitted by the development team.",
            "date": "2025-01-16",
            "category": "Development"
          },
          {
            "active": false,
            "newTask": false,
            "failed": true,
            "completed": false,
            "title": "Follow up with vendor",
            "description": "Contact the vendor for the delayed shipment.",
            "date": "2025-01-14",
            "category": "Logistics"
          }
        ]
      },
      {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "name" : "Vijay" ,
        "taskCount" : {
            "active": 0,
            "newTask": 0,
            "failed": 1,
            "completed": 2,
        } ,
        "tasks": [
          {
            "active": false,
            "newTask": false,
            "failed": false,
            "completed": true,
            "title": "Organize team meeting",
            "description": "Schedule and conduct a team meeting to discuss goals.",
            "date": "2025-01-17",
            "category": "Management"
          },
          {
            "active": false,
            "newTask": false,
            "failed": true,
            "completed": false,
            "title": "Audit financial records",
            "description": "Perform an audit of last quarter's financial transactions.",
            "date": "2025-01-18",
            "category": "Finance"
          },
          {
            "active": false,
            "newTask": false,
            "failed": false,
            "completed": true,
            "title": "Update security policies",
            "description": "Review and update the organization's security protocols.",
            "date": "2025-01-14",
            "category": "IT"
          }
        ]
      },
      {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "name" : "Rahul" ,
        "taskCount" : {
            "active": 3,
            "newTask": 0,
            "failed": 0,
            "completed": 0,
        } ,
        "tasks": [
          {
            "active": true,
            "newTask": false,
            "failed": false,
            "completed": false,
            "title": "Prepare event schedule",
            "description": "Draft a schedule for the upcoming company event.",
            "date": "2025-01-19",
            "category": "Event Planning"
          },
          {
            "active": true,
            "newTask": false,
            "failed": false,
            "completed": false,
            "title": "Design new brochure",
            "description": "Create a new brochure for the marketing campaign.",
            "date": "2025-01-15",
            "category": "Marketing"
          },
          {
            "active": true,
            "newTask": false,
            "failed": false,
            "completed": false,
            "title": "Resolve customer complaints",
            "description": "Address the complaints raised by customers in the last week.",
            "date": "2025-01-14",
            "category": "Customer Service"
          }
        ]
      },
      {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "name" : "Samay" ,
        "taskCount" : {
            "active": 0,
            "newTask": 1,
            "failed": 1,
            "completed": 1,
        } ,
        "tasks": [
          {
            "active": false,
            "newTask": true,
            "failed": false,
            "completed": false,
            "title": "Test new software update",
            "description": "Run tests on the latest software update before deployment.",
            "date": "2025-01-20",
            "category": "Testing"
          },
          {
            "active": false,
            "newTask": false,
            "failed": false,
            "completed": true,
            "title": "Write blog post",
            "description": "Draft a blog post on recent industry trends.",
            "date": "2025-01-21",
            "category": "Content Creation"
          },
          {
            "active": false,
            "newTask": false,
            "failed": true,
            "completed": false,
            "title": "Schedule maintenance",
            "description": "Plan and schedule maintenance for office equipment.",
            "date": "2025-01-14",
            "category": "Maintenance"
          }
        ]
      }
    ]
const admin = [
   {
      "id": 1,
      "email": "admin@example.com",
      "password": "123",
      "name":"Mohak"
   }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees' , JSON.stringify(employees));
    localStorage.setItem('admin' , JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return {employees , admin};
}
  

  
  