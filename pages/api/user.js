import fs from 'fs'
export function UserMediaPath() {
    this.filePath = 'E:/imbd-app/pages/user.json'
    this.parsedBody = null

}
UserMediaPath.prototype.setParsedBody = function (body) {
    this.parsedBody = JSON.parse(body)
}
UserMediaPath.prototype.writeFilePost = function (data) {
    fs.writeFile(this.filePath, JSON.stringify(data), (err) => {
        if (err) throw err;
      
    });
}
UserMediaPath.prototype.readFile = function (data) {
    const users = JSON.parse(data);
    if (!users.some(element => element.title === this.parsedBody.title)) {
        users.push(this.parsedBody);
    }
    return users

}
UserMediaPath.prototype.updateFilePost = function () {
    fs.readFile(this.filePath, 'utf8', (err, data) => {
        if (err) throw err;
        const userData = this.readFile(data)
        this.writeFilePost(userData)
    })
}
UserMediaPath.prototype.readGet = function (res) {
    fs.readFile(this.filePath, 'utf8', (err, data) => {
        if (err) throw err;
        res.status(200).json(JSON.parse(data));
    })
}