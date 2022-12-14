# Blog-api

Api for [Blog: Front-End](https://github.com/Ainswrg/Blog-Front-End).
Mongoose, Express, React, Node

## Setup and Running

- Use `node 16.x` or higher.
- Clone this repo: `$ git clone https://github.com/Ainswrg/Blog-BackEnd.git`.
- Go to downloaded folder: `$ cd Blog-BackEnd`.
- Install dependencies: `$ npm install`.
- Start server: `$ npm start:dev`.
- Now you can send requests to the address: `http://127.0.0.1:5000`.

## Usage

- **Auth**
  - [Register](https://github.com/Ainswrg/Blog-BackEnd#register)
  - [Login](https://github.com/Ainswrg/Blog-BackEnd#login)
  - [Get me](https://github.com/Ainswrg/Blog-BackEnd#get-me)
- **Post**
  - [Get All Posts](https://github.com/Ainswrg/Blog-BackEnd#get-me)
  - [Get Last 5 Tags](https://github.com/Ainswrg/Blog-BackEnd#get-tags)
  - [Get One](https://github.com/Ainswrg/Blog-BackEnd#get-one)
  - [Create Post](https://github.com/Ainswrg/Blog-BackEnd#create-post)
  - [Update Post](https://github.com/Ainswrg/Blog-BackEnd#update-post)
  - [Delete Post](https://github.com/Ainswrg/Blog-BackEnd#delete-post)
- **Comment**
  - [Get Last Five](https://github.com/Ainswrg/Blog-BackEnd#get-last-five)
  - [Get From One Post](https://github.com/Ainswrg/Blog-BackEnd#get-from-one-post)
  - [Create Comment](https://github.com/Ainswrg/Blog-BackEnd#create-comment)
  - [Update Comment](https://github.com/Ainswrg/Blog-BackEnd#update-comment)
  - [Delete Comment](https://github.com/Ainswrg/Blog-BackEnd#delete-comment)

## **Register**

Creates a new user.

<details>

- **URL**

  /auth/register

- **Method:**

  `POST`

- **Headers:**

  'Content-Type': 'application/json'

- **URL Params**

  None

- **Query Params**

  **Optional:**

  None

- **Data Params**

  ```typescript
    {
      email: string,
      password: string,
      fullName: string,
      avatarUrl: string
    }
  ```

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**

    ```json
    [
      {
        "fullName": "John Doe",
        "email": "test@gmail.com",
        "avatarUrl": "https://cloud.mongodb.com/user",
        "_id": "631259ae573622b132c66be3",
        "createdAt": "2022-09-02T19:29:50.635Z",
        "updatedAt": "2022-09-02T19:29:50.635Z",
        "__v": 0,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEyNTlhZTU3MzYyMmIxMzJjNjZiZTMiLCJpYXQiOjE2NjIxNDY5OTAsImV4cCI6MTY2NDczODk5MH0.VVAsj0jguCiWME2BIBup9C7gj7zm68ujfKu4A0hoxhM"
      }
    ]
    ```

    **Headers:**

    None

- **Error Response:**

  - **Code:** 500 Can't register user <br />

- **Notes:**

  None

</details>

## **Login**

Login user.

<details>

- **URL**

  /auth/login

- **Method:**

  `POST`

- **Headers:**

  'Content-Type': 'application/json'
  'authorization: 'Bearer token'

- **URL Params**

  None

- **Query Params**

  **Optional:**

  None

- **Data Params**

  ```typescript
    {
      email: string,
      password: string
    }
  ```

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**

    ```json
    [
      {
        "_id": "631259ae573622b132c66be3",
        "fullName": "John Doe",
        "email": "test@gmail.com",
        "avatarUrl": "https://cloud.mongodb.com/user",
        "_id": "631259ae573622b132c66be3",
        "createdAt": "2022-09-02T19:29:50.635Z",
        "updatedAt": "2022-09-02T19:29:50.635Z",
        "__v": 0,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEyNTlhZTU3MzYyMmIxMzJjNjZiZTMiLCJpYXQiOjE2NjIxNDY5OTAsImV4cCI6MTY2NDczODk5MH0.VVAsj0jguCiWME2BIBup9C7gj7zm68ujfKu4A0hoxhM"
      }
    ]
    ```

    **Headers:**

    None

- **Error Response:**

  - **Code:** 400 Incorrect username or password <br />
  - **Code:** 404 User is not define <br />
  - **Code:** 500 Can't sign <br />

- **Notes:**

  None

</details>

## **Get Me**

Returns json data about user.

<details>

- **URL**

  /auth/me

- **Method:**

  `GET`

- **Headers:**

  'authorization: 'Bearer token'

- **URL Params**

  None

- **Query Params**

  **Optional:**

  None

- **Data Params**

  ```typescript
    {
      email: string,
      password: string
    }
  ```

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**

    ```json
    [
      {
        "_id": "631259ae573622b132c66be3",
        "fullName": "John Doe",
        "email": "test@gmail.com",
        "avatarUrl": "https://cloud.mongodb.com/user",
        "_id": "631259ae573622b132c66be3",
        "createdAt": "2022-09-02T19:29:50.635Z",
        "updatedAt": "2022-09-02T19:29:50.635Z",
        "__v": 0,
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEyNTlhZTU3MzYyMmIxMzJjNjZiZTMiLCJpYXQiOjE2NjIxNDY5OTAsImV4cCI6MTY2NDczODk5MH0.VVAsj0jguCiWME2BIBup9C7gj7zm68ujfKu4A0hoxhM"
      }
    ]
    ```

    **Headers:**

    None

- **Error Response:**

  - **Code:** 404 User not found <br />
  - **Code:** 500 Access Denied <br />

- **Notes:**

  None

</details>

## **Get All Posts**

Returns json data with all posts.

<details>

- **URL**

  /posts/get

- **Method:**

  `GET`

- **Headers:**

  None

- **URL Params**

  None

- **Query Params**

  **Optional:**

  `sort=[integer]`

  `category=[integer]`

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**

    ```json
    [
      {
        "_id": "63105bde389a9005523453b3",
        "title": "New Test",
        "text": "**Where To Get Support**\n.",
        "tags": ["test"],
        "viewsCount": 12,
        "user": {
          "_id": "6304fc0d8e1f729139902031",
          "fullName": "Jessica Jons",
          "email": "jess@gmail.com",
          "passwordHash": "$2b$10$Opi00SuP9AtBY9mFfc9f3eDgF2bJMyjFCxWn33rG0bDN.OccjS8OK",
          "createdAt": "2022-08-23T16:10:53.643Z",
          "updatedAt": "2022-08-23T16:10:53.643Z",
          "__v": 0,
          " avatarUrl": "https://mui.com/static/images/avatar/7.jpg"
        },
        "imageUrl": "uploads/wallhaven-pkj789.jpg",
        "comments": [
          {
            "_id": "6310bce24e6c544eaf73956f",
            "text": "Hell year",
            "user": "6304fc0d8e1f729139902031",
            "post": "63105bde389a9005523453b3",
            "createdAt": "2022-09-01T14:08:34.093Z",
            "updatedAt": "2022-09-01T14:08:34.093Z",
            "__v": 0
          }
        ],
        "commentsCount": 1,
        "createdAt": "2022-09-01T07:14:38.045Z",
        "updatedAt": "2022-09-02T05:16:40.198Z",
        "__v": 2
      }
    ]
    ```

    **Headers:**

    None

- **Error Response:**

  - **Code:** 500 Can't find any posts<br />

- **Notes:**

  None

</details>

## **Get Last 5 Tags**

Returns json data with tags.

<details>

- **URL**

  /posts/tags

- **Method:**

  `GET`

- **Headers:**

  None

- **URL Params**

  None

- **Query Params**

  **Optional:**

  None

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**

    ```json
    ["tag", "tag2"]
    ```

    **Headers:**

    None

- **Error Response:**

  - **Code:** 500 Can't find any tags<br />

- **Notes:**

  None

</details>

## **Get One**

Returns json data with one post.

<details>

- **URL**

  /posts/:id

- **Method:**

  `GET`

- **Headers:**

  None

- **URL Params**

  **Required:**

  `id=[integer]`

- **Query Params**

  **Optional:**

  None

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**

    ```json
    {
      "_id": "63105bde389a9005523453b3",
      "title": "New Test",
      "text": "**Where To Get Support**\n.",
      "tags": ["test"],
      "viewsCount": 12,
      "user": {
        "_id": "6304fc0d8e1f729139902031",
        "fullName": "Jessica Jons",
        "email": "jess@gmail.com",
        "passwordHash": "$2b$10$Opi00SuP9AtBY9mFfc9f3eDgF2bJMyjFCxWn33rG0bDN.OccjS8OK",
        "createdAt": "2022-08-23T16:10:53.643Z",
        "updatedAt": "2022-08-23T16:10:53.643Z",
        "__v": 0,
        " avatarUrl": "https://mui.com/static/images/avatar/7.jpg"
      },
      "imageUrl": "uploads/wallhaven-pkj789.jpg",
      "comments": [
        {
          "_id": "6310bce24e6c544eaf73956f",
          "text": "Hell year",
          "user": "6304fc0d8e1f729139902031",
          "post": "63105bde389a9005523453b3",
          "createdAt": "2022-09-01T14:08:34.093Z",
          "updatedAt": "2022-09-01T14:08:34.093Z",
          "__v": 0
        }
      ],
      "commentsCount": 1,
      "createdAt": "2022-09-01T07:14:38.045Z",
      "updatedAt": "2022-09-02T05:16:40.198Z",
      "__v": 2
    }
    ```

    **Headers:**

    None

- **Error Response:**

  - **Code:** 404 Article is not define<br />
  - **Code:** 500 Can't find post<br />

- **Notes:**

  None

</details>

## **Create Post**

Creates a new post.

<details>

- **URL**

  /posts/addPost

- **Method:**

  `POST`

- **Headers:**

  'Content-Type': 'application/json'
  'authorization: 'Bearer token'

- **URL Params**

  None

- **Query Params**

  **Optional:**

  None

- **Data Params**

  ```typescript
    {
      title: string,
      text: string,
      imageUrl: string,
      tags: string[]
    }
  ```

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**

    ```json
    [
      {
        "title": "TestPost",
        "text": "TestText",
        "tags": ["react", "js"],
        "viewsCount": 0,
        "user": "63021b92fca485f6cbe95a36",
        "imageUrl": "data:image/png",
        "comments": [],
        "commentCount": 0,
        "_id": "630e5333a0d95553eb062f00",
        "createdAt": "2022-08-30T18:13:07.490Z",
        "updatedAt": "2022-08-30T18:13:07.490Z",
        "__v": 0
      }
    ]
    ```

    **Headers:**

    None

- **Error Response:**

  - **Code:** 500 Can't create article <br />

- **Notes:**

  None

</details>

## **Update Post**

Update post.

<details>

- **URL**

  /posts/:id

- **Method:**

  `PUT`

- **Headers:**

  'Content-Type': 'application/json'
  'authorization: 'Bearer token'

- **URL Params**

  **Required:**

  `id=[integer]`

- **Query Params**

  **Optional:**

  None

- **Data Params**

  ```typescript
    {
      title: string,
      text: string,
      imageUrl: string,
      tags: string[]
    }
  ```

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**

    ```json
    [
      {
        "success": true
      }
    ]
    ```

    **Headers:**

    None

- **Error Response:**

  - **Code:** 500 Can't update post <br />

- **Notes:**

  None

</details>

## **Delete Post**

Delete post.

<details>

- **URL**

  /posts/:id

- **Method:**

  `DELETE`

- **Headers:**

  'Content-Type': 'application/json'
  'authorization: 'Bearer token'

- **URL Params**

  **Required:**

  `id=[integer]`

- **Query Params**

  **Optional:**

  None

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**

    ```json
    [
      {
        "success": true
      }
    ]
    ```

    **Headers:**

    None

- **Error Response:**

  - **Code:** 404 Article is not define <br />
  - **Code:** 500 Can't remove post <br />

- **Notes:**

  None

</details>

## **Get Last Five**

Returns json data with last five comments.

<details>

- **URL**

  /comments/getLastFive

- **Method:**

  `GET`

- **Headers:**

  None

- **URL Params**

  None

- **Query Params**

  **Optional:**

  None

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**

    ```json
    [
      {
        "_id": "630f39f4041ace19a4bcd3b9",
        "text": "Comment1",
        "user": {
          "_id": "63021b92fca485f6cbe95a36",
          "fullName": "Antony Stark",
          "email": "test3@gmail.com",
          "passwordHash": "$2b$10$xYgyPkTISjxfqqJmcquqZeMJ2GSF7rNz4nS8n0E/9bw6Nad4MtPdy",
          "avatarUrl": "https://mui.com/static/images/avatar/5.jpg\n",
          "createdAt": "2022-08-21T11:48:34.213Z",
          "updatedAt": "2022-08-21T11:48:34.213Z",
          "__v": 0
        },
        "post": "630e5a8758042ede70997c22",
        "createdAt": "2022-08-31T10:37:40.066Z",
        "updatedAt": "2022-08-31T10:37:40.066Z",
        "__v": 0
      },
      {
        "_id": "630f4fa663dcf1a033eb4bd7",
        "text": "Comment2",
        "user": {
          "_id": "63021b92fca485f6cbe95a36",
          "fullName": "Antony Stark",
          "email": "test3@gmail.com",
          "passwordHash": "$2b$10$xYgyPkTISjxfqqJmcquqZeMJ2GSF7rNz4nS8n0E/9bw6Nad4MtPdy",
          "avatarUrl": "https://mui.com/static/images/avatar/5.jpg\n",
          "createdAt": "2022-08-21T11:48:34.213Z",
          "updatedAt": "2022-08-21T11:48:34.213Z",
          "__v": 0
        },
        "post": "630e5a8758042ede70997c22",
        "createdAt": "2022-08-31T12:10:15.000Z",
        "updatedAt": "2022-08-31T12:10:15.000Z",
        "__v": 0
      },
      {
        "_id": "630f4fec63dcf1a033eb4bfd",
        "text": "Comment3",
        "user": {
          "_id": "63021b92fca485f6cbe95a36",
          "fullName": "Antony Stark",
          "email": "test3@gmail.com",
          "passwordHash": "$2b$10$xYgyPkTISjxfqqJmcquqZeMJ2GSF7rNz4nS8n0E/9bw6Nad4MtPdy",
          "avatarUrl": "https://mui.com/static/images/avatar/5.jpg\n",
          "createdAt": "2022-08-21T11:48:34.213Z",
          "updatedAt": "2022-08-21T11:48:34.213Z",
          "__v": 0
        },
        "post": "630e5a8758042ede70997c22",
        "createdAt": "2022-08-31T12:11:24.409Z",
        "updatedAt": "2022-08-31T12:11:24.409Z",
        "__v": 0
      },
      {
        "_id": "630f503463dcf1a033eb4c09",
        "text": "Comment4",
        "user": {
          "_id": "63021b92fca485f6cbe95a36",
          "fullName": "Antony Stark",
          "email": "test3@gmail.com",
          "passwordHash": "$2b$10$xYgyPkTISjxfqqJmcquqZeMJ2GSF7rNz4nS8n0E/9bw6Nad4MtPdy",
          "avatarUrl": "https://mui.com/static/images/avatar/5.jpg\n",
          "createdAt": "2022-08-21T11:48:34.213Z",
          "updatedAt": "2022-08-21T11:48:34.213Z",
          "__v": 0
        },
        "post": "630e5a8758042ede70997c22",
        "createdAt": "2022-08-31T12:12:36.712Z",
        "updatedAt": "2022-08-31T12:12:36.712Z",
        "__v": 0
      },
      {
        "_id": "630f503f63dcf1a033eb4c16",
        "text": "Comment5",
        "user": {
          "_id": "63021b92fca485f6cbe95a36",
          "fullName": "Antony Stark",
          "email": "test3@gmail.com",
          "passwordHash": "$2b$10$xYgyPkTISjxfqqJmcquqZeMJ2GSF7rNz4nS8n0E/9bw6Nad4MtPdy",
          "avatarUrl": "https://mui.com/static/images/avatar/5.jpg\n",
          "createdAt": "2022-08-21T11:48:34.213Z",
          "updatedAt": "2022-08-21T11:48:34.213Z",
          "__v": 0
        },
        "post": "630e5a8758042ede70997c22",
        "createdAt": "2022-08-31T12:12:47.108Z",
        "updatedAt": "2022-08-31T12:12:47.108Z",
        "__v": 0
      }
    ]
    ```

    **Headers:**

    None

- **Error Response:**

  - **Code:** 500 Can't find any comments<br />

- **Notes:**

  None

</details>

## **Get From One Post**

Returns json data with comments from one post.

<details>

- **URL**

  /comments/:id

- **Method:**

  `GET`

- **Headers:**

  None

- **URL Params**

  **Required:**

  `id=[integer]`

- **Query Params**

  **Optional:**

  None

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**

    ```json
    [
      {
        "_id": "630f39f4041ace19a4bcd3b9",
        "text": "Comment1",
        "user": {
          "_id": "63021b92fca485f6cbe95a36",
          "fullName": "Antony Stark",
          "email": "test3@gmail.com",
          "passwordHash": "$2b$10$xYgyPkTISjxfqqJmcquqZeMJ2GSF7rNz4nS8n0E/9bw6Nad4MtPdy",
          "avatarUrl": "https://mui.com/static/images/avatar/5.jpg\n",
          "createdAt": "2022-08-21T11:48:34.213Z",
          "updatedAt": "2022-08-21T11:48:34.213Z",
          "__v": 0
        },
        "post": "630e5a8758042ede70997c22",
        "createdAt": "2022-08-31T10:37:40.066Z",
        "updatedAt": "2022-08-31T10:37:40.066Z",
        "__v": 0
      },
      {
        "_id": "630f4fa663dcf1a033eb4bd7",
        "text": "Comment2",
        "user": {
          "_id": "63021b92fca485f6cbe95a36",
          "fullName": "Antony Stark",
          "email": "test3@gmail.com",
          "passwordHash": "$2b$10$xYgyPkTISjxfqqJmcquqZeMJ2GSF7rNz4nS8n0E/9bw6Nad4MtPdy",
          "avatarUrl": "https://mui.com/static/images/avatar/5.jpg\n",
          "createdAt": "2022-08-21T11:48:34.213Z",
          "updatedAt": "2022-08-21T11:48:34.213Z",
          "__v": 0
        },
        "post": "630e5a8758042ede70997c22",
        "createdAt": "2022-08-31T12:10:15.000Z",
        "updatedAt": "2022-08-31T12:10:15.000Z",
        "__v": 0
      },
      {
        "_id": "630f4fec63dcf1a033eb4bfd",
        "text": "Comment3",
        "user": {
          "_id": "63021b92fca485f6cbe95a36",
          "fullName": "Antony Stark",
          "email": "test3@gmail.com",
          "passwordHash": "$2b$10$xYgyPkTISjxfqqJmcquqZeMJ2GSF7rNz4nS8n0E/9bw6Nad4MtPdy",
          "avatarUrl": "https://mui.com/static/images/avatar/5.jpg\n",
          "createdAt": "2022-08-21T11:48:34.213Z",
          "updatedAt": "2022-08-21T11:48:34.213Z",
          "__v": 0
        },
        "post": "630e5a8758042ede70997c22",
        "createdAt": "2022-08-31T12:11:24.409Z",
        "updatedAt": "2022-08-31T12:11:24.409Z",
        "__v": 0
      },
      {
        "_id": "630f503463dcf1a033eb4c09",
        "text": "Comment4",
        "user": {
          "_id": "63021b92fca485f6cbe95a36",
          "fullName": "Antony Stark",
          "email": "test3@gmail.com",
          "passwordHash": "$2b$10$xYgyPkTISjxfqqJmcquqZeMJ2GSF7rNz4nS8n0E/9bw6Nad4MtPdy",
          "avatarUrl": "https://mui.com/static/images/avatar/5.jpg\n",
          "createdAt": "2022-08-21T11:48:34.213Z",
          "updatedAt": "2022-08-21T11:48:34.213Z",
          "__v": 0
        },
        "post": "630e5a8758042ede70997c22",
        "createdAt": "2022-08-31T12:12:36.712Z",
        "updatedAt": "2022-08-31T12:12:36.712Z",
        "__v": 0
      },
      {
        "_id": "630f503f63dcf1a033eb4c16",
        "text": "Comment5",
        "user": {
          "_id": "63021b92fca485f6cbe95a36",
          "fullName": "Antony Stark",
          "email": "test3@gmail.com",
          "passwordHash": "$2b$10$xYgyPkTISjxfqqJmcquqZeMJ2GSF7rNz4nS8n0E/9bw6Nad4MtPdy",
          "avatarUrl": "https://mui.com/static/images/avatar/5.jpg\n",
          "createdAt": "2022-08-21T11:48:34.213Z",
          "updatedAt": "2022-08-21T11:48:34.213Z",
          "__v": 0
        },
        "post": "630e5a8758042ede70997c22",
        "createdAt": "2022-08-31T12:12:47.108Z",
        "updatedAt": "2022-08-31T12:12:47.108Z",
        "__v": 0
      }
    ]
    ```

    **Headers:**

    None

- **Error Response:**

  - **Code:** 500 Can't find any comments<br />

- **Notes:**

  None

</details>

## **Create Comment**

Creates a new comment.

<details>

- **URL**

  /comments/:id

- **Method:**

  `POST`

- **Headers:**

  'Content-Type': 'application/json'
  'authorization: 'Bearer token'

- **URL Params**

  **Required:**

  `id=[integer]`

- **Query Params**

  **Optional:**

  None

- **Data Params**

  ```typescript
    {
      text: string,
    }
  ```

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**

    ```json
    [
      {
        "text": "test text",
        "user": "6304fc0d8e1f729139902031",
        "post": "630e5aab58042ede70997c32",
        "_id": "630e63e88cb6c0b1690c4a69",
        "createdAt": "2022-08-30T19:24:24.462Z",
        "updatedAt": "2022-08-30T19:24:24.462Z",
        "__v": 0
      }
    ]
    ```

    **Headers:**

    None

- **Error Response:**

  - **Code:** 500 Can't create comment <br />

- **Notes:**

  None

</details>


## **Update Comment**

Update post.

<details>

- **URL**

  /comments/:id

- **Method:**

  `PUT`

- **Headers:**

  'Content-Type': 'application/json'
  'authorization: 'Bearer token'

- **URL Params**

  **Required:**

  `id=[integer]`

- **Query Params**

  **Optional:**

  None

- **Data Params**

  ```typescript
    {
      text: string,
    }
  ```

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**

    ```json
    [
      {
        "success": true
      }
    ]
    ```

    **Headers:**

    None

- **Error Response:**

  - **Code:** 500 Can't update comment <br />

- **Notes:**

  None

</details>

## **Delete Comment**

Delete post.

<details>

- **URL**

  /comments/:id

- **Method:**

  `DELETE`

- **Headers:**

  'Content-Type': 'application/json'
  'authorization: 'Bearer token'

- **URL Params**

  **Required:**

  `id=[integer]`

- **Query Params**

  **Optional:**

  None

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200 OK <br />
    **Content:**

    ```json
    [
      {
        "success": true
      }
    ]
    ```

    **Headers:**

    None

- **Error Response:**

  - **Code:** 404 Comment is not define <br />
  - **Code:** 500 Can't remove comment <br />

- **Notes:**

  None

</details>
