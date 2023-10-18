# Express Routes Stack

# Routes

## "/"

- Nothing available here

## "/projects"

- List out JSON object of all available projects

## "/projects/:id"

- List out projects with matching id parameter
- If ID parameter is not a number send 400 status response with `{ "message": "ID parameter must be a number" }` in body
- If there are no projects with a matching ID found within the projects array, response with `{"message" : "No Project Found"}` in the body.

## "/projects/active"

- List out projects with isActive set to true
- If there are no active projects send 400 status response with `{"message" : "No active projects"}` in the body.
