# Lambda-Locker-Backend

## Endpoints

### Users
Method | Endpoint | Required Fields | Description
-------|----------|-----------------|------------
GET | `/users` | None | Returns an array of every user in the `users` database
GET | `/users/:id` | None | Returns the user matching the `id` passed in the parameters from the `users` database
PUT | `/users/:id` | { password, username, studentname, email } | Accepts a user object and will return whether or not the user has been updated
DELETE | `users/:id` | None | Will delete a user if exists
#### User object shape
```
  {
    "id": integer,
    "username": string,
    "password": string,
    "student_name": string,
    "email": string,
    "cohort": string,
    "is_admin": boolean,
    "resources": {
      "notes": [
        {
          "id": integer,
          "note_date": string,
          "note_title": string,
          "note_text": string
        },
      ],
      "links": [
        {
          "id": integer,
          "link_title": string,
          "link": string,
          "link_description": string,
          "link_category": string,
          "is_private": boolean,
          "link_curator": integer matching user id
        }
      ]
    }
  }
```

### Notes
Method | Endpoint | Required Fields | Description
-------|----------|-----------------|------------
GET | `/notes` | None | Returns all notes from the `notes` database
#### Notes object shape
```
{
    "id": integer,
    "note_date": string,
    "note_title": string,
    "note_text": string,
    "link_to_repo": string,
    "note_category": string,
    "is_private": boolean,
    "note_author": integer matching user id
  }
```

### Links
Method | Endpoint | Required Fields | Description
-------|----------|-----------------|------------
GET | `/links` | None | Returns all links from the `links` database
#### Links object shape
```
{
    "id": integer,
    "link_title": string,
    "link": string,
    "link_description": string,
    "link_category": string,
    "is_private": boolean,
    "link_curator": integer matching user id
}
```

## Contributors:

Brandi Bailey
https://github.com/orgs/lambda-locker/people/blubrandi

Christian Ipanaque
https://github.com/chrisipanaque
