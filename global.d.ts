// global.d.ts

// For custom elements with UnoCSS preset-tagify
declare namespace JSX {
  interface IntrinsicElements {
    flex: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    'text-green': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
    [elemName: string]: any
  }
}

// For attributify mode support
declare namespace React {
  interface HTMLAttributes<T> extends React.AriaAttributes, React.DOMAttributes<T> {
    // UnoCSS attributify properties
    flex?: boolean | string
    block?: boolean | string
    grid?: boolean | string
    relative?: boolean | string
    absolute?: boolean | string
    fixed?: boolean | string
    sticky?: boolean | string
    // Text and colors
    text?: string
    bg?: string
    border?: string
    font?: string
    p?: string
    m?: string
    // Layout
    gap?: string
    justify?: string
    items?: string
    // Interactions
    hover?: string
    dark?: string
    // Allow any other props
    [key: string]: any
  }
}
