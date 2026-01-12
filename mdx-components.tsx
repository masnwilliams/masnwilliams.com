import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    wrapper: ({ children }) => (
      <article className="prose prose-gray lg:prose-lg max-w-3xl mx-auto">
        {children}
      </article>
    ),
    ...components,
  }
}
