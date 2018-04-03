
interface IConnectedService {
    // type of the service (LUIS, QnA, etc.)
    type: string;

    // Friendly name for the service
    name: string;

    // unique Id for the service (appid, etc)
    id: string;
}


interface ILocalhostService extends IConnectedService {
    // type = ServiceTypes.Luis
    // id = bot id

    // MSA Appid
    appId: string;

    // MSA app password for the bot 
    appPassword: string;

    // endpoint of localhost service
    endpoint: string;
}

interface IAzureBotService extends IConnectedService {
    // type = ServiceTypes.Luis
    // id = bot id

    // MSA Appid
    appId: string;

    // MSA app password for the bot 
    appPassword: string;

    // endpoint of service
    endpoint: string;
}

interface ILuisService extends IConnectedService {
    // type = ServiceTypes.Luis
    // id = appid

    // luis appid
    appId: string;

    // authoring key for using authoring api
    authoringKey: string;
}

interface IQnAService extends IConnectedService {
    // type=Servicestypes.QnA
    // id = appid for the QnA service

    // kb id
    kbid: string;

    // subscriptionkey for calling api
    subscriptionKey: string;
}

interface IBotConfig {
    // name of the bot
    name: string;

    // description of the bot
    description: string;

    // connected services for the bot
    services: IConnectedService[];
}