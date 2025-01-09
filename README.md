# Express API with MySQL in Docker

This project is a RESTful API built using Node.js, Express, and TypeScript. It connects to a MySQL database running in a Docker container. The API provides endpoints to manage various resources, such as adding, retrieving, and processing data.

## **Features**

- Modular route structure for scalable development.
- Integration with a MySQL database using a Docker container.
- Clear separation of concerns with controllers and routes.
- Written in TypeScript for improved code safety and maintainability.

---

## **Requirements**

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Docker](https://www.docker.com/)
- [TypeScript](https://www.typescriptlang.org/)

---

## **Setup and Installation**

### **1. Clone the Repository**

```
git clone https://github.com/capu25/Express-API-with-MySQL-in-Docker.git
cd Express-API-with-MySQL-in-Docker
```

### **2. Install dependencies**

```
npm install
- or -
yarn
```

### **3. Set Up MySQL in Docker**

create a `docker-compone.yaml` file with the following content:

```docker
version: "3.8"
services:
  db:
    image: mysql:latest
    container_name: mysql_container
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
      MYSQL_DATABASE: my_database
      MYSQL_USER: user
      MYSQL_PASSWORD: password
    ports:
      - "3306:3306"
    volumes:
      - db_data:/var/lib/mysql

volumes:
  db_data:

```

start the MySQL container: `docker-compose up -d`

### **4. Configure Environment Variables**

## **Add new ENDPOINT**

### **1. Create new .routes.ts file**

```TypeScript
// src/routes/newFeature.routes.ts
import express from "express";
import { getNewFeature } from "../controllers/newFeature.controller";

const router = express.Router();

router.get("/", getNewFeature); // This is the new endpoint!

export default router;
```

### **2. Create new .controller.ts file**

```TypeScript
// src/controllers/newFeature.controller.ts
export const getNewFeature = (req, res) => {
  res.status(200).send("New Feature works from controller!");
};
```

### **3. Add new file(s) in the "main" component**

```TypeScript
// src/router.ts
...prev code
import newFeatureRoutes from "./routes/newFeature.routes"; // Import new route

const router = express.Router();

...prev routes
router.use("/new-feature", newFeatureRoutes); // this is /new-feature

export default router;
```

### **4. Run the node project**

```bash
npx ts-node src/server.ts
```

### **TESTING**

You can use a tool like [Postman](https://www.postman.com/) or cURL to test the API endpoints.

Example using `cURL`:

```bash
curl http://localhost:3000/new-feature
```
