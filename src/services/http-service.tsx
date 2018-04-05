import {Service} from 'typedi';

@Service()
export default class HttpService {

    async get(url: string, headers: {} = {}): Promise<Response> {
        return await fetch(url, {
            headers: headers,
            method: 'GET'
        });
    }
}