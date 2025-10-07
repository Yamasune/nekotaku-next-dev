import { heroui } from '@heroui/react'

export default heroui({
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: '#f7f9fe',
                    foreground: '#11181C'
                }
            }
        }
    },
    themes: {
        light: {
            colors: {
                background: '#f7f9fe',
                foreground: '#11181C'
            }
        },
        dark: {
            colors: {
                background: '#0a0a0a',
                foreground: '#ECEDEE'
            }
        }
    }
})
