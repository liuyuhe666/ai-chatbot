import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'

export default function MarkdownPreview({ content }: { content: string }) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        table({ node, ...props }) {
          return <table {...props} className="table-auto" />
        },
        code({ node, ...props }) {
          return <code {...props} className="whitespace-pre-wrap" />
        },
        ul({ node, ...props }) {
          return <ul {...props} className="list-disc list-inside" />
        },
        ol({ node, ...props }) {
          return <ol {...props} className="list-decimal list-inside" />
        },
      }}
    >
      {content}
    </Markdown>
  )
}
