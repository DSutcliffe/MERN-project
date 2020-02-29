# MERN Project
## Build a CRUD application using the MERN Stack

### MERN
MongoDB     - Database (Mongoose)  
ExpressJS   - Web Framework (Handle requests and responses)  
ReactJS     - Client side user interface  
NodeJS      - Server  

### CRUD
Create, Read, Update, Delete  

Make sure global dependancies are installed
npm i nodemon -g                - Watches directory for any changes (so dont node index.js each time)
npm i concurrently -g           - run 2 terminals at once
mpn i create-react-app -g       - 

1. Start with an empty foler 'MERN-project', drag this to VS Code
2. Create a new folder 'server' **[BACKEND]**
3. cd into 'server'
4. npm init -y
5. npm i express mongoose
6. Create .gitignore for /node_modules just created in 'server'
7. cd ..
8. create-react-app client **[FRONTEND]**
9. 'server' package.json
10. under "scripts" write some new scripts...
    * "start": "node index",
    * "client": "cd client && npm run start",
    * "client-install": "cd client && npm install",
    * "server-install": "cd server && npm install",
    * "install-all": "concurrently \"npm run client-install\" \"npm run server-install\"",
    * "server": "cd server && nodemon index",
    * "dev": "concurrently \"npm run client\" \"npm run server\""
    * Now I can just "npm install-server" or "npm dev" to run the 2 scripts at once (concurrently)
11. 'client' package.json
12. under "development" write a new proxy...
    * "proxy":"http://localhost:5000"
    * create-react by default listens on port 3000

1. 'server' - create index.js

# Header 1
## Header 2
###### Header 6

*Italic* (use two spaces for new line)  
**Bold**  
***Bold Italic***

*They **can** be combined*

* Item 1
* Item 2
    * Item 2a
    * Item 2b

1. Item 1
2. Item 2
    * Item 2a
    * Item 2b

![Image Text](https://moneyinc.com/wp-content/uploads/2019/04/2bc8e460427441.5a4cdc300deb9-750x422.jpg)

[Display Links](http://github.com)

Block Quotes
> This is how you put alot  
> of text in a block quote

\*use literal characters\*

```swift
function test() {
    print("Check This Out")
}
```

- [x] item complete
- [ ] intem incomplete

<del>Strike-Through text</del>

[Emoji Cheatsheet](http://www.emohi-cheat-sheet.com)
:+1:

First Header | Second Header
-------------- | ------------------
cell 1 | cell 2
x1 | x2
y1 | y2
z1 | z2
