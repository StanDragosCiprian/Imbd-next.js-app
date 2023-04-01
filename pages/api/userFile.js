import fs from 'fs'
export default function handler(req, res) {
    const filePath = 'E:/imbd-app/pages/user.json';
    if (req.method === 'POST') {
        res.status(200).json({ name: 'work' });
        const body = req.body
        const parsedBody = JSON.parse(body);
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) throw err;
            const users = JSON.parse(data);
            if (!users.some(element => element.title === parsedBody.title)) {
                users.push(parsedBody);
            }
            
            fs.writeFile(filePath, JSON.stringify(users), (err) => {
                if (err) throw err;
                console.log('The file has been updated!');
            });
        });
    }else if(req.method === 'GET'){
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) throw err;
        res.status(200).json(JSON.parse(data));
        })
        
    }
}