interface headerConfig {
  nav?: { [href: string]: string }
  html?: string
}

export const config: headerConfig = {
  nav: {
    '/hello-world': 'The Great Gatsby',
    '/hello-world/words': '单词本'
  }
}
