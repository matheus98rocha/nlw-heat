import { Request, Response } from 'express';
import { CreateMessageService } from '../services/CreateMessageService';

import { io } from '../app'
import { GetLast3MessagesMessageService } from '../services/GetLast3MessagesService';

class Get3LastMessageController {
    async handle(request: Request, response: Response) {

        const service = new GetLast3MessagesMessageService();

        const result = await service.execute();

        return response.json(result);
    }
}

export { Get3LastMessageController };