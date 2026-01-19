import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 20,
                    background: 'black',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#8b5cf6', // Violet-500
                    borderRadius: '8px',
                    fontWeight: 800,
                    border: '1px solid #8b5cf6',
                    fontFamily: 'sans-serif'
                }}
            >
                W4
            </div>
        ),
        {
            ...size,
        }
    )
}
