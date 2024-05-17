import app from './app';
import dotenv from 'dotenv';
dotenv.config();

const port : string | undefined = process.env.PORT;

if (!port) {
    throw new Error("a port não está definida");
}else {

    app.listen(port, () => console.log('Server rodando na port ' + port));


}

