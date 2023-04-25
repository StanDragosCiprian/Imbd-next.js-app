import fs from 'fs'
import { UserMediaPath } from './user';
export default function handler(req, res) {
    const userData=new UserMediaPath()
    if (req.method === 'POST') {
        const body = req.body
        userData.setParsedBody(body)
        userData.updateFilePost()
        res.status(200).json({ name: 'work' });
     
    }else if(req.method === 'GET'){
        userData.readGet(res)
    }
}