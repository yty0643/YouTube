import axios from 'axios';

class Youtube{
    constructor(key) {
        this.key = key
        this.youtube = axios.create({
            baseURL: 'https://youtube.googleapis.com/youtube/v3',
            params: { key: key },
        });
    }    

    mostPopular = async () => {
        const res = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 25,
            }
        })
        return res.data.items;
    }

    search = async (query) => {
        const res = await this.youtube.get('videos', {
            params: {
                part: 'snippet',
                maxResults: 25,
                type: 'video',
                q: query,
            },
        });
        return res.data.items;
    }
}

export default Youtube;