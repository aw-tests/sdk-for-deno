import { Service } from "../service.ts";
import { DocumentData } from '../client.ts'

export class Avatars extends Service {

    /**
     * Get Browser Icon
     *
     * You can use this endpoint to show different browser icons to your users.
     * The code argument receives the browser code as it appears in your user
     * /account/sessions endpoint. Use width, height and quality arguments to
     * change the output settings.
     *
     * @param string code
     * @param number width
     * @param number height
     * @param number quality
     * @throws Exception
     * @return Promise<string>
     */
    async getBrowser(code: string, width: number = 100, height: number = 100, quality: number = 100): Promise<string> {
        let path = '/avatars/browsers/{code}'.replace(new RegExp('{code}', 'g'), code);
        
        return await this.client.call('get', path, {
                    'content-type': 'application/json',
               },
               {
                'width': width,
                'height': height,
                'quality': quality
            });
    }

    /**
     * Get Credit Card Icon
     *
     * The credit card endpoint will return you the icon of the credit card
     * provider you need. Use width, height and quality arguments to change the
     * output settings.
     *
     * @param string code
     * @param number width
     * @param number height
     * @param number quality
     * @throws Exception
     * @return Promise<string>
     */
    async getCreditCard(code: string, width: number = 100, height: number = 100, quality: number = 100): Promise<string> {
        let path = '/avatars/credit-cards/{code}'.replace(new RegExp('{code}', 'g'), code);
        
        return await this.client.call('get', path, {
                    'content-type': 'application/json',
               },
               {
                'width': width,
                'height': height,
                'quality': quality
            });
    }

    /**
     * Get Favicon
     *
     * Use this endpoint to fetch the favorite icon (AKA favicon) of any remote
     * website URL.
     * 
     *
     * @param string url
     * @throws Exception
     * @return Promise<string>
     */
    async getFavicon(url: string): Promise<string> {
        let path = '/avatars/favicon';
        
        return await this.client.call('get', path, {
                    'content-type': 'application/json',
               },
               {
                'url': url
            });
    }

    /**
     * Get Country Flag
     *
     * You can use this endpoint to show different country flags icons to your
     * users. The code argument receives the 2 letter country code. Use width,
     * height and quality arguments to change the output settings.
     *
     * @param string code
     * @param number width
     * @param number height
     * @param number quality
     * @throws Exception
     * @return Promise<string>
     */
    async getFlag(code: string, width: number = 100, height: number = 100, quality: number = 100): Promise<string> {
        let path = '/avatars/flags/{code}'.replace(new RegExp('{code}', 'g'), code);
        
        return await this.client.call('get', path, {
                    'content-type': 'application/json',
               },
               {
                'width': width,
                'height': height,
                'quality': quality
            });
    }

    /**
     * Get Image from URL
     *
     * Use this endpoint to fetch a remote image URL and crop it to any image size
     * you want. This endpoint is very useful if you need to crop and display
     * remote images in your app or in case you want to make sure a 3rd party
     * image is properly served using a TLS protocol.
     *
     * @param string url
     * @param number width
     * @param number height
     * @throws Exception
     * @return Promise<string>
     */
    async getImage(url: string, width: number = 400, height: number = 400): Promise<string> {
        let path = '/avatars/image';
        
        return await this.client.call('get', path, {
                    'content-type': 'application/json',
               },
               {
                'url': url,
                'width': width,
                'height': height
            });
    }

    /**
     * Get User Initials
     *
     * Use this endpoint to show your user initials avatar icon on your website or
     * app. By default, this route will try to print your logged-in user name or
     * email initials. You can also overwrite the user name if you pass the 'name'
     * parameter. If no name is given and no user is logged, an empty avatar will
     * be returned.
     * 
     * You can use the color and background params to change the avatar colors. By
     * default, a random theme will be selected. The random theme will persist for
     * the user's initials when reloading the same theme will always return for
     * the same initials.
     *
     * @param string name
     * @param number width
     * @param number height
     * @param string color
     * @param string background
     * @throws Exception
     * @return Promise<string>
     */
    async getInitials(name: string = '', width: number = 500, height: number = 500, color: string = '', background: string = ''): Promise<string> {
        let path = '/avatars/initials';
        
        return await this.client.call('get', path, {
                    'content-type': 'application/json',
               },
               {
                'name': name,
                'width': width,
                'height': height,
                'color': color,
                'background': background
            });
    }

    /**
     * Get QR Code
     *
     * Converts a given plain text to a QR code image. You can use the query
     * parameters to change the size and style of the resulting image.
     *
     * @param string text
     * @param number size
     * @param number margin
     * @param boolean download
     * @throws Exception
     * @return Promise<string>
     */
    async getQR(text: string, size: number = 400, margin: number = 1, download: boolean = false): Promise<string> {
        let path = '/avatars/qr';
        
        return await this.client.call('get', path, {
                    'content-type': 'application/json',
               },
               {
                'text': text,
                'size': size,
                'margin': margin,
                'download': download
            });
    }
}