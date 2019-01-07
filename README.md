# Reading List
A book library with React, Nodejs and GraphQL

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Installing Node Modules

Node modules are not included in the course files. After download, run npm install to install the modules (client and server folders)

Run npm install in client folder

```
npm install
```

And repeat in server folder

```
npm install
```

### Setting up MongoDB


Inside server/app.js, change 

```
mongoose.connect('mongodb://'+mongo_config.MONGODB_USERNAME+':'+mongo_config.MONGODB_PASSWORD+'@ds133290.mlab.com:33290/gql-dd');
```
into your MongoDB database link

## Authors

* **Daniel Dao** - *Initial work* - [DanDanDao](https://github.com/DanDanDao)

See also the list of [contributors](https://github.com/DanDanDao/book-library/graphs/contributors) who participated in this project.

## Acknowledgments

* Hat tip to **The Net Ninja** at [The Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg) for creating a wonderful tutorial which this project is based on!
