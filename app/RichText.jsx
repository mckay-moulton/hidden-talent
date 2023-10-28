"use client"

import { motion } from "framer-motion"

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
            <motion.h1
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35 }}
              className="text-[29px] md:text-[42px] w-full text-center mt-8"
            >
                {children.map(childNode => <>{childNode.text}</>)}
              </motion.h1>
          )
        }

        if (type === 'h2') {
          return (
            <motion.h2
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35 }}
              className="text-[29px] md:text-[42px] w-full text-center mt-8"
            >
              {children.map(childNode => <>{childNode.text}</>)}
            </motion.h2>
            )
        }
        if (type === 'h3') {
          return (
            <motion.h3
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35 }}
              className="text-xl md:text-2xl w-full mt-8"
            >
              {children.map(childNode => <>{childNode.text}</>)}
            </motion.h3>
            )
        }

        if (type === 'paragraph') {
          if (children.length === 1 && children[0].text === '') return null

          return (
            <motion.p
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35 }}
              key={`node_${index}`} className="text-justify"
            >
              {children.map((childNode, childNodeIndex) => <span key={`node_${index}_childNode_${childNodeIndex}`}>{childNode.text}</span>)}
            </motion.p>
          )
        }

        if (type === 'image') {
          return (
            <motion.picture
              initial={{ opacity: 0, y: 200 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.35 }}
            >
              <img src={image.url} alt={image.description} width={image.width} height={image.height} className="max-w-full rounded-md" />
            </motion.picture>
          )
        }
      })}
    </div>
  )
}
