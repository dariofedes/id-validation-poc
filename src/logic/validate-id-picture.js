import axios from 'axios'

/**
 * sendIdPicture - Sends ID picture to the API to ask for acceptance or rejection 
 * @param {String} idPictureURI 
 * @throws {TypeError} On non string idPictureURI
 * @returns {Promise<Boolean>} Whether the ID picture is accepted or not
 */

export default function sendIdPicture(idPictureURI) {
    const IMAGE_URI_REGEX = /^file:\/\/\/([^]+?\.(jpg|png))/g

    if(typeof idPictureURI !== 'string') throw new TypeError(`idPictureURI ${idPictureURI} is not a string`)
    if(!IMAGE_URI_REGEX.test(idPictureURI)) throw new Error(`idPictureURI ${idPictureURI} is not a valid picture URI`)
    
    return axios.post('https://front-exercise.z1.digital/evaluations')
            .then(({ data: { summary: { outcome } } }) => outcome === 'Approved')
}