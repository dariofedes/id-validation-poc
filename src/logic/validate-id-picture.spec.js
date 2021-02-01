import { validateIDPicture } from './'
import axios from 'axios'

describe('validateIDPicture', () => {
    let idPictureURI

    beforeAll(() => {
        axios.post = jest.fn(() => {
            return new Promise((resolve) => {
                const outcome = Math.floor(Math.random() * 2) === 1 ? 'Too much glare' : 'Approved'
                resolve({ data: { summary: { outcome } } })
            })
        })
    })

    describe('on valid arguments', () => {
        beforeEach(() => {
            const imageName = Math.random().toString().split('.')[1]
            idPictureURI = `file:///${imageName}.jpg`
        })
    
        it('should not throw', async () => {
            let error
    
            try {
                await validateIDPicture(idPictureURI)
            } catch(_error) {
                error = _error
            }
    
            expect(error).not.toBeDefined()
        })

        it('should return a boolean', async () => {
            const result = await validateIDPicture(idPictureURI)

            expect(typeof result).toBe('boolean')
        })
    })

    describe('on non valid arguments', () => {
        it('should throw on non string idPictureURI', () => {
            // Forcing error
            idPictureURI = 0
            expect(() => (validateIDPicture(idPictureURI))).toThrow(TypeError, `idPictureURI ${idPictureURI} is not a string`)
            
            idPictureURI = true
            expect(() => (validateIDPicture(idPictureURI))).toThrow(TypeError, `idPictureURI ${idPictureURI} is not a string`)
            
            idPictureURI = undefined
            expect(() => (validateIDPicture(idPictureURI))).toThrow(TypeError, `idPictureURI ${idPictureURI} is not a string`)
            
            idPictureURI = null
            expect(() => (validateIDPicture(idPictureURI))).toThrow(TypeError, `idPictureURI ${idPictureURI} is not a string`)
            
            idPictureURI = { foo: 'bar' }
            expect(() => (validateIDPicture(idPictureURI))).toThrow(TypeError, `idPictureURI ${idPictureURI} is not a string`)
            
            idPictureURI = [ 'foo' ]
            expect(() => (validateIDPicture(idPictureURI))).toThrow(TypeError, `idPictureURI ${idPictureURI} is not a string`)
        })

        it('should fail on non valid file system URI', () => {
            idPictureURI = `${Math.random().toString()}/picture.jpg`
            expect(() => (validateIDPicture(idPictureURI))).toThrow(Error, `idPictureURI ${idPictureURI} is not a valid image URI`)
        })

        it('should fail on non .jpg or .png image', () => {
            idPictureURI = `file:///picture.${Math.random().toString()}`
            expect(() => (validateIDPicture(idPictureURI))).toThrow(Error, `idPictureURI ${idPictureURI} is not a valid image URI`)
        })
    })

    afterAll(() => {
        axios.post.mockClear()
    })
})
