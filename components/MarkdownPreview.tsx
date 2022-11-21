import { FC, useState } from 'react'
import { Code, Flex, Heading, Spacer, Text, Textarea } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import TextEntry from './TextEntry'
import Markdown from './Markdown'

type Props = {}

const MarkdownPreview: FC<Props> = (): JSX.Element => {
	const [markdown, setMarkdown] = useState<string>(
		`A paragraph with *emphasis* and **strong importance**.`
	)

	return (
		<Flex h={'calc(100vh - 80px)'} m={'auto'} flexDir={'column'}>
			<Heading alignSelf={'center'} mt={-10} mb={8}>
				Markdown Previewer
			</Heading>
			<Flex h={'100%'} flexDir={{ base: 'column', lg: 'row' }}>
				<TextEntry />
				<Markdown />
			</Flex>
		</Flex>
	)
}

export default MarkdownPreview

// Path: components/MarkdownPreview.tsx
// Created at: 00:09:59 - 21/11/2022
// Language: Typescript
// Framework: React/Next.js
