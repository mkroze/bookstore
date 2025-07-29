This is a tutorial i'm following to master the concepts used in backend scalability
```bash
the basic tree structure that it follows are as follow :
└── backend                         # Root folder for backend code
    ├── app.js                      # Express app setup (middleware, routes)
    ├── config                      # Configuration files (e.g., DB connection)
    │   └── db.js                   # Database connection logic
    ├── controllers                 # Request handlers (business logic)
    │   └── userController.js       # Controller for user-related actions
    ├── middleware                  # Custom Express middleware
    │   ├── authMiddleware.js       # Auth checks (e.g., protect routes)
    │   └── errorMiddleware.js      # Centralized error handling
    ├── models                      # Database models/schemas
    │   └── userModel.js            # User data model (e.g., Mongoose schema)
    ├── package.json                # Project metadata and dependencies
    ├── routes                      # API route definitions
    │   └── userRoutes.js           # Routes for user endpoints
    ├── server.js                   # App server entry point (listen on port)
    └── utils                       # Helper utilities (pure functions)
        └── generateToken.js        # JWT token generation helper
    └── constants                   # Constants definition
        └── httpStatus.js           # Naming of the http status codes.
```
