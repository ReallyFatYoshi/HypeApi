import * as crypto from 'node:crypto';
import axios from 'axios';

export default class PlayerSkin {
    public base64: string;
    public dataurl: string;
    public hash: string;

    private constructor(base64: string, hash: string, dataurl: string) {
        this.base64 = base64;
        this.hash = hash;
        this.dataurl = dataurl;
    }

    public static async create(url: string): Promise<PlayerSkin> {
        const response = await axios.default({
            url,
            method: 'GET',
        });

        const mimetype = response.headers['content-type'] as unknown as string;

        const hash = crypto
            .createHash('sha256')
            .update(response.data)
            .digest('hex');
        const base64 = Buffer.from(response.data, 'binary').toString('base64');
        const dataurl = `data:${mimetype};base64,${base64}`;

        return new PlayerSkin(base64, hash, dataurl);
    }
}
