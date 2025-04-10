# Real Estate Application

## User Registration

A user will be able to register by navigating to `/api/v1/auth/register` page. A user should enter `valid and unique email address`, `unique username` and `secure password` to be registered as a user.

### Signup Route

- ROUTE: `/api/v1/auth/register`

* METHOD: `POST`

Required Informations:

```JavaScript
email: unique email address
username: unique username
password: secure password
```

Input Test Example:

```JSON
{
  "email": "johndoe@email.com",
  "username": "johndoe",
  "password": "********" // must be at least 8 characters long
}
```

Expected Output:

```JavaScript
  {
    status: "success",
    user: {
      email: "johndoe@email.com",
      username: "johndoe",
      avatar: null,
      createdAt: "2025-04-04T16:10:45.618Z",
      updatedAt: "2025-04-04T16:10:45.618Z",
    }
  }
```
