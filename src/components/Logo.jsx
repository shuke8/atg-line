function LogomarkPaths() {
  return (
    <g fill="none" stroke="#38BDF8" strokeLinejoin="round" strokeWidth={3}>
      <path d="M10.308 5L18 17.5 10.308 30 2.615 17.5 10.308 5z" />
      <path d="M18 17.5L10.308 5h15.144l7.933 12.5M18 17.5h15.385L25.452 30H10.308L18 17.5z" />
    </g>
  )
}

export function Logomark(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 36 36" fill="none" {...props}>
      <LogomarkPaths />
    </svg>
  )
}

export function Logo(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 227 36" fill="none" {...props}>
      <LogomarkPaths />
      <path d="M60.2147 25.34C59.8747 25.34 59.6547 25.2 59.5347 24.86L58.6547 22.5H53.1147L52.2547 24.86C52.1347 25.2 51.8947 25.34 51.5547 25.34H49.5347C49.0947 25.34 48.8947 25.06 49.0547 24.64L53.9947 11.82C54.1147 11.48 54.3347 11.34 54.6747 11.34H57.1347C57.4747 11.34 57.6947 11.48 57.8147 11.82L62.7747 24.64C62.9347 25.06 62.7347 25.34 62.2947 25.34H60.2147ZM54.0547 19.96H57.7147L55.8747 14.98L54.0547 19.96Z" fill="#334155"/>
<path d="M73.2014 11.34C73.5814 11.34 73.8014 11.56 73.8014 11.94V13.62C73.8014 14 73.5814 14.22 73.2014 14.22H69.6214V24.74C69.6214 25.12 69.4014 25.34 69.0214 25.34H67.0614C66.6814 25.34 66.4614 25.12 66.4614 24.74V14.22H62.9214C62.5414 14.22 62.3214 14 62.3214 13.62V11.94C62.3214 11.56 62.5414 11.34 62.9214 11.34H73.2014Z" fill="#334155"/>
<path d="M82.0838 20.26C81.7038 20.26 81.4838 20.04 81.4838 19.66V18.18C81.4838 17.8 81.7038 17.58 82.0838 17.58H87.5638C87.9438 17.58 88.1638 17.8 88.1638 18.18V23.86C88.1638 24.18 88.0438 24.4 87.7638 24.56C86.4238 25.3 84.5438 25.68 82.4238 25.68C78.8038 25.68 74.7638 23.7 74.7638 18.34C74.7638 12.98 78.8038 11 82.4238 11C84.4638 11 86.3238 11.64 87.7238 12.6C88.0438 12.82 88.0838 13.1 87.9038 13.44L87.0038 15.02C86.8038 15.38 86.5038 15.42 86.1838 15.18C85.1838 14.44 83.9438 13.92 82.4238 13.92C79.9638 13.92 78.0838 15.38 78.0838 18.34C78.0838 21.34 79.9438 22.84 82.5838 22.84C83.7038 22.84 84.4638 22.72 85.1238 22.54V20.26H82.0838Z" fill="#334155"/>
<path d="M108.829 24.62C109.109 25.04 108.909 25.34 108.429 25.34H106.009C105.689 25.34 105.469 25.22 105.289 24.96L102.209 20.26H100.049V24.74C100.049 25.12 99.8294 25.34 99.4494 25.34H97.4894C97.1094 25.34 96.8894 25.12 96.8894 24.74V11.94C96.8894 11.56 97.1094 11.34 97.4894 11.34H101.989C105.489 11.34 108.529 12.24 108.529 15.58C108.529 17.8 107.329 19.08 105.529 19.72L108.829 24.62ZM100.049 14.22V17.54H101.809C104.009 17.54 105.209 16.94 105.209 15.78C105.209 14.34 103.209 14.22 101.809 14.22H100.049Z" fill="#334155"/>
<path d="M123.103 13.62C123.103 14 122.883 14.22 122.503 14.22H115.563V16.82H121.443C121.823 16.82 122.043 17.04 122.043 17.42V18.92C122.043 19.3 121.823 19.52 121.443 19.52H115.563V22.46H122.463C122.843 22.46 123.063 22.68 123.063 23.06V24.74C123.063 25.12 122.843 25.34 122.463 25.34H113.003C112.623 25.34 112.403 25.12 112.403 24.74V11.94C112.403 11.56 112.623 11.34 113.003 11.34H122.503C122.883 11.34 123.103 11.56 123.103 11.94V13.62Z" fill="#334155"/>
<path d="M130.767 25.68C128.427 25.68 126.487 24.98 125.427 24.24C125.127 24.04 125.087 23.78 125.247 23.44L126.027 21.86C126.207 21.48 126.487 21.44 126.847 21.7C127.747 22.34 129.207 22.88 130.687 22.88C131.947 22.88 133.367 22.6 133.367 21.46C133.367 20.54 132.107 20.26 129.967 19.7C126.427 18.78 125.527 17.08 125.527 15.1C125.527 12.18 128.127 11 130.787 11C133.167 11 135.067 11.7 136.147 12.46C136.447 12.68 136.467 12.96 136.287 13.28L135.467 14.74C135.267 15.12 134.987 15.14 134.647 14.88C133.827 14.26 132.547 13.76 131.067 13.76C129.647 13.76 128.747 14.26 128.747 15.02C128.747 15.84 129.407 16.34 131.807 16.96C135.067 17.78 136.587 18.82 136.587 21.36C136.587 24.42 133.867 25.68 130.767 25.68Z" fill="#334155"/>
<path d="M146.356 25.68C142.736 25.68 138.776 23.7 138.776 18.34C138.776 12.98 142.736 11 146.356 11C148.436 11 150.216 11.66 151.536 12.68C151.816 12.9 151.856 13.18 151.676 13.5L150.816 15.02C150.616 15.38 150.296 15.42 149.976 15.16C148.996 14.4 147.776 13.88 146.356 13.88C143.936 13.88 142.096 15.38 142.096 18.34C142.096 21.3 143.936 22.8 146.356 22.8C147.736 22.8 149.036 22.36 150.016 21.64C150.336 21.4 150.636 21.44 150.836 21.8L151.716 23.38C151.896 23.72 151.896 23.94 151.676 24.1C150.376 25.04 148.556 25.68 146.356 25.68Z" fill="#334155"/>
<path d="M160.228 25.68C157.108 25.68 154.008 23.92 154.008 18.46V11.94C154.008 11.56 154.228 11.34 154.608 11.34H156.568C156.948 11.34 157.168 11.56 157.168 11.94V18.52C157.168 21.46 158.308 22.8 160.228 22.8C162.108 22.8 163.288 21.48 163.288 18.52V11.94C163.288 11.56 163.508 11.34 163.888 11.34H165.848C166.228 11.34 166.448 11.56 166.448 11.94V18.46C166.448 23.88 163.348 25.68 160.228 25.68Z" fill="#334155"/>
<path d="M181.132 13.62C181.132 14 180.912 14.22 180.532 14.22H173.592V16.82H179.472C179.852 16.82 180.072 17.04 180.072 17.42V18.92C180.072 19.3 179.852 19.52 179.472 19.52H173.592V22.46H180.492C180.872 22.46 181.092 22.68 181.092 23.06V24.74C181.092 25.12 180.872 25.34 180.492 25.34H171.032C170.652 25.34 170.432 25.12 170.432 24.74V11.94C170.432 11.56 170.652 11.34 171.032 11.34H180.532C180.912 11.34 181.132 11.56 181.132 11.94V13.62Z" fill="#334155"/>
    </svg>
  )
}
