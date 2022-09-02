# Blog-api

Api for Blog.

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

  * **Code:** 500 Can't register user <br />
      

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

  * **Code:** 400 Incorrect username or password <br />
  * **Code:** 404 User is not define <br />
  * **Code:** 500 Can't sign <br />

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

  * **Code:** 404 User not found <br />
  * **Code:** 500 Access Denied <br />

- **Notes:**

  None

</details>

## **Get All Posts**

Returns json data about user.

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

  None

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
		"tags": [
			"test"
		],
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

  * **Code:** 500 Can't find any posts<br />

- **Notes:**

  None

</details>