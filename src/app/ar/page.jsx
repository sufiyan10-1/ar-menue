'use client'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export default function ArViewPage() {
  const searchParams = useSearchParams()
  const dish = searchParams.get('dish')
  const dishImage = `/${dish || 'overlay'}.png`

  useEffect(() => {
    // Ensure A-Frame and custom script are loaded
    const script1 = document.createElement('script')
    script1.src = 'https://aframe.io/releases/1.4.2/aframe.min.js'
    script1.async = true
    document.body.appendChild(script1)

    const script2 = document.createElement('script')
    script2.src = '/scripts/place-on-hit.js'
    script2.async = true
    document.body.appendChild(script2)
  }, [])

  return (
    <a-scene
      webxr="optionalFeatures: hit-test;"
      embedded
      renderer="colorManagement: true;"
    >
      <a-assets>
        <img id="dish-img" src={dishImage} crossOrigin="anonymous" />
      </a-assets>

      <a-image
        id="dish"
        src="#dish-img"
        width="1"
        height="1"
        visible="false"
        place-on-hit
      ></a-image>

      <a-camera position="0 1.6 0" />
    </a-scene>
  )
}
