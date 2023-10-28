"use client"

import { useEffect, useState } from "react"

export default function RichText({ src, maxWidth = '', className }) {

  const [nodes, setNodes] = useState(JSON.parse(src))

  useEffect(() => {
    console.log('rich text src', nodes)
  }, [src, nodes])
  return (
    <div className={className}>
      {nodes.map((node, index) => {
        const { type, image, children } = node
        if (type === 'h1') {
          if (children.length === 1 && children[0].text === '') return null

          return (
            <h1 className="text-[29px] md:text-[42px] w-full text-center mt-8">{children.map(childNode => <>{childNode.text}</>)}</h1>
          )
        }

        if (type === 'h2') {
          return <h2 className="text-[29px] md:text-[42px] w-full text-center mt-8">{children.map(childNode => <>{childNode.text}</>)}</h2>
        }

        if (type === 'paragraph') {
          if (children.length === 1 && children[0].text === '') return null

          return (
            <p key={`node_${index}`} className="text-justify">{children.map((childNode, childNodeIndex) => <span key={`node_${index}_childNode_${childNodeIndex}`}>{childNode.text}</span>)}</p>
          )
        }

        if (type === 'image') {
          return (
            <picture>
              <img src={image.url} alt={image.description} width={image.width} height={image.height} className="max-w-full rounded-md" />
            </picture>
          )
        }
      })}

      
    </div>
  )
}