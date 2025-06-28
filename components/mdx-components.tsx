import { MDXRemoteProps } from "next-mdx-remote";

export const mdxComponents: MDXRemoteProps["components"] = {
  h1: ({ children, ...props }: { children: React.ReactNode }) => (
    <h1
      className="text-2xl font-bold text-white mb-6 mt-8 first:mt-0"
      {...props}
    >
      *{children}
    </h1>
  ),
  h2: ({ children, ...props }: { children: React.ReactNode }) => (
    <h2 className="text-xl font-semibold text-white mb-4 mt-8" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: { children: React.ReactNode }) => (
    <h3 className="text-lg font-medium text-white mb-3 mt-6" {...props}>
      {children}
    </h3>
  ),
  p: ({ children, ...props }: { children: React.ReactNode }) => (
    <p className="text-gray-300 leading-relaxed mb-4" {...props}>
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
  pre: ({ children, ...props }: { children: React.ReactNode }) => (
    <div className="my-6">
      <pre
        className="bg-[#222725] border border-[#222725] rounded-lg p-4 overflow-x-auto"
        {...props}
      >
        {children}
      </pre>
    </div>
  ),
  code: ({
    children,
    className,
    ...props
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    const isInline = !className;

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

    return (
      <code
        className="text-sm text-gray-300 font-mono leading-relaxed"
        {...props}
      >
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
