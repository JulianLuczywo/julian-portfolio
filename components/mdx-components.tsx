import { MDXRemoteProps } from "next-mdx-remote";
import CodeBlock from "./CodeBlock";

export const mdxComponents: MDXRemoteProps["components"] = {
  h1: ({ children, ...props }: { children: React.ReactNode }) => (
    <h1
      className="text-3xl font-bold text-white mb-6 mt-8 first:mt-0"
      {...props}
    >
      <span className="text-[#899878]">*</span> {children}
    </h1>
  ),
  h2: ({ children, ...props }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-semibold text-white mb-4 mt-8" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-medium text-white mb-3 mt-6" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }: { children: React.ReactNode }) => (
    <p className="text-gray-300 leading-7 mb-6" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: { children: React.ReactNode }) => (
    <ul
      className="list-disc list-inside space-y-2 text-gray-300 ml-4 mb-4"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: { children: React.ReactNode }) => (
    <ol
      className="list-decimal list-inside space-y-2 text-gray-300 ml-4 mb-4"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }: { children: React.ReactNode }) => (
    <li className="leading-relaxed" {...props}>
      {children}
    </li>
  ),
  pre: ({ children, ...props }: { children: React.ReactNode }) => {
    // Extract className from code element if it exists
    const codeElement = Array.isArray(children)
      ? children.find((child: any) =>
          child?.props?.className?.startsWith("language-")
        )
      : children;

    const className = codeElement?.props?.className;

    if (className) {
      return (
        <CodeBlock className={className} {...props}>
          {codeElement.props.children}
        </CodeBlock>
      );
    }

    return <CodeBlock {...props}>{children}</CodeBlock>;
  },
  code: ({
    children,
    className,
    ...props
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    const isInline = !className?.startsWith("language-");

    if (isInline) {
      return (
        <code
          className="bg-gray-700 px-1.5 py-0.5 rounded text-sm text-gray-300 font-mono"
          {...props}
        >
          {children}
        </code>
      );
    }

    // For block code, this will be handled by the pre component
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  blockquote: ({ children, ...props }: { children: React.ReactNode }) => (
    <blockquote
      className="border-l-4 border-gray-600 pl-4 my-6 text-gray-400 italic"
      {...props}
    >
      {children}
    </blockquote>
  ),
  a: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a
      href={href}
      className="text-blue-400 hover:text-blue-300 underline transition-colors"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  ),
  strong: ({ children, ...props }: { children: React.ReactNode }) => (
    <strong className="font-semibold text-white" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }: { children: React.ReactNode }) => (
    <em className="italic text-gray-200" {...props}>
      {children}
    </em>
  ),
};
