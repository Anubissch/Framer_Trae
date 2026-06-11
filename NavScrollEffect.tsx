// Navigation Scroll Color Effect Override
import { useEffect, useState, useRef } from "react"
import type { ComponentProps } from "react"

/**
 * Apply this override to your Navigation component to change its background color when scrolling!
 *
 * How to use:
 * 1. Select your Navigation layer in Framer
 * 2. Go to "Overrides" in the properties panel
 * 3. Choose "NavScrollEffect"
 * 4. Customize the colors and scroll offset below!
 */

// Customize these values!
const DEFAULT_COLOR = "transparent" // Nav color at top of page
const SCROLLED_COLOR = "#1a1a2e" // Nav color after scrolling
const SCROLL_OFFSET = 100 // How many pixels to scroll before changing (in px)

export function NavScrollEffect(Component): React.ComponentType<ComponentProps<any>> {
  return (props) => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > SCROLL_OFFSET)
      }

      window.addEventListener("scroll", handleScroll)
      // Initial check
      handleScroll()

      return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
      <Component
        {...props}
        style={{
          ...props.style,
          backgroundColor: isScrolled ? SCROLLED_COLOR : DEFAULT_COLOR,
          transition: "background-color 0.3s ease", // Smooth transition
        }}
      />
    )
  }
}
